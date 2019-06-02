<template>
  <v-tooltip bottom>
    <v-btn slot='activator' flat class="primary btn-container" @click="window.open(`https://ko-fi.com/${userId}`, '_blank')">
      <span class="kofitext">
        <img src="https://ko-fi.com/img/cuplogo.svg" class="kofiimg"><slot />
      </span>
    </v-btn>
    <span>{{ $t('global.ko-fi') }}</span>
  </v-tooltip>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');

img.kofiimg {
  display: initial !important;
  vertical-align: middle;
  height: 13px !important;
  width: 20px !important;
  padding-top: 0;
  padding-bottom: 0;
  border: none;
  margin-top: 0;
  margin-right: 5px;
  margin-left: 0;
  margin-bottom: 4px;
  content: url("https://ko-fi.com/img/cuplogo.svg");
}

.kofiimg:after {
  vertical-align: middle;
  height: 25px;
  padding-top: 0;
  padding-bottom: 0;
  border: none;
  margin-top: 0;
  margin-right: 6px;
  margin-left: 0;
  margin-bottom: 4px;
  content: url("https://ko-fi.com/img/whitelogo.svg");
}

.btn-container {
  display: inline-block !important;
  white-space: nowrap;
  min-width: 160px;
  font-family: 'Quicksand', Helvetica, Century Gothic, sans-serif !important;
  padding: 2px 11px !important;
  font-weight: 700 !important;
  font-size: 14px !important;
}

span.kofitext {
  letter-spacing: -0.15px !important;
  text-shadow: 0 1px 1px rgba(34, 34, 34, 0.3);
}
</style>

<script>
export default {
  name: 'rad-kofi-btn',
  props: ['userId'],
  data () {
    return {
      window: window
    }
  }
}
</script>
