<template>
  <div class="app-container">
    <mt-header fixed title="搜索">
      <router-link to="/success" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="search">
      <mt-search v-model="value"></mt-search>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
}
</style>