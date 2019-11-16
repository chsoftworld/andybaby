<template>
  <div class="page has-navbar" v-nav="{ title: 'Home' }">
    <div class="page-content text-center">
      <h2 class="padding" v-text="msg"></h2>
      <router-link class="button button-assertive" to="/drawer">
        <i class="ion-information-circled"></i> About
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello! Vonic.'
      }
    }
  }
</script>
<style>
</style>
