import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretRight, FaLink, FaExternalLinkAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

type LessonType = {
  "_id": string,
  "name": string,
  "description": string,
  "module": string
};

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <div className="col">
      <button className="btn btn-light">Collapse All</button>&emsp;
      <button className="btn btn-light">View Progress</button>&emsp;
      <select className="form-select-sm">
        <option value="publish_all">Publish All</option>
        <option value="unpublish_all">Unpublish All</option>
      </select>&emsp;
      <button className="btn btn-light"><BsThreeDotsVertical className="me-2"/></button>&emsp;
      <br/><br/>
      <div className="form-group row">
        <div className="col">
          <input value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
            className="form-control"
          />
        </div>
        <div className="col">
          <button onClick={() => dispatch(updateModule(module))} className="btn btn-primary">Update</button>&emsp;
          <button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
        </div>
      </div>
      <br/>
      <textarea value={module.description}
        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        className="form-control"
      /><br/>
      <ul className="list-group wd-modules">
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
        
        //{modulesList.map((module) => (
          <li key={index} className="list-group-item">
            <div>
              <FaEllipsisV className="me-2" />
              <FaCaretRight className="me-2" />
              {module.name}
              <span className="float-end">
                <button className="btn btn-primary" onClick={() => dispatch(setModule(module))}
                style={{"borderRadius":"5px"}}>
                  Edit
                </button>
                &emsp;
                <button className="btn btn-danger" onClick={() => dispatch(deleteModule(module._id))} 
                style={{"borderRadius":"10px"}}>
                  Delete
                </button>
                &emsp;
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson : LessonType) => (
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
                    {lesson._id === "M3L1" && lesson.name}
                    {lesson._id === "M3L2" && <span className="modules-subbullet">{lesson.name}</span>}
                    {lesson._id === "M3L3" && <span className="modules-subbullet">{lesson.name}</span>}
                    {lesson._id === "M3L4" && <span className="modules-subbullet">{lesson.name}</span>}
                    {lesson._id === "M3L5" && lesson.name}
                    {lesson._id === "M3L6" && <span className="modules-subbullet">{lesson.name}</span>}
                    {lesson._id === "M3L7" && <span className="modules-subbullet">{lesson.name}</span>}
                    {lesson._id === "M3L8" && lesson.name}
                    {lesson._id === "M3L9" && <span className="modules-subbullet"><FaLink style={{"color":"green"}}/>&emsp;<a className="slides-links" href="#">{lesson.name}</a>&emsp;<FaExternalLinkAlt style={{"color":"red"}}/></span>}
                    {lesson._id === "M3L10" && <span className="modules-subbullet"><FaLink style={{"color":"green"}}/>&emsp;<a className="slides-links" href="#">{lesson.name}</a>&emsp;<FaExternalLinkAlt style={{"color":"red"}}/></span>}
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