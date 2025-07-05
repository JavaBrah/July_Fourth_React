export default function CharacterCard({data}) {
    return(
        <div>
            <img src={data.image} alt={data.name} />
            <ul>
                <li>Name: {data.name}</li>
                <li>Status: {data.status}</li>
                <li>Type: {data.type}</li>
            </ul>
        </div>
    );
    
};
