import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import { Button, Link } from '@material-ui/core';
import Navbarr from '../components/Navbarr';
import WorkExperience from '../components/WorkExperience/WorkExperienceCard'
import Layout from '../components/Layout';


export default function Index() {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Box my={4}>
          <WorkExperience />
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
