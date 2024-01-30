

import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const resetState = () => {
    setIsSignup(!isSignup);
    setInputs({ name: "", email: "", password: "" }); // Fix the typo here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"10px 10px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" color ="cornflowerblue" padding={3} textAlign="center">
            {" "}
            <strong>{isSignup ? "Signup" : "Login"}{" "} </strong>
          </Typography>

          {isSignup && (
            <TextField
              onChange={handleChange}
              name="name"
              value={inputs.name}
              margin="normal"
              type={"text"}
              variant="outlined"
              placeholder="Name"
            />
          )}
          <TextField
            onChange={handleChange}
            name="email"
            value={inputs.email}
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Email"
          />
          <TextField
            onChange={handleChange}
            name="password"
            value={inputs.password}
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
          />

          <button
            type="submit"
            style={{
              marginTop: 5,
              borderRadius: 5,
              border: "none",
              backgroundColor: "orange",
            }}
          >
            {" "}
            {isSignup ? "Signup" : "Login"}{" "}
          </button>

          <button
            onClick={resetState}
            style={{
              marginTop: 5,
              backgroundColor: "white",
              border: "none",
              color: "#6495ed",
            }}
          >
            Change To {isSignup ? "Login?" : "Signup?"}
          </button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;



