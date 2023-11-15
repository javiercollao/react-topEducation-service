import React from 'react'

export default function FormularioNotas() {
  return (
    <div>
        <div class="modal-dialog"> 
        <div class="py-5"> 
            <div class="modal-body">
                    <div class="row">
                    <div class="col-sm-6">
                        <label for="nombre" class="form-label">Documento Excel</label>
                        <input type="file"  class="form-control" id="nombre" placeholder="" value="" required=".xlsx"  />
                        <div class="invalid-feedback">
                        Requerido
                        </div>
                    </div>
                    </div>
            </div>
            <div class="modal-footer"> 
            <button type="submit" class="btn btn-primary">Guardar</button>
            </div>
        </div>
        </div> 
    </div>
  )
}
