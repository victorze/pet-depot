import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Form from "@/components/Form";
import Main from "@/components/Main";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "iMain",
    component: Home,
    props: true
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
    props: true,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
