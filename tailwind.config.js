/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Tech-focused color palette
        primary: {
          red: '#FF1744',
          'red-dark': '#D50000',
          'red-light': '#FF5983',
          'red-glow': '#FF1744'
        },
        tech: {
          blue: '#00BCD4',
          'blue-dark': '#00838F',
          'blue-light': '#4DD0E1',
          cyan: '#00E5FF',
          green: '#00E676',
          'green-dark': '#00C853',
          purple: '#7C4DFF',
          'purple-dark': '#651FFF',
          orange: '#FF6D00',
          'orange-light': '#FF9100'
        },
        dark: {
          bg: '#0A0A0A',
          'bg-secondary': '#1A1A1A',
          'bg-tertiary': '#2D2D2D',
          'bg-code': '#1E1E1E',
          'bg-terminal': '#0D1117',
          text: '#FFFFFF',
          'text-secondary': '#E0E0E0',
          'text-muted': '#9E9E9E',
          'text-dim': '#6E6E6E',
          border: '#333333',
          'border-light': '#424242'
        },
        light: {
          bg: '#FAFAFA',
          'bg-secondary': '#F5F5F5',
          'bg-tertiary': '#EEEEEE',
          'bg-code': '#F8F8F8',
          'bg-terminal': '#FFFFFF',
          text: '#212121',
          'text-secondary': '#424242',
          'text-muted': '#757575',
          'text-dim': '#9E9E9E',
          border: '#E0E0E0',
          'border-light': '#F5F5F5'
        },
        // Syntax highlighting colors
        syntax: {
          keyword: '#FF7043',
          string: '#66BB6A',
          number: '#42A5F5',
          comment: '#757575',
          function: '#AB47BC',
          variable: '#FFA726',
          tag: '#EC407A',
          attribute: '#26C6DA'
        },
        // Status colors
        status: {
          success: '#4CAF50',
          warning: '#FF9800',
          error: '#F44336',
          info: '#2196F3'
        }
      },
      fontFamily: {
        // Developer-focused typography
        'mono': ['Fira Code', 'JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
        'code': ['Fira Code', 'monospace'],
        'header': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'Source Sans Pro', 'system-ui', 'sans-serif'],
        'ui': ['Source Sans Pro', 'Inter', 'sans-serif']
      },
      fontSize: {
        'xs': '0.75rem',     // 12px
        'sm': '0.875rem',    // 14px
        'base': '1rem',      // 16px
        'lg': '1.125rem',    // 18px
        'xl': '1.25rem',     // 20px
        '2xl': '1.5rem',     // 24px
        '3xl': '1.875rem',   // 30px
        '4xl': '2.25rem',    // 36px
        '5xl': '3rem',       // 48px
        '6xl': '3.75rem',    // 60px
        '7xl': '4.5rem',     // 72px
        '8xl': '6rem',       // 96px
        '9xl': '8rem',       // 128px
        'code': '0.875rem',  // 14px for code
        'terminal': '1rem'   // 16px for terminal
      },
      spacing: {
        '18': '4.5rem',      // 72px
        '88': '22rem',       // 352px
        '128': '32rem',      // 512px
        '144': '36rem'       // 576px
      },
      animation: {
        // Tech-focused animations
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-down': 'fadeDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'typing': 'typing 3s steps(40) 1s forwards',
        'cursor': 'cursor 1s step-end infinite',
        'terminal-boot': 'terminalBoot 2s ease-out',
        'matrix-rain': 'matrixRain 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'glitch': 'glitch 0.3s ease-in-out',
        'scan-line': 'scanLine 2s linear infinite',
        'code-highlight': 'codeHighlight 0.5s ease-in-out',
        'terminal-cursor': 'terminalCursor 1s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        glowPulse: {
          '0%': {
            boxShadow: '0 0 5px #FF1744, 0 0 10px #FF1744, 0 0 15px #FF1744',
            textShadow: '0 0 5px #FF1744'
          },
          '100%': {
            boxShadow: '0 0 10px #FF1744, 0 0 20px #FF1744, 0 0 30px #FF1744',
            textShadow: '0 0 10px #FF1744'
          }
        },
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '100%' }
        },
        cursor: {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#FF1744' }
        },
        terminalBoot: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        scanLine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' }
        },
        codeHighlight: {
          '0%': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: 'rgba(255, 23, 68, 0.2)' },
          '100%': { backgroundColor: 'transparent' }
        },
        terminalCursor: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        }
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
        'glass': 'blur(10px) saturate(200%)',
      },
      boxShadow: {
        'glow-sm': '0 0 5px rgba(255, 23, 68, 0.5)',
        'glow': '0 0 10px rgba(255, 23, 68, 0.5)',
        'glow-lg': '0 0 20px rgba(255, 23, 68, 0.5)',
        'glow-xl': '0 0 30px rgba(255, 23, 68, 0.5)',
        'tech-blue': '0 0 20px rgba(0, 188, 212, 0.3)',
        'tech-green': '0 0 20px rgba(0, 230, 118, 0.3)',
        'terminal': '0 2px 10px rgba(0, 0, 0, 0.8)',
        'code': '0 1px 3px rgba(0, 0, 0, 0.2)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.15)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'tech-grid': 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        'matrix': 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,255,0,0.03) 2px, rgba(0,255,0,0.03) 4px)',
        'terminal': 'linear-gradient(135deg, #0D1117 0%, #161B22 100%)'
      },
      backgroundSize: {
        'grid': '20px 20px',
        'matrix': '4px 4px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // Custom plugin for tech utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        },
        '.text-glow': {
          textShadow: '0 0 10px currentColor',
        },
        '.text-glow-strong': {
          textShadow: '0 0 20px currentColor, 0 0 30px currentColor',
        },
        '.backdrop-blur-glass': {
          backdropFilter: 'blur(10px) saturate(200%)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
        '.terminal-bg': {
          backgroundColor: theme('colors.dark.bg-terminal'),
          backgroundImage: theme('backgroundImage.terminal'),
        },
        '.matrix-bg': {
          backgroundImage: theme('backgroundImage.matrix'),
          backgroundSize: theme('backgroundSize.matrix'),
        },
        '.tech-grid-bg': {
          backgroundImage: theme('backgroundImage.tech-grid'),
          backgroundSize: theme('backgroundSize.grid'),
        }
      }
      addUtilities(newUtilities)
    }
  ]
}