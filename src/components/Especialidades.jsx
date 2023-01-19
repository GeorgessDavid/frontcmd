import React from 'react';

let especialidades = []
fetch('http://localhost:3005/especialidades/api').then(response => response.json()).then(datos => {
    console.log(datos)
    for (let i = 0; i < datos.length; i++) {
        especialidades.push(datos[i])
    }
});

function Especialidades() {
    return (
        <div className="ventana">
            <h3>Cantidad de especialidades ofrecidas</h3>
            <p>{especialidades.length}</p>
        </div>
    );

}

export default Especialidades;
