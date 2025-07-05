import { Link } from "react-router-dom";
export default function FileNotFound() {
    return (
    <>
        <main className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white" >
       
        <h1 className="">This Page Doesn't exist!: </h1>
        <h3 className="">
            <Link to="/" className="text-cyan-300 hover:text-cyan-400 underline mt-2">Navigate Home</Link>
            </h3>


        </main>
    </>
    );
};
