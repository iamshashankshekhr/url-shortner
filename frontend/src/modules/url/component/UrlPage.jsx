import React, { useState } from "react";
import { shortenUrlApi } from "../api/api";
import { Container, Paper, Box, Typography, Stack } from "@mui/material";
import UrlForm from "./UrlForm";
import UrlResult from "./UrlResult";

export default function UrlPage() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url.trim()) {
      setError("Please provide a valid URL");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await shortenUrlApi(url);
      const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";
      const theCompleteLink = `${baseUrl}/${response.newUrl.shortCode}`;
      setShortUrl(theCompleteLink);
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Failed to shorten URL. Make sure the server is running.";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Stack spacing={3}>
            <Box>
              <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 1 }}>
                URL Shortener
              </Typography>
              <Typography variant="body2" align="center" color="text.secondary">
                Paste your long link and get a quick, trackable short URL.
              </Typography>
            </Box>

            <UrlForm 
              url={url} 
              setUrl={setUrl} 
              handleSubmit={handleSubmit} 
              loading={loading} 
              error={error} 
            />

            {shortUrl && <UrlResult shortUrl={shortUrl} />}
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}
