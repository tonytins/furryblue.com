import { ImageResponse } from "next/og";
import { type ComWhtwndBlogEntry } from "@atcute/client/lexicons";

import { bsky, MY_DID } from "#/lib/bsky";
import { date } from "#/lib/date";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ rkey: string }>;
}) {
  const { rkey } = await params;

  const post = await bsky.get("com.atproto.repo.getRecord", {
    params: {
      repo: MY_DID,
      rkey: rkey,
      collection: "com.whtwnd.blog.entry",
    },
  });

  const entry = post.data.value as ComWhtwndBlogEntry.Record;

  return new ImageResponse(
    (
      <div tw="h-full px-4 py-3 flex flex-col justify-end">
        <h1 tw='text-xl'>{entry.title}</h1>
        {entry.createdAt && <p>{date(new Date(entry.createdAt))}</p>}
      </div>
    ),
    {
      ...size,
    },
  );
}
