import { ADD_TODO, TOGGLE_TODO } from "../actions/TodoActions";

const initState = {
  todos: [
    {
      id: 1,
      title: "Making the checkbox",
      completed: false
    },
    {
      id: 2,
      title: "class component is poorly",
      completed: false
    },
    {
      id: 3,
      title: "so easy to create such a poorly",
      completed: false
    },
    {
      id: 4,
      title: "this component is really doing",
      completed: true
    },
    {
      id: 5,
      title: "Functional components can reduce coupling",
      completed: false
    },
    {
      id: 6,
      title: "our code without impacting another",
      completed: false
    },
    {
      id: 7,
      title: "Once again, the constraints put in place by functional",
      completed: false
    },
    {
      id: 8,
      title: "management library such as Redux",
      completed: true
    },
    {
      id: 9,
      title: "The general heuristic I use",
      completed: false
    }
  ]
};

let index = 10;

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log("title", action.payload);
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: index++,
            title: action.payload,
            completed: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    default:
      return state;
  }
};

export default todoReducer;
