import React from "react";
import { motion } from "framer-motion";
import { Education } from "../typing";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
    education: Education
};

function EduCard({ education }: Props) {
    //console.log('education', education)

    return (
        <motion.article initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="w-full xl:w-1/2 2xl:w-1/3 flex flex-col rounded-lg justify-center items-center space-y-2 2xl:space-y-6 
            flex-shrink-0 snap-center lg:p-10 bg-[#302a2f] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
            <div className="w-full h-[35%] flex justify-center items-center xl:bg-white 2xl:bg-transparent">

                <motion.img
                    src={urlFor(education.logo).url()}
                    alt=""
                    className="w-32 h-32 rounded-full  2xl:w-[200px] 2xl:h-[200px] object-scale-down object-center bg-white xl:bg-transparent 2xl:bg-white "
                />
            </div>

            <div className="h-[75%] px-5 pt-4 xl:px-10 bg-[#fcdef8]/20 rounded-xl">
                <div className="h-[20%]">

                    <p className="font-bold text-center xl:text-2xl mt-1">
                        {education.schoolName}
                    </p>
                </div>
                    <div className="h-[40%] flex lg:justify-center space-x-2 my-2 text-xs lg:text-lg text-center">{education.description}</div>

                <div className="h-[8%] flex flex-wrap space-x-2 lg:my-2">{education.technologies?.map((technology) => (
                    <Image
                        alt="technologies"
                        width={30}
                        height={30}
                        key={technology._id}
                        src={urlFor(technology.image).url()}
                    />

                ))}</div>
                <p className="uppercase py-5 text-sm lg:text-md  ">
                    {new Date(education.dateStarted).toLocaleDateString()} - {new Date(education.dateEnded).toLocaleDateString()}
                </p>
            </div>
        </motion.article>
    );
}
export default EduCard;
