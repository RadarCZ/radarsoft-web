<template>
  <v-tooltip bottom>
    <v-card slot="activator" @click="cardAction(dataSource.site)" class="rad--stat-card" color="primary">
      <v-layout row fill-height justify-center align-center>
        <img :src="dataSource.icon" width="100px" height="100"/>
        <v-card-title primary-title>
          <div>
            <span class="headline">{{ $t(`stats.description.on`, [dataSource.site]) }}</span>
            <div class="rad--text-row">
              <span class="rad--stat-site-name">{{ $t(`stats.description.as`, [dataSource.name]) }}</span>
            </div>
            <div class="rad--text-row">
              <span class="rad--stat-name">{{ $t(`stats.${dataSource.site}.stat1`) }}:</span>
              &nbsp;{{ dataSource.stat1 }}
            </div>
            <div class="rad--text-row">
              <span class="rad--stat-name">{{ $t(`stats.${dataSource.site}.stat2`) }}:</span>
              &nbsp;{{ dataSource.stat2 }}
            </div>
          </div>
        </v-card-title>
      </v-layout>
    </v-card>
    {{ `${dataSource.site.charAt(0).toUpperCase()}${dataSource.site.slice(1)}` }} {{ $t('global.opensNewTab') }}
  </v-tooltip>
</template>

<style scoped>
  .rad--stat-name {
    font-weight: bold;
  }

  .rad--stat-site-name {
    font-size: 130%;
  }

  .headline {
    font-weight: bold;
  }

  .rad--stat-card {
    padding: 5px;
    margin: 5px;
    cursor: pointer;
  }
</style>

<script>
export default {
  name: 'stats-card',
  props: ['dataSource'],
  methods: {
    cardAction (dataSourceName) {
      switch (dataSourceName) {
        default:
          window.open(this.dataSource.targetUrl, '_blank')
      }
    }
  }
}
</script>
