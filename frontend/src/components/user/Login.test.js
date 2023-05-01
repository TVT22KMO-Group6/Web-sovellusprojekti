import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';

beforeAll(() => {
    // Mock window.location.href
    delete window.location;
    window.location = { href: jest.fn() };
  });

describe('Login component', () => {
  test('renders login modal and submits user data', async () => {
    const mockCloseModal = jest.fn();

    const { findByLabelText, findByRole } = render(<Login isOpen={true} closeModal={mockCloseModal} />);

    const usernameInput = await findByLabelText('Username *');
    const passwordInput = await findByLabelText('Password *');
    const submitButton = await findByRole('button', { name: 'Login' });

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ jwt: 'fake_jwt_token' }),
    });

    fireEvent.click(submitButton);

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    expect(global.fetch).toHaveBeenCalledWith(
      process.env.REACT_APP_LOGIN_USER_URL,
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'testuser',
          password: 'testpassword',
        }),
      }),
    );
  });
});
