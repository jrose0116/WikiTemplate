import { deletePage } from '@/src/data/pages';

export default async function editPage(req, res) {
  if (req.method === 'POST') {
    try {
      const { title } = req.body;
      await deletePage(title);
      res.status(200).json({ message: 'Success' });
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}