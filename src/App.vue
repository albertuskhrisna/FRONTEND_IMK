<template>
  <v-app>
    <span class="bg"></span>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'app',
}
</script>
<style>
.bg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    transform: scale(1.1);
  }
</style>