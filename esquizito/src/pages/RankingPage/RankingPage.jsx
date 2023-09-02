import { Box, Button, Card, Grid, Stack, Table, Typography } from '@mui/joy';
import Average from 'components/Average/Average';
import HeaderScreen from 'components/HeaderScreen/HeaderScreen';
import React from 'react';
import { properties } from 'util/Properties';
import right from 'assets/right.svg';
import wrong from 'assets/wrong.svg';

function RankingPage() {
  return (
    <HeaderScreen headerCenter={properties.screen.ranking.pageHeader.center}>
      <Stack spacing={2} mt={1} mb={2} mx={2}>
        <Card>
          <Grid container>
            <Average
              xs={4}
              title={properties.screen.ranking.averagesHeader.hits}>
              <Typography>43%</Typography>
              <Typography>0% to 100%</Typography>
            </Average>
            <Average
              xs={4}
              title={properties.screen.ranking.averagesHeader.time}>
              <Typography>30m52s</Typography>
              <Typography>30s to 1h2m36s</Typography>
            </Average>
            <Average
              xs={4}
              title={properties.screen.ranking.averagesHeader.answers}>
              <Typography>25</Typography>
            </Average>
          </Grid>
        </Card>
        <Card>
          <Table
            sx={{
              '& thead th': { textAlign: 'center' },
              '& img': { width: '100%' },
            }}>
            <thead>
              <tr>
                <Box component='th' width='3%'>
                  {properties.screen.ranking.resultsHeader.place}
                </Box>
                <th>{properties.screen.ranking.resultsHeader.name}</th>
                <th>{properties.screen.ranking.resultsHeader.successRate}</th>
                <th>{properties.screen.ranking.resultsHeader.time}</th>
                {properties.example.screen.ranking.tableData[0].hits.map(
                  (entry) => (
                    <Box
                      component='th'
                      width='2%'
                      key={`question-${entry.i}`}
                      className='answer'>
                      {entry.i}
                    </Box>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {properties.example.screen.ranking.tableData.map((entry, i) => (
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
                      <img src={answer.correct ? right : wrong} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
        <Box display='flex' justifyContent='center'>
          <Button sx={{ px: 6, py: 3, fontSize: 'md' }}>
            {properties.screen.ranking.button.back}
          </Button>
        </Box>
      </Stack>
    </HeaderScreen>
  );
}

export default RankingPage;
