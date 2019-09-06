import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Main = () => {
  const [listName, setListName] = useState('');
  const todoList = useSelector(state => state.todoList);

  // 用 useDispatch 產生 dispatch 方法
  const dispatch = useDispatch();
  const addTodoList = () => {
    // 用法一樣
    dispatch({
      type: 'ADD_TODOLIST',
      payload: { listName },
    });
  };

  const delTodoList = (index) => {
    dispatch({
      type: 'DEL_TODOLIST',
      index
    });
  }

  return (
    <div>
      <input value={listName} onChange={(e) => { setListName(e.target.value); }} />
      <button type="button" onClick={addTodoList}>
        Add Item
      </button>
      <ul>
        {todoList.map((todo, i) => <li key={todo} onClick={ () => { delTodoList(i) }}>{todo}</li>)}
      </ul>
    </div>
  );
};

export default Main;