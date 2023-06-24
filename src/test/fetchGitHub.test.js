import { describe, expect, test, jest } from '@jest/globals';
import { getUserInfo } from '@src/api/GitHubApi';

jest.mock('../api/GitHubApi', () => {
  return {
    __esModule: true,
    default: jest.fn(),
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