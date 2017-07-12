<template>
<div>
  <div class="subtitle">
    <h1>GitHub</h1>
  </div>
  <div class="github">
    <div class="github-block">
      <target name="coderZsq.project.oc" description="Use the SQExtension & SQTemplate to quickly build a project architecture, quickly use wheel components, and quickly integrate animated effects." href="https://github.com/coderZsq/coderZsq.project.oc" color="#438eff"
        language="Objective-C" star="113"></target>
      <target name="coderZsq.target.swift" description="Learn the advanced path of Swift Including Hybrid, RxSwift, Animations, SpriteKit, SceneKit, CoreData, LLDB, iOS, watchOS, tvOS etc." href="https://github.com/coderZsq/coderZsq.target.swift" color="#ffac45"
        language="Swift" star="4"></target>
      <target name="coderZsq.display.js" description="Through Vue.js to build a personal resume, hope that most companies to discuss cooperation." href="https://github.com/coderZsq/coderZsq.display.js" color="#f1e05a" language="JavaScript" star="0"></target>
      <target name="coderZsq.github.io" description="Through Hexo to build a personal blog, hoping to leave a good memory moments with you." href="https://github.com/coderZsq/coderZsq.github.io" color="#563D7C" language="CSS" star="1"></target>
    </div>
  </div>
</div>
</template>

<script>
import target from './target'
export default {
  data() {
    return {

    }
  },
  components: {
    target
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

.github {
  height: 600px;
  width: 700px;
  float: right;
  display: inline-block;
  position: relative;
}

.github .github-block {
  position: absolute;
  width: 700px;
  height: 500px;
  top: calc(50% - 250px);
}
</style>
