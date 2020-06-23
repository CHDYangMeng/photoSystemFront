<template>
  <div class="app-container">
    <!-- 顶部 -->
    <mt-header fixed title="简单测试">
      <router-link to="/success" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right">{{author.authorName}}</mt-button>
    </mt-header>

    <!-- 中部 -->
    <div class="center-top">
      <div class="title-container">
        <h4>请选择照片：</h4>
      </div>
      <div class="file-container">
        <el-upload
          class="upload-demo"
          :action="upload()"
          :show-file-list="showFile"
          :data="author"
          :on-success="success"
          :on-error="error"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-upload="beforeAvatarUpload"
          :file-list="fileList"
          :limit="number"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
      
    </div>
    <!-- 底部 -->
    <div class="center-bottom">
      <div class="title-container">
        <h4>判断图片类别：</h4>
      </div>
      <div class="button-container">
        <el-button size="small" type="primary" @click="pictureTest">点击测试</el-button>
      </div>
      <div class="result-container">
        <el-table
        :data="respResult">
          <el-table-column 
          v-for="(col,index) in cols" 
          :key="index"
          :property="col.prop" 
          :label="col.label"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: {
        authorName: sessionStorage.getItem("account")
      },
      fileList: [],
      number: 1,
      showFile: true,

      path: '',
      respResult: [],
      cols: [],
    }
  },
  created() {
    if (sessionStorage.length == 0) {
      this.$router.push('/');
    } else if (sessionStorage.getItem('account') == '') {
      this.$router.push('/');
    }
  },
  methods: {
    upload() {
      return "http://124.70.208.2:9000/UploadFile"
    },
    success(response, file) {
      
      console.log(response.path);
      this.path = response.path;
    },
    error(response, file) {

      console.log(response);
    },
    handleRemove(file, fileList) {
      this.path = '';
    },
    handlePreview(file) {

    },
    beforeAvatarUpload(file) {
      var fileName = new Array();
      fileName = file.name.split('.');
      const extension = fileName[fileName.length-1] === 'jpg';
      const extension2 =  fileName[fileName.length-1]=== 'png';
      if (!extension && !extension2) {
        
      }
      return extension || extension2;
    },

    pictureTest() {
      this.$http.post('http://124.70.208.2:9000/pictureTest', {path: this.path}).then( result => {
        if (result.body.status == 200) {
          var respResult_1 = JSON.parse(result.body.response);
          var respResult_2 = respResult_1.result;
          var cols = [];
          console.log(respResult_1.result);
          for (var key in respResult_2[0]) {
            cols.push({
              prop: key,
              label: key,
            })
          };
          console.log(cols);
          this.respResult = respResult_2;
          this.cols = cols;
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 55px;
  .center-top {
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
  .center-bottom {
    .title-container {
      padding: 5px;
      margin: 5px;
      color: blue;
    }
    .button-container {
      text-align: center;
      padding: 10px;
      margin: 10px,10px,10px,10px;
    }
    .result-container{
      text-align: center;
      color: red;
      padding: 10px;
      margin: 10px,10px,10px,10px;
    }
  } 
}
</style>