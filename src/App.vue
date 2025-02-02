<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import {computed} from "vue";
import {useAppStore} from "@/stores/app";
import {useMetaStore} from "@/stores/metaStore";

const appStore = useAppStore()
const metaStore = useMetaStore()
const title = computed(() => appStore.websiteConfig.title || metaStore.title)
</script>

<template>
  <teleport to="head">
    <title>{{ title }}</title>
  </teleport>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
