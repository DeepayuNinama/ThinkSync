import React, { useState, useRef, useEffect } from "react";

export const SkillsSection = () => {
  const [faq, setFaq] = useState([
    {
      question: "AI Solutions",
      answer:
        '<p>1. AI-Powered Trend & Virality Mapping</p> <p>2. AI CRM & Smart Retargeting</p> <p>3. Generative AI Content & Campaigns</p> <p>4. Workflow & Business Process Automation</p>',
      open: false,
    },
    {
      question: "Marketing",
      answer:
        '<p>1. Social Media Management & Content Creation</p> <p>2. Paid Ads & Performance Marketing</p> <p>3. Brand Strategy & Identity Development</p> <p>4. Influencer & Meme Marketing</p> <p>5. PR, Launch & Buzz Campaigns</p>',
      open: false,
    },
    {
      question: "Development",
      answer:
        '<p>1. Web & Mobile App Development </p> <p>2. UI/UX Design & Wireframing</p> <p>3. No-Code / Low-Code MVP Builds</p>  <p>5. Custom Dashboards & Internal Tools</p> <p>6. Product-Led Growth Infrastructure</p>',
      open: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaq(
      faq.map((item, i) => ({
        ...item,
        open: i === index ? !item.open : false,
      }))
    );
  };

  return (
    <section
      id="skills"
      className="py-10 bg-background text-foreground transition-colors duration-300 sm:py-16 lg:py-24"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl opacity-0 animate-fade-in">
            Our Services
          </h2>
          <p className="max-w-xl mx-auto text-base leading-relaxed text-muted-foreground opacity-0 animate-fade-in-delay-1">
            From vision to execution, we craft strategies that drive growth.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16 opacity-0 animate-fade-in-delay-2">
          {faq.map((item, index) => (
            <FaqCard key={index} item={item} onClick={() => toggleFaq(index)} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FaqCard = ({ item, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div className="bg-card border border-border rounded-lg transition-colors duration-300 overflow-hidden">
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
        onClick={onClick}
      >
        <span className="text-lg font-semibold text-left text-foreground">
          {item.question}
        </span>
        <svg
          className={`w-6 h-6 text-muted-foreground transition-transform duration-300 ${
            item.open ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        ref={contentRef}
        className="px-4 sm:px-6 transition-all duration-500 ease-in-out"
        style={{
          maxHeight: item.open ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: item.open ? 1 : 0,
        }}
      >
        <div
          className="py-4 space-y-2 text-left text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: item.answer }}
        />
      </div>
    </div>
  );
};

export default SkillsSection;
