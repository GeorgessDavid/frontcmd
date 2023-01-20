import React, {useState, useEffect} from 'react';
import './Turnos.css'
const Turnos = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
            fetch('http://localhost:3005/turnos/api/listar').then(response => response.json()).then(datos => {
                console.log(datos)
                setData(datos)
            });
        }
        , []);

    return (

        <div className="TurnosBox">
            <h3>Cantidad de Turnos tomados</h3>
            <p>{data.length}</p>
        </div>
    );

}

export default Turnos;
