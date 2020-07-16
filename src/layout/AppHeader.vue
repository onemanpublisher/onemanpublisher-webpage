<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/logo.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="/">
                        <img src="img/brand/logo_small.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <a slot="title" href="/" class="nav-link" role="button">
                    <i class="ni ni-ui-04 d-lg-none"></i>
                    <span class="nav-link-inner--text">{{ $t('header_home') }}</span>
                </a>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="/#/projekte" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">{{ $t('header_projekte') }}</span>
                    </a>
                    <!-- <router-link to="/projekte/games/realm-dash" class="dropdown-item">Realm Dash</router-link> -->
                    <router-link to="/projekte/games/gravity-bird" class="dropdown-item">{{ $t('header_projekte_1') }}</router-link>
                    <router-link to="/projekte/filesearcher" class="dropdown-item">{{ $t('header_projekte_2') }}</router-link>
                    <router-link to="/projekte/julis-sh/openslides" class="dropdown-item">{{ $t('header_projekte_3') }}</router-link>
                    <router-link to="/projekte/julis-sh/internessystem" class="dropdown-item">{{ $t('header_projekte_4') }}</router-link>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">{{ $t('header_team') }}</span>
                    </a>
                    <router-link to="/Sascha-Dolgow" class="dropdown-item">{{ $t('header_team_1') }}</router-link>
                    <router-link to="/Luca-Kohls" class="dropdown-item">{{ $t('header_team_2') }}</router-link>
                    <router-link to="/Baris-Avci" class="dropdown-item">{{ $t('header_team_3') }}</router-link>
                </base-dropdown>
                <a slot="title" href="/#/impressum" class="nav-link" data-toggle="dropdown" role="button">
                    <i class="ni ni-collection d-lg-none"></i>
                    <span class="nav-link-inner--text">{{ $t('header_impressum') }}</span>
                </a>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <div>
                    <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
                        <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
                    </button>
                </div>

                <!-- <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li> -->
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import i18n from '@/plugins/i18n';

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  data() {
      return {
          languages: [
              { flag: 'de', language: 'ger', title: 'German' },
              { flag: 'us', language: 'en', title: 'English' }
          ]
      };
  },
  methods: {
      changeLocale(locale) {
          i18n.locale = locale;
      }
  }
};
</script>
<style>
button {
    padding: 15px;
    border: 1px solid transparent;
    font-size: 18px;
    margin: 15px;
    background: transparent;
    color: white;
}
</style>
