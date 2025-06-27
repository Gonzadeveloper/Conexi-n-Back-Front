import { useEffect,useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/names") 
      .then(res => setNames(res.data))
      .catch(err => console.error("Error al traer nombres", err));
  }, []);

  const handleAdd = async () => {
    if (!newName.trim()) return;
    try {
      await axios.post("http://localhost:3001/names", { name: newName });
      const res = await axios.get("http://localhost:3001/names");
      setNames(res.data);
      setNewName("");
    } catch (err) {
      console.error("Error al agregar nombre", err);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Lista de Nombres</h2>
        <ul>
          {Array.isArray(names) &&
            names.map((nombre, i) => (
              <li key={nombre?.id ?? i}>{nombre?.name ?? "Sin nombre"}</li>
            ))}
        </ul>
        <div className="flex gap-2">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="flex-1 border px-4 py-2 rounded"
            placeholder="Agregar nuevo nombre"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Agregar
          </button>
        </div>
      </div>
    </>
  )
}

export default App
