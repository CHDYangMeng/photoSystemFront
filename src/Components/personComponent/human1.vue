<template>
  <div class="app-center-container">
    <!-- 中部 -->
    <div class="center-top1">
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
    <div class="center-bottom1">
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
            prop="label"
            label="名称"
            width="70px"
            align="center">
          </el-table-column>
          <el-table-column
            prop="score"
            label="结果"
            width="100px"
            align="center">
          </el-table-column>
          <el-table-column
            prop="remark"
            label="备注"
            align="center"
            :show-overflow-tooltip="show_overflow">
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

      baike_info: {
        baike_url: '',
        description: ''
      },

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
      this.path = response.path;
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
      this.path = '';
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
        this.$http.post('http://124.70.208.2:9000/human1', {path: this.path}).then( result => {
          if (result.body.status == 200) {
            var respResult_1 = JSON.parse(result.body.response);
            var respResult_2 = respResult_1.result.face_list;
            var respResult_3 = respResult_2[0];
            console.log(respResult_3);
            var list1 = ["类型","性别","年龄","表情","人种","心情","颜值"];
            var list2 = [
              respResult_3.face_type.type,
              respResult_3.gender.type,
              respResult_3.age,
              respResult_3.expression.type,
              respResult_3.race.type,
              respResult_3.emotion.type,
              respResult_3.beauty
            ];
            var list3 = [
              "human: 真实人脸 cartoon: 卡通人脸",
              "male:男性 female:女性",
              "--",
              "none:不笑；smile:微笑；laugh:大笑",
              "yellow: 黄种人 white: 白种人 black:黑种人 arabs: 阿拉伯人",
              "angry:愤怒 disgust:厌恶 fear:恐惧 happy:高兴 sad:伤心 surprise:惊讶 neutral:无情绪",
              "美丑打分，范围0-100，越大表示越美"
            ]
            var respResult = [];
            for (let i = 0; i < list1.length; i++) {
              respResult.push({
                label: list1[i],
                score: list2[i],
                remark: list3[i]
              }) 
            }
            
            this.respResult = respResult;
          }
        })
      }
    },
  },
}
</script>

<style lang="scss" scope>
.app-center-container {
  .center-top1 {
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
  .center-bottom1 {
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
