import React from 'react';
import WorkExperience from './WorkExperienceCard'
import datas from '../../src/data'
import { motion } from "framer-motion"



function WorkExperienceLoop() {
    return (
        <React.Fragment>
            {
                datas.experiences.map((job, i) => (
                    <div key={i}>
                        <motion.div

                            initial={{
                                x: 500,
                                opacity: 0,
                                scale: 1
                            }}

                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: 1
                            }}

                            transition={{ ease: "easeOut", duration: 2, delay: i * 0.39}}

                        >
                            <WorkExperience {...job} />
                            </motion.div>
            </div>
          ))
        }
      </React.Fragment>
                )
  };


export default WorkExperienceLoop;
