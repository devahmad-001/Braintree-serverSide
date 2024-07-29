const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(express.json()); // To handle JSON request bodies

const paymentRoute=require('./paymentRoute');
app.use('/api',paymentRoute)

// Routes
// app.get('/api/user', (req, res) => {
//     res.json({
//         id: 1,
//         name: 'John Doe',
//         email: 'johndoe@example.com'
//     });
// });

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
