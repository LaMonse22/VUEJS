<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Transilva Hotel - Módulo de reservas</h1>
    <nav>
      <button>Consultar Reserva</button>
      <button v-on:click="agregarReserva">Agregar Reserva</button>
    </nav>
    <router-view> </router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import AgregarReserva from './components/AgregarReserva'

export default {
  name: 'App',
  components: {
    HelloWorld, AgregarReserva
  },
  methods:{
     agregarReserva: function() {
      if(this.$route.name != "agregar"){
       this.$router.push({ name: "agregar" });
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
