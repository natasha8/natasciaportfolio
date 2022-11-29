import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typing";
import { urlFor } from "../sanity";


type Props = {

    skill: Skill;
}

const SingleSkill = ({ skill, }: Props) => {


    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    opacity: 0
                }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={urlFor(skill.image).url()} alt=""
                className="w-16 h-16 xl:w-32 xl:h-32 object-contain object-center filter group-hover:bg-[#fcdef8]
                transition duration-300 ease-in-out rounded-lg "
            />
            <div
                className="absolute opacity-0 group-hover:opacity-90 transition duration-300 
            ease-in-out group-hover:bg-[#fcdef8] w-20 h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-lg z-0"
            >
                <div className="flex items-center justify-center h-full">
                    <p className="text-xl font-bold text-[#242424] opacity-100 object-fit">
                        {skill.title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleSkill;
