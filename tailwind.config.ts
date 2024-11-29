import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import type { Config as DaisyUIConfig } from 'daisyui';

const config: Config = {
    content: [
        './src/components/**/*.{vue,ts,tsx}',
        './src/pages/**/*.{vue,ts,tsx}',
        './src/layouts/**/*.{vue,ts,tsx}',
        './src/app.vue',
        './src/error.vue'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                '2xs': '320px',
                xs: '480px'
            }
        },
        container: {
            center: true,
            padding: '1rem'
        }
    },
    plugins: [daisyui, typography],

    daisyui: {
        themes: ['light'],
        logs: false
    } as DaisyUIConfig
};

export default config;
