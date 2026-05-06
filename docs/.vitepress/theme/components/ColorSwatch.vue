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
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.color-swatch {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;
  background: var(--vp-c-bg-soft);
}

.color-swatch:hover {
  transform: scale(1.03);
  opacity: 0.92;
}

.color-block {
  min-height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.copied-badge {
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 4px;
}

.color-info {
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.color-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.color-hex {
  font-size: 12px;
  font-family: monospace;
  color: var(--vp-c-text-2);
}

.color-usage {
  font-size: 11px;
  color: var(--vp-c-text-2);
  margin-top: 2px;
}
</style>
