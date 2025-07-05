import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function CharacterPage() {
    const [userSearch, setUserSearch] = useState("");
    const [searchData, setSearchData] = useState()
    const [validSearch, setValidSearch] = useState(true)
    const handleSubmit = async () => {
        try{
            const reponse = await axios.get
            (`https://rickandmortyapi.com/api/character/?${userSearch}`);
            const charData = reponse.data;
            setValidSearch(true);
            setUserSearch("")
            setSearchData(charData);
        } catch (error){
            setSearchData(false);
            setUserSearch("");
            console.error(`Failed to acquire data from API`, error);
        }
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="userSearch" 
            id="characterSearch" 
            onChange={(e) => setSearchData(e.target.value.toLocaleLowerCase())}/>
            <button type="Submit">Search Character</button>
        </form>
        {!validSearch && <p>Failed Search</p>}
        <div>
            
        </div>
        </div>
    );

};
