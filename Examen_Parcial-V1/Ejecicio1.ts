// Ejercicio 1: Simulaciòn del event loop

// Tarea macro y mini
// TIpos avanzados (uniòn, intersecciòn)
// Types (pick, partial omit readonly)
// Interfaces tipos de funciones
// Genericos
// POO herencia polimorfismo abstraccion y encapsulamiento
// Manejo de null y undefined con narrowing


// Looper para el manejo de duraciòn de las tareas
class Event_Looper {
    constructor() {
        this.microtareas = [];
        this.macrotareas = [];
        this.inicio_loop();
    }

    Inicio_Loop() {
        const loop = () => {
            const actual = Date.now();
            this.microtareas.forEach((tarea, index) => {
                this.macrotareas.foreach((tarea,index) =>{
                    if (actual >= tarea.ejecucion) {
                        tarea.funcion();
                        this.tareas.splice(index, 1);
                    }
                })
            });
            setImmediate(loop); // Ejecuciòn del loop
        };
        loop();
    }

    setTimeout(funcion, tiempo) {
        this.microtareas.push({
            ejecucion: Date.now() + tiempo,
            funcion
        });
    }

    setInterval(funcion, tiempo) {
        const intervalo = () => {
            funcion();
            this.setTimeout(intervalo, tiempo);
        };
        return this.setTimeout(intervalo, tiempo);
    }
};