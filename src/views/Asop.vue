<template>
  <div class="asop-wrapper">
    <div class="page-wrapper">
      <header>
        <h1 class="asop-wrapper__headline">ASOP Terminal Idea</h1>
      </header>
    </div>
    <div class="asop">
      <header class="asop__header">
        <h1 class="asop__header__headline">Fleet Manager</h1>
        <div class="asop__button-area">
          <button class="asop__button-close"></button>
        </div>
      </header>
      <main class="asop__main">
        <asop-table />
      </main>
    </div>
  </div>
</template>

<style lang="scss">
.asop-wrapper {
  position: relative;
  height: calc(100vh - var(--page-header-height));
  background-color: var(--color-dark);
  background-image: url('@/assets/asop-screenshot.jpg');
  background-position: top center;
  background-repeat: no-repeat;

  &__headline {
    font-size: var(--h2-font-size-pc);
    margin: 0;
  }
}

.asop {
  --header-headline-button-height: 54;
  --header-headline-button-height-px: calc(var(--header-headline-button-height) * 1px);
  --header-headline-font-size: 30;
  --header-headline-font-size-px: calc(var(--header-headline-font-size) * 1px);
  --header-headline-font-size-pc: calc((var(--header-headline-font-size) / var(--body-font-size)) * 100%);
  --header-headline-line-height-scale: calc(var(--header-headline-button-height) / var(--header-headline-font-size));

  position: absolute;
  top: 114px;
  left: 50%;
  width: 1280px;
  height: 720px;
  margin: 0 auto;
  background-color: rgb(0 0 0 / 100%);
  transform: translateX(-50%) perspective(720px) rotateX(.5deg) scale(1.001);
  cursor: default;

  &__header {
    display: flex;
    justify-content: space-between;
    height: 125px;
    padding: var(--header-headline-button-height-px) 40px 10px;
    // background-color: rgb(100 255 0 / 50%);

    &__headline {
      font-family: var(--font-futuristic);
      font-size: var(--header-headline-font-size-pc);
      margin: 0;
      line-height: var(--header-headline-line-height-scale);
      text-transform: uppercase;
      font-weight: 400;
      color: var(--color-white-90-rgb);
    }
  }

  &__button-close {
    width: var(--header-headline-button-height-px);
    height: var(--header-headline-button-height-px);
    border-radius: 4px;
    border: 0;
    background-color: var(--color-star-citizen-asop-yellow-light);
    cursor: pointer;
  }
}
</style>

<script setup>
import { defineProps } from 'vue'
import { useAsopStore } from '@/stores/asop'
import AsopTable from '@/components/asop/AsopTable.vue'

const asop = useAsopStore()
</script>