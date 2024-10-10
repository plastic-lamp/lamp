<template>
  <div class="logo-container">
    <img
      :src="imageUrl"
      alt="Lamp"
      :width="84"
      :height="84"
      loading="eager"
      decoding="async"
      fetchpriority="high"
    >
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const imageUrl = 'https://res.cloudinary.com/plastic-lamp/image/upload/v1728484100/lamp.webp';

onMounted(() => {
  // Preload the image
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = imageUrl;
  document.head.appendChild(link);

  // Cache the image using the Cache API
  if ('caches' in window) {
    caches.open('image-cache').then(cache => {
      cache.add(imageUrl);
    });
  }
});
</script>

<style scoped>
.logo-container {
  height: 84px;
  width: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-container img {
  height: 84px;
  width: 84px;
  object-fit: contain;
  outline: none;
  border: none;
}
</style>
