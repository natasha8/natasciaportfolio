
import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import { HiChevronDoubleUp } from 'react-icons/hi'
import { Education as Edu, Experience, PageInfo, Project, Skill, Social } from "../typing";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocial";
import { fetchEducation } from '../utils/fetchEducation';


type Props = {
    skills: Skill[];
    pageInfo: PageInfo;
    experiences: Experience[];
    socials: Social[];
    projects: Project[];
    educations: Edu[];
}



const Home = ({ pageInfo, skills, experiences, socials, projects, educations }: Props) => {

    return (
        <div className="w-screen h-screen bg-[#242424] text-[#fcdef8] snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-[#474547] scrollbar-thumb-[#fcdef8]/80 ">
            <Head>
                <title>Natascia Parisella </title>
                <meta
                    name="description"
                    content="natascia parisella portfolio"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* HEADER */}
            <Header socials={socials} />
            {/* HERO */}
            <section id="hero" className="snap-start">
                <Hero pageInfo={pageInfo} />
            </section>
            {/* ABOUT */}
            <section
                id="about"
                className="snap-center w-full flex justify-center items-center"
            >
                <About pageInfo={pageInfo} />
            </section>
            {/* EDUCATION */}
            <section
                id="education"
                className="snap-center w-full flex justify-center items-center"
            >
                <Education educations={educations} />
            </section>
            {/* EXPERIENCE */}
            <section
                id="experience"
                className="snap-center w-full flex justify-center items-center"
            >
                <WorkExperience experiences={experiences} />
            </section>
            {/* SKILLS */}
            <section id="skills" className="snap-start">
                <Skills skills={skills} />
            </section>
            {/* PROJECT */}
            <section id="projects" className="snap-start">
                <Projects projects={projects} />
            </section>
            <section id="contact" className="snap-center w-full flex justify-center items-center">
                <Contact pageInfo={pageInfo} />
            </section>
            <Link href="#hero" className="snap-center">
                <footer className="sticky bottom-5 cursor-pointer">
                    <div className="flex justify-center items-center">
                        <HiChevronDoubleUp className="h-8 w-8 rounded-full filter animate-pulse" />
                    </div>
                </footer>
            </Link>
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocial();
    const educations: Edu[] = await fetchEducation();

    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials,
            educations,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 60,
    };
};