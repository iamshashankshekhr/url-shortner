import React from "react";
import {useState} from "react";
import { Box, TextField, Button, Stack } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';


export default function UrlForm(){

    const [url,setUrl] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    // Submission logic will go here
    console.log('URL to shorten:', url);
  };


    return (
    
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <TextField
          fullWidth
          label="Enter your long URL"
          placeholder="https://example.com/very-long-link"
          variant="outlined"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          startIcon={<LinkIcon />}
        >
          Shorten URL
        </Button>
      </Stack>
    </Box>
    
    )
}
