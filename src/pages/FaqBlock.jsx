import { useState } from "react";
import {useTranslation} from "react-i18next";

const FaqBlock = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const {t} = useTranslation();
    const faqs = [
        {
            question: t('question1'),
            answer: t('answer1'),
        },
        {
            question: t('question2'),
            answer: t('answer2'),
        },
        {
            question: t('question3'),
            answer: t('answer3'),
        },
        {
            question: t('question4'),
            answer: t('answer4'),
        },
        {
            question: t('question5'),
            answer: t('answer5'),
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="bg-main w-full h-full flex justify-start items-center flex-col xl:px-36 lg:px-16 px-12 pb-16" id="faq">
            <p className="font-urbanist font-bold lg:text-[35px] text-[20px] text-white py-12 text-left w-full">
                {t('faq_title')}
            </p>
            <div className="w-full bg-white  px-6 rounded-xl drop-shadow-md shadow-[15px_15px_25px_rgba(0,0,0,0.25)]">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`${
                            index === faqs.length - 1 ? "" : "border-b"
                        } border-gray-300`}
                    >
                        <button
                            className="w-full flex justify-between items-center py-4 font-urbanist text-[20px] text-left text-[#15344D] font-bold focus:outline-none"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span>{faq.question}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-6 w-6 transform transition-transform ${
                                    activeIndex === index ? "rotate-180" : ""
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 15l7-7 7 7"
                                />
                            </svg>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ${
                                activeIndex === index ? "max-h-screen" : "max-h-0"
                            }`}
                        >
                            <div
                                className="text-[#15344D] font-urbanist text-[16px] py-4 whitespace-pre-wrap leading-7">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqBlock;
