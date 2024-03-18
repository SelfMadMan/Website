import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function SendEmail() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "users")); // Adjust "users" to your actual collection name
      const usersData = querySnapshot.docs.map(doc => doc.data());
      setUsers(usersData);
      setIsLoading(false);
    };

    fetchUsers();
  }, []);

  const handleSendEmails = async () => {
    // Placeholder for sending emails. You might call a cloud function or your backend API here.
    console.log('Sending emails to:', users.map(user => user.email).join(', '));
    // Example: await sendEmailToUsers(users);
  };

  if (isLoading) return <div>Loading users...</div>;

  return (
    <div>
      <h2>Send Emails</h2>
      <p>Total Users: {users.length}</p>
      <button onClick={handleSendEmails}>Send Emails</button>
    </div>
  );
}

export default SendEmail;
