import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";

function Footer() {
  return (
    <footer className="h-64 bg-blue pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-black">
            KIM BEOMJUN
          </p>
          <p className="font-playfair text-md text-black">
            {" "}
            ©2022 JUN. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
