<template>
<div>
    <h2> Agregar Reserva</h2>
    <label for="nombre">Nombre</label>
    <input v-model="nombre" id="nombre" />
    <label for="id">Id</label>
    <input v-model="id" id="id" />
    <label for="fechai">Fecha de entrada</label>
    <input v-model="fechai" id="fechai" type="date" />
    <label for="fechaf">Fecha de salida</label>
    <input v-model="fechaf" id="fechaf" type="date" />
    <label for="habitacion">Tipo de habitación</label>
    <input v-model="habitacion" id="habitacion" />
    <br/><br/>
    <button v-on:click="agregarRsrv">Agregar</button>
</div>
    
</template>

<script>
import axios from 'axios'
export default {
    name: "AgregarReserva",
    data:function(){
        return{
            nombre:"",
            id:"",
            fechai:"",
            fechaf:"",
            habitacion:""
        }

        
    },
    methods:{
        agregarRsrv:function(){
           var rsrvJSON = {
                nombre: this.nombre,
                identificacion: this.id,
                fecha_inicial: this.fechai,
                fecha_final: this.fechaf,
                tipo_hab: this.habitacion
            }
            axios.post("http://127.0.0.1:8000/reserva/crear", rsrvJSON).then(respuesta=>{
                alert(respuesta.data.mensaje);
                this.id="";
                this.nombre="";
                this.fechai="",
                this.fechaf="",
                this.habitacion=""
                
            }).catch(error=>{
                alert("Error en la creación ")
            })

        }
    }

    
}
</script>

<style>

</style>