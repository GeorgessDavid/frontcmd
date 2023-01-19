import './App.css';
import './components/Metrica.css';
import Especialidades from "./components/Especialidades.jsx";
import Turnos from "./components/Turnos.jsx";
import Pacientes from "./components/Pacientes.jsx";

function App() {
  return (
    <div className="App">
        <div>
            <Especialidades />
        </div>
        <div>
            <Turnos />
        </div>
        <div>
            <Pacientes />
        </div>
    </div>
  );
}

export default App;
