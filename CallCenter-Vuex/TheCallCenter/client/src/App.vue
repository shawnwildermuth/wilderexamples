<template>
  <div id="app">
    <div id="theWarning" class="alert alert-warning" v-if="error">{{ error }}</div>
    <router-view />
  </div>
</template>
<script>
  //import CallHub from "./callHub";
  import { mapState } from "vuex";
  import store from "./store";
  export default {
    store,
    computed: mapState(["error"]),
    //mounted() {
    //  CallHub.client.on("new-call", call => {
    //    this.$store.commit("addCall", call);
    //  });
    //  CallHub.start();
    //}
  }
</script>
