import React, { useState, useRef, useEffect } from 'react';

export const SkillsSection = () => {
    const [faq, setFaq] = useState([
        {
            question: 'AI Solutions',
            answer: '<p class="text-gray-700 dark:text-gray-300">1. AI-Powered Trend & Virality Mapping</p> <p class="text-gray-700 dark:text-gray-300">2. AI CRM & Smart Retargeting</p> <p class="text-gray-700 dark:text-gray-300">3. Generative AI Content & Campaigns</p> <p class="text-gray-700 dark:text-gray-300">4. Workflow & Business Process Automation</p>',
            open: false
        },
        {
            question: 'Marketing',
            answer: '<p class="text-gray-700 dark:text-gray-300">1. Social Media Management & Content Creation</p> <p class="text-gray-700 dark:text-gray-300">2. Paid Ads & Performance Marketing</p> <p class="text-gray-700 dark:text-gray-300">3. Brand Strategy & Identity Development</p> <p class="text-gray-700 dark:text-gray-300">4. Influencer & Meme Marketing</p> <p class="text-gray-700 dark:text-gray-300">5. PR, Launch & Buzz Campaigns</p>',
            open: false
        },
        {
            question: 'Development',
            answer: '<p class="text-gray-700 dark:text-gray-300">1. Web & Mobile App Development </p> <p class="text-gray-700 dark:text-gray-300">2. UI/UX Design & Wireframing</p> <p class="text-gray-700 dark:text-gray-300">3. No-Code / Low-Code MVP Builds</p>  <p class="text-gray-700 dark:text-gray-300">5. Custom Dashboards & Internal Tools</p> <p class="text-gray-700 dark:text-gray-300">6. Product-Led Growth Infrastructure</p>',
            open: false
        },
    ]);

    const toggleFaq = (index) => {
        setFaq(faq.map((item, i) => ({
            ...item,
            open: i === index ? !item.open : false
        })));
    };

    return (
        <section className="py-10 bg-gray-50 dark:bg-gray-900 sm:py-16 lg:py-24 font-sans transition-colors duration-300">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Our Services</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faq.map((item, index) => (
                        <FaqCard
                            key={index}
                            item={item}
                            onClick={() => toggleFaq(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FaqCard = ({ item, onClick }) => {
    const contentRef = useRef(null);

    return (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 rounded-lg">
            <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={onClick}
            >
                <span className="flex text-lg font-semibold text-black dark:text-white">{item.question}</span>
                <svg
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${item.open ? 'rotate-180' : ''}`}
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
                className="px-2 sm:px-6 text-left overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                    maxHeight: item.open ? `${contentRef.current?.scrollHeight}px` : '0px',
                    opacity: item.open ? 1 : 0,
                }}
            >
                <div className="py-4 space-y-2" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
            </div>
        </div>
    );
};

export default SkillsSection;
