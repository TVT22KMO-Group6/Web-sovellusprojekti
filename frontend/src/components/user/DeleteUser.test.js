import deleteUser from './DeleteUser';

describe('deleteUser', () => {
  let removeItemSpy;
  let confirmSpy;

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(),
      })
    );
    removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');
    confirmSpy = jest.spyOn(window, 'confirm').mockImplementation(() => true);
  });

  afterEach(() => {
    removeItemSpy.mockRestore();
    confirmSpy.mockRestore();
  });


  test('deletes user successfully', async () => {
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
    localStorage.removeItem('token');

    console.error = jest.fn();

    await deleteUser();

    expect(console.error).toHaveBeenCalledWith('Token is missing');
    expect(fetch).toHaveBeenCalledTimes(0);
  });

  test('handles error when deleting user', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    );

    localStorage.setItem('token', 'testToken');

    console.error = jest.fn();

    await deleteUser();

    expect(console.error).toHaveBeenCalledWith('Error deleting the user');
  });
});