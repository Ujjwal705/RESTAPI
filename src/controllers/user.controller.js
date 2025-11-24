import User from '../models/user.model.js';

async function handleGetAllUsers(req, res) {
  try {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function handlegetUserById(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function handleUpdateUserById(req, res) {
  try {
    const updates = {};
    // accept both snake_case and camelCase from the client
    if (req.body.first_name) updates.firstName = req.body.first_name;
    if (req.body.last_name) updates.lastName = req.body.last_name;
    if (req.body.job_title) updates.jobTitle = req.body.job_title;
    if (req.body.firstName) updates.firstName = req.body.firstName;
    if (req.body.lastName) updates.lastName = req.body.lastName;
    if (req.body.jobTitle) updates.jobTitle = req.body.jobTitle;
    if (req.body.email) updates.email = req.body.email;
    if (req.body.gender) updates.gender = req.body.gender;

    if (Object.keys(updates).length === 0) {
      return res
        .status(400)
        .json({ message: 'No valid fields provided to update' });
    }

    const updated = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: 'User not found' });
    return res.json({ status: 'Success', user: updated });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function handleDeleteUserById(req, res) {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'User not found' });
    return res.json({ status: 'Success' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function handleCreateNewUser(req, res) {
  try {
    const body = req.body || {};
    // accept snake_case or camelCase
    const firstName = body.first_name || body.firstName;
    const lastName = body.last_name || body.lastName;
    const jobTitle = body.job_title || body.jobTitle;
    const email = body.email;
    const gender = body.gender;

    if (!firstName || !lastName || !email || !gender || !jobTitle) {
      return res
        .status(400)
        .json({
          message:
            'All fields are required: firstName, lastName, email, gender, jobTitle',
        });
    }

    const result = await User.create({
      firstName,
      lastName,
      email,
      gender,
      jobTitle,
    });
    return res.status(201).json({ message: 'Success', id: result._id });
  } catch (err) {
    console.error(err);
    // handle duplicate email error
    if (err.code === 11000) {
      return res.status(409).json({ message: 'Email already exists' });
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export {
  handleGetAllUsers,
  handlegetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};
