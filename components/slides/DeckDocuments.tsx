import { documents } from "@/data/documents";

export function DeckDocuments() {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50">
          [ APPENDIX ]
        </p>
        <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl">
          Full supporting documents are ready for execution and handover.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {documents.map((doc, index) => (
          <div key={doc.filename} className="grid grid-cols-[42px_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
            <span className="font-mono text-xs text-white/35">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="mb-1 text-base font-medium text-white">{doc.title}</h3>
              <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-white/35">{doc.filename}</p>
              <p className="line-clamp-2 text-sm leading-6 text-white/50">{doc.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
