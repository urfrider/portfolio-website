import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import SocialMediaIcons from "../components/SocialMediaIcons";
import profile from "../assets/profile.png";

const ProfileImg = () => {
  return (
    <img
      src={profile}
      alt="profile"
      className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] 
      md:max-w-[500px] rounded-t-[400px]"
    />
  );
};

export interface IHomeProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

function Home({ setCurrentPage }: IHomeProps) {
  const isGTMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        <ProfileImg />
      </div>
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start">
            Kim{" "}
            <span
              className="xs:relative xs:text-white xs:font-semibold z-20
              xs:before:content-brush before:absolute before:-left-[25px]
              before:-top-[70px] before:z-[-1]"
            >
              Beomjun
            </span>
          </p>
          <p className="mt-16 mb-7 text-base text-center md:text-start">
            I am a highly motivated individual who is passionate in programming
            and aspire to be a full-stack developer. I am open to learning new
            technologies that can improve user experience.
          </p>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-rainblue text-deep-blue rounded-sm py-3 px-7
          font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setCurrentPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <a
            href="https://drive.google.com/file/d/1AWUGPpIFkb4wJogHNuP4Nsj8ccFmQEK4/view?usp=share_link"
            className="rounded-4-sm bg-rainblue py-0.5 pr-0.5"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex
            items-center justify-center font-playfair px-10 text-white"
            >
              Download CV
            </div>
          </a>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
