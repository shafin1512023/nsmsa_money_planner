import Sector from "./components/Sector";
import TopBar from "./components/TopBar";

const App = () => {
    return (
        <>
            <TopBar />
            <main>
                <div className="sectors">
                    <Sector name="Amzad" amount="800" />
                    <Sector name="Shahana" amount="1700" />
                    <Sector name="Sakib" amount="1000" />
                    <Sector name="Medha" amount="800" />
                    <Sector name="Dhara" amount="429" />
                    <Sector name="Kotha" amount="800" />
                    <Sector name="Arushi" amount="800" />
                    <Sector name="Anika" amount="429" />
                    <Sector name="Khalamoni" amount="600" />
                    <Sector name="Sabbir" amount="498" />
                    <Sector name="Dadi" amount="600" />
                    <Sector name="Sefa" amount="429" />
                    <Sector name="Toha" amount="429" />
                    <Sector name="Tuba" amount="429" />
                    <Sector name="Badol Uncle" amount="498" />
                    <Sector name="Amirul Uncle" amount="498" />
                    <Sector name="Rubel Uncle" amount="498" />
                </div>
            </main>
        </>
    );
};

export default App;
