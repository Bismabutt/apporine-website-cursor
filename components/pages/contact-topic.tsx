"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/pages/contact-form";

/** Reads ?topic= so /contact?topic=security opens the right brief. */
export function ContactTopicForm() {
  const topic = useSearchParams().get("topic") ?? "project";
  return <ContactForm defaultTopic={topic} />;
}
