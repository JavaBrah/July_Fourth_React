import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
        <div className='min-h-screen flex flex-col bg-gray-700'>
        <header><Header>
            <NavBar></NavBar>
            </Header>
        </header>
        <main className='flex-grow'></main>
        <footer>
            <Footer></Footer>
        </footer>
        </div>

        </>
    );
};
