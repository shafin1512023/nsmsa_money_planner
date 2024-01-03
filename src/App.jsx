import TopBar from "./components/TopBar";
import Summary from "./components/Summary";
import Sectors from "./components/Sectors";

const App = () => {
    return (
        <>
            <TopBar />
            <main>
                <Summary />
                <Sectors />
            </main>
        </>
    );
};

export default App;
