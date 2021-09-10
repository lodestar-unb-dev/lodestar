import { Document } from '@prismicio/client/types/documents';
import { NextApiRequest, NextApiResponse } from 'next';
import { getPrismicClient } from '../../services/prismic';

function linkResolver(doc: Document): string {
  return '/';
}

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const prismic = getPrismicClient();
  const ref = req.query.token as string;
  const documentID = req.query.documentID as string;

  // Check the token parameter against the Prismic SDK
  const redirectUrl = await prismic
    .getPreviewResolver(ref, documentID)
    .resolve(linkResolver, '/');

  if (!redirectUrl) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({
    ref, // pass the ref to pages so that they can fetch the draft ref
  });

  // res.writeHead(302, { Location: `${redirectUrl}` });
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${redirectUrl}" />
    <script>window.location.href = '${redirectUrl}'</script>
    </head>`
  );
  return res.end();
}
