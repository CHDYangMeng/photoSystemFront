<template>
  <div class="app-center-container">
    <!-- 中部 -->
    <div class="center-top2">
      <div class="title-container">
        <h4>请选择照片：</h4>
      </div>
      <div class="file-container">
        <el-upload
          class="uploader-demo"
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
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
      </div>
    </div>
    <!-- 底部 -->
    <div class="center-bottom2">
      <div class="title-container">
        <h4>判断图片相似度：</h4>
      </div>
      <div class="button-container">
        <el-button size="small" type="primary" @click="pictureTest">点击测试</el-button>
      </div>
      <div class="result-container">
        <h1>{{score}}</h1>
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
      number: 2,
      showFile: true,

      path: [],

      score: '相似度',

      dialogImageUrl: '',
      dialogVisible: false,

      show_overflow: true,

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
      return "http://124.70.208.2:9000/UploadFile"
    },
    success(response, file) {
      console.log(response.path);
      
      this.path.push(response.path);
      this.toastInstanse_1 = Toast({
        message: '上传图片成功',
        position: 'middle',
        duration: 1000
      });
    },
    error(response, file) {
      console.log(response);
      this.toastInstanse_1 = Toast({
        message: '图片已存在，上传图片失败',
        position: 'middle',
        duration: 1000
      });
    },
    handleRemove(file, fileList) {
      this.path = [];
    },
    handlePreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
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
        this.$http.post('http://124.70.208.2:9000/human2', {path1: this.path[0], path2: this.path[1]}).then( result => {
          if (result.body.status == 200) {
            var respResult_1 = JSON.parse(result.body.response);
            var respResult_2 = respResult_1.result;
            console.log(respResult_2);
            if (respResult_2 != null) {
              this.score = respResult_2.score;
            } else {
              this.score = "图片不相似";
            }
          }
        })
      }
    },
  },
}
</script>

<style lang="scss" scope>
.app-center-container {
  .center-top2 {
    height: 340px;
    .title-container {
      padding: 5px;
      margin: 5px;
      color: blue;
    }
    .file-container {
      text-align: center;
    }
  }
  .center-bottom2 {
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
