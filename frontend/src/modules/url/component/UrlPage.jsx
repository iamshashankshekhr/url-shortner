import React from "react";
import { Container, Paper, Box, Typography, Stack } from "@mui/material";
// Change from "./components/UrlForm" to "./UrlForm" because they sit in the same folder
import UrlForm from "./urlForm";
import UrlResult from "./urlResult";


export default function UrlPage() {

    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
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
            
            <UrlForm />
            
            <UrlResult />
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}
