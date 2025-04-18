const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const apiEndpoint = process.env.API_ENDPOINT || 'https://your-api-gateway-endpoint.amazonaws.com/prod/files';

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint info
app.get('/api-info', (req, res) => {
  res.json({ apiEndpoint });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`API Endpoint: ${apiEndpoint}`);
});