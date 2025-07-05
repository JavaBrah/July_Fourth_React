import Header from "../components/Header";
import LocationCard from "../components/LocationCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Locations() {
    
    const [locationData, setLocationData] = useState([]);
    const [validResponse, setValidResponse] = useState(true)

    


    useEffect (() => {
        
        const getLocationData = async () => {
            try{
                const response = await axios.get(`https://rickandmortyapi.com/api/location`);
                const data = response.data.results;
                setLocationData(data);
                setValidResponse(true);
            }catch(error){
                setValidResponse(false);
                console.error(`Failed to retrieve location data`, data);
            }
        }
        getLocationData();
    }, []);

       
    return (
        <>
            <Header></Header>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {locationData.length > 0 && locationData.map((data, index) => (
                   
                   <LocationCard className="border-2 rounded-xl shadow-md p-4"
                     key={index} locationData={data}/>
                     
            ))}
            </div>
            {!validResponse && <p className="text-center text-red-500 mt-4">No locations found</p>}
        </>

    );
}
