export async function register() {
  // Only run in the Node.js server runtime (not Edge, not the browser)
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { seedAdmin } = await import('./lib/seed-admin');
    await seedAdmin();
  }
}
