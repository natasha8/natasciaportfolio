import React from "react";
import { motion } from "framer-motion";
import { Experience } from '../typing';
import { urlFor } from "../sanity";
import Image from 'next/image';

type Props = {
    exp: Experience;
};

function ExpCard({ exp }: Props) {
    return (
        <motion.article initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 flex flex-col rounded-lg items-center space-y-6 
            flex-shrink-0 snap-center p-10 bg-[#302a2f] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
            <div className="w-full flex flex-col mx-0 lg:mx-4">
                <div className="space-y-8">

                    <h4 className="text-xl lg:text-4xl font-light">{exp.jobTitle}</h4>
                    <p className="font-bold text-base lg:text-2xl mt-1">
                        {exp.company}
                    </p>
                    
                    <p className="uppercase py-5 text-sm lg:text-base">
                        {new Date(exp.dateStarted).toLocaleDateString()} - {" "}
                        {exp.isCurrentlyWorkingHere
                            ? "Present"
                            : new Date(exp.dateEnded).toLocaleDateString()}
                    </p>
                </div>
                <div className="w-full h-[25vh] lg:h-[35vh] overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin  ">
                    <ul className="list-disc space-y-4 text-sm lg:text-lg ">
                        {exp.points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
                
            <div className="flex space-x-2 my-2 h-8">{exp.technologies?.map((technology) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <Image
                            alt="technologies"
                            width={30}
                            height={30}
                            key={technology._id}
                            src={urlFor(technology.image).url()}
                        />
                    ))}</div>
            </div>
        </motion.article>
    );
}

export default ExpCard;
