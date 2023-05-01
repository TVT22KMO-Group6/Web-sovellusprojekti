import deleteUser from './DeleteUser';

// Test suite for deleteUser function
describe('deleteUser', () => {
  let removeItemSpy;
  let confirmSpy;

  // Set up spies and mock fetch before each test
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

  // Clean up spies after each test
  afterEach(() => {
    removeItemSpy.mockRestore();
    confirmSpy.mockRestore();
  });

  // Test successful deletion of user
  test('deletes user successfully', async () => {
    localStorage.setItem('token', 'testToken');
    await deleteUser();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
  });

  // Test case when token is missing
  test('does not delete user if token is missing', async () => {
    localStorage.removeItem('token');
    console.error = jest.fn();
    await deleteUser();
    expect(console.error).toHaveBeenCalledWith('Token is missing');
    expect(fetch).toHaveBeenCalledTimes(0);
  });

  // Test error handling during user deletion
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