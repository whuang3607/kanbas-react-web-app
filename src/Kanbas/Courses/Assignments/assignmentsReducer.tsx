import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
  assignment: { title: "New Assignment", description: "New Assignment Description", 
  dueDate: "03/13/2024", points: "100", availableFromDate: "02/28/2024", availableUntilDate: "03/27/2024"},
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id && assignment.course == action.payload.course) {
          return action.payload;
        } else {
          return assignment;
        }
      });
      console.log(state.assignments);
    },
    selectAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const { addAssignment, deleteAssignment,
  updateAssignment, selectAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;