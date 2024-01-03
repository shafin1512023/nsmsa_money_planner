import { useEffect, useState } from "react";
import Sector from "./Sector";

async function fetchData() {
    const response = await fetch("data/data.json");
    const data = await response.json();
    return data;
}

function Sectors() {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        fetchData().then((value) => {
            setJsonData(value);
        }, []);
    });

    return (
        <div className="sectors">
            {jsonData &&
                jsonData.sectors.map((sector) => (
                    <Sector
                        key={sector.id}
                        name={sector.name}
                        amount={sector.amount}
                        product={sector.productCategory}
                        link={sector.productLinks}
                    />
                ))}
        </div>
    );
}

export default Sectors;
