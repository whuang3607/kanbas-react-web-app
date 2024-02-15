import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaArrowCircleRight } from "react-icons/fa";
import { FaNeos, FaRegClock } from "react-icons/fa6";
import { HiComputerDesktop } from "react-icons/hi2";
import { IoMdHelpCircleOutline } from "react-icons/io";
function KanbasNavigation() {
  const links = [
    {label: "NEU", icon: <FaNeos className="fs-2" />},
    {label: "Account", icon: <FaRegUserCircle className="fs-2" />},
    {label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />},
    {label: "Courses", icon: <FaBook className="fs-2" />},
    {label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" />},
    {label: "Inbox", icon: <FaInbox className="fs-2" />},
    {label: "History", icon: <FaRegClock className="fs-2" />},
    {label: "Studio", icon: <HiComputerDesktop className="fs-2"/>},
    {label: "Commons", icon: <FaArrowCircleRight className="fs-2" />},
    {label: "Help", icon: <IoMdHelpCircleOutline className="fs-2"/>}
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
        {/*
        {links.map((link, index) => (
            <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
            <Link to={`/Kanbas/${link.label}`}> <i>{link.icon}</i> {link.label} </Link>
            </li>
        ))} 
        */}
    </ul>
  );
}
export default KanbasNavigation;