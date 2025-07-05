import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CharacterCard from "./CharacterCard";


export default function CharacterPage() {
    const [userSearch, setUserSearch] = useState("");
    const [searchData, setSearchData] = useState([])
    const [validSearch, setValidSearch] = useState(true)
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const getData = async () => {

            try{
                const reponse = await axios.get
                (`https://rickandmortyapi.com/api/character/?name=${userSearch}`);
                const charData = reponse.data.results;
                setValidSearch(true);
                setSearchData(charData);
            } catch (error){
                setValidSearch(false)
                setSearchData([]);
                console.error(`Failed to acquire data from API`, error);
            }finally{
                setUserSearch("");
            }
        };
        getData();
    }

    return (
        <>
        <Header />
        <form class="bg-amber-50 max-w-screen: 30vw" onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="userSearch" 
            id="characterSearch" 
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}/>
            <button class="bg bg-red-900"type="Submit">Search Character</button>
        </form>
        <div className="inline-flex flex-wrap justify-center ">
          { searchData.length > 0 && searchData.map((data, index) => (
            <div className="bg-neutral-600 border-2 border-blue-950 gap-2" key={index}>
                
                <CharacterCard  key={index} data={data}/>
            </div>
            ))}
        <div>
        {!validSearch && <p>Failed Search</p>}
        </div>
        </div>
        <Footer />

        </>
    );

};
