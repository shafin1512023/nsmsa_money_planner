function Sector({ name, amount, product, link }) {
    return (
        <div className="sector">
            <a href={link} className="link">
                <div className="img">
                    {product}
                    <p>Click Here <br /> to see the product</p>
                </div>
            </a>
            <h2>{name}</h2>
            <h3>{amount} BDT</h3>
        </div>
    );
}

export default Sector;
