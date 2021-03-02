<template>
  <div class="banner">
    <img src="#" align="center" />
    <div class="content">
      <div class="main-content">
        <div class="article">
          <h1>Huwawei Mobiles</h1>
          <br />
          <p>Kathmandu, Nepal</p>
          <p>Tel: 01-4231567</p>
          <p>Like Us On <a href="facebook.com"> Facebook</a></p>
          <br />
          <h2 style="float: left">Current Time</h2>
          <br /><br /><br /><br />
        </div>
      </div>
    </div>
    <div class="form">
      <h3>Form</h3>
      <form name="messageForm" onsubmit="validateForm()">
        <p>
          Name:
          <input type="text" name="name" />
        </p>
        <p>
          Address:
          <input type="text" name="address" />
        </p>
        <p>
          Gender: <input type="radio" name="gender" value="male" checked />Male
          <input type="radio" name="gender" value="female" />Female
        </p>
        <p>
          Message:
          <br />
          <textarea
            name="message"
            rows="10"
            cols="30"
            placeholder="Enter Message"
          ></textarea>
        </p>
        <p>
          <input type="submit" value="Send" />
        </p>
      </form>
    </div>
  </div>
</template>
<style scoped>
.banner {
  width: 100%;
}

.banner img {
  width: 100%;
}
.content {
  width: 100%;
}

.main-content {
  width: 100%;
  float: left;
  background-color: grey;
}
</style>
