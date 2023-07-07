import { describe, expect, test, jest } from '@jest/globals';
import { getUserInfo } from '@src/api/gitHubApi/getUserInfo';

jest.mock('../api/gitHubApi/getUserInfo', () => {
  return {
    __esModule: true,
    getUserInfo: jest.fn(() => 42)
  }
})

describe('API github',() => {

  test('get git hub api', async () => {
    const data = await getUserInfo('P1usW');
    console.log(data)
    // expect(data).toMatchSnapshot();
  })
})