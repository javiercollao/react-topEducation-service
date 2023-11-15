import React, { useRef } from 'react';
import ExamenService from "./../service/ExamenService";

export default function FileInput() {
  const fileInput = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('archivo', fileInput.current.files[0]);
  
    try {
      const response = await ExamenService.postExamenes(formData);
  
      console.log('Exámenes creados:', response.data);
      // Realizar aquí cualquier lógica adicional después de enviar el archivo
    } catch (error) {
      console.error('Error al crear los exámenes:', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="py-3">
      <label>
        Upload file:
        <input type="file" ref={fileInput} />
      </label>
      <br />
      <button className="btn btn-primary my-3" type="submit">Submit</button>
    </form>
  );
}
