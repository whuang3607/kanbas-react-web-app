import ModuleList from "../Modules/List";
import { FaFileImport, FaRegBell } from "react-icons/fa";
import { LiaFileExportSolid, LiaChartBarSolid } from "react-icons/lia";
import { IoMegaphoneOutline } from "react-icons/io5";
import { ImTarget } from "react-icons/im";
import "./index.css";
import { GoDotFill } from "react-icons/go";
import { Bs5CircleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

function Home() {
  return (
    <div>
        <h2>Home</h2>
        <div className="row">
            <ModuleList />
            <div className="col flex-grow-0 me-2 d-none d-lg-block">
                    <div className="list-group" style={{"width":"350px"}}>
                        <a href="#" className="list-group-item list-group-item-action course-status-buttons">
                            <FaFileImport />&emsp;
                            Import Existing Content
                        </a>
                        <a href="#" className="list-group-item list-group-item-action course-status-buttons">
                            <LiaFileExportSolid />&emsp;
                            Import From Commons
                        </a>
                        <a href="#" className="list-group-item list-group-item-action course-status-buttons">
                            <ImTarget />&emsp;
                            Choose Home Page
                        </a>
                        <a href="#" className="list-group-item list-group-item-action course-status-buttons">
                            <LiaChartBarSolid />&emsp;
                            View Course Stream
                        </a>
                        <a href="#" className="list-group-item list-group-item-action course-status-buttons">
                            <IoMegaphoneOutline />&emsp;
                            New Announcement
                        </a>
                        <a href="#" className="list-group-item list-group-item-action course-status-buttons">
                            <LiaChartBarSolid />&emsp;
                            New Analytics
                        </a>
                        <a href="#" className="list-group-item list-group-item-action course-status-buttons">
                            <FaRegBell />&emsp;
                            View Course Notifications
                        </a>
                        <br/>
                        <h4>To Do</h4>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-1" style={{"color":"red"}}>
                                        <Bs5CircleFill/>
                                    </div>
                                    <div className="col">
                                        <a href="#" className="to-do-links">Grade A1 - ENV + HTML</a>
                                        <br/>
                                        <span className="to-do-deadline">
                                            100 points <GoDotFill/> Sep 18 at 11:59pm
                                        </span>
                                    </div>
                                    <div className="col-1">
                                    <IoMdClose/>
                                    </div>
                                </div>
                            </li>
                            
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-1" style={{"color":"red"}}>
                                        <Bs5CircleFill/>
                                    </div>
                                    <div className="col">
                                        <a href="#" className="to-do-links">Grade A2 - CSS + BOOTSTRAP</a>
                                        <br/>
                                        <span className="to-do-deadline">
                                            100 points <GoDotFill/> Oct 2 at 11:59pm
                                        </span>
                                    </div>
                                    <div className="col-1">
                                    <IoMdClose/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  );
}
export default Home;