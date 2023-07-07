import themes, { ThemesType } from "@src/constant/themes";

/**
 * Функция, которая ищет значение темы у пользователя с локального хранилища,
 * если такой не существует, то устанавливает тему из операционной системы.
 * Если тему не удалось определить, ставим светлую тему как основную.
 */
const getTheme = (): ThemesType => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const theme = `${window?.localStorage?.getItem('theme')}`;
  
  // @ts-ignore
  if (Object.values(themes).includes(theme)) return theme;

  const userMedia = matchMedia('(prefers-color-scheme: dark)');
  if (userMedia.matches) return themes.dark;

  return themes.light;
}

export {
  getTheme
}