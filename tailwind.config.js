const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    screens: {
      sm: '300px',
      md: '400px',
      lg: '880px',
      tablet: '1024px',
    },
    extend: {
      fontFamily: {
        // Montserrat fonts
        MontserratBlack: 'Montserrat-Black',
        MontserratBlackItalic: 'Montserrat-BlackItalic',
        MontserratBold: 'Montserrat-Bold',
        MontserratBoldItalic: 'Montserrat-BoldItalic',
        MontserratExtraBold: 'Montserrat-ExtraBold',
        MontserratExtraBoldItalic: 'Montserrat-ExtraBoldItalic',
        MontserratExtraLight: 'Montserrat-ExtraLight',
        MontserratExtraLightItalic: 'Montserrat-ExtraLightItalic',
        MontserratItalic: 'Montserrat-Italic',
        MontserratLight: 'Montserrat-Light',
        MontserratLightItalic: 'Montserrat-LightItalic',
        MontserratMedium: 'Montserrat-Medium',
        MontserratMediumItalic: 'Montserrat-MediumItalic',
        MontserratRegular: 'Montserrat-Regular',
        MontserratSemiBold: 'Montserrat-SemiBold',
        MontserratSemiBoldItalic: 'Montserrat-SemiBoldItalic',
        MontserratThin: 'Montserrat-Thin',
        MontserratThinItalic: 'Montserrat-ThinItalic',
        
      },

      colors: {
        text14: '14px',
        text16: '16px',
        primary: '#000000',
        primaryText: '#6D6D6D',
        primary50: '#F2F5FC',
        primary600: '#4964C6',
        primary500: '#5E7FD3',
        primary900: '#323D76',
        secondary: '#E0E0E0',
        success600: '#28A745',
        Warning500: '#FFC107',
        base: '#f6f6f6',
        danger600: '#DC3545',
        danger50: '#FEF2F2',
        color: {
          Black50: '#F6F6F6',
          Black100: '#E7E7E7',
          Black200: '#D1D1D1',
          Black400: '#888888',
          Black500: '#5D5D5D',
          Black600: '#5D5D5D',
          Black800: '#454545',
          Black900: '#333333',
          Black950: '#262626',
          Black1000: '#1D1929',
        },
        success: {
          dark: '#28a745',
          light: '#cce53f',
        },
        error: {
          dark: '#dc3545',
          light: '#f8d7da',
        },
        info: {
          dark: '#17a2b8',
          light: '#d3e9fd',
        },
      },
    },
  },
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        '.btn': {
          padding: 3,
          borderRadius: 10,
          textTransform: `uppercase`,
          backgroundColor: `#333`,
        },
        '.resize-repeat': {
          resizeMode: `repeat`,
        },
      });
    }),
  ],
};