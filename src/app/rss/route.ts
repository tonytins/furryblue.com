import RSS from "rss";

import { getPosts } from "#/lib/api";

export const dynamic = "force-static";
export const revalidate = 3600; // 1 hour

export async function GET() {
  const posts = await getPosts();

  const rss = new RSS({
    title: "mozzius.dev",
    feed_url: "https://mozzius.dev/rss",
    site_url: "https://mozzius.dev",
    description: "a webbed site",
  });

  for (const post of posts) {
    rss.item({
      title: post.value.title ?? "Untitled",
      description: post.value.content,
      url: `https://mozzius.dev/post/${post.uri.split("/").pop()}`,
      date: new Date(post.value.createdAt ?? Date.now()),
    });
  }

  return new Response(rss.xml(), {
    headers: {
      "content-type": "application/xml+rss",
    },
  });
}
