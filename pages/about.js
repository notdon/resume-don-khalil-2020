import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import { Button, Link } from '@material-ui/core';
import Navbarr from '../components/Navbarr';
import datas from '../src/data.json'


import TableAnimated from '../components/TableAnimated'
import Layout from '../components/Layout';
import WorkExperienceLoop from '../components/WorkExperience/WorkExperienceLoop';


export default function Index() {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h3">Work Experiences</Typography>
          <WorkExperienceLoop props={datas}/>
          <Typography variant="h3">Side Projects</Typography>
          <TableAnimated />
          <Typography align="center">
                <Link>
                <Button variant="outlined" href="/">See My Story</Button>

                </Link>
            </Typography>
        </Box>
      </Container>
      </Layout>
  );
}
