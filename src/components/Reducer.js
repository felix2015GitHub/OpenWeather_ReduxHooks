const ADD_TODOLIST = 'ADD_TODOLIST';
const DEL_TODOLIST = 'DEL_TODOLIST';

const initState = {
  todoList: ['first'],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODOLIST: {
      const tempTodo = state.todoList.map(list => list);
      tempTodo.push(action.payload.listName);
      return {
        todoList: tempTodo
      };
    }
    case DEL_TODOLIST: {
      const tempTodo = state.todoList.map(list => list);
      tempTodo.splice(action.index, 1);
      return {
        todoList: tempTodo
      };
    }
    default:
      return state;
  }
};