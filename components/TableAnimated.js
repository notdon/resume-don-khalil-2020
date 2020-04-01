import React from 'react'
import { motion } from "framer-motion"
import SideprojectTable from './SideprojectTable'

export default function TableAnimated() {
    return (
        <div>
            <motion.div

                initial={{
                    y: 500,
                    opacity: 0,
                    scale: 1
                }}

                animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1
                }}

                transition={{ ease: "easeOut", duration: 2 }}

            >
                <SideprojectTable />
            </motion.div>
            <br></br>
        </div>
    )
}
