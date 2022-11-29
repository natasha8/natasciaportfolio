import React from "react";
import { motion } from "framer-motion";
import ExpCard from "./ExpCard";
import { Experience } from '../typing';

type Props = {
    experiences: Experience[]
};

function WorkExperience({ experiences}: Props) {
    return (
        <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative h-screen w-screen max-w-full flex flex-col justify-evenly items-center overflow-hidden text-left md:flex-row  px-10 mx-auto "
        >
            <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-lg lg:text-2xl">
                experience
            </h3>
            <div className="w-full h-[75vh] flex space-x-4 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-[#6b576b] scrollbar-thumb-[#fcdef8]">
            {experiences?.map((experience) => (
          <ExpCard key={experience._id} exp={experience} />
        ))}
            </div>
        </motion.div>
    );
}

export default WorkExperience;
