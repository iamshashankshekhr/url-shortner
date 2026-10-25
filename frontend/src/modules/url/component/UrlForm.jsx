import { TextField, Button, Stack, Alert, CircularProgress } from '@mui/material';


export default function UrlForm({ url, setUrl, handleSubmit, loading, error }) {


    return (
    
  <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        {error && (
          <Alert severity="error">
            {error}
          </Alert>
        )}
        <TextField
          label="Enter your long URL"
          placeholder="https://example.com/very-long-link"
          variant="outlined"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={loading}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          disabled={loading}
          sx={{ minHeight: 48 }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Shorten URL"}
        </Button>
      </Stack>
    </form>
    
    )
}
