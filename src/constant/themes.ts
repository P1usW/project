const themes = {
  dark: 'dark',
  light: 'light',
} as const

type ThemesType = typeof themes[keyof typeof themes]

export default themes

export type {
  ThemesType
}
