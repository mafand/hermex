import { SocialIcon, socialNetworks, type SocialNetwork } from "../atoms";
import { cn } from "@/lib/cn";

type Props = {
  links: { network: SocialNetwork; href: string }[];
  className?: string;
};

export function SocialLinks({ links, className }: Props) {
  return (
    <ul className={cn("flex gap-2", className)}>
      {links.map(({ network, href }) => (
        <li key={network}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={socialNetworks[network].label}
            className="block rounded transition-opacity hover:opacity-80"
          >
            <SocialIcon network={network} />
          </a>
        </li>
      ))}
    </ul>
  );
}
