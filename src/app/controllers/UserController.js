import User from '../models/User';

class UserController {
  async store(req, res) {
    const UserExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (UserExists) {
      return res.status(400).json({ error: 'User already exist' });
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
