import './myButton.css'

function MyButton({ type, text, func }) {
  return <button type={type} onClick={func} className='myButton'>{text}</button>;
}

export default MyButton;
