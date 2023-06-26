const mongoose = require("mongoose");

const visitacliSchema = mongoose.Schema({
  fechaquevisito: {
    type: String,
    required: true,
  },
  tecnico: {
    type: String,
    required: true
  },
  personaresponsable: {
    type: String,
    required: true
  },
  departamento: {
    type: String,
    required: true
  },
  motivodevisita: {
    type: String,
    required: true
  },
  nocontrato: {
    type: String,
    required: false
  },
  costo: {
    type: String,
    required: true
  },
  resultadovisita: {
    type: String,
    required: false
  },
  observacionescliente: {
    type: String,
    required: true
  },
  horallegada: {
    type: String,
    required: true
  },
  horasalida: {
    type: String,
    required: true
  },
  fechaplanificada: {
    type: String,
    required: true
  }
  
  
});

module.exports = mongoose.model('Visitacli', visitacliSchema);