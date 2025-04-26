<template>
  <footer class="footer">
    <img
      src="@/assets/icons/logo.svg"
      alt="Flash Green logo"
      class="footer__logo"
    />
    <p class="footer__text">
      © 2025 Adam CHABA – Doryan DENIS – Adria DJAFRI – Eva MAROT – Sacha PORTAL
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #ffffff;
  text-align: center;
  padding: 24px 16px;
}
.footer__logo {
  height: 64px;
  margin-bottom: 16px;
}
.footer__text {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #042a2b;
  margin: 0;
}
</style>
