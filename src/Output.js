export default function Output(props){


    return <div className="output">
        <div className="css-output">
            #{props.html[1]}{" {"}
        <nobr></nobr>
        {props.css.map((e)=>{
            return <div>{e}<br></br></div>
        })}
        {"}"}
        </div>
        <div className="html-output">
            <p>{`<button id="${props.html[1]}">${props.html[0]}</button>`}</p>
        </div>
    </div>
}