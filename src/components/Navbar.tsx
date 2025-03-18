import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-5 p-3 bg-black">
      <h2 className="font-bold text-center mb-5 sm:mb-0 text-4xl text-white">
        Tasks with Rails API
      </h2>
      <Link to="/new-task" className="text-white cursor-pointer font-black p-3 border hover:bg-white hover:text-black">New Task</Link>

    </div>
  );
};