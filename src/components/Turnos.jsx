import React from 'react';

let turnos = []
fetch('http://localhost:3005/turnos/api/listar').then(response => response.json()).then(datos => {
    console.log(datos)
    for (let i = 0; i < datos.length; i++) {
        turnos.push(datos[i])
    }
});

function Turnos() {
    return (
        <div className="ventana">
            <h3>Cantidad de Turnos tomados</h3>
            <p>{turnos.length}</p>
        </div>
    );

}

export default Turnos;
