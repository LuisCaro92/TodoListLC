import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function App() {
  const eliminar = <FontAwesomeIcon icon={faTrashCan} />;
  const [inputValue, setInputValue] = useState("");
  const [tareas, setTareas] = useState([]);

  return (
    <div className=" cuerpo d-flex justify-content-center mt-5 ">
      <div className="card" style={{ width: 800 }}>
        <h1 style={{textAlign: "center"}}>LISTA DE TAREAS</h1>
        <input
          type="text"
          placeholder="Agregar tareas"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setTareas(tareas.concat(inputValue));
              setInputValue("");
            }
          }}
        />
        <ul className="list-group list-group-flush borde">
          {tareas.map((item, index) => (
            <li className="lista list-group-item d-flex justify-content-between">
              <p>
                {item}
                {""}
              </p>
              <button
                className='btn-delete '
                onClick={()=> setTareas(tareas.filter((t, currentIndex)=> index != currentIndex))}>{eliminar}</button>
               </li>
          ))}
        </ul>
        <div class="card-footer"> <p>{tareas.length} Tareas pendientes</p></div>
      </div>
    </div>
  );
}

export default App;
