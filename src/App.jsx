import { useState, useEffect } from "react";
import Sector from "./components/Sector";
import TopBar from "./components/TopBar";

async function fetchData() {
    const response = await fetch("data/data.json");
    const data = await response.json();
    return data;
}

const App = () => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        fetchData().then(setJsonData);
    }, []);

    return (
        <>
            <TopBar />
            <main>
                <div className="sectors">
                    {jsonData &&
                        jsonData.sectors.map((element) => (
                            <Sector
                                name={element.name}
                                amount={element.amount}
                            />
                        ))}
                </div>
            </main>
        </>
    );
};

export default App;
