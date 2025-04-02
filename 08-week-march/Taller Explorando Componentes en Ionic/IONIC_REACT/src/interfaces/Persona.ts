// src/interfaces/Persona.ts
export interface Persona {
    nombre: string;
    apellido: string;
    documento: string;
    fechaNacimiento: string;
    direccion: string;
    telefono: string;
    correo: string;
  }
  
  export interface Cliente extends Persona {
    tipoCliente: string;
    frecuenciaCompra: string;
    limiteCredito: number;
  }
  
  export interface Proveedor extends Persona {
    rubro: string;
    tipoProducto: string;
    diasEntrega: number;
  }
  
  export interface Estudiante extends Persona {
    carrera: string;
    semestre: number;
    promedio: number;
  }