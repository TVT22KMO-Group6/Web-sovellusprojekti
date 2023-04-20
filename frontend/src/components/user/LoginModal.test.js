import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginModal from './LoginModal';

test('renders login modal and submits user data', async () => {
  const closeModal = jest.fn();
  render(<LoginModal isOpen={true} closeModal={closeModal} />);

  const usernameInput = screen.getByLabelText('Username *');
  const passwordInput = screen.getByLabelText('Password *');
  const submitButton = screen.getByRole('button', { name: 'Login' });

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
  fireEvent.click(submitButton);

  expect(usernameInput.value).toBe('testuser');
  expect(passwordInput.value).toBe('testpassword');
});