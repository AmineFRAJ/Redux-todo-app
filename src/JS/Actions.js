import { ADDTASK, DELETETASK, DONETASK, EDITTASK, MARKALLDONE } from "./ActionTypes";

export const addtask = (task) => {
  return {
    type: ADDTASK,
    payload: task,
  };
};
export const deleteTask = (id) => {
  return {
    type: DELETETASK,
    payload: id,
  };
};
export const edittask = (id, newName, newDescription) => {
  return { type: EDITTASK ,
    payload: {id, newName, newDescription}
  };
};
export const donetask = id =>{
  return {
      type: DONETASK,
      payload: id
  }
}
export const markAllDone = () => ({
  type: MARKALLDONE,
});
