"use client"

import { useLanguage } from "@/contexts/LangContext"

interface VideoEmbedProps {
  id: number;
  url: string;
  width?: string;
  height?: string;
}


const dataSample = {
  id: 1,
  url: "https://www.youtube.com/watch?v=Qr7Ng6fpqnk",
  width: "70%",
  height: "100%"
}

const getEmbedUrl = (videoUrl: string): string | null => {
  videoUrl ?? dataSample
  const youtubeRegex =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|watch\?v%3D)([\w-]{11}).*/;
  const youtubeMatch = videoUrl.match(youtubeRegex);

  if (youtubeMatch && youtubeMatch[2].length === 11) {
    return `https://www.youtube.com/embed/${youtubeMatch[2]}`;
  }

  // Add support for other video platforms here

  return null;
};

export default function VideoEmbed({ data }: { data: VideoEmbedProps }) {
  const embedUrl = getEmbedUrl(data.url);
  const { translations } = useLanguage()
  console.log("🚀 ~ VideoEmbed ~ translations:", translations)

  if (!embedUrl) return <div>Invalid video URL</div>;

  return (
    <div className="block flex-col justify-center h-full w-full relative container">
      <h2 className="text-3xl font-bold text-center my-10 block">
        {translations?.home?.youtubeEmbed?.title}
      </h2>
    <div className="video-embed relative pb-56.25 h-72 lg:h-[600px] overflow-hidden my-8 max-w-6xl mx-auto ">
      
      <iframe
        title="video"
        src={embedUrl || ""}
        width={data.width || "100%"}
        height={data.height || "100%"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
        />
        </div>
    </div>
  );
}
