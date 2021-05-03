<template lang="pug">
div
  header.mb-10
    h1.mb-1.text-4xl.font-bold Uses
    p.text-gray-600 The tools I use daily.

  section.mb-6
    h2.mb-3.font-bold.text-2xl Hardware
    .space-y-2
      div - <a href="https://www.apple.com/vn/macbook-pro/" target="_blank">MacBook Pro 2019 </a> - I love it.
      div - <a href="https://www.lg.com/us/monitors/lg-27UL850-W-4k-uhd-led-monitor" target="_blank">LG 27 27UL850</a> - This 4K monitor is sufficient for me.
      div - <a href="https://en.akkogear.com/product/silent-3068-bt-5-0white-led-mechanical-keyboard/">Akko 3068 Bluetooth</a> - It should be your first mechanical keyboard.
      div - <a href="https://www.logitech.com/en-us/articles/silent-mice" target="_blank">Logitech M590</a> - A silent mouse.
      div - <a href="https://www.apple.com/airpods-2nd-generation/" target="_blank">AirPods 2</a> - I use it when I don't want to wake my son up at weekly meetings.

  section.mb-4
    h2.mb-3.font-bold.text-2xl Software
    .space-y-2
      div - <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> for anything Front-end-related.
      div - <a href="https://www.jetbrains.com/phpstorm/" target="_blank">PHPStorm</a> for developing anything PHP-related.
      div - <a href="https://github.com/alacritty/alacritty" target="_blank">Alacritty</a> as the primary terminal. It's fast.
      div - <a href="https://git-fork.com/" target="_blank">Fork</a> for Git client. The best Git client that I've known.
      div - <a href="https://slack.com/" target="_blank">Slack</a>, <a href="https://www.microsoft.com/en-ww/microsoft-teams" target="_blank">Team</a> for team communication.
  </template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head() {
    return {
      title: 'Uses',
    }
  },
})
</script>
