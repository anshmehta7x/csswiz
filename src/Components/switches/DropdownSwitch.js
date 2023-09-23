export default function DropdownSwitch(props){
    let options = props.options;

    function handleSelectChange(event) {
        props.onDropdownChange(event.target.value);
        // Add your logic here
    }

    return <div className="dropdownSwitch">
        <label htmlFor={props.label}>{props.label}</label>
        <select id={props.label} onChange={handleSelectChange}>
            {options.map((option) => {
                return <option value={option}>{option}</option>
            })}
        </select>
    </div>
}