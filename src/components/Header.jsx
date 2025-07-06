import NavBar from "./NavBar";
export default function Header() {
    return (
        <div className=" bg-gray-700 flex-col justify-center" >
            <h1 className="flex justify-center  bg-green-600 p-4 rounded-xl shadow-md max-w-xs mx-auto m-2" >
                Rick & Morty Assignment</h1>
            <NavBar />
        </div>
    );
};
