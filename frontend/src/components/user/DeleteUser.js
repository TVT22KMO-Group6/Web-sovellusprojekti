const deleteUser = async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      console.log('Token is missing');
      return;
    }
    
    const response = await fetch(`${process.env.REACT_APP_DELETE_USER_URL}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (response.ok) {
      console.log('User deleted successfully');
      
      localStorage.removeItem('token');
      window.location.href = '/';
    } else {
      console.log('Error deleting the user');
    }
  };
  
  
  export default deleteUser;
  