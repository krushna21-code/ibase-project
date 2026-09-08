const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
  try {
    const t = (req.headers.authorization || '').split(' ')[1];
    req.user = jwt.verify(t, process.env.JWT_SECRET);
    next();
  } catch (e) {
    res.status(401).json({ message: 'Authentication required' });
  }
};

exports.admin = (req, res, next) =>
  req.user.role === 'admin'
    ? next()
    : res.status(403).json({ message: 'Admin access required' });
