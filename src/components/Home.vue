<template>
  <div>
    <center>
      <button onclick="change(-1)">&lt;</button>
      <button onclick="change(1)">&gt;</button>
    </center>
    <div class="content">
      <div class="main-content">
        <h1 style="color: #fff">Featured Products</h1>
        <div class="sectionwhole">
          <div class="section1">
            <center><img src="images/honor8.jpg" class="img1" /></center>
            <h3 class="img1t">Huawei honor8</h3>
          </div>
          <div class="section2">
            <center><img src="images/mate20.jpg" class="img2" /></center>
            <h3 class="img2t">Huawei mate20</h3>
          </div>
          <div class="section3">
            <center><img src="images/p30.jpg" class="img3" /></center>
            <h3 class="img3t">Huawei p30</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: black;
}
.text {
  font-family: Helvetica;
  color: #ff3300;
}
.content {
  width: 100%;
}
.main-content {
  width: 100%;
  float: left;
  background-color: grey;
}
.main-content h1 {
  text-align: center;
}
.section1 {
  display: inline-block;
  width: 250px;
  margin-left: 120px;
}
.section2 {
  display: inline-block;
  width: 250px;
  margin-left: 120px;
}
.section3 {
  display: inline-block;
  width: 250px;
  margin-left: 120px;
}
.img1t {
  margin: auto;
  text-align: center;
}
.img2t {
  margin: auto;
  text-align: center;
}
.img3t {
  margin: auto;
  text-align: center;
}
</style>
