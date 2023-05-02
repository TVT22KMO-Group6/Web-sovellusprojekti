const deleteUser = async () => {
  // Retrieve the token from local storage
  const token = localStorage.getItem('token');

  // Check if the token is missing and log an error
  if (!token) {
    console.error('Token is missing');
    return;
  }

  // Get user confirmation for deleting the account
  const userConfirmation = window.confirm(
    'Are you sure you want to delete your account? This action cannot be undone.'
  );

  // Exit the function if the user did not confirm
  if (!userConfirmation) {
    return;
  }

  // Make the DELETE request to delete the user account
  const response = await fetch(`${process.env.REACT_APP_DELETE_USER_URL}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  // If the response is successful, remove the token from local storage and redirect to the homepage
  if (response.ok) {
    console.log('User deleted successfully');

    localStorage.removeItem('token');
    window.location.href = '/';
  } else {
    console.error('Error deleting the user');
  }
};

export default deleteUser;
