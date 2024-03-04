import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className=" flex bg-blue-500 p-4 md:flex md:delil-antara md:item-center">

            <div className="text-white text-xl font-bold">Your logo</div>

            <div className="flex gap-4 ml-10 items-center">
                <Link to={"/"}>Home</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/todo"}>Todo</Link>
            </div>
        </nav>
    )
}
