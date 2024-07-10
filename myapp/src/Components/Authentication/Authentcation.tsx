import React, { useState } from "react";

const Authentcation = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const resetInputs = () => {
    if (email && password) {
      setEmail("");
      setPassword("");
    }
  };

  const handleSubmit = () => {
    if (email && password) {
      const newUser = {
        email,
        password,
      };
      console.log(newUser);
    } else {
      console.log("email:", email, "password:", password);
    }
  };

  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit();
        resetInputs();
      }}>
      <input
        type="email"
        value={email}
        placeholder="enter your email"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        placeholder="enter your password"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(event.target.value);
        }}
      />

      <button type="submit">Log in</button>
    </form>
  );
};

export default Authentcation;
