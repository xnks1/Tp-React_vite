import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import DangerBar from '../DangerBar/DangerBar';


const DangerInput = () => {
  //variable q va guardar el valor elegido por el user
  const [value, setValue] = useState(0);

  //Se va a actualizar el valor elejido por el usuario cada vez que se cambie
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className="m-3 w-50">
      <h2>Ejemplo 1</h2>

      {/* Componente Padre */}
      <Form.Range value={value} onChange={handleChange} />

      {/* Componente Hijo */}
      <DangerBar value={value} />
    </div>
  );
};

export default DangerInput;
