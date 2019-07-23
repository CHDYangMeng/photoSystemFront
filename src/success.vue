<template>
  
  <div class="app-container">
    <!-- 顶部 -->
    <!-- <mt-header fixed title="testSystem"></mt-header> -->
    <mt-header fixed title="testPhoto">
      <mt-button slot="right">{{account}}</mt-button>
    </mt-header>
    <!-- 中部 -->
    <!-- 首页(tab1) -->
    <Swipe v-if="selected_tabber === 'tab1'"></Swipe>
    <grid v-if="selected_tabber === 'tab1'"></grid>

    <!-- 首页(tab2) -->
    <mt-navbar v-if="selected_tabber === 'tab2'" v-model="selected_navbar_2">
      <mt-tab-item id="1">场景识别</mt-tab-item>
      <mt-tab-item id="2">菜品识别</mt-tab-item>
      <mt-tab-item id="3">动物识别</mt-tab-item>
      <mt-tab-item id="4">植物识别</mt-tab-item>
      <mt-tab-item id="5">花卉识别</mt-tab-item>
      <mt-tab-item id="6">果蔬识别</mt-tab-item>
    </mt-navbar>
    <pageContent1 v-if="selected_tabber === 'tab2' && selected_navbar_2 === '1'"></pageContent1>
    <pageContent2 v-if="selected_tabber === 'tab2' && selected_navbar_2 === '2'"></pageContent2>
    <pageContent3 v-if="selected_tabber === 'tab2' && selected_navbar_2 === '3'"></pageContent3>
    <pageContent4 v-if="selected_tabber === 'tab2' && selected_navbar_2 === '4'"></pageContent4>
    <pageContent5 v-if="selected_tabber === 'tab2' && selected_navbar_2 === '5'"></pageContent5>
    <pageContent6 v-if="selected_tabber === 'tab2' && selected_navbar_2 === '6'"></pageContent6>
    
    <!--首页(tab3)  -->
    <mt-navbar v-if="selected_tabber === 'tab3'" v-model="selected_navbar_3">
      <mt-tab-item id="1">人脸检测</mt-tab-item>
      <mt-tab-item id="2">人脸对比</mt-tab-item>
      <mt-tab-item id="3">人脸融合</mt-tab-item>
    </mt-navbar>
    <human1 v-if="selected_tabber === 'tab3' && selected_navbar_3 === '1'"></human1>
    <human2 v-if="selected_tabber === 'tab3' && selected_navbar_3 === '2'"></human2>
    <human3 v-if="selected_tabber === 'tab3' && selected_navbar_3 === '3'"></human3>


    <!-- 首页(tab4) -->
    <personContent v-if="selected_tabber === 'tab4'"></personContent>
    <!-- 底部 -->
    <mt-tabbar class="mt-tabbar" v-model="selected_tabber" fixed>
      <mt-tab-item id="tab1">
        <img slot="icon" src="./images/系统介绍.png">首页
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="./images/物品识别.png">物品识别
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="./images/人脸识别.png">人脸识别
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" src="./images/空间.png">空间
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Swipe from './Components/sampleComponent/Swipe.vue'
import grid from './Components/sampleComponent/grid.vue'
import pageContent1 from './Components/goodsComponent/pageContent1.vue'
import pageContent2 from './Components/goodsComponent/pageContent2.vue'
import pageContent3 from './Components/goodsComponent/pageContent3.vue'
import pageContent4 from './Components/goodsComponent/pageContent4.vue'
import pageContent5 from './Components/goodsComponent/pageContent5.vue'
import pageContent6 from './Components/goodsComponent/pageContent6.vue'

import human1 from './Components/personComponent/human1.vue'
import human2 from './Components/personComponent/human2.vue'
import human3 from './Components/personComponent/human3.vue'

import personContent from './Components/sampleComponent/personContent.vue'

export default {
  data() {
    return {
      account: sessionStorage.getItem("account"),
      selected_tabber: 'tab1',
      selected_navbar_2: '1',
      selected_navbar_3: '1'
    }
  },
  
  methods: {
    
  },
  components: {
    'Swipe': Swipe,
    'grid': grid,
    'pageContent1': pageContent1,
    'pageContent2': pageContent2,
    'pageContent3': pageContent3,
    'pageContent4': pageContent4,
    'pageContent5': pageContent5,
    'pageContent6': pageContent6,

    'human1': human1,
    'human2': human2,
    'human3': human3,

    'personContent': personContent,
  }
  
}
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  margin: 0px,10px,1.5px,1.5px;
  padding-bottom: 55px;
}
</style>
