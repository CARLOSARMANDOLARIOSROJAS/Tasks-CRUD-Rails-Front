import { Link } from "react-router-dom";
import { Task } from "../interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


interface Props {
  task: Task;
  handleDelete: (id: number) => void;
}

export const TaskCard = (props: Props) => {
  const { task, handleDelete } = props;

  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
      <div className="flex items-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex-grow">{task.title}</h5>
        
        {/* Icono de completado o no completado */}
        {task.completed ? (
          <FontAwesomeIcon icon={faCheck} color="green"/>
        ) : (
          <FontAwesomeIcon icon={faTimes} color="red"/>
        )}
      </div>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{task.description}</p>
      
      <div className="flex gap-5">
        {/* Botón Editar con icono de lápiz */}
        <Link to={`/edit/${task.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 cursor-pointer">
          Editar
          <svg className="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-4.572a2.5 2.5 0 113.536 3.536L7.5 20.5l-4 1 1-4L16.732 3.732z" />
          </svg>
        </Link>

        {/* Botón Eliminar con icono de equis */}
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 cursor-pointer"
          onClick={() => task.id !== undefined && handleDelete(task.id)}
        >
          Eliminar
          <svg className="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};
