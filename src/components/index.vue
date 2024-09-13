<template>
  <el-row :gutter="20">
    <el-card class="box-card">
      <div class="demo-basic--circle">
        <div class="block">
          <el-avatar :size="150" :src="avatar"></el-avatar>
        </div>
      </div>
      <h1>短视频/图集在线去水印解析</h1>
      <div class="typo">
        <p><strong>本站公告</strong> 解析失败请留言<b><a href="https://weibo.com/u/5754568288" target="_blank" rel="nofollow"> 留言反馈 </a></b></p>
        <p><strong>目前支持 </strong>皮皮虾/抖音/微视/快手/哔哩哔哩/微博/等等80多个平台</p>
        <p><strong>温馨提示 </strong>粘贴视频地址时<u>无需删除文案</u><small> 但如果视频链接正确但解析失败请删掉文案后重试</small></p>
      </div>
      <hr>
      <div class="main" v-loading="loading">
        <div class="grid-content">
          <el-input placeholder="请粘贴分享链接" v-model="input" id="url" class="input-with-select">
            <el-button slot="append" @click="onSubmit">解析</el-button>
          </el-input>
        </div>
        <div class="download" v-if="seen">
          <h4>{{ info.title }}</h4>
          <a :href="info.cover" target="_blank"><el-button plain>下载封面</el-button></a>
          <a v-if="info.video" :href="info.video" target="_blank"><el-button plain>下载视频</el-button></a>
          <a v-if="info.music && info.music.url" :href="info.music.url" target="_blank"><el-button plain>下载音乐</el-button></a>
        </div>
        <div class="waterfall" v-if="iseen">
          <div class="item" v-for="url in images_url" :key="url">
            <el-image :src="url" :preview-src-list="images_url"></el-image>
          </div>
        </div>
        <div class="link-list" v-if="linkList.length > 0">
          <h4>视频或图文链接：</h4>
          <h5>除抖音快手两个平台其他平台预览跳转下载可能有点问题</h5>
          <h5>如果视频跳转下载失败的话则点击链接用浏览器打开就可以下载</h5>
          <ul>
            <li v-for="(link, index) in linkList" :key="index">
              <el-button @click="copyLink(link)" plain>{{ link }}</el-button>
            </li>
          </ul>
        </div>
      </div>
    </el-card>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      info: {},
      input: '',
      select: '',
      music: false,
      seen: false,
      iseen: false,
      loading: false,
      avatar: "https://men.chatcm.top/1.png",
      images_url: [],
      linkList: [], // 用于存储不符合条件的链接
    }
  },
  methods: {
    // 复制链接到剪贴板
    copyLink(link) {
      const textarea = document.createElement('textarea');
      textarea.value = link;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      this.$notify({
        title: '复制成功',
        message: '链接已复制到剪贴板',
        type: 'success',
      });
    },
    // 提交解析请求
    onSubmit() {
      this.seen = false; // 重置视频信息显示状态
      this.iseen = false; // 重置图集显示状态
      this.loading = true; // 显示加载状态
      this.linkList = []; // 重置链接列表

      const urlMatch = /(https?|http):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.exec(this.input);
      if (!urlMatch) {
        this.loading = false;
        this.$notify.error({
          title: '解析失败',
          message: '请输入有效链接'
        });
        return;
      }

      const url = urlMatch[0]; // 提取有效链接

      this.axios.get('https://api.chatcm.top/muchuan.php?url=' + encodeURIComponent(url)).then((res) => {
        this.loading = false; // 隐藏加载状态
        if (res.data.code === 200) {
          this.info = res.data.data; // 存储视频信息，包括 title, cover, 等等
          this.images_url = res.data.data.images || []; // 提取图片数组 (如果有的话)

          // 检查图片或视频链接
          this.checkLinks(this.info.video, this.images_url);

          if (this.info.video) {
            this.seen = true; // 显示视频信息
            this.$notify.success({
              title: '解析成功',
              message: '请及时下载视频'
            });
          } else if (this.images_url.length > 0) {
            this.iseen = true; // 显示图集
            this.$notify.success({
              title: '解析成功',
              message: '图集暂不支持批量下载，请长按下载或右键另存为'
            });
          } else {
            this.$notify.error({
              title: '解析失败',
              message: '未找到相关视频或图集'
            });
          }
        } else {
          this.$notify.error({
            title: '解析失败',
            message: '视频不存在或接口失效'
          });
        }
      }).catch(() => {
        this.loading = false;
        this.$notify.error({
          title: '解析失败',
          message: '发生错误，请稍后重试'
        });
      });
    },
    // 检查链接是否符合指定域名要求
    checkLinks(video, images) {
      const videoDomains = ['yximgs.com', 'douyinpic.com'];

      if (video && !videoDomains.some(domain => video.includes(domain))) {
        this.linkList.push(video); // 添加不符合的链接
      }

      images.forEach(image => {
        if (!videoDomains.some(domain => image.includes(domain))) {
          this.linkList.push(image); // 添加不符合的链接
        }
      });
    }
  }
}
</script>

<style>
::selection {
  background: rgba(0,149,255,.1);
}

body:before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: .3;
  z-index: -1;
  content: "";
  position: fixed;
  background-image: linear-gradient(135deg, #CE9FFC 10%, #7367F0 100%);
}

.grid-content {
  margin-top: 1em;
  border-radius: 4px;
  min-height: 50px;
}

.el-select .el-input {
  width: 80px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

.box-card {
  margin-top: 4em !important;
  margin-bottom: 4em !important;
  opacity: .8;
}

@media screen and (max-width: 700px) {
  .box-card {
    margin-top: 1em !important;
    margin-bottom: 1em !important;
  }
}

.download h3 {
  margin-top: 2em;
}

.download button {
  margin-right: 0.5em;
  margin-left: 0.5em;
}

.waterfall {
  column-count: 3;
  column-gap: 1em;
}

.item {
  padding: 5px;
  break-inside: avoid;
}

.item img {
  width: 100%;
  margin-bottom: 10px;
}

.typo {
  text-align: left;
}

.typo a {
  color: #2c3e50;
  text-decoration: none;
}

hr {
  height: 10px;
  margin-bottom: .8em;
  border: none;
  border-bottom: 1px solid rgba(0,0,0,.12);
}

.link-list ul {
  list-style-type: none;
  padding: 0;
}

.link-list li {
  margin-bottom: 10px;
}
</style>
