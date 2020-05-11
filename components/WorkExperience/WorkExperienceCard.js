import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import datas from '../../src/data'
import { motion } from "framer-motion"


const percentWidth = '100%'
const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: percentWidth,
    },


    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));


// export default function WorkExperience() {
//     const classes = useStyles();
//     const [expanded, setExpanded] = React.useState(false);

//     const handleExpandClick = () => {
//         setExpanded(!expanded);
//     };

//     // console.log(Object.keys(datas.experiences).length)
//     return (
//         <div>
//             {
//                 datas.experiences.map((skill, i) => {
//                     return (
//                         <div key={i}>
//                             <motion.div

//                                 initial={{
//                                     x: 500,
//                                     opacity: 0,
//                                     scale: 1
//                                 }}

//                                 animate={{
//                                     x:0,
//                                     opacity: 1,
//                                     scale: 1
//                                 }}

//                                 transition={{ ease: "easeOut", duration: 2 }}

//                             >
//                             <Card className={classes.root}>
//                                 <CardHeader
//                                     title={`${skill.jobTitle} at ${skill.company}`}
//                                     subheader={`${skill.jobYear[0]} - ${skill.jobYear[1]}`}
//                                 >

//                                 </CardHeader>

//                                 <CardContent>
//                                     <Typography variant="body2" color="textSecondary"><i>{skill.techstacks}</i></Typography>
//                                     <br></br>
//                                     <Typography variant="body1" color="textPrimary" component="p">
//                                         {skill.shortDesc[0]}
//                                     </Typography>
//                                     <Typography variant="body1" color="textPrimary" component="p">
//                                         {skill.shortDesc[1]}

//                                     </Typography>
//                                     <Typography variant="body1" color="textPrimary" component="p">
//                                         {skill.shortDesc[2]}

//                                     </Typography>
//                                 </CardContent>
//                                 <CardActions disableSpacing>
//                                     <IconButton
//                                         className={clsx(classes.expand, {
//                                             [classes.expandOpen]: expanded,
//                                         })}
//                                         onClick={handleExpandClick}
//                                         aria-expanded={expanded}
//                                         aria-label="show more"
//                                     >
//                                         <ExpandMoreIcon />
//                                     </IconButton>
//                                 </CardActions>
//                                 <Collapse in={expanded} timeout="auto" unmountOnExit>
//                                     <CardContent>
//                                         {/* <Typography paragraph>Method:</Typography> */}
//                                         <Typography variant="body1" paragraph>
//                                             {skill.content[0]}
//                                         </Typography>
//                                         <Typography paragraph>
//                                             {skill.content[1]}
//                                         </Typography>
//                                         <Typography paragraph>
//                                             {skill.content[2]}
//                                         </Typography>
//                                         {/* insert images here */}
//                                         {/* {havePic ? 'currently' : 'not'} */}
//                                         {/* <img src="/ashrae-sample-work-don-khalil-alwaini.jpg"></img> */}
//                                     </CardContent>
//                                 </Collapse>
//                             </Card>
//                             <br></br>
//                             </motion.div>
//                         </div>
//                     );
//                 })
//             }
//         </div>
//     );
// }
export default function WorkExperience(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div>
                <Card className={classes.root}>
                    <CardHeader
                        title={`${props.jobTitle} at ${props.company}`}
                        subheader={`${props.jobYear[0]} - ${props.jobYear[1]}`}
                    >

                    </CardHeader>

                    <CardContent>
                        <Typography variant="body2" color="textSecondary"><i>{props.techstacks}</i></Typography>
                        <br></br>
                        <Typography variant="body1" color="textPrimary" component="p">
                            {props.shortDesc[0]}
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                            {props.shortDesc[1]}

                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                            {props.shortDesc[2]}

                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
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
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            {/* <Typography paragraph>Method:</Typography> */}
                            <Typography variant="body1" paragraph>
                                {props.content[0]}
                            </Typography>
                            <Typography paragraph>
                                {props.content[1]}
                            </Typography>
                            <Typography paragraph>
                                {props.content[2]}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
                <br></br>
        
        </div>
    );
}
