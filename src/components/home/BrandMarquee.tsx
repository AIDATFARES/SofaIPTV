import Image from "next/image";

interface BrandMarqueeProps {
  imagesFolder?: string;
  images?: string[];
  cardClassName?: string;
  imageClassName?: string;
}

function getMetadataForImage(folder: string, filename: string) {
  const cleanName = filename
    .replace(/\.webp$/i, '')
    .replace(/^(sofa-(?:network|device|sports|vod)-)/i, '')
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  if (folder === 'devices') {
    return {
      alt: `Stream SofaIPTV 4K on ${cleanName}`,
      title: `${cleanName} IPTV Setup - SofaIPTV`
    };
  }

  if (folder === 'channel2' || folder === 'sports') {
    return {
      alt: `Watch ${cleanName} live sports on SofaIPTV`,
      title: `SofaIPTV Live Sports - ${cleanName}`
    };
  }

  return {
    alt: `Watch ${cleanName} channel live with SofaIPTV`,
    title: `SofaIPTV 4K Channel - ${cleanName}`
  };
}

export default function BrandMarquee({
  imagesFolder = "brands",
  images,
  cardClassName,
  imageClassName
}: BrandMarqueeProps) {
  const defaultBrands = [
    "sofa-network-sky-sports.webp",
    "sofa-network-bein-sports.webp",
    "sofa-network-nat-geo.webp",
    "sofa-network-espn-hd.webp",
    "sofa-network-canal-plus.webp",
    "sofa-network-tnt-sports.webp",
    "sofa-network-dazn-stream.webp",
    "sofa-network-fox-sports.webp",
    "sofa-network-cbs-sports.webp",
    "sofa-network-nbc-sports.webp",
    "sofa-network-eurosport-4k.webp",
    "sofa-network-disney-channel.webp",
    "sofa-network-cartoon-network.webp",
    "sofa-network-hbo-hd.webp",
    "sofa-network-cinemax-action.webp",
    "sofa-network-starz-hd.webp",
    "sofa-network-paramount-plus.webp",
    "sofa-network-bbc-news.webp",
    "sofa-network-discovery-channel.webp",
    "sofa-network-history-channel.webp"
  ];

  const brandList = images || defaultBrands;
  const repeatList = brandList.length < 10 
    ? [...brandList, ...brandList, ...brandList, ...brandList] 
    : [...brandList, ...brandList];

  return (
    <div className="w-full overflow-hidden bg-white py-6 relative flex items-center">
      {/* Left/Right Gradient Masks for smooth fading edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      {/* The scrolling container */}
      <div
        className={`flex gap-6 md:gap-8 px-6 items-center w-max ${brandList.length < 10 ? 'animate-marquee-fast' : 'animate-marquee'}`}
      >
        {repeatList.map((brand, i) => {
          const meta = getMetadataForImage(imagesFolder, brand);
          return (
            <div 
              key={i} 
              className={cardClassName || "flex-shrink-0 w-[100px] h-[50px] md:w-[140px] md:h-[65px] relative bg-white border border-stone-200 rounded-xl p-3 hover:bg-stone-50 hover:scale-105 transition-all duration-300 shadow-md"}
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <Image 
                  src={`/${imagesFolder}/${brand}`} 
                  alt={meta.alt}
                  title={meta.title}
                  fill
                  sizes="(max-width: 640px) 100px, (max-width: 1024px) 140px, 160px"
                  className={imageClassName || "object-contain drop-shadow-md rounded-lg"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
