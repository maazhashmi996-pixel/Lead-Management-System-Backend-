const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const asyncWrapper = require('../middleware/async'); // centralized error handling
const { BadRequestError, UnauthenticatedError, NotFoundError } = require('../errors');

// ================= Register new user =================
const register = asyncWrapper(async (req, res) => {
  const role = req.body.role || "csr"; // default CSR
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    lastName: req.body.lastName,
    location: req.body.location,
    role
  });
