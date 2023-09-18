import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    // Fetch user data when the component mounts
    axios
      .get('http://localhost:3000/getUsers')
      .then((response) => {
        setUsers(response.data); // Assuming the API response is an array of user objects
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  const handleSubmit = async () => {
    if (!name || !age) {
      console.log('Name and age are required fields.');
      return;
    }

    try {
      // Send a POST request to create a new user
      const response = await axios.post('http://localhost:3000/createUser', {
        name,
        age,
      });

      // Update the users state with the new user data
      setUsers([...users, response.data]); // Assuming the response.data is the new user object

      // Clear the input fields
      setName('');
      setAge('');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="App">
      <h1>E-DASHBOARD</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => {
            return <tr key={key}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          })}
        </tbody>
      </table>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleSubmit}>Create User</button>
    </div>
  );
}

export default App;
