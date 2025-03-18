import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchTasks } from "../hooks/useFetchTasks";

export const TaskForm = () => {
  const { taskId } = useParams(); // Obtener el taskId de la URL
  const navigate = useNavigate();
  const { createTask, getTask, handleUpdate } = useFetchTasks(); // Asegúrate de tener un hook para obtener la tarea por ID

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    completed: false,
  });

  useEffect(() => {
    if (taskId) {
      // Si estamos editando una tarea, obtenemos los datos de la tarea
      const fetchTask = async () => {
        try {
          const task = await getTask(Number(taskId)); // Suponiendo que getTask devuelve la tarea
          if (task) {
            setFormData({
              title: task.title,
              description: task.description,
              completed: task.completed,
            });
          }
        } catch (error) {
          console.error("Error al cargar la tarea:", error);
        }
      };
      fetchTask();
    }
  }, [taskId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (taskId) {
        // Si hay un taskId, actualizamos la tarea
        await handleUpdate(Number(taskId), formData); // Pasa formData para la actualización
      } else {
        // Si no hay taskId, creamos una nueva tarea
        await createTask(formData);
      }
      navigate("/"); // Redirige a la lista de tareas
    } catch (error) {
      console.error("Error al guardar la tarea", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{taskId ? "Editar Tarea" : "Nueva Tarea"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Título:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Descripción:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="completed"
            checked={formData.completed}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700">Completado</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          {taskId ? "Actualizar" : "Crear"}
        </button>
      </form>
    </div>
  );
};
