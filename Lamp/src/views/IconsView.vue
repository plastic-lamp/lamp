<template>
  <div class="main">
    <div class="card-container">
      <div v-for="(row, rowIndex) in cardRows" :key="rowIndex" class="card-row">
        <template v-for="(icon, index) in row" :key="icon ? icon.id : `empty-${index}`">
          <a v-if="icon" :href="icon.url" target="_blank" class="card">
            <img :src="icon.image_url" :alt="icon.title" loading="lazy">
            <button aria-label="Open in new tab" title="Open in new tab" class="card-btn" tabindex="-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </button>
            <span class="card-title">{{ icon.title }}</span>
          </a>
          <div v-else tabindex="-1" class="empty-card"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import iconsData from '/public/data/icons.json';

const icons = ref(iconsData.icons);

const cardRows = computed(() => {
  const rows = [];
  for (let i = 0; i < icons.value.length; i += 3) {
    const row = icons.value.slice(i, i + 3);
    // Fill the row with null values if it has less than 3 items
    while (row.length < 3) {
      row.push(null);
    }
    rows.push(row);
  }
  return rows;
});
</script>
