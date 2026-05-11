import { Link } from "react-router-dom";
import NAV_LINKS from "../../constants";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center">
          <div className="tracking-widest text-lg leading-8.5 text-white">
            <Link to="/">NOIRÉA</Link>
          </div>
          <p>MON – SUN: 8 AM - 11 PM</p>
        </div>

        <ul className="flex gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link className="nav-link" to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <img className="h-5 w-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/1280px-X_icon_2.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20231002152819" alt="" loading="lazy" />

          <img className="h-5 w-5" src="https://unblast.com/wp-content/uploads/2025/07/instagram-logo-2-768x768.jpg" alt="" loading="lazy" />
        </div>

      <p className="py-4">©2026 NOIRÉA - A . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
