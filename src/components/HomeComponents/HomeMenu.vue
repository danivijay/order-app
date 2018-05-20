<template>
  <v-card>
    <v-list>
      <span  v-for="(item, i) in dishTypes" :key="i">
        <v-subheader class="yellow darken-2" :id="item.toLowerCase().replace(/[^A-Z0-9]/ig, '-')">
          {{ item }}
        </v-subheader>
        <v-list-tile @click="onIndexClick" v-for="(item, i) in selectItems(item)" :key="i">
          <v-list-tile-content>
            <v-list-tile-title>
              <v-icon v-if="item.vegflag == 'nonveg'" color="red" >brightness_1</v-icon>
              <v-icon v-if="item.vegflag == 'veg'" color="green" >brightness_1</v-icon>
              {{ item.name }}
            </v-list-tile-title>
            <v-list-tile-sub-title v-if="item.description !== null" class="pl-4">
              {{ item.description }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon color="error">remove</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-action>
            2
          </v-list-tile-action>
          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon color="error">add</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-action>
            100
          </v-list-tile-action>
      </v-list-tile>
      </span>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    onIndexClick() {
      console.log("clicked")
      // TODO:
    },
    selectItems(type) {
      let items = this.$store.getters.getItems
      //console.log(items)
      return items.filter(i => i.category == type)
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
