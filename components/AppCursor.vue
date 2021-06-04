<template lang="pug">
.cursor
  .cursor-ring(:style="ringStyles")
  .cursor-dot(:style="dotStyles")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    ringSize: {
      type: Number,
      default: 40,
    },
    dotSize: {
      type: Number,
      default: 14,
    },
    dotBackground: {
      type: String,
      default: '#a8ff1a',
    },
  },
  data() {
    return {
      dataRingSize: this.ringSize,
    }
  },
  computed: {
    ringStyles(): object {
      return {
        width: `${this.dataRingSize}px`,
        height: `${this.dataRingSize}px`,
      }
    },
    dotStyles(): object {
      return {
        width: `${this.dotSize}px`,
        height: `${this.dotSize}px`,
        background: this.dotBackground,
      }
    },
  },
  mounted() {
    document.addEventListener('mousemove', this.onMouseUpdate)
  },
  methods: {
    onMouseUpdate(e: MouseEvent) {
      const ringEl = document.querySelector<HTMLElement>('.cursor-ring')
      const dotEl = document.querySelector<HTMLElement>('.cursor-dot')

      if (ringEl === null || dotEl === null) {
        return
      }

      let pos = this.getCursorPos(e.clientX, e.clientY, this.dotSize)
      dotEl.style.top = `${pos.y}px`
      dotEl.style.left = `${pos.x}px`

      pos = this.getCursorPos(e.clientX, e.clientY, this.dataRingSize)
      ringEl.style.top = `${pos.y}px`
      ringEl.style.left = `${pos.x}px`

      if (this.isLinkElement(e.target as HTMLElement)) {
        this.dataRingSize = this.ringSize + 24
      } else {
        this.dataRingSize = this.ringSize
      }
    },
    getCursorPos(clientX: number, clientY: number, cursorSize: number) {
      const x = clientX - cursorSize / 2
      const y = clientY - cursorSize / 2
      return { x, y }
    },
    isLinkElement(el: HTMLElement): boolean {
      const tagName = el.tagName.toLowerCase()
      if (tagName === 'a' || tagName === 'button') {
        return true
      } else if (el.parentElement) {
        return this.isLinkElement(el.parentElement)
      }

      return false
    },
  },
})
</script>

<style lang="scss" scoped>
.cursor {
  &-ring,
  &-dot {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  &-ring {
    box-sizing: border-box;
    border: 2px solid #fff;
    border-radius: 50%;
    transition: top 0.6s cubic-bezier(0.16, 1, 0.3, 1),
      left 0.6s cubic-bezier(0.16, 1, 0.3, 1),
      width 0.4s cubic-bezier(0.16, 1, 0.3, 1),
      height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &-dot {
    border-radius: 50%;
  }
}
</style>
