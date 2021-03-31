<template>
  <div class="books-modal">
    <a
      v-for="book in filtered"
      v-bind:key="book.id"
      :href="book.url"
      class="books-img"
    >
      <img :src="book.img" />
      <div>{{ book.name }}</div>
    </a>
  </div>
</template>
<script>
export default {
  props: ["filtered"],
  name: "Books",
  mounted() {
    console.log(this.$props.filtered);
  },
};
</script>
<style scoped>
.books-modal {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>