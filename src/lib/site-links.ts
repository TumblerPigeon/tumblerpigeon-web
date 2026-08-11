export const SITE_LINKS = {
  tiktok: 'https://www.tiktok.com/@tumblerpigeon_',
  instagram: 'https://www.instagram.com/tumblerpigeon_/',
  patreon: 'https://www.patreon.com/cw/PigeonsNest',
  pigeonarc: 'https://pigeonarc.com/',
} as const;

export const CREATOR_SOCIALS = [
  { id: 'tiktok', label: 'TikTok', href: SITE_LINKS.tiktok },
  { id: 'instagram', label: 'Instagram', href: SITE_LINKS.instagram },
  { id: 'patreon', label: 'Patreon', href: SITE_LINKS.patreon },
] as const;
