/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(58, 90%, 97%)',
            '100': 'hsl(58, 90%, 94%)',
            '200': 'hsl(58, 90%, 86%)',
            '300': 'hsl(58, 90%, 76%)',
            '400': 'hsl(58, 90%, 64%)',
            '500': 'hsl(58, 90%, 50%)',
            '600': 'hsl(58, 90%, 40%)',
            '700': 'hsl(58, 90%, 32%)',
            '800': 'hsl(58, 90%, 24%)',
            '900': 'hsl(58, 90%, 16%)',
            '950': 'hsl(58, 90%, 10%)',
            DEFAULT: '#f9f58c'
        },
        secondary: {
            '50': 'hsl(240, 100%, 97%)',
            '100': 'hsl(240, 100%, 94%)',
            '200': 'hsl(240, 100%, 86%)',
            '300': 'hsl(240, 100%, 76%)',
            '400': 'hsl(240, 100%, 64%)',
            '500': 'hsl(240, 100%, 50%)',
            '600': 'hsl(240, 100%, 40%)',
            '700': 'hsl(240, 100%, 32%)',
            '800': 'hsl(240, 100%, 24%)',
            '900': 'hsl(240, 100%, 16%)',
            '950': 'hsl(240, 100%, 10%)',
            DEFAULT: '#0000ee'
        },
        accent: {
            '50': 'hsl(159, 77%, 97%)',
            '100': 'hsl(159, 77%, 94%)',
            '200': 'hsl(159, 77%, 86%)',
            '300': 'hsl(159, 77%, 76%)',
            '400': 'hsl(159, 77%, 64%)',
            '500': 'hsl(159, 77%, 50%)',
            '600': 'hsl(159, 77%, 40%)',
            '700': 'hsl(159, 77%, 32%)',
            '800': 'hsl(159, 77%, 24%)',
            '900': 'hsl(159, 77%, 16%)',
            '950': 'hsl(159, 77%, 10%)',
            DEFAULT: '#149d6c'
        },
        'neutral-50': '#000000',
        'neutral-100': '#1a1a1a',
        'neutral-200': '#6b6b6b',
        'neutral-300': '#ffffff',
        'neutral-400': '#fffbed',
        'neutral-500': '#767676',
        'neutral-600': '#555555',
        'neutral-700': '#adadad',
        'neutral-800': '#999999',
        background: '#fffbed',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'sans-serif',
            'sans-serif'
        ],
        heading: [
            'Urbanist',
            'sans-serif'
        ],
        body: [
            'Inter',
            'sans-serif'
        ],
        font4: [
            'EB Garamond',
            'sans-serif'
        ]
    },
    fontSize: {
        '12': [
            '12px',
            {
                lineHeight: 'normal'
            }
        ],
        '13': [
            '13px',
            {
                lineHeight: 'normal'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '16.8px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ],
        '18': [
            '18px',
            {
                lineHeight: '21.6px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '32px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '33.6px'
            }
        ],
        '32': [
            '32px',
            {
                lineHeight: '38.4px'
            }
        ],
        '40': [
            '40px',
            {
                lineHeight: '48px'
            }
        ],
        '56': [
            '56px',
            {
                lineHeight: '70px'
            }
        ],
        '38.4': [
            '38.4px',
            {
                lineHeight: '51.84px'
            }
        ]
    },
    spacing: {
        '12': '24px',
        '15': '30px',
        '30': '60px',
        '32': '64px',
        '40': '80px',
        '60': '120px',
        '1px': '1px',
        '45px': '45px'
    },
    borderRadius: {
        md: '10px',
        lg: '16px',
        xl: '20px',
        full: '999px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0.15) 0px 1px 3px 0px'
    },
    screens: {
        md: '810px',
        '1680px': '1680px'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '640px'
    }
},
  },
};
