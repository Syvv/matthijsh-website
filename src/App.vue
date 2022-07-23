<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-button"  to="/">Home</router-link>
      <router-link class="nav-button" to="/about-me">Profile</router-link>
      <router-link class="nav-button"  to="/football">Football</router-link>
    </div>
    <div class="page">
      <div class="status-bar">
        
      </div>
    <div class="content">
      <router-view/>
    </div>
      
    </div>
      
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss">
  @import "./assets/scss/index.scss";
</style>
