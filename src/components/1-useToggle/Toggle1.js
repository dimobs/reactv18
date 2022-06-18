import useToggle1 from "./useToggle1";

export default function Toggle1() {
const [value, toggleValue] = useToggle1(false);


  return (
      <div>
      Secound Try
    <div>{value.toString()}</div>
    <button onClick={toggleValue}>Toggle1</button>
    <button onClick={() => toggleValue(true)}>True</button>
    <button onClick={() => toggleValue(false)}>False</button>
    </div>
  )
}
