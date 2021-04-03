<template>
  <div class="overlay">
    <div class="books-modal">
      <a v-for="book in filtered" v-bind:key="book.id" :href="book.url">
        <img class="books-img" :src="book.img" />
        <div class="books-name">{{ book.name }}</div>
      </a>
      <button type="button" @click="$emit('set-show-modal', false)">
        <img class="cancel" src="../assets/cancel.png" alt="cancel" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["filtered", "set-show-modal"],
  name: "Books",
};
</script>
<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.books-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 82px 92px;
  background-color: #dfd6c9;
  position: absolute;
  top: 50px;
  left: 50px;
  right: 50px;
  bottom: 50px;
  overflow-y: auto;
  z-index: 99;
}

.books-modal a {
  margin: 20px;
}

.cancel {
  position: absolute;
  top: 10px;
  right: 10px;
  max-width: 100%;
  cursor: pointer;
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