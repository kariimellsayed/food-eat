import { Link } from "react-router-dom";
import profile from "../../assets/profile.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className=" py-3">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <Link className="text-xl font-semibold">
            Food | <span className="text-orange-600">Eat</span>
          </Link>
        </div>
        {/* Links */}
        <div className="links flex justify-center items-center gap-6">
          <ul className="gap-8 hidden sm:flex">
            <li className="hover:border-b-2 border-primary uppercase">
              <Link>Home</Link>
            </li>
            <li className="hover:border-b-2 border-primary uppercase">
              <Link>Menu</Link>
            </li>
            <li className="hover:border-b-2 border-primary uppercase">
              <Link>About</Link>
            </li>
          </ul>
        </div>
        {/* Profile */}
        <div className="flex gap-4 items-center">
          <img
            className="w-10 rounded-full"
            src={profile}
            alt="profile"
            loading="lazy"
          />
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
