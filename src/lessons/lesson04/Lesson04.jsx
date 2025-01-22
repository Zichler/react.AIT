import { useState } from "react";
import './lesson04.css';

export default function Lesson04() {
  // ! код ниже сработал бы в обычном script.js но он не обновит данные на странице в react

  // let count = 0

  // const handlePlus = () => {
  //   count++
  //   console.log(count)
  // }

  // ! вместо него мы воспользуемся функцией useState()

  // * функция useState() для создания переменной состояния принимает в себя на вход начальное значение переменной

  // * 1. долгая запись (не используется)

  // let result = useState(0)

  // let count = result[0]
  // let setCount = result[1]

  // * 2. эквивалентная короткая запись (используется!)

  // * передали начальное значение для переменной состояния в useState()
  // получили массив из двух элементов
  // 1й элемент - сама переменная состояния с которой мы будем работать и изменение которой приведет к обновлению компонента
  // 2й элемент - функция, которая перезаписывает значение переменной состояния (ее называют так же как и переменную дописав в начале set)

  let [count, setCount] = useState(0);


  const handlePlus = () => {
    // setCount(10)
    setCount(prev => prev + 1);
  };


  const handleMinus = () => {
    setCount(prev => prev - 1);
  };


  return (
    <div>
      <h2>React useState() hook 🪝</h2>
      <div className="counter">
        <button onClick={handleMinus}>-</button>
        <span>{count}</span>
        <button onClick={handlePlus}>+</button>
      </div>
    </div>
  );
}
