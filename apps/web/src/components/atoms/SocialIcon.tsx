import Image from "next/image";

export const socialNetworks = {
  whatsapp: { src: "/social/whatsapp.svg", label: "WhatsApp" },
  instagram: { src: "/social/instagram.svg", label: "Instagram" },
  tiktok: { src: "/social/tiktok.svg", label: "TikTok" },
};

export type SocialNetwork = keyof typeof socialNetworks;

type Props = {
  network: SocialNetwork;
  className?: string;
};

export function SocialIcon({ network, className }: Props) {
  const { src, label } = socialNetworks[network];
  return (
    <Image src={src} alt={label} width={32} height={32} className={className} />
  );
}
