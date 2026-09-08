const express = require('express'),
      cors = require('cors'),
      path = require('path');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/buses', require('./routes/buses'));
app.use('/api/bookings', require('./routes/bookings'));

app.get('/api/health', (q, s) => s.json({ status: 'OK' }));

app.get('*', (q, s) => {
  s.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log('BusGo: http://localhost:' + (process.env.PORT || 5000));
});
