import { defineStore } from 'pinia'
import cookies from 'js-cookie'

export const useAppStore = defineStore('appStore', {
    state: () => {
        return {
            websiteConfig: {
                'author': 'mcallzbl',
                'gonganBeianNumber': '京公安备案xxx1111111',
                'beianNumber': '京ICP备XXX1111111'
            } as any,
            themeConfig: {
                theme: cookies.get('theme') ? String(cookies.get('theme')) : 'theme-dark',
                profile_shape: 'circle-avatar',
                feature: true,
                gradient: {
                    color_1: '#8190b8',
                    color_2: '#78d2d5',
                    color_3: '#6af3e4'
                },
                // background-image:background-image:
                header_gradient_css: 'linear-gradient(25deg, #fe9706, #e5af6c, #bbc6b5, #5adcfe)',
                background_gradient_style: {
                    background: 'linear-gradient(130deg, #24c6dc, #5433ff 41.07%, #ff0099 76.05%)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    '-webkit-box-decoration-break': 'clone',
                    'box-decoration-break': 'clone'
                }
            }
        }
    },
    actions: {

    }
})