<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Hall from "./components/Hall.vue";
import Library from "./components/Library.vue";
import Books from "./components/Books.vue";
import router from "./router/index.js";

export default {
  
  name: "App",
  router,
  components: {
    Hall,
    Library,
    Books,
  },
};
</script>

<style>
/*Обнуление*/

* {
  padding: 0;
  margin: 0;
  border: 0;
}

/*Меняет подсчет ширины блока*/

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

/*Убираем линии обводки*/

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

/*Делает эти элементы блочными*/

nav,
footer,
header,
aside {
  display: block;
}

/*Уравнивает поведение шрифтов в разных браузерах
    и на телефонах убирает самовольное увеличение шрифтов*/

html,
body {
  line-height: 1.5;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

/*Просим эти теги наследовать семейство шрифта*/

input,
button,
textarea {
  font-family: inherit;
}

/*Убираются некоторые особенности для разных браузеров*/

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

/*Обнуляем все стили заголовков*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}
</style>
