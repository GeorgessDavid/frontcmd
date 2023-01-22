import './App.css';
import Especialidades from "./components/especialidades/Especialidades.jsx";
import Turnos from "./components/turnos/Turnos.jsx";
import Pacientes from "./components/pacientes/Pacientes.jsx";
import Prestadores from "./components/prestadores/Prestadores";
import Navbar from './components/navbar/Navbar';
import PracticasMedicas from './components/practicas-medicas/PracticasMedicas'

function App() {
    return (
        <div className="App">
            <div>
                <Navbar />
            </div>
            <div className='MainContainer'>
                <div>
                    <Especialidades />
                </div>
                <div>
                    <PracticasMedicas />
                </div>
                <div>
                    <Turnos />
                </div>
                <div>
                    <Pacientes />
                </div>
                <div>
                    <Prestadores />
                </div>
                
            </div>
        </div>
    );
}

export default App;
