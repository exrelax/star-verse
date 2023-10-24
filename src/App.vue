<template>
  <header class="page-header">
    <div class="page-wrapper">
      <div class="header-split">
        <Logo />
        <NavigationMain />
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
@import '@/assets/styles/main.scss';

.page-header {
  background-color: var(--color-dark);
  color: var(--color-light);

  h1 {
    margin-top: 0;
  }
}

.header-split {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Logo from '@/components/Logo.vue'
import NavigationMain from '@/components/NavigationMain.vue'
</script>