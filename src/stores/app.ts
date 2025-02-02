import { defineStore } from 'pinia'
export const useAppStore = defineStore('appStore', {
    state: () => {
        return {
            websiteConfig: '' as any
        }
    },
    actions: {

    }
})