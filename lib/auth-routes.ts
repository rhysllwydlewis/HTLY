const safeFallbacks: Record<string, string> = {
  customer: '/account',
  guest: '/'
};

/**
 * Lightweight auth-prep helper for future Next-compatible account work.
 * Keep redirects same-origin and path-only so future OAuth state/returnTo values
 * cannot send travellers to an external site after sign in.
 */
export function getSafeReturnPath(value: string | null | undefined, role: 'customer' | 'guest' = 'customer') {
  if (!value || !value.startsWith('/') || value.startsWith('//') || value.includes('://')) {
    return safeFallbacks[role];
  }

  return value;
}
