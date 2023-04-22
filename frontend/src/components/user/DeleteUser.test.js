import deleteUser from './DeleteUser';

describe('deleteUser', () => {
  let removeItemSpy;

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(),
      })
    );
    removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');
  });

  afterEach(() => {
    removeItemSpy.mockRestore();
  });
  test('deletes user successfully', async () => {
    // Store token in local storage
    localStorage.setItem('token', 'testToken');

    await deleteUser();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_DELETE_USER_URL}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer testToken`,
      },
    });

    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
  });

  test('does not delete user if token is missing', async () => {
    // Remove token from local storage
    localStorage.removeItem('token');

    console.log = jest.fn();

    await deleteUser();

    expect(console.log).toHaveBeenCalledWith('Token is missing');
    expect(fetch).toHaveBeenCalledTimes(0);
  });

  test('handles error when deleting user', async () => {
    // Update fetch mock to return an error response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    );

    // Store token in local storage
    localStorage.setItem('token', 'testToken');

    console.log = jest.fn();

    await deleteUser();

    expect(console.log).toHaveBeenCalledWith('Error deleting the user');
  });
});