import React from 'react'
import { motion } from 'framer-motion';
import EduCard from './EduCard';
import { Education as Edu } from '../typing';

type Props = {
    educations: Edu[]
}

const Education = ({ educations }: Props) => {
    return (
        <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative h-screen w-screen max-w-full flex flex-col justify-evenly items-center overflow-hidden text-left md:flex-row  px-10 mx-auto "
        >
            <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-lg lg:text-2xl">
                education
            </h3>
            <div className="w-full h-[75vh] flex space-x-4 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-[#6b576b] scrollbar-thumb-[#fcdef8]">
                {educations?.map((edu) => (
                    <EduCard key={edu._id} education={edu} />
                ))}

            </div>
        </motion.div>
    )
}

export default Education