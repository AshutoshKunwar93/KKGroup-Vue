<template>
  <div id="app">
    <div class="wrapper">
      <div class="header">
        <div class="logo">
          <img src="images/logo.png" />
        </div>
      </div>
      <div class="menu">
        <ul>
          <li><router-link :to="{ name: 'home' }" >Home</router-link></li>
          <li><router-link :to="{ name: 'company' }">Company</router-link></li>
          <li><router-link :to="{ name: 'blog' }">Blog</router-link></li>
          <li><router-link :to="{ name: 'contactus' }">Contact Us</router-link></li>
        </ul>
      </div>
      <router-view></router-view>
      <div class="footer">
        <p>&copy; Copyright 2019, Huawei.com</p>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: black;
}
.text {
  font-family: Helvetica;
  color: #ff3300;
}
.header {
  width: 100%;
  height: 60px;
}

.wrapper {
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  overflow: hidden;
}

.logo {
  float: left;
}

.menu {
  width: 100%;
  height: 50px;
  background-color: black;
}

.menu ul li {
  display: inline;
}

.menu ul li a {
  text-decoration: none;
  color: white;
  float: left;
  padding: 16px 20px;
}

.menu ul li a:hover {
  background-color: green;
}
.footer {
  width: 100%;
  height: auto;
  position: absolute;
  margin: auto;
  padding: 5px 0 20px 5px;
  background-color: black;
}

.footer p {
  color: white;
  text-align: center;
}
.router-link-active{
  background-color: #ff3300;
}
</style>
