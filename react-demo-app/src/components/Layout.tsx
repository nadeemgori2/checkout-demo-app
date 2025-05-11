/**
 * Layout component
 * Wraps pages with consistent max-width, background, and padding.
 * Applies a clean centered container especially for desktop screens.
 *
 * Mobile: No outer margin/padding, renders edge-to-edge.
 * Desktop: Centered layout with padding.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--background-light)] px-0 py-0 md:px-4 md:py-6 flex justify-center items-center">
      <div className="w-full max-w-[600px] flex-grow">{children}</div>
    </div>
  );
}
