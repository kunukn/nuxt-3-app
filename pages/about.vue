<template>
  <NuxtLayout name="menu-layout">
    <div class="about-container">
      <NuxtLink to="/" class="link"> Back to home </NuxtLink>
      <h1>About</h1>
      <p>This is the about page</p>
      <MyComponent />
    </div>
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
