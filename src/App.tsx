import './App.css';
import { Navbar } from './components/Navbar';
import { Task } from './components/Task';
import { TaskForm } from './components/TaskForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Task />} /> {/* Muestra todas las tareas */}
        <Route path="/new-task" element={<TaskForm />} /> {/* Ruta para crear una tarea */}
        <Route path="/edit/:taskId" element={<TaskForm />} /> {/* Ruta para editar una tarea */}
      </Routes>
    </Router>
  );
}

export default App;
