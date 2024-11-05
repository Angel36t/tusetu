import Sidebar from "../sidebar/Sidebar";


function Dashboard({ section }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar con menú */}
      <Sidebar />

      {/* Contenido principal */}
      <div className="w-[85%] p-8 ">
        {section} {/* Renderiza la sección dinámica pasada como prop */}
      </div>
    </div>
  );
}

export default Dashboard;
