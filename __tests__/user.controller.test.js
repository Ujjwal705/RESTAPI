import {
  handleGetAllUsers,
  handlegetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} from '../src/controllers/user.controller.js';

// Mock the User model used by controllers
jest.mock('../src/models/user.model.js', () => ({
  find: jest.fn(),
  findById: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  findByIdAndDelete: jest.fn(),
  create: jest.fn(),
}));

import User from '../src/models/user.model.js';

function mockRes() {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
}

describe('User controllers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('handleGetAllUsers returns all users', async () => {
    const users = [{ firstName: 'A' }];
    User.find.mockResolvedValue(users);
    const req = {};
    const res = mockRes();
    await handleGetAllUsers(req, res);
    expect(User.find).toHaveBeenCalledWith({});
    expect(res.json).toHaveBeenCalledWith(users);
  });

  test('handlegetUserById returns 404 when not found', async () => {
    User.findById.mockResolvedValue(null);
    const req = { params: { id: '1' } };
    const res = mockRes();
    await handlegetUserById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });
  });

  test('handleCreateNewUser creates a user and returns 201', async () => {
    const created = { _id: 'abc' };
    User.create.mockResolvedValue(created);
    const req = {
      body: {
        firstName: 'Alice',
        lastName: 'Cooper',
        email: 'a@b.com',
        gender: 'female',
        jobTitle: 'Engineer',
      },
    };
    const res = mockRes();
    await handleCreateNewUser(req, res);
    expect(User.create).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Success',
      id: created._id,
    });
  });

  test('handleUpdateUserById returns 400 when no update fields', async () => {
    const req = { params: { id: '1' }, body: {} };
    const res = mockRes();
    await handleUpdateUserById(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: 'No valid fields provided to update',
    });
  });

  test('handleDeleteUserById returns 404 when user not found', async () => {
    User.findByIdAndDelete.mockResolvedValue(null);
    const req = { params: { id: '1' } };
    const res = mockRes();
    await handleDeleteUserById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });
  });
});
