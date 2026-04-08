import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import axios from "axios";
import { setToken } from "../services/auth";
import { apiClient } from "../services/apiClient";

export default function LoginPage() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await apiClient.post(`/api/users/login`, {
        user_name: userName,
        password,
      });

      setToken(data.accessToken);
      navigate("/", { replace: true });
    } catch (err) {
      const message = axios.isAxiosError(err)
        ? err.response?.data?.error || "Login failed"
        : "Login failed";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Paper sx={{ p: 3, maxWidth: 420, mx: "auto", mt: 8 }}>
      <Typography variant="h6" mb={2}>
        Login
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          required
        />

        {error ? (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        ) : null}

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </Box>
    </Paper>
  );
}
