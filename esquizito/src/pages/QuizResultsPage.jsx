import { ArrowBackRounded, HomeRounded } from '@mui/icons-material';
import { Box, Button, Card, Grid, Stack, Table, Typography } from '@mui/joy';
import incorrect from 'assets/cancel.svg';
import correct from 'assets/check.svg';
import Average from 'components/Average';
import HeaderScreen from 'components/HeaderScreen';
import TableHeader from 'components/TableHeader';
import { useNavContext } from 'contexts/NavContext';
import { useService } from 'contexts/ServiceContext';
import { useUser } from 'contexts/UserContext';
import format from 'format-duration';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { properties, translations } from 'util/Properties';
import { urlPaths } from 'util/UrlPaths';
import { sortByType } from 'util/Util';

function QuizResultsPage() {
  const navigate = useNavigate();
  const { resultData, setResultData } = useNavContext();
  const [averageHits, setAverageHits] = React.useState(0);
  const [averageTime, setAverageTime] = React.useState(0);
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState(
    properties.rankingHeadCells[0].id,
  );
  const { user } = useUser();
  const { resultService } = useService();

  const typeMap = {
    elapsedTime: 'number',
    hits: 'number',
    userName: 'string',
  };

  const sortResultsByKey = (key) => {
    let newOrder;
    if (key === orderBy) {
      newOrder = order === 'asc' ? 'desc' : 'asc';
    } else {
      newOrder = 'asc';
    }
    const sortFunction = sortByType(typeMap[key])(newOrder);
    const sortedResults = [...results].sort((a, b) =>
      sortFunction(a[key], b[key]),
    );
    setResults(sortedResults);
    setOrder(newOrder);
    setOrderBy(key);
  };

  const refreshAnswers = async () => {
    setLoading(true);

    const newResults = await resultService.listFromQuiz(resultData.quizId);
    if (newResults.length === 0) {
      toast.error(translations.quizResults.noResults);
      navigate(urlPaths.manageQuizzesPage);
      return;
    }

    for (let i = 0; i < newResults.length; i++) {
      newResults[i].hits = newResults[i].answers.filter(
        (answer) => answer.correctAnswer === answer.givenAnswer,
      ).length;
    }

    const avgHits = Math.round(
      newResults.reduce((acc, curr) => acc + curr.hits, 0) / newResults.length,
    );
    setAverageHits(avgHits);

    const avgTime =
      newResults.reduce((acc, curr) => acc + curr.elapsedTime, 0) /
      newResults.length;
    setAverageTime(avgTime);

    setResults(newResults);
    setLoading(false);
  };

  useEffect(() => {
    if (user.id && resultData) {
      refreshAnswers();
    }
  }, [user.id, resultData]);

  return (
    <HeaderScreen headerCenter={translations.quizResults.pageHeader.center}>
      <Stack mb={2} mt={1} mx={2} spacing={2}>
        <Card sx={{ display: 'flex', flexDirection: 'row' }}>
          <Button
            startDecorator={<ArrowBackRounded />}
            variant='solid'
            onClick={() => {
              setResultData(undefined);
              navigate(urlPaths.manageQuizzesPage);
            }}>
            {translations.quizResults.button.back}
          </Button>
          <Grid container flex={1}>
            <Average
              title={translations.quizResults.averagesHeader.hits.title}
              xs={4}>
              <Typography>{averageHits}</Typography>
            </Average>
            <Average
              title={translations.quizResults.averagesHeader.time.title}
              xs={4}>
              <Typography>{format(averageTime * 1000)}</Typography>
            </Average>
            <Average
              title={translations.quizResults.averagesHeader.answers.title}
              xs={4}>
              <Typography>{results.length}</Typography>
            </Average>
          </Grid>
        </Card>
        {!loading && (
          <Card>
            <Table
              hoverRow
              sx={{
                '& img': { width: '100%' },
                '& thead th': { textAlign: 'center' },
              }}>
              <thead>
                <tr>
                  <th>
                    <TableHeader
                      id='userName'
                      order={order}
                      orderBy={orderBy}
                      sort={sortResultsByKey}>
                      {translations.quizResults.resultsHeader.name}
                    </TableHeader>
                  </th>
                  <th>
                    <TableHeader
                      id='hits'
                      order={order}
                      orderBy={orderBy}
                      sort={sortResultsByKey}>
                      {translations.quizResults.resultsHeader.successRate}
                    </TableHeader>
                  </th>
                  <th>
                    <TableHeader
                      id='elapsedTime'
                      order={order}
                      orderBy={orderBy}
                      sort={sortResultsByKey}>
                      {translations.quizResults.resultsHeader.time}
                    </TableHeader>
                  </th>
                  {results[0].answers.map((answer, i) => (
                    <Box
                      className='answer'
                      component='th'
                      key={`header-${answer.questionId}`}
                      width='2%'>
                      {i + 1}
                    </Box>
                  ))}
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result._id}>
                    <Box component='td'>{result.userName}</Box>
                    <Box component='td' textAlign='center'>
                      {
                        result.answers.filter(
                          (answer) =>
                            answer.correctAnswer === answer.givenAnswer,
                        ).length
                      }
                    </Box>
                    <Box component='td' textAlign='center'>
                      {format(result.elapsedTime * 1000)}
                    </Box>
                    {result.answers.map((answer) => (
                      <td key={`${answer._id}`}>
                        <Box display='flex'>
                          <img
                            alt={
                              answer.givenAnswer === answer.correctAnswer
                                ? translations.quizResults.imgDescription
                                    .correct
                                : translations.quizResults.imgDescription
                                    .incorrect
                            }
                            src={
                              answer.givenAnswer === answer.correctAnswer
                                ? correct
                                : incorrect
                            }
                          />
                        </Box>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        )}
      </Stack>
    </HeaderScreen>
  );
}

export default QuizResultsPage;
