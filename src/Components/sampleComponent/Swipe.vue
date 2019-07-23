<template>
  <div class="swipe-container">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../../images/swipe1.jpeg" alt="swipe1">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/swipe2.jpg" alt="swipe2">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/swipe3.jpg" alt="swipe3">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    img {
      width: 396px;
      height: 200px;
    }
  }
}
</style>
