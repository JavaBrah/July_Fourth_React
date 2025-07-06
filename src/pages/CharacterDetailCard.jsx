
export default function CharacterDetailCard({charData}) {
    
    return(
        <>
           
            <div>
                    <img src={charData.image} alt={charData.name} />
                <ul>
                    <li>Name: {charData.name}</li>
                    <li>Status: {charData.status}</li>
                    <li>Type: {charData.type}</li>
                </ul>
            </div>
        </>

    );
};
