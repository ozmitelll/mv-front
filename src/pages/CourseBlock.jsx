import React, { useEffect, useState } from 'react';
import Infinity from '../assets/icons/infinity.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BTC from '../assets/icons/btc.svg';
import Ether from '../assets/icons/eth.svg';
import Ripple from '../assets/icons/ripple.svg';
import cc from 'cryptocompare';

cc.setApiKey('cb4d546d01aab468ad5619145220c0ac306cefbf440b3469f0a3ebbc5deb18df');

const initialCourseData = [
    { id: 1, name: 'Bitcoin', icon: BTC, symbol: 'BTC' },
    { id: 2, name: 'Ethereum', icon: Ether, symbol: 'ETH' },
    { id: 3, name: 'Ripple', icon: Ripple, symbol: 'XRP' },
];

const CourseBlock = () => {
    const [courseData, setCourseData] = useState(initialCourseData);

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const prices = await cc.priceFull(
                    initialCourseData.map((coin) => coin.symbol),
                    ['USD']
                );

                const updatedData = initialCourseData.map((coin) => {
                    const coinData = prices[coin.symbol]?.USD || {};
                    return {
                        ...coin,
                        price: `$${coinData.PRICE?.toLocaleString() || 'N/A'}`,
                        change: `${coinData.CHANGEPCT24HOUR?.toFixed(2) || '0.00'}%`,
                        changeColor: coinData.CHANGEPCT24HOUR >= 0 ? 'text-green-500' : 'text-red-500',
                        capitalization: `$${coinData.MKTCAP?.toLocaleString() || 'N/A'}`,
                        supply: `${coinData.SUPPLY?.toLocaleString() || 'N/A'} ${coin.symbol}`,
                    };
                });

                setCourseData(updatedData);
            } catch (error) {
                console.error('Error fetching course data:', error);
            }
        };

        fetchCourseData();
    }, []);

    return (
        <div
            id="course"
            className={
                'relative bg-[#343434] w-full lg:h-screen h-[500px] lg:bg-[length:900px_500px] bg-[length:500px_300px] flex flex-col justify-center items-center xl:px-36 lg:px-16'
            }
            style={{
                backgroundImage: `url(${Infinity})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <p
                className={
                    'absolute top-0 xl:left-36 lg:left-20 left-14 font-urbanist font-bold lg:text-[35px] text-[25px] text-white md:py-16 py-8 text-left w-full'
                }
            >
                Самые точные курсы криптовалют онлайн
            </p>
            <Swiper
                pagination={{ clickable: true }}
                spaceBetween={42}
                slidesPerView={1.4}
                centeredSlides={true}
                initialSlide={1}
                allowTouchMove={window.innerWidth < 1024}
                breakpoints={{
                    1024: { slidesPerView: 3, spaceBetween: 32, centeredSlides: true },
                    768: { slidesPerView: 2.2, spaceBetween: 24, centeredSlides: true },
                }}
                className="w-full px-6 lg:px-16 lg:rounded-xl "
            >
                {courseData.map((course) => (
                    <SwiperSlide key={course.id}>
                        <div
                            className="bg-black font-urbanist bg-opacity-35 backdrop-blur-sm rounded-lg p-4 lg:w-full w-[300px] md:h-[200px] flex flex-col justify-between drop-shadow-[8px_8px_35px_rgba(45,45,45,1)] shadow-[0_8px_25px_rgba(255,255,255,0.25)]"
                        >
                            <div className="flex items-center gap-4">
                                <img src={course.icon} alt={course.name} className="w-12 h-12" />
                                <div className={'flex flex-col justify-center items-start'}>
                                    <h3 className="text-white font-bold text-lg">{course.name}</h3>
                                    <p className="text-white text-lg font-bold">{course.price}</p>
                                </div>
                                <div className={'flex flex-col justify-end items-end h-full w-full'}>
                                    <p className={`text-sm ${course.changeColor}`}>{course.change}</p>
                                </div>
                            </div>
                            <div className="mt-4 space-y-2">
                                <p className="text-gray-400 text-sm flex justify-between">
                                    Капитализация: <span className="text-white">{course.capitalization}</span>
                                </p>
                                <p className="text-gray-400 text-sm flex justify-between">
                                    Количество (в обращении): <span className="text-white">{course.supply}</span>
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CourseBlock;
