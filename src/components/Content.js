import React, { useState } from 'react';

const Content = () => {
    const [userRole, setUserRole] = useState('user');  
  return (
    <div>
      <button onClick={() => setUserRole('admin')}>Switch to Admin</button>
      {userRole === 'admin' && <AdminPanel />}
      {userRole === 'user' && <UserProfile />}
    </div>
  )
}
function AdminPanel() {
    return <div>Admin Tools</div>;
  }
  
  function UserProfile() {
    return <div>User Profile</div>;
  }
export default Content