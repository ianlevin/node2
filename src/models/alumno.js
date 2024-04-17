class Alumno {
    constructor (username, DNI, edad) {
      this.username = username;
      this.DNI = DNI;
      this.edad = edad;
    }

    getNombre(){
      return this.username
    }
    getDNI(){
      return this.DNI
    }
    getEdad(){
      return this.edad
    }
    toString() {
        return(`Nombre del alumno: '${this.username}' DNI: '${this.DNI}' Edad: '${this.edad}'`);
    }
}
export default Alumno

