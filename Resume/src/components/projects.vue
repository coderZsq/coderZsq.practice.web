<template>
<div>
  <div class="subtitle">
    <h1>Projects</h1>
  </div>
  <div class="projects">
    <div class="projects-block">
      <project src="http://upload-images.jianshu.io/upload_images/1229762-e41470fb14d50dd0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" href="https://itunes.apple.com/us/app/%E5%81%A5%E4%B8%80%E7%BD%91-%E5%8D%8E%E6%B6%A6%E6%97%97%E4%B8%8B%E7%BD%91%E4%B8%8A%E8%8D%AF%E5%BA%97/id910027998?mt=8"
        name="J1 Mall" description="China Resources's online pharmacy" text1="Developed by J1 iOS team" text2="Developing version 3.8.5" text3="Enterprise main project"></project>
      <project src="http://upload-images.jianshu.io/upload_images/1229762-895d58180c1893e9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" href="https://itunes.apple.com/us/app/%E5%81%A5%E4%B8%80%E5%81%A5%E5%BA%B7/id994784918?mt=8" name="J1 Health"
        description="Professional patient consultation platform" text1="Developed by J1 iOS team" text2="Developing version 3.1.0" text3="Enterprise self-operated project"></project>
      <project src="http://upload-images.jianshu.io/upload_images/1229762-2aa0ac79354150f4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" href="https://itunes.apple.com/cn/app/hua-run-tong/id1175972491?mt=8" name="HuaRun Tong" description="China Resources Integrated business platform"
        text1="Developed by J1 & CR Network" text2="Developing version 1.6.1" text3="Cooperation project with CR Network"></project>
      <project src="http://upload-images.jianshu.io/upload_images/1229762-f819fb27af63f404.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" href="https://itunes.apple.com/us/app/%E6%B9%96%E5%B7%9E%E4%B8%AD%E5%BF%83%E5%8C%BB%E9%99%A2-%E4%B8%93%E4%B8%9A%E7%89%88/id1098112284?mt=8"
        name="HuZhou Hospital" description="Simplify patient treatment and time" text1="Developed by J1 iOS team" text2="Developing version 1.0.0" text3="Outsourcing project"></project>
    </div>
  </div>
</div>
</div>
</template>

<script>
import project from './project'

export default {
  data() {
    return {

    }
  },
  components: {
    project
  }
}
</script>

<style scoped>
.subtitle {
  margin-top: 50px;
  width: 300px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  display: inline-block;
  color: #444;
}

.projects {
  height: 600px;
  width: 700px;
  float: right;
  display: inline-block;
  position: relative;
}

.projects .projects-block {
  position: absolute;
  width: 700px;
  height: 500px;
  top: calc(50% - 250px);
}
</style>
