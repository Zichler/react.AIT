import MyButton from "../../components/myButton/MyButton";
import UserCard from "../../components/userCard/UserCard";

function Lesson03() {const handleClick1 = () => { console.log("Button 1 clicked!"); }; const handleClick2 = () => { console.log("Button 2 clicked!"); };
  return (
    <div>
      <h2>React Props 👨‍👩‍👧</h2>
      <UserCard name={'Peter'} age={35} hobby={'hiking'} />
      <UserCard name={'Rosa'} age={40} hobby={'diving'} />
      <UserCard name={'Anton'} age={28} />
      <MyButton text="Кликни сюда" func={handleClick1} /> <MyButton text="Кликни сюда" func={handleClick2} />
      
    </div>
  );
}

export default Lesson03;