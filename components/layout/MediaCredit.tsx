type MediaCreditProps = {
  /** Açık zemin (mobil navbar) | koyu zemin (footer) */
  tone?: "light" | "dark";
  className?: string;
};

const BCY_URL = "https://bariscanyonel.com";

/** Ajans kredisi — Media: BCY DİJİTAL */
export function MediaCredit({ tone = "light", className = "" }: MediaCreditProps) {
  const muted = tone === "dark" ? "text-steel-400" : "text-steel-500";
  const brand =
    tone === "dark"
      ? "text-[#3DDCFF] hover:text-white"
      : "text-[#0088CC] hover:text-ember-600";

  return (
    <p
      className={`font-display text-[11px] font-extrabold tracking-[0.12em] uppercase ${className}`}
    >
      <span className={muted}>Media :</span>{" "}
      <a
        href={BCY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`focus-ring rounded-sm drop-shadow-sm transition-colors ${brand}`}
      >
        BCY DİJİTAL
      </a>
    </p>
  );
}
