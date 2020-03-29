import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import BioCard from '../components/BioCard'
import Skills from '../components/Skills'
import Navbarr from '../components/Navbarr'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

function BioAndSkills() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
    <BioCard />
    <Skills />
    <br />
    </Typography>
    
  );
}

export default function About() {
  return (
    <div>
    <Layout>
    <Container maxWidth="sm">

        <br></br>
        <BioAndSkills style={{marginTop:20}} />

    </Container>
    </Layout>  
    </div>
  );
}
