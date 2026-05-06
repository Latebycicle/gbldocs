<script setup lang="ts">
import { ref } from 'vue'

interface Color {
  name: string
  hex: string
  usage: string
}

const props = defineProps<{
  colors: Color[]
}>()

const copiedIndex = ref<number | null>(null)

function copyHex(hex: string, index: number) {
  navigator.clipboard.writeText(hex).then(() => {
    copiedIndex.value = index
    setTimeout(() => {
      copiedIndex.value = null
    }, 1500)
  })
}
</script>

<template>
  <div class="color-swatch-grid">
    <div
      v-for="(color, index) in colors"
      :key="color.hex"
      class="color-swatch"
      :title="`Click to copy ${color.hex}`"
      @click="copyHex(color.hex, index)"
    >
      <div
        class="color-block"
        :style="{ backgroundColor: color.hex }"
      >
        <span v-if="copiedIndex === index" class="copied-badge">Copied!</span>
      </div>
      <div class="color-info">
        <span class="color-name">{{ color.name }}</span>
        <span class="color-hex">{{ color.hex }}</span>
        <span class="color-usage">{{ color.usage }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.color-swatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  margin: 24px 0;
}

.color-swatch {
  border: 1px solid var(--gbl-light-gray);
  border-radius: var(--gbl-radius-md);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
  background: var(--gbl-white);
  box-shadow: var(--gbl-shadow-sm);
}

.color-swatch:hover {
  transform: scale(1.04);
  opacity: 0.95;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.color-block {
  min-height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.copied-badge {
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: var(--gbl-radius-sm);
  animation: fadeIn 0.15s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.color-info {
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.color-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--gbl-dark-gray);
  font-family: var(--gbl-font-primary);
}

.color-hex {
  font-size: 12px;
  font-weight: 500;
  color: var(--gbl-medium-gray);
  font-family: 'Monaco', 'Courier New', monospace;
}

.color-usage {
  font-size: 11px;
  color: var(--gbl-light-gray);
  line-height: 1.4;
  margin-top: 2px;
}
</style>
