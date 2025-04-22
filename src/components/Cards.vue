<template>
  <section class="cards">
    <div class="cards__inner">
      <div class="cards__list">
        <h3>{{ card.q }}</h3>
        <p v-html="card.a"></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Cards",
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>
