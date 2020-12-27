const themeDir = __dirname + '/../../';

module.exports = {
  important: true,
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: [
      themeDir + 'layouts/**/*.html',
      themeDir + 'exampleSite/content/**/*.html',
      'layouts/**/*.html',
      'content/**/*.html',
    ],
  },
  theme: {
    fontFamily: {
      'serif': ['Lora', 'Noto Serif SC', 'serif'],
      'mono': ['SFMono-Regular', 'Menlo'],
    },
    extend: {
      height: {
        '(screen-16)': 'calc(100vh - 4rem)',
        '96': '24rem',
        '128': '32rem',
        '160': '40rem',
      },
      minHeight: {
        '16': '4rem',
      },
      maxHeight: {
        'doc-sidebar': 'calc(100vh - 4rem - var(--height-doc-title, 4rem))',
      },
      inset: {
        '16': '4rem',
        '32': '8rem',
        '48': '12rem',
      },
      padding: {
        'scrollbar': 'calc(100vw - 100%)',
      },
      colors: {
        'eureka': 'var(--color-eureka)',
        'primary-bg': 'var(--color-primary-bg)',
        'secondary-bg': 'var(--color-secondary-bg)',
        'tertiary-bg': 'var(--color-tertiary-bg)',
        'primary-text': 'var(--color-primary-text)',
        'secondary-text': 'var(--color-secondary-text)',
        'tertiary-text': 'var(--color-tertiary-text)',
      }
    }
  },
  variants: {},
  plugins: []
}
