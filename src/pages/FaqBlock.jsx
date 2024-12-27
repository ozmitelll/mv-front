import { useState } from "react";

const FaqBlock = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "Что такое BEP_20, TRC_20, ERC_20 и чем они отличаются?",
            answer:
                "Это протоколы Tether USDT в разных блокчейнах. Изначально Tether USDT был выпущен на блокчейне Bitcoin (использовался протокол OMNI), но стейблкоин так быстро набрал популярность, что был запущен и на других блокчейнах:\n" +
                "- ERC_20 — протокол в блокчейне Ethereum;\n" +
                "- TRC_20 — протокол в блокчейне Tron;\n" +
                "- BEP_2 — протокол в блокчейне Binance;\n" +
                "- BEP_20 — протокол в BSC.\n" +
                "Каждый тип USDT обращается только в рамках своего блокчейна. Не стоит пытаться отправить USDT из блокчейна Ethereum в Tron или наоборот. Есть шанс, что вы потеряете свои деньги.",
        },
        {
            question: "Можно ли во время регистрации ввести email, а не номер телефона?",
            answer: "Сейчас регистрация возможна с помощью месенджера или личного номера телефона. В ближайшее время появится регистрация через email.",
        },
        {
            question: "Я отправил деньги, а вторая сторона пишет, что не получила их. Что делать?",
            answer: "В таком случае нужно убедиться, что вы отправили деньги по нужным реквизитам. Если вы не ошиблись и перевод ушел к адресату, то создайте спор — модераторы разберутся в ситуации, запросят доказательства от обеих сторон и примут верное решение.",
        },
        {
            question: "Что кроме регистрации нужно, чтобы совершать сделки на M&V coin?",
            answer: "Чтобы обменивать криптовалюту на rub, usd и другие валюты, нужно пройти верификацию. Для этого зайдите на сайт, перейдите в личный кабинет, выберите тип документов, который будете использовать для верификации и загрузите селфи.",
        },
        {
            question: "Где можно посмотреть все правила сервиса M&V coin?",
            answer: "Нужно зайти на сайт M&V coin пролистать страницу вниз и перейти в раздел «Правила пользования сервисом. Там будут описаны все нюансы, которые вы должны знать, чтобы безопасно работать с площадкой.",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="bg-main w-full min-h-screen flex justify-center items-center flex-col xl:px-36 lg:px-16 px-12 pb-16">
            <p className="font-urbanist font-bold lg:text-[35px] text-[20px] text-white py-12 text-left w-full">
                Ответы на популярные вопросы
            </p>
            <div className="w-full bg-white pb-4 px-6 rounded-xl drop-shadow-md shadow-[15px_15px_25px_rgba(0,0,0,0.25)]">
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
