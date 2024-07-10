import React, { useState } from "react";

const Authentcation = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    const newUser = {
      email,
      password,
    };

    console.log(newUser);
  };

  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit();
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
