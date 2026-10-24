import React from 'react';
import { Paper, Box, Typography, IconButton, Tooltip, Stack } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function UrlResult() {
  const dummyShortUrl = "http://localhost:5000/a8bc12";

  const handleCopy = () => {
    navigator.clipboard.writeText(dummyShortUrl);
    alert('Copied to clipboard!');
  };

  return (
    <Paper variant="outlined" sx={{ p: 2, bgcolor: 'grey.50', width: '100%', mt: 2 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold' }}>
            {dummyShortUrl}
          </Typography>
        </Box>
        <Stack direction="row" spacing={1}>
          <Tooltip title="Copy to clipboard">
            <IconButton onClick={handleCopy} aria-label="copy link">
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Open link">
            <IconButton 
              component="a" 
              href={dummyShortUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="open link"
            >
              <OpenInNewIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Paper>
  );
}
