function Sector({name, amount}) {
    return (
        <div className="sector">
            <div className="img">
                এখানে ছবি লাগাবো পরে প্রোডাক্টের
            </div>
            <h2>{name}</h2>
            <h3>{amount} BDT</h3>
        </div>
    );
}

export default Sector;
