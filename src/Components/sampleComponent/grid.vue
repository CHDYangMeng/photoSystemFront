<template>
  <div>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/success/introduce">
        <img src="../../images/系统介绍.png" alt="系统介绍">
        <div class="mui-media-body">系统介绍</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/success/function">
        <img src="../../images/系统功能.png" alt="系统功能">
        <div class="mui-media-body">系统功能</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/success/start">
        <img src="../../images/快速入门.png" alt="快速入门">
        <div class="mui-media-body">快速入门</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/success/sampleTest">
        <img src="../../images/测试.png" alt="简单测试">
        <div class="mui-media-body">简单测试</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/success/search">
        <img src="../../images/搜索.png" alt="搜索">
        <div class="mui-media-body">搜索</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/success/more">
        <img src="../../images/更多.png" alt="更多">
        <div class="mui-media-body">更多</div></router-link></li>
    </ul> 
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

.mui-table-view.mui-grid-view.mui-grid-9 {
  background-color: #EFEFF4;
  margin-top: 20px;

  .mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
    border: 0;
    img {
      width: 60px;
      height: 60px;
    };
  }
}

</style>
