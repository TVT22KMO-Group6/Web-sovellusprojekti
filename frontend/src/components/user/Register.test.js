import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import RegisterModal from './Register';

// Mock window.alert before running tests
beforeAll(() => {
  window.alert = jest.fn();
});

// Test suite for the Register component
describe('Register component', () => {
  test('renders register modal and submits user data', async () => {
    const mockCloseModal = jest.fn();

    const { findByLabelText, findByRole } = render(<RegisterModal isOpen={true} closeModal={mockCloseModal} />);

    // Find input fields and submit button
    const usernameInput = await findByLabelText('Username *');
    const passwordInput = await findByLabelText('Password *');
    const submitButton = await findByRole('button', { name: 'Register' });

    // Simulate input changes
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    // Mock the fetch call
    global.fetch = jest.fn().mockResolvedValue({
      status: 201,
      json: () => Promise.resolve({ jwt: 'fake_jwt_token' }),
    });

    // Click the submit button
    fireEvent.click(submitButton);

    // Expect the fetch call to have been made with the correct data
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    expect(global.fetch).toHaveBeenCalledWith(
      process.env.REACT_APP_REGISTER_USER_URL,
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