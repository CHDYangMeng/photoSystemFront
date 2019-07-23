<template>
  <div class="app-center-container">
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
            prop="name"
            label="名称"
            align="center">
          </el-table-column>
          <el-table-column
            prop="score"
            label="置信度"
            align="center">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>

import { Toast } from "mint-ui";
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
      toastInstanse_1: '',
      toastInstanse_2: '',

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
      return "http://localhost:9000/UploadFile"
    },
    success(response, file) {
      
      console.log(response.path);
      this.path = response.path;
      this.toastInstanse_1 = Toast({
          message: '上传图片成功',
          position: 'middle',
          duration: 1000
        });
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

      if (this.path == '') {
        this.toastInstanse_2 = Toast({
          message: '请上传图片',
          position: 'middle',
          duration: 1000
        });
      } else {
        this.$http.post('http://localhost:9000/pageComponent6', {path: this.path}).then( result => {
          if (result.body.status == 200) {
            var respResult_1 = JSON.parse(result.body.response);
            var respResult_2 = respResult_1.result;
            var respResult = [];
            console.log(respResult_2);
          
            for (let i = 0; i < respResult_2.length; i++) {
              respResult.push({
                "name": respResult_2[i].name,
                "score": respResult_2[i].score,
              })
            }
            this.respResult = respResult;
          }
        })
      }
      
    },
  }
}
</script>

<style lang="scss" scoped>
.app-center-container {
  .center-top {
    height: 240px;
    .title-container {
      padding: 5px;
      margin: 5px;
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
