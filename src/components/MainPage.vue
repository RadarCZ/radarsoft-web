<template>
  <div>
    <div v-if="!dataLoaded">
      <v-progress-circular class="ret-center-absolute" color="primary" indeterminate/>
    </div>

    <div v-if="dataLoaded">
      <v-container grid-list-md text-xs-center>
        <h1>{{ $t('titles.about') }}</h1>
        <v-layout align-center justify-center row fill-height wrap>
          <v-flex v-for="stat of stats" md4 :key="stat.site">
            <stats-card class="px-1" :data-source="stat" />
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import StatsCard from './StatsCard.vue'

export default {
  name: 'main-page',
  data () {
    return {
      dataLoaded: false
    }
  },
  computed: {
    stats () {
      return [this.$store.state.githubUser, this.$store.state.gcUser]
    }
  },
  created () {
    const promises = []

    promises.push(this.$store.dispatch('reloadGithubUser', { username: 'RadarCZ' }))
    promises.push(this.$store.dispatch('reloadGeocachingUser', { username: 'czech.Radar' }))

    Promise.all(promises).then(() => {
      this.dataLoaded = true
    }).catch(console.error)
  },
  components: {
    StatsCard
  }
}
</script>

<style>

</style>
