import { Link } from "react-router-dom";
export default function NavBar(params) {
    return(
        <div >
            <nav className="bg-gray-800 p-4 flex justify-center gap-4 shadow-md">
                <div>
                    <ul className="flex items-center justify-around gap-4">

                        <li><Link to="/" className="text-white bg-green-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition-all duration-300">
                        Home</Link></li>

                        <li><Link to="/About" className="text-white bg-green-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition-all duration-300">
                        About</Link></li>

                        <li><Link to="/CharacterPage" className="text-white bg-green-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition-all duration-300">
                        Characters</Link></li>

                        <li><Link to="/Locations" className="text-white bg-green-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition-all duration-300">
                        Locations</Link></li>

                    </ul>
                </div>
            </nav>
        </div>
    );
};
