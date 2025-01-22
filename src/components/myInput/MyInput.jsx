import './myInput.css'

export default function MyInput({name, type, placeholder, label}) {
  return (
    <>
      <label>{label}</label>
      <input className="myInput" placeholder={placeholder} name={name} type={type} />
    </>
  );
}