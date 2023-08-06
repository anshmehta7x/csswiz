
export default function Switches(){
    return <div className="switches">
        <div className="btnText" style={{display:'flex'}}>
            <label>Button Text: </label>
            <input type="text"></input>
        </div>
        <div className="btnColor" style={{display:'flex'}}>
            <label>Button Color: </label>
            <input type="color"></input>
        </div>
        <div className="btnBorder" style={{display:'flex'}}>
            <label>Button Border: </label>
            <input type="range"></input>
        </div>
        <div className="btnBorderColor" style={{display:'flex'}}>
            <label>Border Color: </label>
            <input type="color"></input>
        </div>

    </div>
}