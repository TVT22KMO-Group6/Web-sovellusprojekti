import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import RegisterModal from './Register';

beforeAll(() => {
  window.alert = jest.fn();
});

describe('Register component', () => {
  test('renders register modal and submits user data', async () => {
    const mockCloseModal = jest.fn();

    const { findByLabelText, findByRole } = render(<RegisterModal isOpen={true} closeModal={mockCloseModal} />);

    const usernameInput = await findByLabelText('Username *');
    const passwordInput = await findByLabelText('Password *');
    const submitButton = await findByRole('button', { name: 'Register' });

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    global.fetch = jest.fn().mockResolvedValue({
      status: 201,
    });

    fireEvent.click(submitButton);

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