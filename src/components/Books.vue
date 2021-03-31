<template>
  <div class="books-modal">
    <a v-for="book in filtered" v-bind:key="book.id" :href="book.url">
      <img class="books-img" :src="book.img" />
      <div class="books-name">{{ book.name }}</div>
    </a>
    <img class="cancel" src="../assets/cancel.png" alt="cancel" @click="closeDiv" />
  </div>
</template>
<script>
export default {
  props: ["filtered"],
  name: "Books",
  methods: {
    closeDiv: function () {
      var cancel = document.querySelector(".books-modal");
      cancel.style = "display:none";
    },
  },
};
</script>
<style scoped>
.books-modal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 80vw;
  position: absolute;
  top: 0;
  left: 0;
  padding: 82px 92px;
  margin: 60px;
  background-color: #dfd6c9;
  box-shadow: 0 0 0 99999px rgba(0, 0, 0, 0.8);
}

.cancel {
  position: absolute;
  top: 10px;
  right: 10px;
  max-width: 100%;
}

.books-modal img {
  max-width: 100%;
  max-height: 100%;
}

.books-name {
  font-family: "Arial";
  font-size: 2vw;
  font-weight: 400;
  color: #000000;
}
</style>