import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import RSS from "rss";
import { unified } from "unified";

import { getPosts } from "#/lib/api";

export const dynamic = "force-static";
export const revalidate = 3600; // 1 hour

export async function GET() {
  const posts = await getPosts();

  const rss = new RSS({
    title: "furryblue.com",
    feed_url: "https://furryblue.com/rss",
    site_url: "https://furryblue.com",
    description: "a webbed site",
  });

  for (const post of posts) {
    rss.item({
      title: post.value.title ?? "Untitled",
      description: await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeFormat)
        .use(rehypeStringify)
        .process(post.value.content)
        .then((v) => v.toString()),
      url: `https://furryblue.com/post/${post.uri.split("/").pop()}`,
      date: new Date(post.value.createdAt ?? Date.now()),
    });
  }

  return new Response(rss.xml(), {
    headers: {
      "content-type": "application/rss+xml",
    },
  });
}
