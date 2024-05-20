import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Landing from "./views/Landing.vue";
import Sascha from "./views/Profiles/Sascha.vue";
import Luca from "./views/Profiles/Luca.vue";
import Projekte from "./views/Projekte.vue";
import Filesearcher from "./views/Projekte/Filesearcher.vue";
import Gravitybird from "./views/Projekte/Gravity-Bird.vue";
import Realmdash from "./views/Projekte/Realm-Dash.vue";
import Impressum from "./views/Impressum.vue";
import Datenschutz from "./views/Datenschutz.vue";
import AGB from "./views/AGB.vue";
import { BIconArrowRightShort, BIconArrowsAngleExpand } from "bootstrap-vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/sascha-dolgow",
      name: "sascha-dolgow",
      components: {
        header: AppHeader,
        default: Sascha,
        footer: AppFooter
      }
    },
    {
      path: "/luca-kohls",
      name: "luca-kohls",
      components: {
        header: AppHeader,
        default: Luca,
        footer: AppFooter
      }
    },
    {
      path: "/projekte",
      name: "projekte",
      components: {
        header: AppHeader,
        default: Projekte,
        footer: AppFooter
      }
    },
    {
      path: "/projekte/filesearcher",
      name: "filesearcher",
      components: {
        header: AppHeader,
        default: Filesearcher,
        footer: AppFooter
      }
    },
    {
      path: "/projekte/games/gravity-bird",
      name: "gravity-bird",
      components: {
        header: AppHeader,
        default: Gravitybird,
        footer: AppFooter
      }
    },
    // {
    //   path: "/projekte/games/realm-dash",
    //   name: "realm-dash",
    //   components: {
    //     header: AppHeader,
    //     default: Realmdash,
    //     footer: AppFooter
    //   }
    // },
    {
      path: "/impressum",
      name: "impressum",
      components: {
        header: AppHeader,
        default: Impressum,
        footer: AppFooter
      }
    },
    {
      path: "/datenschutz",
      name: "datenschutz",
      components: {
        header: AppHeader,
        default: Datenschutz,
        footer: AppFooter
      }
    },
    {
      path: "/agb",
      name:"agb",
      components: {
        header: AppHeader,
        default: AGB,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
