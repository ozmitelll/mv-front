import { useState } from 'react';
import HeaderIcon from '../assets/icons/icon.svg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false); // Закрыть мобильное меню
        }
    };
    return (
        <div className="w-screen bg-main h-[100px] flex items-center justify-between px-4 xl:px-28 lg:px-16">
            {/* Логотип */}
            <div className="flex items-center">
                <img src={HeaderIcon} alt="M&V Coin" height={80} width={200} />
            </div>

            {/* Меню для великих екранів */}
            <div className="hidden lg:flex items-center justify-center xl:gap-16 lg:gap-8 text-white">
                <p className={'cursor-pointer'} onClick={() => scrollToSection('trade')}>Преимущества</p>
                <p className={'cursor-pointer'} onClick={() => scrollToSection('roadmap')}>Карта реализации</p>
                <p className={'cursor-pointer'} onClick={() => scrollToSection('manual')}>Процесс обмена</p>
                <p className={'cursor-pointer'} onClick={() => scrollToSection('faq')}>FAQ</p>
                <p className={'cursor-pointer'} onClick={() => scrollToSection('welcome')}>RU</p>
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
                    Преимущества
                </button>
                <button
                    onClick={() => scrollToSection('roadmap')}
                    className="block py-5 text-left px-10 text-[18px] border-gray-600"
                >
                    Карта реализации
                </button>
                <button
                    onClick={() => scrollToSection('manual')}
                    className="block py-5 text-left px-10 text-[18px] border-gray-600"
                >
                    Процесс обмена
                </button>
                <button
                    onClick={() => scrollToSection('faq')}
                    className="block py-5 text-left px-10 text-[18px] border-gray-600"
                >
                    FAQ
                </button>
                <button
                    onClick={() => scrollToSection('welcome')}
                    className="block py-5 text-left px-10 text-[18px]"
                >
                    RU
                </button>
            </div>
        </div>
    );
};

export default Header;
