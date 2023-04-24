import React, { useEffect, useState } from 'react';
import { useImmerReducer } from 'use-immer';
import UserVisualList from '../components/user/visual/UserVisualList';

function userVisualsReducer(draft, action) {
  switch (action.type) {
    case 'deleted': {
      return draft.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const userVisuals = [];

export default function Dashboard() {
  const [visuals, dispatch] = useImmerReducer(userVisualsReducer, userVisuals);
  const [userData, setUserData] = useState("null");
  const [loadingUserVisuals, setLoadingUserVisuals] = useState(true);
  const [error, setError] = useState(null);

  function handleDeleteTask(visualId) {
    fetch(`/api/user/visual/delete/${visualId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
    })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(
          `Failed to delete user visual. HTTP error: ${response.status}`
        );
      }
      return response;
    })
    .then((actualData) => {
      dispatch({
        type: 'deleted',
        id: visualId,
      });
    })
  }

  useEffect(() => {
    const fetchUserData = async () => {
      await fetch('/api/user/profile', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch user data. HTTP error: ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setUserData(actualData);
        setError(null);
      })
    };
     
    const fetchUserVisuals = async () => {
      await fetch('/api/user/visual', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch user data. HTTP error: ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        let i = 1;
        actualData.forEach(data => {
          userVisuals.push({id: data.id, url: data.url});
          i++;
        });
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoadingUserVisuals(false);
      })
    };

    fetchUserData();
    fetchUserVisuals();
  }, []);

  return (
    <main role="main" className="container-fluid">
      <div className="container-dashboard">
        <div className="content-dashboard">
        <h1>Welcome, {userData && userData.username}!</h1>
        </div>
      </div>
      <div className='user-visual-list-container'>
      <>
      {loadingUserVisuals && <div>Loading...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <UserVisualList visuals={visuals} onDeleteVisual={handleDeleteTask}/>
    </>
      </div>
    </main>
    );  
}