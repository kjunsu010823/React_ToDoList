import { useState } from 'react';
import './App.css';

function App() {
  // const inputValue = ref('')
  const [inputValue, setInputValue] = useState('');
  // const todoList = ref([])
  //{ text: string, done: boolean}
  const [todoList, setTodoList] = useState([
    {
      text: 'vue',
      done: true,
    },
    { text: 'react', done: false },
  ]);

  const handleChangeInput = (event) => {
    const text = event.target.value;
    setInputValue(text);
    // inputValue.value = text;
  };

  const handleClickAddButton = () => {
    // spread 연산자
    // { text: inputValue, done: false}
    const nextTodoList = [...todoList, { text: inputValue, done: false }];
    setTodoList(nextTodoList);
    // todoList.push(currentValue)
  };

  const handleClickDeleteButton = (targetIndex) => {
    // todoList.splice(index, 1);
    const nextTodoList = todoList.filter(
      (item, index) => index !== targetIndex
    );
    setTodoList(nextTodoList);
  };

  const handleToggleDone = (targetIndex) => {
    const nextTodoList = todoList.map((item, index) => {
      if (targetIndex === index) {
        return { ...item, done: !item.done };
      } else {
        return item;
      }
    });
    setTodoList(nextTodoList);
  };

  return (
    <>
      <h4>TODO LIST</h4>
      {/* vue: {{inputValue}} */}
      react: {JSON.stringify(todoList)}
      <div>
        {/* <input v-model="inputValue" /> */}
        {/* <input :value="inputValue" @change="handleChangeInput"/> */}
        <input value={inputValue} onChange={handleChangeInput} />
        <button onClick={handleClickAddButton}>추가</button>
      </div>
      {/* 
      <div v-for="(item, index) in todoList">
      {{ item }}
      <button @click="handleDleete(index)">삭제</button>
      </div>
       */}
      {todoList.map((item, index) => (
        <div>
          {/* <input v-model="item.done" */}
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => handleToggleDone(index)}
          />
          {item.text}
          <button onClick={() => handleClickDeleteButton(index)}>삭제</button>
        </div>
      ))}
    </>
  );
}

export default App;
