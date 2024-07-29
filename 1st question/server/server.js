const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 9876;

app.use(cors()); // Enable CORS

let windowSize = 10;
let numbers = [];

const testServerUrls = {
    'p': 'http://20.244.56.144/test/primes',
    'f': 'http://20.244.56.144/test/fibo', // Ensure this endpoint is correct
    'e': 'http://20.244.56.144/test/even',
    'r': 'http://20.244.56.144/test/rand'
};

// Root route for testing
app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

app.get('/numbers/:id', async (req, res) => {
    const { id } = req.params;
    const url = testServerUrls[id];
    
    if (!url) {
        return res.status(400).send('Invalid ID');
    }
    
    let windowPrevState = [...numbers];
    
    try {
        const response = await axios.get(url, { timeout: 500 });
        const newNumbers = response.data.numbers.filter(n => !numbers.includes(n));
        
        numbers = [...numbers, ...newNumbers].slice(-windowSize);
        let avg = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
        
        res.json({
            windowPrevState,
            windowCurrState: numbers,
            numbers: newNumbers,
            avg: avg.toFixed(2)
        });
    } catch (error) {
        console.error('Error fetching numbers:', error.message);
        res.status(500).send('Error fetching numbers');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
