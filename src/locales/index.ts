import { createI18n } from "vue-i18n";
import cookies from "js-cookie";

function loadLocaleMessages(): {
    [key: string]: { [key: string]: { [key: string]: string } }
}{
    const modules = import.meta.glob(
        '../locales/languages/**/*.json',
        {
            eager: true,
            // query: '?raw' // 如果需要原始 JSON 内容可加上
        }
    ) as Record<string, { default: {
            [key: string]: { [key: string]: string  }
        } }>;

    // const locales = import.meta.glob('../locales/*.json');
    const messages: {
        [key: string]: { [key: string]: { [key: string]: string } }
    } = {}
    Object.keys(modules).forEach((path) => {
        // const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        const matched = path.match(/([A-Za-z0-9-_]+)\.json$/i);
        if (matched && matched[1]) {
            const locale = matched[1];
            console.log(locale)
            messages[locale] = modules[path].default;
        }
    })
    return messages;
}

export const i18n = createI18n({
    // legacy: false,
    locale : cookies.get('locale') ? String(cookies.get('locale')) : 'cn',
    fallbackLocale : cookies.get('locale') ? String(cookies.get('locale')) : 'en',
    messages : loadLocaleMessages(),
})