

export default function LocationCard({locationData}) {
    return (
        <div className=" bg-blue-800 border-2 rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
            <h2>Location: {locationData.name}</h2>
            <p>Type: {locationData.type}</p>
            <p>Dimension: {locationData.dimension}</p>
        </div>
    );
    
};
