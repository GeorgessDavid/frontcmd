import React, {useState, useEffect} from 'react';

const Prestadores = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3005/apiUsuarios/profesionales').then(response => response.json()).then(datos => {
            console.log(datos)
            setData(datos.data)
        });
    }
    , []);

    return (

        <div className="ventana">
            <h3>Cantidad de prestadores registrados</h3>
            <p>{data.length}</p>
        </div>
    );

}

export default Prestadores;
