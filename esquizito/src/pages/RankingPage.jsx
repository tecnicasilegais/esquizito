import { Box, Button, Card, Grid, Stack, Table, Typography } from '@mui/joy';
import Average from 'components/Average';
import HeaderScreen from 'components/HeaderScreen';
import React from 'react';
import { translations, examples } from 'util/Properties';
import correct from 'assets/check.svg';
import incorrect from 'assets/cancel.svg';

function RankingPage() {
  return (
    <HeaderScreen headerCenter={translations.ranking.pageHeader.center}>
      <Stack mb={2} mt={1} mx={2} spacing={2}>
        <Card>
          <Grid container>
            <Average title={translations.ranking.averagesHeader.hits} xs={4}>
              <Typography>43%</Typography>
              <Typography>0% to 100%</Typography>
            </Average>
            <Average title={translations.ranking.averagesHeader.time} xs={4}>
              <Typography>30m52s</Typography>
              <Typography>30s to 1h2m36s</Typography>
            </Average>
            <Average title={translations.ranking.averagesHeader.answers} xs={4}>
              <Typography>25</Typography>
            </Average>
          </Grid>
        </Card>
        <Card>
          <Table
            sx={{
              '& img': { width: '100%' },
              '& thead th': { textAlign: 'center' },
            }}>
            <thead>
              <tr>
                <Box component='th' width='3%'>
                  {translations.ranking.resultsHeader.place}
                </Box>
                <th>{translations.ranking.resultsHeader.name}</th>
                <th>{translations.ranking.resultsHeader.successRate}</th>
                <th>{translations.ranking.resultsHeader.time}</th>
                {examples.screen.ranking.tableData[0].hits.map((entry) => (
                  <Box
                    className='answer'
                    component='th'
                    key={`question-${entry.i}`}
                    width='2%'>
                    {entry.i}
                  </Box>
                ))}
              </tr>
            </thead>
            <tbody>
              {examples.screen.ranking.tableData.map((entry, i) => (
                <tr key={entry.name}>
                  <Box component='td'>{i + 1}</Box>
                  <Box component='td'>{entry.name}</Box>
                  <Box component='td' textAlign='center'>
                    {entry.successRate}%
                  </Box>
                  <Box component='td' textAlign='center'>
                    {entry.time}
                  </Box>
                  {entry.hits.map((answer) => (
                    <td key={`${entry.name}-${answer.i}`}>
                      <img
                        src={answer.correct ? correct : incorrect}
                        alt={
                          answer.correct
                            ? translations.ranking.imgDescription.correct
                            : translations.ranking.imgDescription.incorrect
                        }
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
        <Box display='flex' justifyContent='center'>
          <Button sx={{ fontSize: 'md', px: 6, py: 3 }}>
            {translations.ranking.button.back}
          </Button>
        </Box>
      </Stack>
    </HeaderScreen>
  );
}

export default RankingPage;
