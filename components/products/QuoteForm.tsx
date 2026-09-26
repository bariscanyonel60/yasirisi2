"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export function QuoteForm() {
  const params = useSearchParams();
  const presetProduct = params.get("urun") ?? "";
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: form gönderim entegrasyonu (e-posta/CRM) eklenecek
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-navy-700/10 border border-navy-700/25 p-6 text-navy-700">
        Teşekkürler, talebiniz alındı. En kısa sürede sizinle iletişime
        geçeceğiz.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5">
          Ad Soyad
        </label>
        <input
          required
          type="text"
          className="focus-ring w-full rounded-md border border-navy-900/15 bg-white px-4 py-2.5 text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5">
          Telefon
        </label>
        <input
          required
          type="tel"
          className="focus-ring w-full rounded-md border border-navy-900/15 bg-white px-4 py-2.5 text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5">
          İlgilendiğiniz Ürün
        </label>
        <input
          type="text"
          defaultValue={presetProduct}
          placeholder="Örn. YPS-05 Pelet Sobası"
          className="focus-ring w-full rounded-md border border-navy-900/15 bg-white px-4 py-2.5 text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1.5">
          Mesajınız
        </label>
        <textarea
          rows={4}
          className="focus-ring w-full rounded-md border border-navy-900/15 bg-white px-4 py-2.5 text-sm"
        />
      </div>
      <button
        type="submit"
        className="focus-ring w-full rounded-md bg-ember-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-ember-500 transition-colors"
      >
        Teklif İste
      </button>
    </form>
  );
}
