import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function SocialMediaIcons() {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/bj.kr.3/"
        target="_blank"
        rel="noreferrer"
      >
        <FacebookIcon />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/rlaqjawns_s/"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/urfrider"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/beomjun-kim-32309122a/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
