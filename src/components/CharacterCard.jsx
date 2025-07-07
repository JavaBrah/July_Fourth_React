import { Link } from "react-router-dom"

export default function CharacterCard({charData}) {
    return(
        <Link to={`/CharacterPage/${charData.id}`}>
        <div className="border-2 rounded-2xl bg-purple-600 grad shadow-purple-500 p-2 hover:shadow-lg transition-shadow duration-300 ">
            <img src={charData.image} alt={charData.name} />
            <ul>
                <li>Name: {charData.name}</li>
            </ul>
        </div>
        </Link>
    );
    
};
