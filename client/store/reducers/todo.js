import { HYDRATE } from 'next-redux-wrapper';
import * as t from '../types';

const initialState = {
  todoList: [],
  message: '',
  fetching: true,
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case t.FETCH_TODO_SUCCEEDED: {
      return {
        ...state,
        todoList: action.payload.data,
        fetching: false,
        message: action.payload.message
      }
    }
    case t.FETCH_TODO_FAILED: {
      return {
        ...state,
        fetching: false,
        message: 'Something went wrong!'
      }
    }
    case t.ADD_TODO_SUCCEEDED: {
      return {
        ...state,
        todoList: [...state.todoList, action.payload.data],
        message: action.payload.message
      }
    }
    case t.EDIT_TODO_SUCCEEDED: {
      const editedTodoList = state.todoList.map(todo => (todo.ref === action.payload.data.ref) ? action.payload.data : todo);
      return {
        ...state,
        todoList: [...editedTodoList],
        message: action.payload.message
      }
    }
    default: {
      return state;
    }
  }
}

export default todoReducer;
