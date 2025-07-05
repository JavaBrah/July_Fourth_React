import { Link } from "react-router-dom";
export default function NavBar(params) {
    return(
        <div >
            <nav >
                <div>
                    <ul className="flex items-center justify-around">

                        <li><Link to="/" className="hover:text-pink-600">
                        Home</Link></li>

                        <li><Link to="/About" className="hover:text-pink-600">
                        About</Link></li>

                        <li><Link to="/CharacterPage" className="hover:text-pink-600">
                        Characters</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
