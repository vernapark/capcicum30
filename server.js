const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

let messages = [];

app.post('/receive-sms', (req, res) => {
    const { sender, message } = req.body;
    messages.push({ sender, message });
    res.sendStatus(200);
});

app.get('/messages', (req, res) => {
    res.json(messages);
});

app.post('/send-sms', (req, res) => {
    const { recipient, message, simSlot } = req.body;
    // Here you would add the logic to send the SMS using the specified simSlot
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});