import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import CharacterDetailCard from "./CharacterDetailCard";
import axios from "axios";

export default function CharacterDetails() {
    const {id} = useParams()
    const [character, setCharacter] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {

        const getCharacterDetails = async () => {
            try{
                const charResponse =
                await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
                const charData = charResponse.data;
                setCharacter(charData)

            }catch(err){
                setError(true);
                console.error(err);
            }
        }
        getCharacterDetails();

    }, [id])

    return (
        <>
            <Header/>
            <div>
                {character && 
                <CharacterDetailCard key={id} charData={character}/>
                }

                <Link to={-1}
                className="text-cyan-400 hover:underline inline-block mb-4">
                ← Back
                </Link>
               
            </div>
        </>
    );

};
