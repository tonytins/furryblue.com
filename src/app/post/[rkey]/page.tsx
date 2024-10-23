import Markdown from "react-markdown";
import { type ComWhtwndBlogEntry } from "@atcute/client/lexicons";
import { Code as SyntaxHighlighter } from "bright";
import Link from "next/link";
import readingTime from "reading-time";
import rehypeSanitize from "rehype-sanitize";

import { Code, Paragraph, SANS, Title } from "#/components/typography";
import { bsky, MY_DID } from "#/lib/bsky";
import { cx } from "#/lib/cx";
import { ArrowLeftIcon } from "lucide-react";

export const dynamic = "force-static";

export default async function BlogPage({
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

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen py-8 px-4 xs:px-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-[600px] overflow-hidden">
        <article className="w-full">
          <div className="space-y-4 w-full pb-2">
            <Link href="/" className="hover:underline hover:underline-offset-4 font-medium">
              <ArrowLeftIcon className="inline size-4 align-middle mb-px mr-1" />Back
            </Link>
            <Title>{entry.title}</Title>
            <Paragraph>
              By{" "}
              <a
                href={`https://bsky.app/profile/${MY_DID}`}
                className="hover:underline hover:underline-offset-4"
              >
                Samuel
              </a>{" "}
              {entry.createdAt && (
                <>
                  &middot;{" "}
                  <time dateTime={entry.createdAt}>
                    {date(new Date(entry.createdAt))}
                  </time>
                </>
              )}{" "}
              &middot; {readingTime(entry.content).text}
            </Paragraph>
            <div className="diagonal-pattern w-full h-3" />
          </div>
          <Markdown
            className={cx(SANS, "mt-12")}
            rehypePlugins={[rehypeSanitize]}
            components={{
              h1: (props) => <Title level="h1" {...props} />,
              h2: (props) => <Title level="h2" {...props} />,
              h3: (props) => <Title level="h3" {...props} />,
              h4: (props) => <Title level="h4" {...props} />,
              h5: (props) => <Title level="h5" {...props} />,
              h6: (props) => <Title level="h6" {...props} />,
              p: (props) => (
                <Paragraph
                  className="leading-7 [&:not(:first-child)]:mt-6"
                  {...props}
                />
              ),
              blockquote: (props) => (
                <blockquote
                  className="mt-6 border-l-2 pl-4 italic border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-400"
                  {...props}
                />
              ),
              ul: (props) => (
                <ul
                  className="my-6 ml-6 list-disc [&>ul]:my-2 [&>ol]:my-2 [&>li]:mt-2"
                  {...props}
                />
              ),
              ol: (props) => (
                <ol
                  className="my-6 ml-6 list-decimal [&>ul]:my-2 [&>ol]:my-2 [&>li]:mt-2"
                  {...props}
                />
              ),
              li: (props) => <li className="leading-7" {...props} />,
              code: (props) => {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                if (match) {
                  return (
                    <SyntaxHighlighter
                      {...rest}
                      children={String(children).replace(/\n$/, "")}
                      lang={match[1]}
                      className="!mt-8 text-sm rounded !max-w-full overflow-hidden"
                    />
                  );
                } else {
                  return <Code {...props} />;
                }
              },
              a: ({ href, ...props }) => (
                <a
                  href={href}
                  className="font-medium underline underline-offset-4"
                  {...props}
                />
              ),
            }}
          >
            {entry.content}
          </Markdown>
        </article>
      </main>
    </div>
  );
}

const { format: date } = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
});
