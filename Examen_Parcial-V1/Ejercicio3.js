// Ejecicio 3: Sistema de gestiòn de eventos con React y JS


// Importaciòn de los hooks a utilizar dentro del còdigo
import React, { useState, useCallback } from "react";
import { v4 as uuid } from "uuid"; /* Manejo organizado y enumerado mediante identificadores
para los eventos*/


// Definiciòn del componente app, y creaciòn de las funciones para el manejo interactivo con hooks
// Seteo de eventos predeterminados y agregando valores randoms.
const App = () => {
  const [eventos, setEvent] = useState([
    { id: "1", tittle: "Fiesta", description: "descripciòn", ubication:"Adress" },
    { id: "2", tittle: "Reunion", description: "descripciòn", ubication:"Adress" },
    { id: "3", tittle: "Clase", description: "descripciòn", ubication:"Adress" },
    { id: "4", tittle: "Salida", description: "descripciòn", ubication:"Adress" },
  ]);
// Los valores que contendran las variables tittle, description, etc. Se recibiran como texto
  const [text, setText] = useState("");  

  const handleTextInput = (e) => {
    setText(e.target.value);
  };

  // Funciòn flecha para el manejo de adiciòn de eventos dentro de nuestro listado ya existente
  // Concatena el el nuevo array de valores al array de eventos.

  const handleAddEvent = () => {
    setEvent(eventos.concat({ id: uuid(), tittle: text, description: text, ubication: text}));
  };

  /* Misma idea que la anterior para manejar el remove de eventos, usando callbacks obtener màs tarde
  el id del evento dentro del array */
  const handleRemoveEvent = useCallback(
    (id) => setEvent(eventos.filter((event) => event.id !== id)),
    [eventos]
  );

  const handleEditEvent = () => {

  };

  // Declaraciòn de botones para que el usuario interactue con la lògica de manejo de eventos.
  return (
    <div>
      <input type="text" value={text} onChange={handleTextInput} />
      <button type="button" onClick={handleAddEvent}>
        + Añadir un evento
      </button>
      <br></br>
      <button type="button" onClick={handleRemoveEvent}>
        + Remover un evento
      </button>
      <br></br>
      <button type="button" onClick={handleEditEvent}>
        + Editar un evento
      </button>

      <List list={eventos} onRemove={handleRemoveEvent} />
    </div>
  );
};

const List = React.memo(({ list, onRemove }) => {

  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
});

const ListItem = React.memo(({ item, onRemove }) => {
  
  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );
});

export default App;
