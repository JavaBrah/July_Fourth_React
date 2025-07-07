import Header from "../components/Header";
export default function About() {
    return (
        <>
            <div className="min-h-screen bg-gray-700 flex flex-col justify-center items-center">
            <Header />
            <div className="bg-green-700 w-full max-w-xl my-4 p-4 rounded-md shadow-md">
            <h1 className="text-center text-white text-2xl font-bold">About the show</h1>
            </div>

            <img  className="w-full max-w-4xl rounded-lg shadow-lg" src="https://i.guim.co.uk/img/media/b563ac5db4b4a4e1197c586bbca3edebca9173cd/0_12_3307_1985/master/3307.jpg?width=1200&quality=85&auto=format&fit=max&s=7543c611e54f684ba5da8700c2ac15d9" alt="" />

            </div>
        </>
    );
};
