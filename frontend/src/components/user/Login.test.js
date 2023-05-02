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

    // Render the Login component with the required props
    const { findByLabelText, findByRole } = render(<Login isOpen={true} closeModal={mockCloseModal} />);

    // Find input fields and submit button
    const usernameInput = await findByLabelText('Username *');
    const passwordInput = await findByLabelText('Password *');
    const submitButton = await findByRole('button', { name: 'Login' });

    // Simulate user input
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    // Mock the fetch function to return a successful response
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ jwt: 'fake_jwt_token' }),
    });

    // Click the submit button
    fireEvent.click(submitButton);

    // Wait for the fetch call to happen and check if it was called with the correct arguments
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
