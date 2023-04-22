import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('/api/user/profile', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      const data = await response.json();
      if (response.ok) {
        setUserData(data);
      } else {
        window.location.href = '/';
      }
    };
    fetchUserData();
  }, []);

  return (
    <main role="main" class="container-fluid">
      <div className="container-dashboard">
        <div className="content-dashboard">
        <h1>Welcome, {userData && userData.username}!</h1>
        </div>
      </div>  
    </main>
    );  
}

export default Dashboard;