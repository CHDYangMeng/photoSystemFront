<template>
  <div>
    <div id="container">
      <ul>
        <li v-for="(index,item) in list" :key="index">
          <img v-lazy.container="item">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: sessionStorage.getItem("account"),
      list: [],
    }
  }
}
</script>

<style lang="scss" scoped>
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
