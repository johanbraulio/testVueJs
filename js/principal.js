var app = new Vue({
    el: '#app',
    data: {
        nombre:'',
        promedio:'',
        lista:[]
    },
    methods: {
        agregarNota: function(){
            estadoA = false;
            if(this.promedio >= 10.5)
                estadoA = true;

            if(this.nombre != "" && this.promedio != ""){
                this.lista.push({nombre: this.nombre, promedio: this.promedio, estado: estadoA});
                this.nombre = "";
                this.promedio = "";
            }else{
                alert("Ingrese el nombre y promedio del estudiante");
            }
        }
    }
})