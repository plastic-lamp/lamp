<!--<template>
  <div class="main">
    <div class="card-container">
      <div v-for="(row, rowIndex) in cardRows" :key="rowIndex" class="card-row">
        <a v-for="icon in row" :key="icon.id" :href="icon.url" target="_blank" class="card">
          <img :src="icon.image_url" :alt="icon.title">
          <button class="card-btn" tabindex="-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </button>
          <span class="card-title">{{ icon.title }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import iconsData from '@/data/icons.json';

const icons = ref(iconsData.icons);

const cardRows = computed(() => {
  const rows = [];
  for (let i = 0; i < icons.value.length; i += 3) {
    rows.push(icons.value.slice(i, i + 3));
  }
  return rows;
});
</script>-->

<template>
  <div class="main">
    <h1 class="message">Comming Soon :)</h1>
  </div>
</template>

<style scoped>
  .message {
    padding: 0;
    margin: 0;
    width: fit-content;
    height: fit-content;
    font-size: 32px;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    font-weight: 550;
    font-family: "Open Sans", sans-serif;
  }
</style>