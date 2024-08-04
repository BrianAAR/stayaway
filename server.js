const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'client/public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});

const PORT = process.env.PORT || 5009;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
