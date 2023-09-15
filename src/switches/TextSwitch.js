export default function TextSwitch(props) {
    return (
      <div className="textSwitch">
        <h2>{props.label}</h2>
        <input
          type="text"
          onChange={(event) => {
            const value = event.target.value === "" ? "     " : event.target.value;
            props.onTextChange(value);
          }}
        />
      </div>
    );
  }