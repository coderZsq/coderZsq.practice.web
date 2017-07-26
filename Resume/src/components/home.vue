<template>
<div>
  <div class="user">
    <div class="user-block">
      <div class="icon">
        <img src="http://upload-images.jianshu.io/upload_images/1229762-23e162b9bd6b9c39.JPG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="">
      </div>
      <div class="row name">
        Shuangquan Zhu
      </div>
      <div class="row career">
        Designer / Developer
      </div>
      <div class="row location">
        Location: Shanghai
      </div>
      <div class="row social">
        <div class="indent"></div>
        <div class="github">
          <a href="https://github.com/coderzsq"><img src="http://upload-images.jianshu.io/upload_images/1229762-877e3e5c2260bcf1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""></a>
        </div>
        <div class="jianshu">
          <a href="http://www.jianshu.com/u/9d7fad1a4693"><img src="http://upload-images.jianshu.io/upload_images/1229762-f6525252f3e8387b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""></a>
        </div>
        <div class="wechat">
          <a href="http://upload-images.jianshu.io/upload_images/1229762-453920a3f4eedcd8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"><img src="http://upload-images.jianshu.io/upload_images/1229762-a69614a97de93f36.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""></a>
        </div>
        <div class="home">
          <a href="http://coderzsq.github.io/"><img src="http://upload-images.jianshu.io/upload_images/1229762-91b0949aec719aab.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""></a>
        </div>
      </div>
    </div>
  </div>
  <div class="introduction">
    <div class="main">
      <div class="main-block">
        <h1>Summary</h1>
        <p>Shuangquan Zhu is a professional developer who focuses on iOS now. He has strong knowledge of Objective-C, Swift and Javascript. With these skills, he created quite a few quickly developer tools. He also leads the J1 iOS team to promote the project
          process.
        </p>
        <p>He crazy loves playing basketball with friends in spare time, He also loves traveling, writing and listening music. He is always willing to try new things, and keeping to learn from them.</p>
      </div>
    </div>
    <div class="left">
      <div class="left-block">
        <h2>Interest</h2>
        <ul>
          <li># Learn about high tech</li>
          <li># Play basketball</li>
          <li># Listen to music</li>
          <li># Apple products</li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="right-block">
        <h2>Education</h2>
        <dl>
          <dd>Business Management - 2016</dd>
          <dt>East China University of Science and Technology</dt>
        </dl>
        <dl>
          <dd>Customs and International Freight - 2013</dd>
          <dt>Shanghai Maritime Academy</dt>
        </dl>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.user {
  width: 300px;
  height: 600px;
  display: inline-block;
  position: relative;
}

.user .user-block {
  position: absolute;
  width: 300px;
  height: 500px;
  top: calc(50% - 250px);
}

.user .user-block .icon,
.user .user-block .icon img {
  margin: 0 auto;
  width: 280px;
  height: 280px;
  border-radius: 12px;
}

.user .user-block .icon {
  padding-bottom: 10px;
}

.user .user-block .row {
  margin: 0 auto;
  margin-top: 10px;
  width: 280px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #f8f8f8;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
}

.user .user-block .name {
  color: #444;
  font-size: 22px;
  font-weight: bold;
}

.user .user-block .career {
  color: #666;
  font-size: 18px;
}

.user .user-block .location {
  color: #666;
  font-size: 18px;
}

.user .user-block .social div {
  width: 40px;
  height: 40px;
  float: left;
  position: relative;
  margin-left: 5px;
}

.user .user-block .social div img {
  position: absolute;
  width: 24px;
  height: 24px;
  left: calc(50% - 12px);
  top: calc(50% - 12px);
}

.user .user-block .social .indent {
  width: 44px;
  background-color: #f8f8f8;
}

.introduction {
  width: 700px;
  height: 600px;
  display: inline-block;
  float: right;
}

.introduction .main {
  width: inherit;
  height: 350px;
  position: relative;
}

.introduction .main .main-block {
  background-color: #f8f8f8;
  position: absolute;
  width: 680px;
  height: 280px;
  left: calc(50% - 340px);
  top: 50px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.introduction .main .main-block h1 {
  color: #444;
  height: 60px;
  line-height: 60px;
  text-indent: 20px;
}

.introduction .main .main-block p {
  color: #555;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
  padding-bottom: 20px;
}

.introduction .left {
  width: 350px;
  height: 250px;
  display: inline-block;
  position: relative;
}

.introduction .left .left-block {
  background-color: #f8f8f8;
  width: 330px;
  height: 200px;
  left: calc(50% - 165px);
  position: absolute;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
}

.introduction .left .left-block h2 {
  color: #444;
  height: 50px;
  line-height: 50px;
  text-indent: 20px;
}

.introduction .left .left-block ul li {
  color: #555;
  height: 30px;
  padding-left: 20px;
  list-style-type: none;
}

.introduction .right {
  width: 350px;
  height: 250px;
  float: right;
  display: inline-block;
  position: relative;
}

.introduction .right .right-block {
  background-color: #f8f8f8;
  width: 330px;
  height: 200px;
  left: calc(50% - 165px);
  position: absolute;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
}

.introduction .right .right-block h2 {
  color: #444;
  height: 50px;
  line-height: 50px;
  text-indent: 20px;
}

.introduction .right .right-block dl dd {
  padding-left: 20px;
  padding-right: 20px;
  color: #555;
}

.introduction .right .right-block dl dt {
  padding-left: 20px;
  padding-right: 20px;
  color: #999;
  font-size: 14px;
  padding-bottom: 10px;
}
</style>
