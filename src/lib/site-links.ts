export const SITE_LINKS = {
  tiktok: 'https://tiktok.com/@tumblerpigeon',
  instagram: 'https://instagram.com/tumblerpigeon',
  patreon: 'https://patreon.com/tumblerpigeon',
  pigeonarc: 'https://pigeonarc.com',
} as const;

export const CREATOR_SOCIALS = [
  { id: 'tiktok', label: 'TikTok', href: SITE_LINKS.tiktok },
  { id: 'instagram', label: 'Instagram', href: SITE_LINKS.instagram },
  { id: 'patreon', label: 'Patreon', href: SITE_LINKS.patreon },
] as const;
