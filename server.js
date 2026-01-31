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
let devices = [];

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

app.post('/register-device', (req, res) => {
    const { deviceId, ipAddress, phoneNumber1, phoneNumber2 } = req.body;
    devices.push({ deviceId, ipAddress, phoneNumber1, phoneNumber2 });
    res.sendStatus(200);
});

app.get('/devices', (req, res) => {
    res.json(devices);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});