/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roobert: 'Roobert',
        roboto: 'Roboto',
        staffX: 'StaffX',
        staffXX: 'StaffXX'
      },
      boxShadow: {
        10: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);',
        20: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);',
        30: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);',
        40: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);',
        'product-card': '0px 4px 8px rgba(0, 0, 0, 0.15);',
        'table-sticky': '0px 2px 8px rgba(0, 0, 0, 0.1);',
        input: '0px 1px 2px rgba(16, 24, 40, 0.05);',
        dropdown:
          '0px 12px 16px -4px rgba(0, 42, 50, 0.08), 0px 4px 6px -2px rgba(0, 42, 50, 0.03)'
      },
      backgroundImage: {
        'check-orange': "url('/svg/check/orange.svg')",
        'check-white': "url('/svg/check/white.svg')",
        'shine-loader': "url('/images/shine-loader.png')",
        register: "url('/images/bg-register.jpg')",
        login: "url('/images/bg-login.jpg')",
        'register-complete': "url('/images/register-complete.jpg')"
      },
      fontSize: {
        xxs: '0.625rem'
      },
      height: {
        4.5: '1.125rem'
      },
      width: {
        4.5: '1.125rem'
      },
      maxWidth: {
        container: '1440px',
        xxs: '16rem',
        sm: '22.5rem'
      },
      colors: {
        root: {
          layout: '#F5F5F7'
        },
        black: {
          DEFAULT: '#000000',
          20: '#CCCCCC',
          30: '#B3B3B3',
          40: '#999999',
          50: '#808080',
          60: '#666666',
          70: '#4D4D4D',
          80: '#333333',
          90: '#1A1A1A'
        },
        gray: {
          DEFAULT: '#E1E1E1',
          60: '#F9F9F9',
          70: '#F3F3F3',
          80: '#EDEDED',
          90: '#E7E7E7',
          100: '#E5E5E5',
          110: '#CBCBCB',
          120: '#B4B4B4',
          130: '#9E9E9E',
          140: '#878787',
          150: '#D9D9D9',
          160: '#888888',
          170: '#353535'
        },
        orange: {
          DEFAULT: '#FF8000',
          50: '#FDE8E1',
          60: '#FFB366',
          70: '#FFA64D',
          80: '#FF9933',
          90: '#FF8D1A',
          110: '#E67300',
          120: '#CC6600',
          130: '#B35A00',
          140: '#994D00'
        },
        purple: {
          DEFAULT: '#9856F0',
          60: '#66BDFF',
          70: '#B789F5',
          80: '#AD78F3',
          90: '#A267F2',
          110: '#894DD8',
          120: '#7A45C0',
          130: '#6A3CA8',
          140: '#5B3490'
        },
        skyblue: {
          DEFAULT: '#0091FF',
          50: '#80C8FF',
          60: '#66BDFF',
          70: '#4DB2FF',
          80: '#33A7FF',
          90: '#1A9CFF',
          110: '#0083E6',
          120: '#0074CC',
          130: '#0066B3',
          140: '#005799'
        },
        blue: {
          DEFAULT: '#0328C1'
        },
        yellow: {
          DEFAULT: '#FFFF00',
          100: '#FEFDE8',
          150: '#FFF06A'
        },
        white: {
          DEFAULT: '#FFFFFF',
          110: '#FBFBFB',
          120: '#F9F9FA',
          130: '#F6F6F8',
          140: '#F3F3F6',
          150: '#F0F1F4',
          160: '#ECEEF1',
          170: '#E6E8ED',
          180: '#E0E2E8'
        },
        green: {
          DEFAULT: '#94F1A4',
          ligth: '#D4F9DB',
          90: '#9FF2AD',
          110: '#83DCB9',
          120: '#76C183',
          130: '#68A973',
          140: '#00A950'
        },
        red: {
          DEFAULT: '#F26969',
          70: '#F69696',
          90: '#F37878',
          120: '#DB1616'
        },
        skeleton: {
          base: '#EBEAEA',
          placeholder: '#D9D8D7'
        }
      },
      zIndex: {
        // => INDEX DEFAULT = Z-INDEX 0
        0: '0',
        // => INDEX TAG PRODUCT - CARROUCEL = Z-INDEX 10
        10: '10',
        // => INDEX FILTER - BUTTON OPEN = Z-INDEX 20
        20: '20',
        // => INDEX BOTTOM SHEET - DROP DOWN = Z-INDEX 30
        30: '30',
        // =>  HEADERLAYOUT - FILTERS MOVILE= Z-INDEX 40
        40: '40',
        // => INDEX SEARCH BAR = Z-INDEX 49
        49: '49',
        // => INDEX MODAL - QUANTIFIER - PRODUCTS SEARCHED = Z-INDEX 50
        50: '50',
        // => INDEX MODAL BACKDROP -INDEX TOAST NOTIFICATIONS - LOADER - MENU - TOOLTIP = Z-INDEX 60
        60: '60',
        // =>  RESUME CART= Z-INDEX 70
        70: '70'
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '80%': '60%',
        16: '4rem'
      },
      keyframes: {
        move: {
          '0%': { left: '0px' },
          '100%': { left: 'var(--distance)' }
        }
      },
      animation: {
        move: 'move 50s linear infinite'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
}
