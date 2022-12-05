import { motion } from "framer-motion";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, currentPage, setCurrentPage }: ILinkProps) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
  before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
  return (
    <AnchorLink
      className={`${
        currentPage === page ? selectedStyles : "bg-dark-grey"
      } w-3 h-3 rounded-full`}
      href={`#${page}`}
      onClick={() => setCurrentPage(page)}
    />
  );
};

interface ISidebarProps {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

interface ILinkProps extends ISidebarProps {
  page: string;
}

function Sidebar({ currentPage, setCurrentPage }: ISidebarProps) {
  return (
    <div className="flex flex-col gap-6 fixed top-[50%] right-7">
      <Link
        page="home"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Link
        page="skills"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Link
        page="projects"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Link
        page="contact"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Sidebar;
