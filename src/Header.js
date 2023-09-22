import { Link } from "react-router-dom"


export default function Header(){
    return <nav className="header">
        <div className="title">CSSWiz</div>
        <div className="navlinks">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
    </nav>
}