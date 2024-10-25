import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { getPost } from "#/lib/api";

export const dynamic = "force-static";

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

  const fontData = await readFile(
    join(process.cwd(), "./src/app/fonts/LibreBaskerville-Italic.ttf"),
  ).then((res) => Uint8Array.from(res).buffer);

  const post = await getPost(rkey);

  return new ImageResponse(
    (
      <div tw="h-full w-full bg-white flex flex-col justify-center items-center px-20">
        <h1
          style={{
            fontFamily: '"Libre Baskerville"',
            fontSize: 80,
            textTransform: "uppercase",
            fontWeight: 700,
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          {post.value.title}
        </h1>
        <h1
          style={{
            fontSize: 32,
            fontStyle: "italic",
            fontFamily: '"Libre Baskerville"',
          }}
        >
          mozzius.dev
        </h1>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Libre Baskerville",
          data: fontData,
        },
      ],
    },
  );
}
