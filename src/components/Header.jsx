import { useState } from 'react';
import HeaderIcon from '../assets/icons/icon.svg';
import { useTranslation } from "react-i18next";
import dropArrow from '../assets/icons/arrow-down-svgrepo-com.svg'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false); // Для выпадающего меню языка
    const { t, i18n } = useTranslation();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false); // Закрыть мобильное меню
        }
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang); // Смена языка
        setLanguageMenuOpen(false);
        setMenuOpen(false)// Закрыть меню выбора языка
    };

    return (
        <div className="w-screen bg-main h-[100px] flex items-center justify-between px-4 xl:px-28 lg:px-16">
            {/* Логотип */}
            <div className="flex items-center">
                <img src={HeaderIcon} alt="M&V Coin" height={80} width={200} />
            </div>

            {/* Меню для великих екранів */}
            <div className="hidden lg:flex items-center justify-center xl:gap-16 lg:gap-8 text-white">
                <p className={'cursor-pointer'} onClick={() => scrollToSection('trade')}>{t('h_trade')}</p>
                <p className={'cursor-pointer'} onClick={() => scrollToSection('roadmap')}>{t('h_roadmap')}</p>
                <p className={'cursor-pointer'} onClick={() => scrollToSection('manual')}>{t('h_manual')}</p>
                <p className={'cursor-pointer'} onClick={() => scrollToSection('faq')}>{t('h_faq')}</p>

                {/* Блок выбора языка */}
                <div className="relative flex justify-center items-center gap-2">
                    <p
                        className="cursor-pointer"
                        onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                    >
                        {i18n.language.toUpperCase()}
                    </p>
                    <img src={dropArrow} alt="" className={'h-4 w-4'}/>
                    {languageMenuOpen && (
                        <div className="absolute top-8 -right-1 bg-white text-black shadow-md rounded-md">
                            <p
                                className="cursor-pointer px-4 py-2 hover:bg-gray-200 hover:rounded-md"
                                onClick={() => changeLanguage('en')}
                            >
                                EN
                            </p>
                            <p
                                className="cursor-pointer px-4 py-2 hover:bg-gray-200 hover:rounded-md"
                                onClick={() => changeLanguage('ru')}
                            >
                                RU
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Кнопка гамбургер для мобільних */}
            <button
                className="text-white focus:outline-none lg:hidden pr-4"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div className="w-6 h-[2px] bg-white mb-1"></div>
                <div className="w-6 h-[2px] bg-white mb-1"></div>
                <div className="w-6 h-[2px] bg-white"></div>
            </button>

            {/* Мобільне меню */}
            <div
                className={`fixed top-[100px] left-0 w-full h-screen bg-main z-10 text-white transition-transform transform ${
                    menuOpen ? 'translate-x-0' : '-translate-x-full'
                } xl:hidden`}
            >
                <button
                    onClick={() => scrollToSection('trade')}
                    className="block py-5 text-left px-10 text-[18px] border-gray-600"
                >
                    {t('h_trade')}
                </button>
                <button
                    onClick={() => scrollToSection('roadmap')}
                    className="block py-5 text-left px-10 text-[18px] border-gray-600"
                >
                    {t('h_roadmap')}
                </button>
                <button
                    onClick={() => scrollToSection('manual')}
                    className="block py-5 text-left px-10 text-[18px] border-gray-600"
                >
                    {t('h_manual')}
                </button>
                <button
                    onClick={() => scrollToSection('faq')}
                    className="block py-5 text-left px-10 text-[18px] border-gray-600"
                >
                    {t('h_faq')}
                </button>

                {/* Блок выбора языка в мобильном меню */}
                <div className="px-10 py-5 border-gray-600 text-[18px]">
                    <div className="relative flex items-center gap-2">
                        <p
                            className="cursor-pointer"
                            onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                        >
                            {i18n.language.toUpperCase()}
                        </p>
                        <img src={dropArrow} alt="" className={'h-4 w-4'}/>
                        {languageMenuOpen && (
                            <div className="absolute top-10 -left-2  bg-white text-black shadow-md rounded-md">
                                <p
                                    className="cursor-pointer px-4 py-2 hover:bg-gray-200 hover:rounded-md"
                                    onClick={() => changeLanguage('en')}
                                >
                                    EN
                                </p>
                                <p
                                    className="cursor-pointer px-4 py-2 hover:bg-gray-200 hover:rounded-md"
                                    onClick={() => changeLanguage('ru')}
                                >
                                    RU
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
