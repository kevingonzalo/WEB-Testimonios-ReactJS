import "./Testimonio.css";

const Testimonio = (props) => {
    return (
        <div className='testimonio'>
            <img
                className='img-testimonio'
                src={require(`../images/testimonio-${props.imagen}.png`)}
                alt='foto de ema'
                title='foto de ema'
            />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className='cargo-testimonio'>
                    {props.cargo} en <strong>{props.empresa}</strong>
                </p>
                <p className='text-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
    );
};

export default Testimonio;
