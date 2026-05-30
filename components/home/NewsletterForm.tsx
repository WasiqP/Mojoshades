"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="px-6 py-28 md:py-36" id="newsletter">
      <div className="mx-auto max-w-2xl text-center">
        <ScrollReveal y={30}>
          <p className="eyebrow mb-4 text-blood-bright">The List</p>
          <h2 className="font-display display-lg font-light text-bone">
            First access. New shades.<br />
            <span className="italic text-ash">No noise.</span>
          </h2>
          <p className="font-body mx-auto mt-6 max-w-md text-sm text-ash">
            Join the house list for early drops, private restocks, and the
            occasional secret shade. Worth the inbox space.
          </p>

          {submitted ? (
            <p className="font-display mt-10 text-2xl font-light italic text-blood-bright">
              Welcome to the house.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-md items-center gap-2 rounded-full border border-bone/15 bg-noir-soft p-1.5 focus-within:border-blood"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="font-body flex-1 bg-transparent px-5 py-2.5 text-sm text-bone placeholder:text-ash-dim outline-none"
              />
              <button
                type="submit"
                className="btn-shine flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blood text-white transition-colors hover:bg-blood-bright"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
