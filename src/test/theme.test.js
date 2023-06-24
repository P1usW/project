import {describe, expect, test, beforeAll, afterAll} from '@jest/globals';
import './testUtils/mokMatchMedia';
import { getTheme } from '@src/utils/getTheme';
import themes from '@src/constant/themes';

describe('Получение значения темы', () => {
  let theme;

  beforeAll(() => {
    theme = window.localStorage.getItem('theme');
    if (theme) window.localStorage.removeItem('theme');
  })

  test('Проверка наличия метода', () => {
    expect(window).toHaveProperty('matchMedia');
  })
  
  /**
   * При попытке получения базового значения, на пути встречается функция matchMedia,
   * которой нет в пакете jest-environment-jsdom (^29.5). Использована заглушка.
   */
  test('Получение дефолтного значения темы', () => {
    expect(getTheme()).toBe(themes.light);
  });

  test.each([themes.light, themes.dark])('Получение %s', (theme) => {
    window.localStorage.setItem('theme', theme);
    expect(getTheme()).toBe(theme);
  });

  afterAll(() => {
    if (typeof theme == 'string') window.localStorage.setItem('theme', theme);
  })
})