import React, {useEffect, useState} from 'react';
import './PracticasMedicas.css'

const PracticasMedicas = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://dh-grupo3.onrender.com/tratamientos/api').then(response => response.json()).then(datos => {
            console.log(datos)
            setData(datos.data)
        });
    }
    , []);

    return (

        <div className="PracticasMedicasBox">
            <h3>Cantidad de prácticas médicas ofrecidas</h3>
            <p>{data.length}</p>
        </div>
    );

}

export default PracticasMedicas;