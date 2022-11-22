import { Component } from "react";
import { useFormAction } from "react-router-dom";
import { useState } from "react";

export default function NavBar({setUser}) {
  const [username, setUsername] = useState('');

  function handleChange(evt) {
    setUsername(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setUser(username);
  }

  return (
    <div>
      <h1>LogInPage</h1>
      <div>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
          <button type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}