import Home from "@/views/Home/index.vue";

export const routes = [
  {
    name: "Home",
    path: "/",
    component: Home
  }, 
  {
    name: "HomeTwo",
    path: "/home-two",
    component: () => import("@/views/HomeTwo/index.vue")
  },
  {
    name: "SpotifyClone",
    path: "/spotify-clone",
    component: () => import("@/views/Spotify/index.vue")
  },
  {
    name: "Conference",
    path: "/conference",
    component: () => import("@/views/Conference/index.vue")
  },
]