import { createPage } from '@/src/styles/data/pages';

export default async function editPage(req, res) {
  if (req.method === 'POST') {
    try {
      const { title, content, author } = req.body;
      await createPage(title, content, author);
      res.status(200).json({ message: 'Success' });
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}