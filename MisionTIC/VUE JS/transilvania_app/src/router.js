import VueRouter from "vue-router";
import AgregarReserva from "./components/AgregarReserva";


const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "agregar",
      path: "/agregar",
      component: AgregarReserva
    }
  ]
});

export default router;