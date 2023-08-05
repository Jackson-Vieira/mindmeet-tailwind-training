import Home from "@/views/LandingOne/index.vue";

export const routes = [
  {
    name: "Home",
    path: "/",
    component: Home
  }, 
  {
    name: "HomeTwo",
    path: "/home-two",
    component: () => import("@/views/LandingTwo/index.vue")
  },
  {
    name: "Spotify",
    path: "/spotify",
    component: () => import("@/views/Spotify/index.vue")
  },
  {
    name: "Conference",
    path: "/conference",
    component: () => import("@/views/Conference/index.vue")
  },
  {
    name: "HeroOne",
    path: "/hero-one",
    component: () => import("@/views/HeroOne/index.vue")
  }
]