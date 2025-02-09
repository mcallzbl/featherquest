<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import {computed, onBeforeMount} from "vue";
import { ref } from 'vue';
import {useAppStore} from "@/stores/app";
import {useMetaStore} from "@/stores/metaStore";

const appStore = useAppStore()
const metaStore = useMetaStore()
const title = computed(() => appStore.websiteConfig.title || metaStore.title)
const theme = computed(() => appStore.themeConfig.theme)
const appWrapperClass = 'app-wrapper'
const wrapperStyle = ref({ 'min-height': '100vh' })
const cssVariables = computed(() => {
  if (appStore.themeConfig.theme === 'theme-dark') {
    return `
            --text-accent: ${appStore.themeConfig.gradient.color_1};
            --text-sub-accent: ${appStore.themeConfig.gradient.color_3};
            --main-gradient: ${appStore.themeConfig.header_gradient_css};
          `
  }
  return `
          --text-accent: ${appStore.themeConfig.gradient.color_3};
          --text-sub-accent: ${appStore.themeConfig.gradient.color_2};
          --main-gradient: ${appStore.themeConfig.header_gradient_css};
        `
})

onBeforeMount(() => {
  initialApp()
})

const initialApp = () => {
  let wrapperHeight = screen.height
  const footerElement = document.getElementById("footer")
  const footerHeight = footerElement?.getBoundingClientRect().height
  if(typeof footerHeight === 'number') {
    wrapperHeight = wrapperHeight - footerHeight * 2
  }
  wrapperStyle.value = {
    'min-height': wrapperHeight + 'px',
  }
}
</script>

<template>
  <div id="app-wrapper" :class="[appWrapperClass, theme]" :style="wrapperStyle">
    <div id="app-container" class="app-container max-w-10/12 lg:max-w-screen-2xl px-3 lg:px-8"
         @keydown.meta.k.stop.prevent = ""
         tabindex="-1"
         :style="cssVariables">

    </div>
  </div>
  <Footer id="footer" :style="cssVariables" />
  <teleport to="head">
    <title>{{ title }}</title>
  </teleport>
</template>

<style scoped>

</style>
