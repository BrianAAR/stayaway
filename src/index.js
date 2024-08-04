import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Asegúrate de que este archivo existe y está correctamente vinculado.

const container = document.getElementById('root');
const root = createRoot(container);  // Asegúrate de que el contenedor 'root' exista en tu index.html.
root.render(<App />);
