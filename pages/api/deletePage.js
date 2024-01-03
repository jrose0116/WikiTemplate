import { deletePage, getPage } from '@/src/data/pages';
import { getServerSession } from 'next-auth';
import {authOptions} from "@/pages/api/auth/[...nextauth]"

export default async function deletePageRoute(req, res) {
  if (req.method === 'POST') {
    try {
      const session = await getServerSession(req, res, authOptions)

      if(!session) return res.status(401).json({error: "Unauthenticated"})

      const { title } = req.body;
      const page = await getPage(title)

      if(!page) return res.status(404).json({error: "Page Not Found"})

      if (page.authorId != session.user.sub) return res.status(403).json({error: "Unauthorized"})

      await deletePage(title);
      res.status(200).json({ message: 'Success' });
    } catch (error) {
      console.log(error)
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}