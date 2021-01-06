import { createAction } from 'redux-actions';
import { ADD_TODO, TOGGLE_TODO } from "./../constants/TodoConstants";

export const addTodo = createAction(ADD_TODO, title => title);

export const toggleTodo = createAction(TOGGLE_TODO, id => id);
