import { render, fireEvent } from '@testing-library/react';
import RegisterModal from './Register';

test('renders register modal and submits user data', async () => {
  const mockCloseModal = jest.fn();

  const { findByLabelText, findByRole } = render(<RegisterModal isOpen={true} closeModal={mockCloseModal} />);

  const usernameInput = await findByLabelText('Username *');
  const passwordInput = await findByLabelText('Password *');
  const submitButton = await findByRole('button', { name: 'Register' });

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

  fireEvent.click(submitButton);

});