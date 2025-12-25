const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./db/connect');

const app = express();
app.use(express.json());

// Routes
const leadRoutes = require('./routes/leads');
const authRoutes = require('./routes/auth');

app.use('/api/leads', leadRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
}).catch((err) => {
    console.error('❌ Server failed to start:', err.message);
});
