import { createNavigation } from 'next-intl/navigation';
import { routing } from './i18n/routing';

// Locale-aware Link, useRouter, usePathname, redirect.
// Import these instead of next/link or next/navigation for all internal routes.
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
