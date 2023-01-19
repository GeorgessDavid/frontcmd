import React, {useState, useEffect} from 'react';

const Especialidades = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3005/especialidades/api').then(response => response.json()).then(datos => {
            console.log(datos)
            setData(datos)
        });
    }
    , []);

    return (

        <div className="ventana">
            <h3>Cantidad de especialidades ofrecidas</h3>
            <p>{data.length}</p>
        </div>
    );

}

export default Especialidades;
