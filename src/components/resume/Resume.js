import React, { useState } from "react";
import { motion } from "framer-motion";
import resume from "./Resume.pdf"

const Resume = ({ url }) => {

    const resumeVariant = {
        hidden: { rotate: 180 },
        visible: {
            rotate: 360,
            transition: {
                duration: 6,
                delay: .2,
                repeat: Infinity,
                repeatDelay: 60,
            },
        },
    };

    return (
        <motion.h4
            variants={resumeVariant}
            width="100%" height="500px"
        >
            <iframe src={resume} width="100%" height="500px" />
        </motion.h4>
    );
};

export default Resume;