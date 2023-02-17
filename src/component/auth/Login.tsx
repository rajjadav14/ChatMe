import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { validateLoginForm } from "../../utils/validate";
import { CircularProgress } from "@mui/material";
import { login } from "../../api/userApi";
import { setJWTToken } from "../../utils/storageService";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passError, setPassError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showModel, setShowModel] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const history = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    const valid = validateLoginForm({ email, password });

    if (valid.isValid === false) {
      valid.message === "email" && setEmailError(true);
      valid.message === "password" && setPassError(true);
      return;
    }

    const result = await login({ email, password });

    // storing JWT token
    if (result.status === 200) {
      result.token && setJWTToken(result.token);
      setSuccess(true);
      history("/chats");
    } else {
      setSuccess(false);
    }

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
          minHeight: "440px",
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                <Typography component="h1" variant="h6">
                  Login
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
  );
}

export default Login;
