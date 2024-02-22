import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretRight, FaLink, FaExternalLinkAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div className="col">
      <button className="btn btn-light">Collapse All</button>&emsp;
      <button className="btn btn-light">View Progress</button>&emsp;
      <select className="form-select-sm">
        <option value="publish_all">Publish All</option>
        <option value="unpublish_all">Unpublish All</option>
      </select>&emsp;
      <button className="btn btn-danger">+ Module</button>&emsp;
      <button className="btn btn-light"><BsThreeDotsVertical className="me-2"/></button>&emsp;
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              <FaCaretRight className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson._id === "M1L1" && lesson.name}
                    {lesson._id === "M1L2" && <span className="modules-subbullet">{lesson.name}</span>}
                    {lesson._id === "M1L3" && <span className="modules-subbullet">{lesson.name}</span>}
                    {lesson._id === "M1L4" && <span className="modules-subbullet">{lesson.name}</span>}
                    {lesson._id === "M1L5" && <span className="modules-subbullet">{lesson.name}</span>}
                    {lesson._id === "M1L6" && <span className="modules-subbullet">{lesson.name}</span>}
                    {lesson._id === "M1L7" && lesson.name}
                    {lesson._id === "M1L8" && <span className="modules-subbullet">{lesson.name}</span>}
                    {lesson._id === "M1L9" && <span className="modules-subbullet">{lesson.name}</span>}
                    {lesson._id === "M1L10" && lesson.name}
                    {lesson._id === "M1L11" && <span className="modules-subbullet"><FaLink style={{"color":"green"}}/>&emsp;<a className="slides-links" href="#">{lesson.name}</a>&emsp;<FaExternalLinkAlt style={{"color":"red"}}/></span>}
                    {lesson._id === "M1L12" && <span className="modules-subbullet"><FaLink style={{"color":"green"}}/>&emsp;<a className="slides-links" href="#">{lesson.name}</a>&emsp;<FaExternalLinkAlt style={{"color":"red"}}/></span>}
                    {lesson._id === "M2L1" && lesson.name}
                    {lesson._id === "M2L2" && <span className="modules-subbullet">{lesson.name}</span>}
                    {lesson._id === "M2L3" && <span className="modules-subbullet">{lesson.name}</span>}
                    {lesson._id === "M2L4" && <span className="modules-subbullet">{lesson.name}</span>}
                    {lesson._id === "M2L5" && lesson.name}
                    {lesson._id === "M2L6" && <span className="modules-subbullet">{lesson.name}</span>}
                    {lesson._id === "M2L7" && <span className="modules-subbullet">{lesson.name}</span>}
                    {lesson._id === "M2L8" && lesson.name}
                    {lesson._id === "M2L9" && <span className="modules-subbullet"><FaLink style={{"color":"green"}}/>&emsp;<a className="slides-links" href="#">{lesson.name}</a>&emsp;<FaExternalLinkAlt style={{"color":"red"}}/></span>}
                    {lesson._id === "M2L10" && <span className="modules-subbullet"><FaLink style={{"color":"green"}}/>&emsp;<a className="slides-links" href="#">{lesson.name}</a>&emsp;<FaExternalLinkAlt style={{"color":"red"}}/></span>}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;