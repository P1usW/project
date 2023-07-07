import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { 
  createMemoryRouter,
  RouterProvider,
  useLoaderData,
  useActionData
} from 'react-router-dom';
import { publicRoutes } from '@src/constant/routes';
import Layout from '@src/components/Layout/Layout';
import '@testing-library/jest-dom';



jest.mock('react-router', () => {
  const origModule = jest.requireActual('react-router');
  return {
    __esModule: true,
    ...origModule,
    useLoaderData: jest.fn(() => 42),
  }
});


describe('test project list', () => {
  afterEach(() => {
    useLoaderData.mockReset();
  })
  
  test('test 1', () => {
    // useLoaderData.mockReturnValue(123);

    console.log(useLoaderData())
  })
})
