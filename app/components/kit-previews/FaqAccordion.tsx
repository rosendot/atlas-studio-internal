"use client";

import { useState } from "react";

export interface FaqAccordionProps {
  borderColor: string;
  iconColor: string;
  questionColor: string;
  answerColor: string;
  transitionSpeed: string;
}

const defaultProps: FaqAccordionProps = {
  borderColor: "#e0d6c8",
  iconColor: "#b42318",
  questionColor: "#1a1208",
  answerColor: "#6b5e4f",
  transitionSpeed: "0.3s",
};

const faqs = [
  { q: "What are your hours?", a: "We are open Monday through Friday from 11am to 10pm, and Saturday through Sunday from 10am to 11pm. We are closed on major holidays." },
  { q: "Do you take reservations?", a: "Yes! You can call us directly or book online through our website. Walk-ins are always welcome, but we recommend reservations for parties of 6 or more." },
  { q: "Do you offer catering?", a: "We offer catering for events of all sizes — from office lunches to weddings. Contact us for a custom menu and pricing. We typically need at least one week's notice for large orders." },
  { q: "Is there parking available?", a: "Yes, we have a free parking lot behind the building with 30 spaces available. Street parking is also available on Main Street and Oak Avenue." },
  { q: "Do you accommodate dietary restrictions?", a: "Absolutely. We offer vegetarian, vegan, and gluten-free options on our menu. Please let your server know about any allergies and we will do our best to accommodate you." },
];

export default function FaqAccordion(props: Partial<FaqAccordionProps>) {
  const vars = { ...defaultProps, ...props };
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: "#faf6f0", padding: "4rem 2rem" }}>
      <h2 style={{ textAlign: "center", fontFamily: "Georgia, serif", fontSize: "2.5rem", color: vars.questionColor, marginBottom: "0.5rem" }}>
        Frequently Asked Questions
      </h2>
      <p style={{ textAlign: "center", color: vars.answerColor, marginBottom: "3rem", fontSize: "1rem" }}>
        Everything you need to know before your visit
      </p>

      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} style={{ borderBottom: `1px solid ${vars.borderColor}`, ...(i === 0 ? { borderTop: `1px solid ${vars.borderColor}` } : {}) }}>
              <button
                onClick={() => toggle(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "1.25rem 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: vars.questionColor,
                  lineHeight: 1.4,
                  gap: "1rem",
                }}
              >
                {faq.q}
                <span
                  style={{
                    flexShrink: 0,
                    width: 24,
                    height: 24,
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  {/* Horizontal bar */}
                  <span style={{
                    position: "absolute",
                    width: 14,
                    height: 2,
                    background: vars.iconColor,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }} />
                  {/* Vertical bar — rotates when open */}
                  <span style={{
                    position: "absolute",
                    width: 2,
                    height: 14,
                    background: vars.iconColor,
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${isOpen ? "90deg" : "0deg"})`,
                    transition: `transform ${vars.transitionSpeed} ease`,
                  }} />
                </span>
              </button>
              <div
                style={{
                  overflow: "hidden",
                  maxHeight: isOpen ? 300 : 0,
                  transition: `max-height ${vars.transitionSpeed} ease`,
                }}
              >
                <div style={{ padding: "0 0 1.25rem", fontSize: "0.95rem", lineHeight: 1.7, color: vars.answerColor }}>
                  {faq.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
