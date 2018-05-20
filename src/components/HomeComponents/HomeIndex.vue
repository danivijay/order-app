<template>
  <v-card>
    <v-list>
      <v-list-tile v-for="(item, i) in dishTypes" :key="i" @click="onIndexClick(item)">
        <v-list-tile-content>
          {{ item }}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      arr: ['All', 'Oriental', 'Chineese Combos', 'Salads']
    }
  },
  methods: {
    onIndexClick(id) {
      //console.log( '#' + id.toLowerCase().replace(/[^A-Z0-9]/ig, '-'))
      $vuetify.goTo('#' + id.toLowerCase().replace(/[^A-Z0-9]/ig, '-'))
    }
  },
  computed: {
    dishTypes() {
      let items = this.$store.getters.getItems
      let setDish = new Set(items.map(i => i.category))
      return [...setDish]
    }
  }
}
</script>

<style>

</style>
