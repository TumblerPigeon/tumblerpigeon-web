// Pure utility functions — no Node.js dependencies, safe for client components

export function getCategoryBg(category: string): string {
  const map: Record<string, string> = {
    'game-dev': 'bg-brand-blue/10 text-brand-blue',
    'income-business': 'bg-brand-red/10 text-brand-red',
    'product-reviews': 'bg-cream/10 text-cream',
    'life-misc': 'bg-cream-muted/10 text-cream-muted',
  };
  return map[category] ?? 'bg-cream-muted/10 text-cream-muted';
}

export function getCategoryColor(category: string): string {
  const map: Record<string, string> = {
    'game-dev': 'text-brand-blue border-brand-blue',
    'income-business': 'text-brand-red border-brand-red',
    'product-reviews': 'text-cream border-cream',
    'life-misc': 'text-cream-muted border-cream-muted',
  };
  return map[category] ?? 'text-cream-muted border-cream-muted';
}

export const CATEGORY_LABELS: Record<string, string> = {
  'game-dev': 'Game Dev',
  'income-business': 'Income & Business',
  'product-reviews': 'Product Reviews',
  'life-misc': 'Life & Misc',
};
