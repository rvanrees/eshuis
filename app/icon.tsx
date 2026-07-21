import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Metadata
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Icoon: gele "G" in Dancing Script op transparante achtergrond
export default async function Icon() {
  const dancingScript = await readFile(
    join(process.cwd(), "assets/DancingScript-Bold.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Dancing Script",
          fontWeight: 700,
          fontSize: 60,
          lineHeight: 1,
          color: "#ffb347",
          // iets omhoog zodat de krul mooi in het vierkant valt
          paddingBottom: 6,
        }}
      >
        G
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Dancing Script",
          data: dancingScript,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
