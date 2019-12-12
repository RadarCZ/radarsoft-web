<template>
  <v-app>
    <v-toolbar app dense color="primary lighten-2">
      <v-toolbar-title>Radarsoft</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <rad-kofi-btn userId='D1D0WKOS'>
          {{ $t('global.ko-fi') }}
        </rad-kofi-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </v-content>

    <v-footer app>
      <v-layout align-center justify-center row>
        <v-tooltip top>
          <v-btn @click="window.open('https://vuejs.org', '_blank')" icon slot="activator">
            <v-icon>mdi-vuejs</v-icon>
          </v-btn>
          {{ $t('technology.vue') }}
        </v-tooltip>
        <v-divider inset vertical />
        <span class="footer--alone-link"><a href="https://vuetifyjs.com" target="_blank">Vuetify</a></span>
        <v-divider inset vertical />
        <v-tooltip top>
          <v-btn @click="window.open('https://nodejs.org', '_blank')" icon slot="activator">
            <v-icon>mdi-nodejs</v-icon>
          </v-btn>
          {{ $t('technology.node') }}
        </v-tooltip>
        <v-divider inset vertical />
        <span class="footer--alone-link"><a href="https://nginx.com" target="_blank">nginx</a></span>
        <v-divider inset vertical />
        <span class="footer--alone-link" v-if="window.location.protocol === 'https'"><a href="https://letsencrypt.org" target="_blank">Let's Encrypt</a>.</span>
        <v-divider inset vertical v-if="window.location.protocol === 'https'" />
        <v-tooltip top>
          <v-btn icon slot="activator" @click="window.open('https://www.raspberrypi.org/', 'blank')">
            <v-icon>mdi-raspberry-pi</v-icon>
          </v-btn>
          {{ $t('technology.host') }}
        </v-tooltip>
        <v-divider inset vertical/>
        <v-tooltip top>
          <v-btn icon slot="activator" @click="window.open('https://github.com/RadarCZ/radarsoft-web', '_blank')">
            <v-icon>mdi-github-circle</v-icon>
          </v-btn>
          {{ $t('technology.github') }}
        </v-tooltip>
        <v-divider inset vertical />
        <span class="footer--alone-link">&copy; {{ new Date().getFullYear() }}</span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<style scoped>
  .footer--alone-link{
    padding-left: 10px;
    padding-right: 10px;
  }
</style>

<script>
import RadKofiBtn from './components/rad-kofi-btn'
export default {
  name: 'App',
  data () {
    return {
      window: window
    }
  },
  components: {
    RadKofiBtn
  }
}
</script>
