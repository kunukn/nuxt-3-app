<template>
  <NuxtLayout name="menu-layout">
    <NuxtLink to="/about" class="link"> Go to about </NuxtLink>
    <AppContent />
  </NuxtLayout>
</template>

<style scoped>
.link {
  text-decoration: underline;
  color: darkslategray;
  padding: 1rem;
  position: relative;
  display: block;
  background: #f5f5f5;
}
</style>
