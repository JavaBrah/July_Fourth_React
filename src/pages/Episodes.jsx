import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";
export default function Episodes() {
    const [episodeData, setEpisodeData] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [error, setError] = useState(false);
    const [validLoad, setValidLoad] = useState(false);
    
    useEffect ((e) => {
        
        e.preventDefault()

        const getEpisodeData = async () => {

            try{
            
                const response = await axios.get(`https://rickandmortyapi.com/api/episode`);
                const eData = response.data.results;
                setEpisodes(eData);
                setValidLoad(true);
                setError(false);
            
            } catch(err) {
                setError(true);
                setValidLoad(false);
                console.error(err);
            }
        }
        getEpisodeData();

    }, [])
    
    
    return(
        <>
        <div>
            <Header />
        </div>
        </>

    );
};
