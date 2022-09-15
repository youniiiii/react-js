
const Cardts = ({imagen,nombre, precio, description,id }) => {
    return (
        <div className="container flex" id={id}>
            <div className="image">
            <img src={imagen} alt="" width="300px" height="400px"/>
            </div>
            <div className="info">
            <h3>nombre:<br/>{nombre}</h3>
            <p>precio:{precio}</p>
            <p>codigo:{description}</p>

            </div>
        </div >
    );
}

export default Cardts;