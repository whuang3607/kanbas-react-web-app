import React from "react";
import PassingFunctions from "./PassingFunctions";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import { useSelector } from "react-redux";
import { LabState } from "../store";
import TodoList from "./ReduxExamples/todos/TodoList";
import TodoForm from "./ReduxExamples/todos/TodoForm";

const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }
  const { todos } = useSelector((state: LabState) => state.todosReducer);
  return(
    <>
      <h1>Assignment 4</h1>
      <ClickEvent/>
      <br/>
      <PassingDataOnEvent/>
      <br/>
      <PassingFunctions theFunction={sayHello} />
      <br/>
      <EventObject/>
      <br/>
      <Counter/>
      <br/>
      <BooleanStateVariables/>
      <br/>
      <StringStateVariables/>
      <br/>
      <DateStateVariable/>
      <br/>
      <ObjectStateVariable/>
      <br/>
      <ArrayStateVariable/>
      <br/>
      <ParentStateComponent/>
      <br/>
      <ReduxExamples/>
      <br/>
      <TodoList />
    </>
  );
};
export default Assignment4;