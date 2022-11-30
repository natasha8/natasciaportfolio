import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typing";
import SingleSkill from "./Skill";

type Props = { skills: Skill[]; };

const SkillsBox = ({ skills }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            //   viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
        >
            <h3 className="absolute top-20 lg:top-4 uppercase tracking-[20px] text-lg lg:text-2xl pl-5">
                my Skills
            </h3>

            {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-sm italic">
                hover
            </h3> */}
            <div className="grid grid-cols-3 lg:grid-cols-8 gap-8">
                {/* Get first half of skills and map */}
                {skills?.slice(0, skills.length / 2).map((skill) => (
                    <SingleSkill key={skill._id} skill={skill} />
                ))}

                {/* Get second half of skills and map with direction left */}
                {skills?.slice(skills.length / 2, skills.length).map((skill) => (
                    <SingleSkill key={skill._id} skill={skill} />
                ))}
            </div>
        </motion.div>
    );
};

export default SkillsBox;
