import { Link } from "react-router-dom"

export default function CharacterCard({charData}) {
    return(
        <Link to={`/CharacterPage/${charData.id}`}>
        <div>
            <img src={charData.image} alt={charData.name} />
            <ul>
                <li>Name: {charData.name}</li>
            </ul>
        </div>
        </Link>
    );
    
};
