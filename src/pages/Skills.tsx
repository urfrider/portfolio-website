import { motion } from "framer-motion";
import { LineDivider } from "../App";
import useMediaQuery from "../hooks/useMediaQuery";
import skillsImage from "../assets/skillsImage.png";

function Skills() {
  const isGTMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineDivider width="w-1/3" />
          <p className="mt-10 mb-7 text-2xl font-semibold ">
            <span className="text-blue">TECH</span> STACKS
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="p-4 bg-white rounded-full hover:scale-125 transition duration-300">
              <img className="h-16 w-16" src="/assets/html-5.png" alt="html" />
            </div>
            <div className="p-4 bg-white rounded-full hover:scale-125 transition duration-300">
              <img className="h-16 w-16" src="/assets/css-3.png" alt="css" />
            </div>
            <div className="p-4 bg-white rounded-full hover:scale-125 transition duration-300">
              <img className="h-16 w-16" src="/assets/js.png" alt="js" />
            </div>
            <div className="p-4 bg-white rounded-full hover:scale-125 transition duration-300">
              <img
                className="h-16 w-16"
                src="/assets/typescript.png"
                alt="ts"
              />
            </div>
            <div className="p-4 bg-white rounded-full hover:scale-125 transition duration-300">
              <img className="h-16 w-16" src="/assets/react.png" alt="react" />
            </div>
            <div className="p-4 bg-white rounded-full hover:scale-125 transition duration-300">
              <img
                className="h-16 w-16"
                src="/assets/reactNative.png"
                alt="reactNative"
              />
            </div>
            <div className="p-4 bg-white rounded-full hover:scale-125 transition duration-300">
              <img className="h-16 w-16" src="/assets/letter-c.png" alt="C" />
            </div>
            <div className="p-4 bg-white rounded-full hover:scale-125 transition duration-300">
              <img className="h-16 w-16" src="/assets/java.png" alt="java" />
            </div>
            <div className="p-4 bg-white rounded-full hover:scale-125 transition duration-300">
              <img
                className="h-16 w-16"
                src="/assets/python.png"
                alt="python"
              />
            </div>

            <div className="p-4 bg-white rounded-full hover:scale-125 transition duration-300">
              <img
                className="h-16 w-16"
                src="/assets/django.png"
                alt="Django"
              />
            </div>
          </div>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isGTMediumScreen ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
              before:w-full before:h-full before:border-2  before:border-blue before:z-[-1] max-w-[600px]"
            >
              <img src={skillsImage} alt="skills" className="z-10" />
            </div>
          ) : (
            <img src={skillsImage} alt="skills" className="z-10" />
          )}
        </div>
      </div>

      <div className="md:flex md:justify-between mt-16 gap-32">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">I</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Receptive
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Open to continuous learning to stay relevant with new technology
            trends, especially Information Technology in today's world where
            things change rapidly.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">II</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Teamwork
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            A reliable team player who is able to work cooperatively with
            others. Consistently looking for ways to contribute and help the
            team to achieve its goals.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">III</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Problem Solving
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Ability to identify and anticipate potential future problems. Take
            appropriate steps evaluate possible solutions and implement the best
            solution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
