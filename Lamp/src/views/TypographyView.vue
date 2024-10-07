<template>
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
import typographyData from '@/data/typography.json';

const typography = ref(typographyData.typography);

const cardRows = computed(() => {
  const rows = [];
  for (let i = 0; i < typography.value.length; i += 3) {
    rows.push(typography.value.slice(i, i + 3));
  }
  return rows;
});
</script>