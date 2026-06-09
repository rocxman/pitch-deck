"use client";

type DeckChromeProps = {
  menuOpen: boolean;
  onMenuToggle: () => void;
  isGridView: boolean;
  onGridToggle: () => void;
};

export function DeckChrome({
  menuOpen,
  onMenuToggle,
  isGridView,
  onGridToggle,
}: DeckChromeProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 bg-transparent">
      <div className="mx-auto flex h-[86px] w-full max-w-[1920px] items-center justify-between px-8 lg:px-12">
        {/* Left: Brand / Logo */}
        <div className="flex items-center">
          <a
            href="/"
            data-cursor-label="BERANDA"
            className="flex items-center select-none"
          >
            <img
              src="/logo+text+putih.svg"
              alt="Meanwhile Logo"
              className="h-[28px] md:h-[32px] w-auto transition-opacity duration-300 hover:opacity-80"
            />
          </a>
        </div>

        {/* Center: Controls (Flabbergast Style) */}
        <div className="flex items-center gap-3">
          {/* Menu Button Capsule */}
          <button
            onClick={onMenuToggle}
            data-cursor-label={menuOpen ? "TUTUP" : "MENU"}
            className="flex h-[46px] w-[140px] md:w-[160px] items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.08] px-6 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/[0.15] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] select-none">
              Menu
            </span>
            <div className="flex items-center gap-3">
              <span className="h-4 w-px bg-white/20"></span>
              <div className="relative w-5 h-3.5">
                {/* Hamburger lines with Flabbergast 30deg rotatational X transition */}
                <span
                  className={`absolute left-0 right-0 h-[1.2px] bg-white transition-all duration-300 top-1/2 ${
                    menuOpen
                      ? "-translate-y-1/2 rotate-[30deg]"
                      : "-translate-y-[2.5px]"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 right-0 h-[1.2px] bg-white transition-all duration-300 top-1/2 ${
                    menuOpen
                      ? "-translate-y-1/2 -rotate-[30deg]"
                      : "translate-y-[2.5px]"
                  }`}
                ></span>
              </div>
            </div>
          </button>

          {/* Grid Toggle Box */}
          <button
            onClick={onGridToggle}
            data-cursor-label={isGridView ? "DECK" : "GRID"}
            className="flex h-[46px] w-[46px] items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.08] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/[0.15] focus:outline-none"
            aria-label="Toggle grid layout"
          >
            {isGridView ? (
              // X Icon (30deg rotate to match Flabbergast style)
              <div className="relative w-5 h-5">
                <span className="absolute left-0 right-0 top-1/2 h-[1.2px] bg-white -translate-y-1/2 rotate-[30deg]"></span>
                <span className="absolute left-0 right-0 top-1/2 h-[1.2px] bg-white -translate-y-1/2 -rotate-[30deg]"></span>
              </div>
            ) : (
              // Flabbergast-style overlapping deck sheets icon
              <div className="relative w-5 h-5">
                {/* Card 1 (Back) */}
                <div className="absolute top-[2px] left-[2px] w-[11px] h-[9px] rounded-[1px] border border-white/40 bg-transparent transition-all duration-300"></div>
                {/* Card 2 (Middle) */}
                <div className="absolute top-[5px] left-[5px] w-[11px] h-[9px] rounded-[1px] border border-white/70 bg-transparent transition-all duration-300"></div>
                {/* Card 3 (Front) */}
                <div className="absolute top-[8px] left-[8px] w-[11px] h-[9px] rounded-[1px] border border-white bg-transparent transition-all duration-300"></div>
              </div>
            )}
          </button>
        </div>

        {/* Right: Contact CTA */}
        <div>
          <a
            href="#cta"
            data-cursor-label="KONTAK"
            className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:text-white/80"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}


