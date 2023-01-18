import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Typography,
  Avatar,
  Box,
  TextField,
  FormControlLabel,
  Button,
  Checkbox,
  Grid,
  Link,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { signUp } from "../../api/userApi";
import { validateSignUpForm } from "../../utils/validate";

interface IFile {
  url: string;
  name: string;
}
interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userImage, setUserImage] = useState<any>();
  const [userNameError, setUserNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passError, setPassError] = useState<boolean>(false);
  const [showModel, setShowModel] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);
    const valid = validateSignUpForm({ name: userName, password, email });
    if (valid.isValid === false) {
      valid.message === "email" ? setEmailError(true) : setPassError(true);
      valid.message === "name" && setUserNameError(true);
      return;
    }
    const result = await signUp({ email, password, name: userName });
    setSuccess(result.status === 200 ? true : false);
    setLoading(false);
    setShowModel(true);
  };

  const handleClose = () => setShowModel(false);

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
          minHeight: "540px",
          minWidth: "340px",
          opacity: "0.9",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Avatar sx={{ m: 1, bgcolor: "#044718", width: 70, height: 70 }}>
              <AccountCircleIcon fontSize="large" />
            </Avatar>
            <Typography component="h1" variant="h4">
              Sign up
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
                error={userNameError}
                required
                sx={{
                  backgroundColor: "white",
                }}
                fullWidth
                type="name"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  setUserNameError(false);
                }}
                helperText={userNameError && "Please enter valid user name"}
                id="name"
                label="Name"
                autoFocus
              />
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
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPassError(false);
                }}
                label="Password"
                helperText={passError && "Please enter valid 5 digit Password"}
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                sx={{
                  backgroundColor: "white",
                  marginTop: "10px",
                }}
                fullWidth
                onChange={(e: any) => {
                  console.log(e);
                  setUserImage(e.target.files[0]);
                  console.log(userImage);
                }}
                //helperText={passError && "Please enter valid 5 digit Password"}
                type="file"
              />
              <Button
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                <Typography component="h1" variant="h6">
                  Sign up
                </Typography>
              </Button>
            </Box>
          </>
        )}
      </Box>
      <Snackbar
        open={showModel}
        //anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={success ? "success" : "error"}
          sx={{
            width: "100%",
            backgroundColor: success ? "lightgreen" : "lightred",
          }}
        >
          {success ? "Success!" : "Something went wrong"}
        </Alert>
      </Snackbar>
    </>
    // </Container>
  );
}

export default SignUp;
