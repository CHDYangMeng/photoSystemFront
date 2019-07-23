<template>
  <div class="app-container">
    <mt-header fixed title="更多">
      <router-link to="/success" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="center">
      <div class="title-container">
        <h4>技术支撑：</h4> 
      </div>
      <div class="file-container">
        <a href="https://cn.vuejs.org/">Vue</a>
        <p>Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。</p>
      </div>
    </div>

    <div class="center">
      <div class="file-container">
        <a href="https://mint-ui.github.io/#!/zh-cn">MintUI</a>
        <p>Mint UI 包含丰富的 CSS 和 JS 组件，能够满足日常的移动端开发需要。通过它，可以快速构建出风格统一的页面，提升开发效率。</p>
      </div>
    </div>

    <div class="center">
      <div class="file-container">
        <a href="http://dev.dcloud.net.cn/mui/">MUI</a>
        <p>鉴于之前的很多前端框架（特别是响应式布局的框架），UI控件看起来太像网页，没有原生感觉，因此追求原生UI感觉也是我们的重要目标</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
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