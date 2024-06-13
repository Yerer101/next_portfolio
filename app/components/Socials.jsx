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
        href={"https://t.me/o_fact?text=Hello%20Abraham"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiTelegramFill size={30} />
      </Link>
      <Link
        href={"https://github.com/Yerer101"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill size={30} />
      </Link>
      <Link
        href={"https://linkedin.com/in/abraham-tekeste-054a01285"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinFill size={30} />
      </Link>
    </div>
  );
};

export default Socials;
