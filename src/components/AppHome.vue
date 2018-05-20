<template>
  <v-container fluid>
    <v-layout row wrap class="pl-2">
      <v-flex xs12 md3>
        <home-index />
      </v-flex>
      <v-flex xs12 md6 class="pl-2">
        <home-menu />
      </v-flex>
      <v-flex xs12 md3 class="pl-2">
        <home-cart />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HomeIndex from '@/components/HomeComponents/HomeIndex'
import HomeMenu from '@/components/HomeComponents/HomeMenu'
import HomeCart from '@/components/HomeComponents/HomeCart'

export default {
  components: {HomeIndex, HomeMenu, HomeCart},
  data() {
    return {

    }
  },
  computed: {
    items() {
      return this.$store.state.items
    }
  }
}
</script>

<style>

</style>

