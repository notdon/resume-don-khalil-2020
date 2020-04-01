
import React, { Component } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from '@material-ui/core/Grid';
import { Typography, Button, Link } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { motion } from "framer-motion"



function Skills(props) {
    return (
        <div>
            <br></br>
            <Typography variant="h6">General Purpose Programming Languange</Typography>
            <Divider variant="middle" />
            <Grid container>
                {/* react card flip here */}
                    <Grid xs={4}>
                    <motion.div
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                        {/* this is front component */}
                        <img src="/icons8-python-100.png"></img>
                        <Typography variant="subtitle1">Python</Typography>
                        {/* this will be the back component */}
                        </motion.div>
                    </Grid>
                    
                    {/* end react card flip here */}
                    <Grid xs={4}>
                    <motion.div
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                        <img src="/icons8-javascript-100.png" />
                        <Typography variant="subtitle1">Javascript</Typography>
                    </motion.div>
                    </Grid>

                    <Grid xs={4}>
                    <motion.div
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                        <img src="/icons8-java-100.png" />
                        <Typography variant="subtitle1">Java</Typography>
                    </motion.div>
                    </Grid>
            </Grid>

                <br></br>
                <Typography variant="h6">Front End Engineering Tools</Typography>
                <Divider variant="middle" />
                <Grid container>
                    <Grid xs={4}>
                    <motion.div
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                        <img src="/icons8-html-96.png"></img>
                        <Typography variant="subtitle1">HTML</Typography>
                    </motion.div>
                    </Grid>
                    <Grid xs={4}>
                    <motion.div
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                        <img src="/icons8-css-96.png" />
                        <Typography variant="subtitle1">CSS</Typography>
                        </motion.div>

                    </Grid>

                    <Grid xs={4}>
                    <motion.div
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                        <img style={{ marginTop: 12 }} src="/icons8-react-80.png" />
                        <Typography variant="subtitle1">React</Typography>
                    </motion.div>
                    </Grid>
                </Grid>

                <br></br>
                <Typography variant="h6">Back End Engineering Tools</Typography>
                <Divider variant="middle" />
                <Grid container>
                    <Grid xs={12}>
                    <motion.div
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                        <img src="/icons8-django-100.png"></img>
                        <Typography variant="subtitle1">Django</Typography>
                    </motion.div>
                    </Grid>
                </Grid>

                <br></br>
                <Typography variant="h6">Database Management System</Typography>
                <Divider variant="middle" />
                <Grid container>
                    <Grid xs={12}>
                    <motion.div
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                        <img src="/icons8-mysql-100.png"></img>
                        <Typography variant="subtitle1">MySQL</Typography>
                    </motion.div>
                    </Grid>
                </Grid>

                <br></br>
                <Typography variant="h6">Design Tools</Typography>
                <Divider variant="middle" />
                <Grid container>
                    <br></br>
                    <Grid xs={4}>
                    <motion.div
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                        <img src="/icons8-adobe-illustrator-100-2.png"></img>
                        <Typography variant="subtitle1">Illustrator</Typography>
                        </motion.div>
                    </Grid>
                    <Grid xs={4}>
                    <motion.div
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                        <img src="/icons8-adobe-photoshop-100.png" />
                        <Typography variant="subtitle1">Photoshop</Typography>
                    </motion.div>
                    </Grid>

                    <Grid xs={4}>
                    <motion.div
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                        <img src="/icons8-figma-100.png" />
                        <Typography variant="subtitle1">Figma</Typography>
                    </motion.div>
                    </Grid>
                </Grid>

                <br></br>
                <Typography variant="h6">Tools</Typography>
                <Divider variant="middle" />
                <Grid container>
                    <br></br>
                    <Grid xs={6}>
                    <motion.div
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                        <img src="/icons8-git-100.png"></img>
                        <Typography variant="subtitle1">Git</Typography>
                    </motion.div>
                    </Grid>
                    <Grid xs={6}>
                    <motion.div
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                        <img src="/icons8-console-100.png" />
                        <Typography variant="subtitle1">UNIX</Typography>
                    </motion.div>
                    </Grid>
                </Grid>
                <Typography align="center">
                    <Link>
                        <Button variant="outlined" href="/about">See My Work</Button>

                    </Link>
                </Typography>

        </div>
    );
}

export default Skills
