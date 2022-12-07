import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import HandymanIcon from "@mui/icons-material/Handyman";
import CallIcon from "@mui/icons-material/Call";
import FolderIcon from "@mui/icons-material/Folder";

const Link = ({ page, currentPage, setCurrentPage }: ILinkProps) => {
  const lowerCasePage = page.toLowerCase();
  const Icon = ({ type }: IconProps) => {
    switch (type) {
      case "home":
        return <HomeIcon />;
      case "projects":
        return <FolderIcon />;
      case "skills":
        return <HandymanIcon />;
      case "contact":
        return <CallIcon />;
      default:
        return <></>;
    }
  };
  return (
    <AnchorLink
      className={`${
        currentPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setCurrentPage(lowerCasePage)}
    >
      <Icon type={lowerCasePage} /> {page}
    </AnchorLink>
  );
};

const buttonStyle = {
  color: "white",
  bgcolor: "#2CBCE9",
  fontSize: 50,
  size: "large",
  borderRadius: "50%",
  padding: 0.8,
};

const closeButtonStyle = {
  color: "white",
  fontSize: 30,
};

interface INavbarProps {
  isTop?: boolean;
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

interface ILinkProps extends INavbarProps {
  page: string;
}

interface IconProps {
  type: string;
}

function Navbar({ isTop, currentPage, setCurrentPage }: INavbarProps) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const isGTSmallScreen = useMediaQuery("(min-width: 768px)");
  const navbarBg = isTop ? "" : isGTSmallScreen ? "bg-blue" : "";

  return (
    <nav className={`${navbarBg} z-50 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <AnchorLink
          className="font-playfair text-3xl font-bold"
          href="#home"
          onClick={() => setCurrentPage("home")}
        >
          {isGTSmallScreen ? "JUN" : isTop ? "JUN" : " "}
        </AnchorLink>
        {/* DESKTOP NAVBAR */}
        {isGTSmallScreen ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Link
              page="Skills"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Link
              page="Projects"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Link
              page="Contact"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        ) : (
          <>
            {/* MOBILE VIEW SIDEBAR */}
            <IconButton onClick={() => setToggleMenu((prev) => !prev)}>
              <MenuIcon sx={buttonStyle} />
            </IconButton>
            <div
              className={`fixed right-0 bottom-0 h-full bg-blue w-[250px] ease-in-out duration-300 ${
                toggleMenu ? "translate-x-0 " : "translate-x-full"
              }`}
            >
              <div className="flex justify-end p-1">
                <IconButton onClick={() => setToggleMenu((prev) => !prev)}>
                  <CloseIcon sx={closeButtonStyle} />
                </IconButton>
              </div>
              <div className="flex flex-col gap-10 text-2xl ml-[20%]">
                <Link
                  page="Home"
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
                <Link
                  page="Skills"
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
                <Link
                  page="Projects"
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
                <Link
                  page="Contact"
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
