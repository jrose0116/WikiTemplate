import { createPage, getPage } from '@/src/data/pages';

export default async function editPage(req, res) {
  if (req.method === 'POST') {
    try {
      const { title, content, author } = req.body;
      if((await getPage(title))._id) return res.status(400).json({message: 'Page already exists'})
      await createPage(title, content, author);
      res.status(200).json({ message: 'Success' });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  } else {
    res.status(405).json({ nessage: 'Method Not Allowed' });
  }
}