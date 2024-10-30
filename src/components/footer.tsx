import {
  siBluesky as BlueskyIcon, siPaypal as PaypalIcon,
  siMastodon as MastodonIcon, siRss as RSSIcon,
  siGithub as GithubIcon
} from "simple-icons";
import Image from "next/image";

import rating from "#/assets/ratings/rating_NYRc.gif";
import commons from "#/assets/commons/cc-zero.png";
import { MY_DID } from "#/lib/bsky";

export function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <div className="inline-flex gap-6 items-center">
        <a
          href="https://www.mabsland.com/Adoption.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={rating}
            alt="Site Not Yet Rated"
          />
        </a>
        <div className="row-start-3">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={`https://bsky.app/profile/${MY_DID}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width={16} height={16} viewBox="0 0 24 24" className="fill-black dark:fill-white">
              <path d={BlueskyIcon.path} />
            </svg>
            Bluesky
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={`https://tonybark.com/@tonytins`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width={16} height={16} viewBox="0 0 24 24" className="fill-black dark:fill-white">
              <path d={MastodonIcon.path} />
            </svg>
            Mastdoon
          </a>
        </div>
        <div className="row-start-3">

          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/tonytins/furryblue.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width={16} height={16} viewBox="0 0 24 24" className="fill-black dark:fill-white">
              <path d={GithubIcon.path} />
            </svg>
            GitHub
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={`https://paypal.me/ZackCasey`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width={16} height={16} viewBox="0 0 24 24" className="fill-black dark:fill-white">
              <path d={PaypalIcon.path} />
            </svg>
            PayPal
          </a>
        </div>
        <div className="row-start-3">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://furryblue.com/rss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width={16} height={16} viewBox="0 0 24 24" className="fill-black dark:fill-white">
              <path d={RSSIcon.path} />
            </svg>
            RSS
          </a>
        </div>
        <a
          href="https://creativecommons.org/publicdomain/zero/1.0/deed.en"
          target="_blank"
          rel="noopener noreferrer"
        >

          <Image
            src={commons}
            alt="Public Domain"
          />
        </a>
      </div>
    </footer>
  );
}
