import { createUser, userExists } from "@/src/data/users";

export default async function register(req, res) {
  if (req.method === 'POST') {
    try {
      const { username, password, displayName } = req.body;
      if((await userExists(username))) return res.status(400).json({message: 'User already exists with this username'})
      await createUser(username, password, displayName);

      res.status(200).json({ message: 'Success' });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}