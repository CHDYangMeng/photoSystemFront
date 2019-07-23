<template>
  <div class="app-container">
    <mt-header fixed title="快速入门">
      <router-link to="/success" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
}
</style>