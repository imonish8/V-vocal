const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Add this line to serve static files from the 'public' directory

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Update the path to match your file structure
});

// ... (the rest of your app routes)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
