<script setup lang="ts">
import { computed} from "vue";
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const { t } = useI18n()
const avatarClass = computed(() => {
  return {
    'foot-avatar': true,
    [appStore.themeConfig.profile_shape]: true
  }
})

const gradientText =  computed(() => appStore.themeConfig.background_gradient_style)
const gradientBackground =  computed(() => {
  return { background: appStore.themeConfig.header_gradient_css }
})
const currentYear = computed(() => new Date().getUTCFullYear())
const websiteConfig = computed(() => appStore.websiteConfig)
</script>

<template>
<div id="footer" class="relative w-full pt-1" :style="gradientBackground">

    <div
        class="bg-ob-deep-900 rounded-lg max-w-10/12 lg:max-w-screen-2xl text-sm  text-ob-normal w-full
        py-6 px-6 grid grid-rows-1 lg:grid-rows-none lg:grid-cols-4 justify-center items-center gap-8 h-36 mx-auto">
      <div
          class="flex flex-col lg:flex-row gap-6 lg:gap-12 row-span-1 lg:col-span-5 text-center lg:text-left mx-auto">
        <ul class="flex flex-col gap-2 mx-auto">
          <li class="flex flex-row mx-auto">
            <span >{{ t('footer.copyright') }} ©
              <template v-if="currentYear !== 2025">2025 - </template>
              {{ currentYear }}
              <b class="font-extrabold">&nbsp;{{ websiteConfig.author }}</b>
               {{ t('footer.allRightsReserved')}}
            </span>
            </li>
          <li v-if="websiteConfig.gonganBeianNumber != '' && websiteConfig.gonganBeianNumber != undefined" class="flex flex-row mx-auto">
              <a :href="`https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${websiteConfig.gonganBeianNumber}`" target="_blank">
                <img src="../assets/gongan-beian-icon.png" class="float-left" alt="公安备案"/> &nbsp;
                <b class="font-extrabold border-b-2 border-ob hover:text-ob"> {{ websiteConfig.gonganBeianNumber }} </b>
              </a>
            </li>
          <li v-if="websiteConfig.beianNumber != '' && websiteConfig.beianNumber != undefined" class="flex flex-row mx-auto">
              <a href="https://beian.miit.gov.cn/" target="_blank">
                <b class="font-extrabold border-b-2 border-ob hover:text-ob"> {{ websiteConfig.beianNumber }} </b>
              </a>
            </li>
        </ul>
      </div>
    </div>
</div>
</template>

<style scoped>

</style>