import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import FormularioCrearEstudiante from "./layout/FormularioCrearEstudiante";
import FormularioSubirNotas from "./layout/FormularioSubirNotas";
import VistaCuotas from "./layout/VistaCuotas";
import VistaPuntajes from "./layout/VistaPuntajes";
import VistaReporte from "./layout/VistaReporte";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/nuevo_estudiante" element={<FormularioCrearEstudiante />} />
                    <Route path="/subir_notas" element={<FormularioSubirNotas />} />
                    <Route path="/cuotas/:id" element={<VistaCuotas />} />
                    <Route path="/puntajes/:id" element={<VistaPuntajes />} />
                    <Route path="/reporte/:id" element={<VistaReporte />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;