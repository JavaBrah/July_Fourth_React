import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import Header from "../components/Header";
import CharacterCard from "../components/CharacterCard";

import { Link } from "react-router-dom";

export default function LocationDetails() {
    const {id} = useParams();
    const [location, setLocation] = useState(null);
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getLocationData = async () => {
            try{
                const locResponse = 
                await axios.get(`https://rickandmortyapi.com/api/location/${id}`);   
                const locData = locResponse.data;
                setLocation(locData);
                
                const ids = locData.residents.map((url) => 
                    url.split('/').pop()
                );
                
                if (ids.length){
                    const getCharResponse = 
                    await axios.get(`https://rickandmortyapi.com/api/character/${ids.join(",")}`);
                    const charData = getCharResponse.data;
                    setCharacters(Array.isArray(charData) ? charData : [charData]);
                }
                setLoading(false);

            }catch(error){
                console.error(error);
                setError(true);
            }
        }
        getLocationData();
    }, [id]);

    if (loading) return <p className="text-center mt-6">Loading…</p>;
    if (error)   return <p className="text-center text-red-500 mt-6">Could not load data</p>;

   
    return(
        <>
            <Header />
            <div>
                <h1 className="text-3xl font-bold mb-1">{location.name}</h1>
                <p className="text-gray-600 mb-6">
                {location.type} — {location.dimension}</p>
            </div>
            <div>
                {characters.length === 0 ? (
                <p className="italic text-center">No known residents</p>
                ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {characters.map((char) => (
                    <CharacterCard key={char.id} charData={char} />
                ))}
                </div>
                )}
            </div>
            <div className="flex justify-center items-center gap-4 ">
                <Link className="hover: text-cyan-700"to='/Locations'>Back to Locations</Link>
            </div>
            
        </>
            
    );
};
