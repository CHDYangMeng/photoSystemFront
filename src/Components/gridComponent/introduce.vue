<template>
  <div class="app-container">
    <mt-header fixed title="系统介绍">
      <router-link to="/success" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="center">
      <div class="title-container">
        <h4>系统简介</h4> 
      </div>
      <div class="file-container">
        <p>图片测试系统主要是对各类图片进行识别，并根据识别内容进行判断</p>
        <p>系统功能并不完整，需要进一步改进</p>
      </div>
    </div>

    <div class="center">
      <div class="file-container">
        <p>开发者：yang</p>
        <p>邮箱：603894673@qq.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  .center {
    height: 240px;
    .title-container {
      padding: 10px;
      margin: 10px;
      color: blue;
    }
    .file-container {
      text-align: center;
    }
  }
}
</style>
