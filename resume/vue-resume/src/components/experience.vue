<template>
<div>
  <div class="subtitle">
    <h1>Experience</h1>
  </div>
  <div class="experience">
    <div class="experience-block">
      <career time="Jul. 2015 ~ Now" job="Software Engineer" corp="J1 Crop" href="https://www.j1.com" desc1="iOS application development" desc2="Web application development" desc3="New employee skill training & judgement"></career>
      <career time="Aug. 2013 ~ Feb. 2015" job="Freight Operator" corp="TVL Group" href="http://www.tvlgroups.com/En/ugC_AboutUs.asp" desc1="Freight export operation" desc2="Freight import operation" desc3="Freight sales connection & quotation"></career>
    </div>
  </div>
</div>
</template>

<script>
import career from './career'
export default {
  data() {
    return {

    }
  },
  components: {
    career
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

.experience {
  padding-top: 50px;
  padding-bottom: 30px;
  overflow: hidden;
  width: 700px;
  float: right;
  display: inline-block;
  position: relative;
  user-select: none;
}

.experience .experience-block {
  width: inherit;
}
</style>
