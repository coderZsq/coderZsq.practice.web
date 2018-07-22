<template>
<div>
  <div class="subtitle">
    <h1>GitHub</h1>
  </div>
  <div class="github">
    <div class="github-block">
      <target name="coderZsq.project.ios" description="A lightweight and efficient application development tool set for iOS, and accelerating the developing speed." href="https://github.com/coderZsq/coderZsq.project.ios" color="#438eff" language="Objective-C"
          star="291"></target>
      <target name="coderZsq.practice.native" description="For advanced mobile-end development technology pre-research & ideas & practice. ( Focus areas: Native )" href="https://github.com/coderZsq/coderZsq.practice.native" color="#ffac45" language="Swift" star="45"></target>
      <target name="coderZsq.practice.web" description="For advanced front-end development technology pre-research & ideas & practice. ( Focus areas: Web )" href="https://github.com/coderZsq/coderZsq.practice.web" color="#EFDF70" language="JavaScript" star="5"></target>
      <target name="coderZsq.practice.server" description="For advanced back-end development technology pre-research & ideas & practice. ( Focus areas: Server )" href="https://github.com/coderZsq/coderZsq.practice.server" color="#A8732F" language="Java" star="0"></target>
      <target name="coderZsq.practice.data" description="For advanced cutting-edge development technology pre-research & ideas & practice. ( Focus areas: Data )" href="https://github.com/coderZsq/coderZsq.practice.data" color="#4372A1" language="Python" star="0"></target>
      <target name="coderZsq.github.io" description="Technology blog, learn some new technologies and new knowledge, and write insights into the text." href="https://github.com/coderZsq/coderZsq.github.io" color="#D35636" language="HTML" star="4"></target>
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
