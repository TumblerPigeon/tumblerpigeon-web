import { redirect } from 'next/navigation';

// Root path redirects to the default locale.
export default function RootPage() {
  redirect('/en');
}
