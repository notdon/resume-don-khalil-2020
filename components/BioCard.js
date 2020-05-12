import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion"




// import profilepic from 'static/images/profile.jpg';
const useStyles = makeStyles(theme => ({

    expand: {
        transform: 'rotate(0deg)',
        marginRight: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));



let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
function BioCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <motion.div 
        
        initial={{
            opacity:0,
            scale:1.2
        }}

        animate={{
            opacity:1,
            scale:1
        }}
        
        transition={{duration:2}}

        >
        <Paper>
            <Grid container>

                <Grid style={{ padding: 20 }} item xs={12} md={12}>
                    <img style={{ borderRadius: 150 + 'px', height: 100, maxWidth: 100, top: -100 }} alt="Don Khalil" src="/profile.jpg" />

                    <Typography variant="h3">Don Khalil</Typography>
                    <Typography variant="subtitle2">Full Stack Web Ninja</Typography>
                    <Typography variant="subtitle1">Computer Science - Ryerson University '20</Typography>
                    <br />
                    <Typography variant="subtitle1">Programmer and Designer with the ability of storytelling and creative problem solving.</Typography>
                    <div style={{marginTop:'5%'}}>
                    <Button variant="contained" color="secondary" href='https://dondndk.typeform.com/to/m1uzQ5'>Download Resume</Button>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        
                        <ExpandMoreIcon />
                    </IconButton>
                    </div>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Typography variant="body1" align="left" paragraph>
                            As-soon-to-be graduated computer scientist, being a programmer has helped me to be persevere and patient when my program doesn't work the first time. It also train my thought process to find an efficient and feasible solution while being resourceful and adaptable with what I have in my tool belt.
                        </Typography>
                        <Typography variant="body1" align="left" paragraph>
                        As someone who enjoys the work of art, I also like to design the interface of my program. I enjoy the creativity that I got when I create the visual element of a website/an app. In a nutshell, my passion for innovation and constant learning is accompanied with the thrill of production to create the most accessible and great looking interface.
                        </Typography>
                        <Typography variant="body1" align="left" paragraph>
                        It is also my core mission to build(or help build) a product that are not only visually appealing, but also easy to use and could benefit the society in the big picture.
                        </Typography>
                        <Typography variant="body1" align="left" paragraph>
                        My current interest is Software Development with focus on Front End Web Development and Web/App UI and UX design. In my free time, I also like to create surrealist art and taking photographs of urban street art. I also like to research the next unicorn in CryptoAssets and discuss about the bull case of CryptoCurrency/CryptoAssets online.
                        </Typography>
                    </Collapse>
                </Grid>
            </Grid>
        </Paper>
        </motion.div>
    )
}

export default BioCard;