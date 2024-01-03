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
    const [spent, setSpent] = useState(0);
    const [remaining, setRemaining] = useState(0);

    useEffect(() => {
        fetchData().then((value) => {
            let totalMoney = value.total;
            let totalSpent = 0;
            setJsonData(value);
            setSpent(value.sectors[0].amount);
            value.sectors.forEach((element) => {
                totalSpent = totalSpent + parseInt(element.amount);
                return totalSpent;
            });
            setSpent(totalSpent);
            setRemaining(totalMoney - totalSpent);
        });
    }, []);

    return (
        <>
            <TopBar />
            <main>
                <div className="summary">
                    {/* {jsonData &&
                        jsonData.sectors.forEach((element) => {
                            console.log(element.name);
                        })} */}
                    <h1>Total - {jsonData && jsonData.total} BDT</h1>
                    <h3>Spent - {spent} BDT</h3>
                    <h3>Remaining - {remaining} BDT</h3>
                </div>
                <div className="sectors">
                    {jsonData &&
                        jsonData.sectors.map((sector) => (
                            <Sector name={sector.name} amount={sector.amount} />
                        ))}
                </div>
            </main>
        </>
    );
};

export default App;
