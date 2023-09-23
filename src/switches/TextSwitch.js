export default function TextSwitch(props) {
    return (
      <div className="textSwitch">
        <label for={props.label}>{props.label}</label>
        <input
          id = {props.label}
          type="text"
          onChange={(event) => {
            const value = event.target.value === "" ? "     " : event.target.value;
            props.onTextChange(value);
          }}
        />
      </div>
    );
  }