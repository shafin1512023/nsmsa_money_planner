function Sector({ name, amount, product }) {
    return (
        <div className="sector">
            <div className="img">{product}</div>
            <h2>{name}</h2>
            <h3>{amount} BDT</h3>
        </div>
    );
}

export default Sector;
