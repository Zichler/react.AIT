import './myButton.css'

function MyButton({ text, func }) {
  return <button className='myButton' onClick={func}>{text}</button>;
}

export default MyButton;
