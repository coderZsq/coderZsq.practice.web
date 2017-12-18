<template>
<div>
  <div class="subtitle">
    <h1>Contact</h1>
  </div>
  <div class="contact">
    <div class="contact-block">
      <div class="wechat">
        <img src="http://upload-images.jianshu.io/upload_images/1229762-453920a3f4eedcd8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="">
        <p>Wechat: Aquas008</p>
      </div>
      <div class="other">
        <h3>Other contact info:</h3>
        <p>Mobile: +86 13701777868</p>
        <p>Email: a13701777868@sina.com / a13701777868@gmail.com</p>
        <p>QQ: 120709684</p>
        <p>Please feel free contact for appointment</p>
        <p>Copyright © 2017 Castie!. All rights reserved.</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {}
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

.contact {
  height: 320px;
  width: 700px;
  float: right;
  display: inline-block;
  position: relative;
  user-select: none;
}

.contact .contact-block {
  position: absolute;
  width: 700px;
  height: 220px;
  top: calc(50% - 110px);
}

.contact .contact-block .wechat {
  position: absolute;
  top: 0px;
  left: 40px;
  width: 190px;
  height: 200px;
}

.contact .contact-block .wechat img {
  padding-top: 20px;
  width: 150px;
  height: 140px;
  padding-left: 20px;
}

.contact .contact-block .wechat p {
  padding-left: 20px;
  text-align: center;
  width: 150px;
}

.contact .contact-block .other {
  width: 500px;
  height: 160px;
  position: absolute;
  top: 25px;
  left: 250px;
}

.contact .contact-block .other h3 {
  height: 32px;
  font-size: 18px;
}

.contact .contact-block .other p {
  padding-bottom: 5px;
}
</style>
