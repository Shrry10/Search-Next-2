
// pages/index.js
import React, { useState } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Result from "../components/Result";

function App() {
  const [users, setUsers] = useState([]);

  const search = (list, n) => {
    let newUsers = [];
    list.map((user) => {
      if (user.username.toLowerCase().includes(n.toLowerCase())) {
        newUsers.push(user);
      }
    });
    setUsers(newUsers);
  };

  const handleSubmit = async (entry) => {
    try {
      console.log(entry);
      const response = await fetch(`http://localhost:3000/api/data`);
      const data = await response.json();

      search(data.userList, entry);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <>
      <Header />
      <main className="container">
        <Body handleSubmit={handleSubmit} />
      </main>
      <Result result={users} totalMatch={users.length} />
    </>
  );
}

export default App;
