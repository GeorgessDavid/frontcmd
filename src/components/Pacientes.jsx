import React from 'react';

let pacientes = []
fetch('http://localhost:3005/apiUsuarios/pacientes').then(response => response.json()).then(datos => {
    console.log(datos)
    for (let i = 0; i < datos.data.length; i++) {
        pacientes.push(datos.data[i])
    }
});

function Pacientes() {
    return (
        <div className="ventana">
            <h3>Cantidad de Pacientes registrados</h3>
            <p>{pacientes.length}</p>
        </div>
    );

}

export default Pacientes;
