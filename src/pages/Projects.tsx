import { motion } from "framer-motion";
import { LineDivider } from "../App";
import CodeIcon from "@mui/icons-material/Code";
import LoopIcon from "@mui/icons-material/Loop";
import project_1 from "../assets/project1.png";
import project_2 from "../assets/project2.png";
import project_3 from "../assets/project3.png";
import project_4 from "../assets/project4.png";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

interface IProjectProps {
  title: string;
  description: string;
  link: string;
  projectImg: string;
}

const Project = ({ title, description, link, projectImg }: IProjectProps) => {
  const projectTitle = title.split(" ").join("_").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div
        className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue"
      >
        <p className="text-2xl font-playfair">{title}</p>
        {link !== "" ? (
          <a
            className="mt-2 hover:opacity-50 transition duration-500"
            href={link}
            target="_blank"
          >
            <CodeIcon className="text-red" />
          </a>
        ) : (
          <a
            className="mt-2 hover:opacity-50 transition duration-500"
            target="_blank"
          >
            <LoopIcon />
          </a>
        )}
        <p className="mt-5">{description}</p>
      </div>
      <img src={projectImg} alt={projectTitle} />
    </motion.div>
  );
};

function Projects() {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-1/2 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineDivider width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          List of projects that I have done / working-in-progress.
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* FIRST ROW */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold text-white"
          >
            SCHOOL PROJECT
          </div>
          <Project
            title="Project 1"
            description="Implementation 
            and performance testing of C programming with the given medical dataset in the Internet 
            of Things (IoT) edge computing machine learning landscape."
            link="https://github.com/urfrider/csc1003-assignment"
            projectImg={project_1}
          />
          <Project
            title="Project 2"
            description="Developed a scope tracker app which keep tracks of scope and schedule.
            Implemented using ReactJS (to imitate a mobile application), Typescript, ExperessJS and SQLite"
            link="https://www.youtube.com/watch?v=HCMu1d_jRws"
            projectImg={project_2}
          />
          {/* SECOND ROW */}
          <Project
            title="Project 3"
            description="Developed a Trello webapp where user can create, delete and drag boards and tasks freely.
            Implemented using ReactJS and Typescript."
            link="https://urfrider.github.io/trello/"
            projectImg={project_3}
          />
          <Project
            title="Project 4"
            description="Developing a dashboard for smart city planning. Still Working In Progress
            Implemented using ReactJS and .NET Core"
            link=""
            projectImg={project_4}
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue text-white
            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            PERSONAL PROJECTS
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
