<template>
  <v-card>
    <v-list>
      <span  v-for="(item, i) in dishTypes" :key="i">
        <v-subheader class="yellow darken-2" :id="item.toLowerCase().replace(/[^A-Z0-9]/ig, '-')">
          {{ item }}
        </v-subheader>
        <v-list-tile v-for="(item, i) in selectItems(item)" :key="i">
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
            <v-btn icon ripple @click.prevent="addAdded(item.name, -1)">
              <v-icon color="error">remove</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-action>
            {{ getValue(item.name) }}
          </v-list-tile-action>
          <v-list-tile-action>
            <v-btn icon ripple @click.prevent="addAdded(item.name, 1)">
              <v-icon color="error">add</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-action>
            Rs.{{ getPrice(item.name) }}
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
    addAdded(name, value) {
      let payload = {
        name,
        value
      }
      this.$store.dispatch('addAdded', payload)
    },
    selectItems(type) {
      let items = this.$store.getters.getItems
      return items.filter(i => i.category == type)
    },
    getPrice(name) {
      let items = this.$store.getters.getItems
      let item = items.filter(x => x.name == name)
      // console.log(name, item)
      return item[0].price
    },
    getValue(name) {
      let added = this.$store.getters.getAdded
      let item = added.filter(x => x.name == name)
      if (item.length>0)
        return item[0].value
      return 0
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
