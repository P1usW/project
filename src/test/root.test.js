import { fireEvent, render, screen } from '@testing-library/react';
import Footer from '@src/components/Footer/Footer';
import userEvent from '@testing-library/user-event';
import { 
  createMemoryRouter,
  RouterProvider,
} from 'react-router-dom';
import { publicRoutes } from '@src/constant/routes';
import Layout from '@src/components/Layout/Layout';
import '@testing-library/jest-dom';
import './testUtils/mokScrollTo'
import axios from 'axios';

jest.mock('../api/gitHubApi/getReposInfo', () => {
  return {
    __esModule: true,
    getReposInfo: jest.fn(() => [
      {
        key: 'repos.name',
        name: 'repos.name',
        html_url: 'repos.html_url'
      }
    ])
  }
})


describe.skip('Test render', () => {
  test('Footer snapshot', () => {
    render(<Footer/>);

    const footer = screen.getByRole('contentinfo')
    expect(footer).toMatchSnapshot();

    screen.debug();
  })
})

describe.skip('Test theme toggle', () => {
  let theme;

  beforeAll(() => {
    window.localStorage.getItem('theme');
  })

  test('Click theme button', async () => {
    // render(NavBar)

    const btn = screen.getByRole('button');
    // fireEvent.click(btn);
    await userEvent.click(btn);
  })
})

describe('Test navigation', () => {
  const router = createMemoryRouter([
    {
      Component: Layout,
      children: publicRoutes,
    }
  ]);

  render(
    <RouterProvider router={router}/>
  )
  
  afterEach(() => {
    jest.resetAllMocks()
  })
  afterAll(() => {
    jest.clearAllMocks()
  })

  test('has main page', () => {
    screen.getAllByRole('navigation');
    screen.debug();
  })
  
})