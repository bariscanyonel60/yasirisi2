"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function QuoteForm() {
  const params = useSearchParams();
  const presetProduct = params.get("urun") ?? "";
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === "string") body.append(key, value);
    });

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!res.ok) {
        throw new Error("Gönderim başarısız");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg(
        "Talep gönderilemedi. Lütfen telefon veya WhatsApp ile ulaşın."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-navy-700/25 bg-navy-700/10 p-6 text-navy-700">
        Teşekkürler, talebiniz alındı. En kısa sürede sizinle iletişime
        geçeceğiz.
      </div>
    );
  }

  return (
    <form
      name="teklif"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="teklif" />
      <p className="hidden" aria-hidden>
        <label>
          Bot alanı
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div>
        <label htmlFor="teklif-name" className="mb-1.5 block text-sm font-medium text-ink">
          Ad Soyad
        </label>
        <input
          id="teklif-name"
          name="name"
          required
          type="text"
          autoComplete="name"
          className="focus-ring w-full rounded-md border border-navy-900/15 bg-white px-4 py-2.5 text-sm"
        />
      </div>
      <div>
        <label htmlFor="teklif-phone" className="mb-1.5 block text-sm font-medium text-ink">
          Telefon
        </label>
        <input
          id="teklif-phone"
          name="phone"
          required
          type="tel"
          autoComplete="tel"
          className="focus-ring w-full rounded-md border border-navy-900/15 bg-white px-4 py-2.5 text-sm"
        />
      </div>
      <div>
        <label htmlFor="teklif-product" className="mb-1.5 block text-sm font-medium text-ink">
          İlgilendiğiniz Ürün
        </label>
        <input
          id="teklif-product"
          name="product"
          type="text"
          defaultValue={presetProduct}
          placeholder="Örn. YPS-05 Pelet Sobası"
          className="focus-ring w-full rounded-md border border-navy-900/15 bg-white px-4 py-2.5 text-sm"
        />
      </div>
      <div>
        <label htmlFor="teklif-message" className="mb-1.5 block text-sm font-medium text-ink">
          Mesajınız
        </label>
        <textarea
          id="teklif-message"
          name="message"
          rows={4}
          className="focus-ring w-full rounded-md border border-navy-900/15 bg-white px-4 py-2.5 text-sm"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-steel-500">
        <input
          type="checkbox"
          name="kvkk"
          value="onay"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-navy-900/20 text-ember-600 focus:ring-ember-500"
        />
        <span>
          <Link href="/kvkk" className="font-medium text-ember-600 hover:text-ember-500">
            KVKK Aydınlatma Metni
          </Link>
          &apos;ni okudum; kişisel verilerimin teklif süreci için
          işlenmesini kabul ediyorum.
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring w-full rounded-md bg-ember-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ember-500 disabled:opacity-60"
      >
        {status === "loading" ? "Gönderiliyor…" : "Teklif İste"}
      </button>
    </form>
  );
}
