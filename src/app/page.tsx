import { siBluesky as BlueskyIcon, siGithub as GithubIcon } from "simple-icons";

import { PostList } from "#/components/post-list";
import { Title } from "#/components/typography";
import { MY_DID } from "#/lib/bsky";
import { cx } from "#/lib/cx";

export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-[400px]">
        <div>
          <span className="font-bold text-xs">a webbed site</span>
          <Title level="h1" className="m-0">
            mozzius.dev
          </Title>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <PostList />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={`https://bsky.app/profile/${MY_DID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width={16} height={16} viewBox="0 0 24 24">
            <path d={BlueskyIcon.path} />
          </svg>
          Bluesky
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/mozzius"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width={16} height={16} viewBox="0 0 24 24">
            <path d={GithubIcon.path} />
          </svg>
          Github
        </a>
      </footer>
    </div>
  );
}
