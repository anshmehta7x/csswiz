import { Link } from "react-router-dom"


export default function Header(){
    return <nav className="Header">
        <div className="title">CSS<em>Wiz</em></div>
        <div className="navlinks">
            <Link className="headerLink" to='/'>Home</Link>
            <Link className="headerLink" to='/about'>About</Link>
        </div>
    </nav>
}