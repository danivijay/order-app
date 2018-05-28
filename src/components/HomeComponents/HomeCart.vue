<template>
  <v-card>
    <v-card-title class="yellow darken-2">
      <h3>Your Cart</h3>
    </v-card-title>
    <v-divider></v-divider>
    <v-layout class="mt-2 mb-2" v-for="(item, index) in getAdded" :key="index">
      <v-flex xs7 class="pl-2" v-if="item.value > 0">
        {{ item.name }}
      </v-flex>
      <v-flex xs2 class="text-xs-right" v-if="item.value > 0">
        x {{ item.value }}
      </v-flex>
      <v-flex xs3 class="text-xs-right pr-2" v-if="item.value > 0">
        {{ getPrice(item.name) * item.value }}
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout class="mt-2 mb-2">
      <v-flex xs8 class="pl-2 body-2">
        Total
      </v-flex>
      <v-flex xs4 class="text-xs-right pr-2 body-2">
        {{ getTotal }}
      </v-flex>
    </v-layout>
    <v-card-actions>
      <v-btn color="error">Clear</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="success">Checkout</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    getAdded() {
      return this.added = this.$store.getters.getAdded
    },
    getTotal() {
      let added = this.$store.getters.getAdded
      let sum = 0
      for (let i of added) {
        //console.log(i.value)
        sum += i.value * this.getPrice(i.name)
      }
      return sum
    }
  },
  methods: {
    getPrice(name) {
      let items = this.$store.getters.getItems
      let item = items.filter(x => x.name == name)
      // console.log(name, item)
      return item[0].price
    }
  }
}
</script>

<style scoped>

</style>
