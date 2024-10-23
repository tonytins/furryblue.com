import { ClockIcon } from "lucide-react";
import { type ComWhtwndBlogEntry } from "@atcute/client/lexicons";
import Link from "next/link";
import readingTime from "reading-time";

import { bsky, MY_DID } from "#/lib/bsky";

import { Paragraph, Title } from "./typography";

export async function PostList() {
  const posts = await bsky.get("com.atproto.repo.listRecords", {
    params: {
      repo: MY_DID,
      collection: "com.whtwnd.blog.entry",
      // todo: pagination
    },
  });

  return posts.data.records.map((record) => {
    const post = record.value as ComWhtwndBlogEntry.Record;
    const rkey = record.uri.split("/").pop();
    return (
      <Link key={record.uri} href={`/post/${rkey}`} className="w-full">
        <article
          key={record.uri}
          className="w-full flex flex-col pt-2.5 pb-2 border-b relative after:absolute after:inset-0 after:origin-bottom after:scale-y-0 hover:after:scale-y-100 px-1 after:transition-transform after:bg-slate-800/20"
        >
          <Title className="text-lg" level="h3">{post.title}</Title>
          <Paragraph>
            <ClockIcon className="text-inherit inline size-3" />{" "}
            {readingTime(post.content).text}
          </Paragraph>
        </article>
      </Link>
    );
  });
}
