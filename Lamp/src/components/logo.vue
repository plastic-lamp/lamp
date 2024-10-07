<template>
    <div class="logo-container">
        <img :src="lampSrc" alt="Lamp">
    </div>
</template>

<script>
import lampSrc from '@/assets/lamp.png';

export default {
    data() {
        return {
            lampSrc
        };
    }
};
</script>

<style scoped>
.logo-container {
    height: 84px;
    width: 84px;
    object-fit: contain;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    outline: none;
    border: none;
}

.logo-container img {
    height: 84px;
    width: 84px;
    object-fit: contain;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    outline: none;
    border: none;
}
</style>