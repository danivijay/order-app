<template>
  <v-app>
    <v-toolbar class="yellow darken-2">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer fixed app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Smart Order'
    }
  },
  name: 'App'
}
</script>
