import React, {useState, useEffect} from 'react';
import './Especialidades.css'

const Especialidades = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://dh-grupo3.onrender.com/especialidades/api').then(response => response.json()).then(datos => {
            console.log(datos)
            setData(datos.data)
        });
    }
    , []);

    return (

        <div className="EspecialidadesBox">
            <h3>Cantidad de especialidades ofrecidas</h3>
            <p>{data.length}</p>
        </div>
    );

}

export default Especialidades;
