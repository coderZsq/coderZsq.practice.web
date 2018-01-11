<template>
<div>
  <div class="subtitle">
    <h1>GitHub</h1>
  </div>
  <div class="github">
    <div class="github-block">
      <target name="coderZsq.project.oc" description="A lightweight and efficient application development tool set for iOS, and accelerating the developing speed." href="https://github.com/coderZsq/coderZsq.project.oc" color="#438eff" language="Objective-C"
          star="195"></target>
      <target name="coderZsq.target.swift" description="For advanced Swift development technology pre-research & ideas & practice. ( Focus areas: App )" href="https://github.com/coderZsq/coderZsq.target.swift" color="#ffac45" language="Swift" star="19"></target>
      <target name="coderZsq.webpack.js" description="For advanced JavaScript development technology pre-research & ideas & practice. ( Focus areas: Web )" href="https://github.com/coderZsq/coderZsq.webpack.js" color="#EFDF70" language="JavaScript" star="2"></target>
      <target name="coderZsq.maven.java" description="For advanced Java development technology pre-research & ideas & practice. ( Focus areas: Server )" href="https://github.com/coderZsq/coderZsq.maven.java" color="#A8732F" language="Java" star="0"></target>
      <target name="coderZsq.github.io" description="Technology blog, learn some new technologies and new knowledge, and write insights into the text." href="https://github.com/coderZsq/coderZsq.github.io" color="#D35636" language="HTML" star="0"></target>
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
  user-select: none;
}

.github {
  padding-top: 50px;
  padding-bottom: 30px;
  overflow: hidden;
  width: 700px;
  float: right;
  display: inline-block;
  user-select: none;
}

.github .github-block {
  width: inherit;
}
</style>
