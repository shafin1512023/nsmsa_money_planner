import React, { useEffect, useState } from "react";

async function fetchData() {
    const response = await fetch("data/data.json");
    const data = await response.json();
    return data;
}

function Summary() {
    const [jsonData, setJsonData] = useState(null);
    const [spent, setSpent] = useState(0);
    const [remaining, setRemaining] = useState(0);

    useEffect(() => {
        fetchData().then((value) => {
            let totalMoney = value.total;
            let charity = value.charity;
            let totalSpent = 0;
            setJsonData(value);
            setSpent(value.sectors[0].amount);
            value.sectors.forEach((element) => {
                totalSpent = totalSpent + parseInt(element.amount);
                return totalSpent;
            });
            setSpent(totalSpent);
            setRemaining(totalMoney - totalSpent - charity);
        });
    }, []);

    return (
        <div className="summary">
            <h1>Total - {jsonData && jsonData.total} BDT</h1>
            <h3>Spent - {spent} BDT</h3>
            <h3>Charity - {jsonData && jsonData.charity} BDT</h3>
            <h3>Remaining - {remaining} BDT</h3>
        </div>
    );
}

export default Summary;
