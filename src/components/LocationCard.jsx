import { Link } from "react-router-dom"


export default function LocationCard({locationData}) {
    return (
        <Link to={`/Locations/${locationData.id}`}>
        <div className=" bg-blue-800 border-2 rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
            <h2>Location: {locationData.name}</h2>
            <p>Type: {locationData.type}</p>
            <p>Dimension: {locationData.dimension}</p>
        </div>
        </Link>
    );
    
};
