"use client";

import { useId, useState, type ReactNode } from "react";
import { focusRing, labelClass } from "@/components/section/tone";
import { company } from "@/lib/site";

const topics = [
  { value: "project", label: "A project to build" },
  { value: "relyxus", label: "Relyxus" },
  { value: "security", label: "A security pack" },
  { value: "press", label: "Press" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Something else" },
] as const;

type Topic = (typeof topics)[number]["value"];

type Values = {
  name: string;
  email: string;
  organisation: string;
  topic: Topic;
  message: string;
};

const empty: Values = { name: "", email: "", organisation: "", topic: "project", message: "" };

function isTopic(value: string): value is Topic {
  return topics.some((topic) => topic.value === value);
}

function briefText(values: Values): string {
  const topic = topics.find((item) => item.value === values.topic)?.label ?? values.topic;
  return [`Name: ${values.name}`, `Work email: ${values.email}`, `Organisation: ${values.organisation}`, `Topic: ${topic}`, "", values.message].join("\n");
}

const field =
  "mt-2 w-full rounded-[12px] border border-plum-600 bg-plum-950 px-4 py-3 font-sans text-base text-plum-50 outline-none focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-citrine";

/**
 * A brief, prepared in the browser. Nothing is sent to a server. When a public
 * address is set in lib/site.ts, the brief opens in the visitor’s email.
 */
export function ContactForm({ defaultTopic = "project", id }: { defaultTopic?: string; id?: string }) {
  const formId = useId();
  const [values, setValues] = useState<Values>({ ...empty, topic: isTopic(defaultTopic) ? defaultTopic : "project" });
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [ready, setReady] = useState<string | null>(null);

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function validate(next: Values): Partial<Record<keyof Values, string>> {
    const nextErrors: Partial<Record<keyof Values, string>> = {};
    if (!next.name.trim()) nextErrors.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(next.email.trim())) nextErrors.email = "Enter a work email we can reply to.";
    if (!next.organisation.trim()) nextErrors.organisation = "Enter your organisation.";
    if (next.message.trim().length < 12) nextErrors.message = "Tell us a little more about the problem.";
    return nextErrors;
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    const text = briefText(values);
    setReady(text);
    if (company.contactEmail) {
      const topic = topics.find((item) => item.value === values.topic)?.label ?? "Apporine";
      const href = `mailto:${company.contactEmail}?subject=${encodeURIComponent(`Apporine · ${topic}`)}&body=${encodeURIComponent(text)}`;
      window.location.href = href;
    }
  }

  async function copy() {
    if (!ready) return;
    try {
      await navigator.clipboard.writeText(ready);
    } catch {
      /* The brief stays on screen, so a refused clipboard is not a dead end. */
    }
  }

  if (ready) {
    return (
      <div id={id} role="status" className="scroll-mt-32">
        <p className={`${labelClass} mb-4 text-citrine`}>YOUR BRIEF</p>
        <h2 className="mb-4 font-sans text-[22px] leading-[1.3] font-semibold text-plum-50">Ready to send.</h2>
        <p className="mb-6 max-w-[36rem] font-sans text-base leading-[1.6] text-plum-300">
          {company.contactEmail
            ? "Your email is opening with this brief. If it does not, copy the text below."
            : "Apporine has not published a public inbox on this site. Copy the brief and send it to the person you are already speaking with. When an address is set, this page will open it for you."}
        </p>
        <textarea readOnly value={ready} rows={10} data-cursor="text" className={`${field} mb-6`} aria-label="Your brief" />
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={copy}
            data-cursor="button"
            className={`inline-flex h-[52px] items-center justify-center rounded-pill bg-citrine px-7 font-sans text-[15px] font-semibold text-plum-800 ${focusRing}`}
          >
            Copy the brief
          </button>
          <button
            type="button"
            onClick={() => setReady(null)}
            data-cursor="button"
            className={`inline-flex h-[52px] items-center justify-center rounded-pill border border-plum-600 px-7 font-sans text-[15px] font-semibold text-plum-50 ${focusRing}`}
          >
            Revise
          </button>
        </div>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} noValidate className="scroll-mt-32">
      <div className="grid gap-6">
        <Field id={`${formId}-name`} label="Name" error={errors.name}>
          <input
            id={`${formId}-name`}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            data-cursor="text"
            className={field}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            required
          />
        </Field>
        <Field id={`${formId}-email`} label="Work email" error={errors.email}>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            data-cursor="text"
            className={field}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            required
          />
        </Field>
        <Field id={`${formId}-organisation`} label="Organisation" error={errors.organisation}>
          <input
            id={`${formId}-organisation`}
            name="organisation"
            autoComplete="organization"
            value={values.organisation}
            onChange={(event) => update("organisation", event.target.value)}
            data-cursor="text"
            className={field}
            aria-invalid={errors.organisation ? true : undefined}
            aria-describedby={errors.organisation ? `${formId}-organisation-error` : undefined}
            required
          />
        </Field>
        <Field id={`${formId}-topic`} label="What do you need">
          <select
            id={`${formId}-topic`}
            name="topic"
            value={values.topic}
            onChange={(event) => update("topic", isTopic(event.target.value) ? event.target.value : "project")}
            className={field}
          >
            {topics.map((topic) => (
              <option key={topic.value} value={topic.value}>
                {topic.label}
              </option>
            ))}
          </select>
        </Field>
        <Field id={`${formId}-message`} label="The problem" error={errors.message}>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={6}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            data-cursor="text"
            className={field}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? `${formId}-message-error` : undefined}
            required
          />
        </Field>
      </div>
      <button
        type="submit"
        data-cursor="button"
        className={`mt-8 inline-flex h-[52px] items-center justify-center rounded-pill bg-citrine px-7 font-sans text-[15px] font-semibold text-plum-800 ${focusRing}`}
      >
        Prepare the brief
      </button>
    </form>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="font-sans text-[15px] font-semibold text-plum-50">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 font-sans text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}
