import React, {useState, useEffect} from 'react';
import './Turnos.css'
const Turnos = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
            fetch('https://dh-grupo3.onrender.com/turnos/api/listar').then(response => response.json()).then(datos => {
                console.log(datos)
                setData(datos.total)
            });
        }
        , []);

    return (

        <div className="TurnosBox">
            <h3>Cantidad de Turnos tomados</h3>
            <p>{data}</p>
        </div>
    );

}

export default Turnos;
