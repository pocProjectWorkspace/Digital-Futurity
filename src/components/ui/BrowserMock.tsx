'use client';

/**
 * Tasteful placeholder product UI, framed in browser chrome.
 * Swap for real product screenshots when available:
 *   <BrowserMock src="/mockups/upllyft.png" />
 */
export default function BrowserMock({
  src,
  url = 'app.yourproduct.com',
  className = '',
}: {
  src?: string;
  url?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-border-bright bg-surface overflow-hidden shadow-2xl ${className}`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-surface-2 border-b border-border">
        <span className="w-3 h-3 rounded-full bg-red-400/60" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
        <span className="w-3 h-3 rounded-full bg-green-400/60" />
        <div className="ml-3 flex-1 max-w-xs h-6 rounded-md bg-background/60 border border-border flex items-center px-3">
          <span className="text-[11px] text-silver/60 truncate">{url}</span>
        </div>
      </div>

      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="Product screenshot" className="w-full block" />
      ) : (
        <PlaceholderDashboard />
      )}
    </div>
  );
}

function PlaceholderDashboard() {
  return (
    <div className="grid grid-cols-[64px_1fr] h-[300px] md:h-[360px]">
      {/* Sidebar */}
      <div className="border-r border-border bg-background/40 p-3 flex flex-col gap-3">
        <div className="w-8 h-8 rounded-lg bg-cyan/20 border border-cyan/30" />
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-8 h-2.5 rounded bg-border-bright" />
        ))}
      </div>

      {/* Main */}
      <div className="p-5 flex flex-col gap-4">
        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { v: 'w-10', accent: true },
            { v: 'w-12', accent: false },
            { v: 'w-8', accent: false },
          ].map((c, i) => (
            <div key={i} className="rounded-lg border border-border bg-surface-2 p-3 flex flex-col gap-2">
              <div className="w-14 h-2 rounded bg-border-bright" />
              <div className={`${c.v} h-4 rounded ${c.accent ? 'bg-cyan/70' : 'bg-silver/40'}`} />
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="rounded-lg border border-border bg-surface-2 p-4 flex-1 flex items-end gap-2">
          {[40, 65, 50, 80, 60, 95, 72, 88].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-cyan/20 to-cyan/70"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-2">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-violet/30 border border-violet/40" />
              <div className="flex-1 h-2.5 rounded bg-border-bright" />
              <div className="w-10 h-2.5 rounded bg-silver/30" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
