const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs'); // For saving data to a file
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like your HTML form) from the 'public' folder
app.use(express.static('public'));

// Handle form submission
app.post('/submit', (req, res) => {
    const formData = req.body;
    
    // Save data to a file (you could also save to a database here)
    fs.appendFile('formdata.txt', JSON.stringify(formData) + '\n', (err) => {
        if (err) {
            console.error('Failed to save data', err);
            return res.status(500).send('Internal Server Error');
        }
        res.send('Form data saved successfully!');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
