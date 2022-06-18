import useToggle from './useToggle'

export default function ToggleComponent() {
const [value, setValue] = useToggle(false);

return (
    <>
    <div>{value.toString()}</div>
    <button onClick={setValue}>Toggle</button>
    <button onClick={() => setValue(true)}>True</button>
    <button onClick={() => setValue(false)}>False</button>
    </>
)

}