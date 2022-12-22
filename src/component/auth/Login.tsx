import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passError, setPassError] = useState<boolean>(false);
  const [submit, setSubmit] = useState<boolean>(false);

  // const handleSubmit = () => {
  //   const isValid = true;
  //   if (isValid.result === "Error") {
  //     isValid.msg === "email" ? setEmailError(true) : setPassError(true);
  //     return;
  //   }

  //   setSubmit(true);
  // };

  const handleClose = () => setSubmit(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          top: "50%",
          border: 1,
          borderRadius: "16px",
          borderColor: "black",
          backgroundColor: "rgb(75,132,117)",
          padding: 3,
          opacity: "0.9",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#044718", width: 70, height: 70 }}>
          <LockOutlinedIcon fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h4">
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={() => {
            console.log();
          }}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            variant="filled"
            error={emailError}
            required
            sx={{
              backgroundColor: "white",
            }}
            fullWidth
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            helperText={emailError && "Please enter valid Email"}
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            variant="filled"
            required
            sx={{
              backgroundColor: "white",
            }}
            error={passError}
            fullWidth
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
              setPassError(false);
            }}
            label="Password"
            helperText={passError && "Please enter valid 5 digit Password"}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            onClick={() => {
              console.log("opo");
            }}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            <Typography component="h1" variant="h6">
              Login
            </Typography>
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={submit}
        //anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%", backgroundColor: "lightgreen" }}
        >
          Success!
        </Alert>
      </Snackbar>
    </>
    // </Container>
  );
}

export default Login;
