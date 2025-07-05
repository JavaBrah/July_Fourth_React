import { Link } from "react-router-dom";
export default function NavBar(params) {
    return(
        <div>
            <nav>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/CharacterPage">Characters</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
