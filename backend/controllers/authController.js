
const User = require('../models/User');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.register = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const user = new User({ email, password, role });
    await user.save();
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Verify your email',
      html: `<a href="http://localhost:5000/api/auth/verify/${token}">Click to verify</a>`
    };
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Registered! Check your email for verification.' });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed' });
    
  }
};

exports.verifyEmail = async (req, res) => {
  const token = req.params.token;
  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET);
    await User.updateOne({ email }, { verified: true });
    res.send('✅ Email verified successfully! You can now login.');
  } catch {
    res.status(400).send('❌ Invalid or expired token.');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  if (!user.verified) return res.status(403).json({ message: 'Email not verified' });
  const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET);
  res.cookie('token', token, { httpOnly: true });
  res.json({ message: 'Login successful', token });
};

exports.logout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out' });
};
