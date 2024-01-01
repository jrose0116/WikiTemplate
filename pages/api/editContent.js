import { editContent } from '@/src/styles/data/pages';

export default async function editPage(req, res) {
  if (req.method === 'POST') {
    try {
      const { title, content } = req.body;
      await editContent(title, content);
      res.status(200).json({ message: 'Success' });
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}