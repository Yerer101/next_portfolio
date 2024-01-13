import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiLinkedinBoxLine,
  RiLinkedinFill,
  RiGithubFill,
  RiTelegramFill,
  RiTelegramLine,
  RiGoogleLine,
  RiDiscordFill,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://discord.com/channels/@me/1138909093092917249"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiDiscordFill />
      </Link>
      <Link
        href={"https://github.com/Drabsenior"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/abenezer-maregu-560016236/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinFill />
      </Link>
     
      
    </div>
  );
};

export default Socials;
