import React from 'react';
import { useState } from 'react';
import { Paper, Box, Typography, IconButton, Tooltip, Stack, Snackbar, Alert } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function UrlResult({shortUrl}) {

  const[copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    
  };

  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, bgcolor: 'grey.50', width: '100%', mt: 2 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', mr: 1 }}>
            <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold' }}>
              {shortUrl}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <Tooltip title="Copy to clipboard">
              <IconButton onClick={handleCopy} aria-label="copy link" color="primary">
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open link">
              <IconButton 
                component="a" 
                href={shortUrl} 
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
      {/* Pop-up feedback message when copied */}
      <Snackbar 
        open={copied} 
        autoHideDuration={3000} 
        onClose={() => setCopied(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setCopied(false)} severity="success" sx={{ width: '100%' }}>
          Short link copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
}
