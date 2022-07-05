import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useAuth from "../hooks/useAuth";

export default () => {
    const { changePassword } = useAuth();
    const [loginError, setLoginError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    const [password, setPassword] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (data.get("passwordRepeat") !== password) {
            setPasswordError(true);
            return
        }
        changePassword({
            password: password
        }).then((res) => {
            if (res == 0) {
                setLoginError(true)
            } else {
                setLoginError(false)
            }
        });
    };

    React.useEffect(() => {
        var strength = 0;
        if (password.match(/[a-z]+/)) {
            strength += 1;
        }
        if (password.match(/[A-Z]+/)) {
            strength += 1;
        }
        if (password.match(/[0-9]+/)) {
            strength += 1;
        }
        if (password.match(/[$@#&!]+/)) {
            strength += 1;
        }
        if (password.length >= 8) {
            strength += 1;
        }
        if (strength === 5) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }


    }, [password])

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Change Password
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={(e) => { setPassword(e.target.value) }}
                        error={passwordError}
                        helperText={passwordError ? "Passwords do not match!" : ""}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="passwordRepeat"
                        label="Password Repeat"
                        type="password"
                        id="passwordRepeat"
                        error={passwordError}
                        helperText={passwordError ? "Passwords do not match!" : ""}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={buttonDisabled}
                    >
                        Change Password
                    </Button>
                    <p style={{ textAlign: 'center' }}>Your password should be minimum 8 characters and contain at least one capital letter, one underscore charater, one special charater, and one number.</p>
                </Box>
            </Box>
        </Container>
    );
};
