import { ADDTASK, DELETETASK, DONETASK, EDITTASK, MARKALLDONE } from "./ActionTypes";
//load state from local storage
const loadState = () => {
  try {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : undefined;
  } catch (e) {
    console.warn("Could not load state", e);
    return undefined;
  }
};

const initialState = {
  listTasks: loadState() || [
    {
      id: Math.random(),
      name: "Checkpoint",
      description: "Redux checkpoint",
      isDone: false,
    },
    {
      id: Math.random(),
      name: "Sport",
      description: "Bodytec session",
      isDone: false,
    },
    {
      id: Math.random(),
      name: "Shopping",
      description: "carrefour",
      isDone: true,
    },
  ],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTASK:
      return { ...state, listTasks: [...state.listTasks, payload] };
    case DELETETASK:
      return {
        ...state,
        listTasks: state.listTasks.filter((el) => el.id !== payload),
      };
    case EDITTASK:
      return {
        ...state,
        listTasks: state.listTasks.map((el) =>
          el.id === payload.id
            ? {
                ...el,
                name: payload.newName,
                description: payload.newDescription,
              }
            : el
        ),
      };
    case DONETASK:
      return {
        ...state,
        listTasks: state.listTasks.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
      case MARKALLDONE:
      return {
        ...state,
        listTasks: state.listTasks.map((el) => ({ ...el, isDone: true })),
      };

    default:
      return state;
  }
};
export default todoReducer;
