import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div tw="h-full w-full bg-white flex flex-col justify-center items-center">
        <h1 tw="text-4xl">mozzius.dev</h1>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Libre Baskerville",
          data: await fetch(
            new URL("../fonts/LibreBaskerville-Bold.ttf", import.meta.url),
          ).then((res) => res.arrayBuffer()),
        },
      ],
    },
  );
}
