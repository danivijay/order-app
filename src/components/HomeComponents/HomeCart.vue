<template>
  <v-card>
    <v-card-title class="yellow darken-2">
      <h3>Your Cart</h3>
    </v-card-title>
    <v-divider></v-divider>
    <v-layout class="mt-2 mb-2">
      <v-flex xs7 class="pl-2">
        ItemItemItemI temItem
      </v-flex>
      <v-flex xs2 class="text-xs-right">
        x 2
      </v-flex>
      <v-flex xs3 class="text-xs-right pr-2">
        Rs. 100
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout class="mt-2 mb-2">
      <v-flex xs8 class="pl-2 body-2">
        Total
      </v-flex>
      <v-flex xs4 class="text-xs-right pr-2 body-2">
        Rs. 200
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
  }
}
</script>

<style scoped>

</style>
