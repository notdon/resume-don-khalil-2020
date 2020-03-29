import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { Container, Box, IconButton, Typography } from '@material-ui/core';
export default function Footer() {
    return (
        <div>
            <footer id="contact">
            <Typography variant="h6" align="center">Best Way to Find Me📍</Typography>
                <Box display="flex"
                    alignItems="center"
                    justifyContent="center">
                    
                    <IconButton href="mailto:yo@donkhalil.design">
                         <AlternateEmailIcon fontSize="large" />
                    </IconButton>

                    <IconButton href="https://www.instagram.com/donkhalil/?hl=en">
                        <InstagramIcon fontSize="large" />
                    </IconButton>

                    <IconButton href="https://www.linkedin.com/in/donkhalil/">
                        <LinkedInIcon fontSize="large" />
                    </IconButton>

                    <IconButton href="https://github.com/notdon">
                        <GitHubIcon fontSize="large" />
                    </IconButton>

                    <IconButton href="https://twitter.com/donkhalil18">
                         <TwitterIcon fontSize="large" />
                    </IconButton>

                </Box>
            </footer>
        </div>
    )
}
