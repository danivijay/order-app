<template>
  <v-card>
    <v-list>
      <v-list-tile @click="onIndexClick" v-for="(item, i) in dishTypes" :key="i">
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
    onIndexClick() {
      console.log("clicked")
      // TODO:
    }
  },
  computed: {
    dishTypes() {
      let items = this.$store.state.items
      let setDish = new Set(items.map(i => i.category))
      return [...setDish]
    }
  }
}
</script>

<style>

</style>
