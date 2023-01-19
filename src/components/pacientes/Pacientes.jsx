import React, {useEffect, useState} from 'react';

const Pacientes = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
            fetch('https://dh-grupo3.onrender.com/apiUsuarios/pacientes').then(response => response.json()).then(datos => {
                console.log(datos)
                setData(datos.data)
            });
        }
        , []);

    return (

        <div className="ventana">
            <h3>Cantidad de pacientes registrados</h3>
            <p>{data.length}</p>
        </div>
    );

}

export default Pacientes;

