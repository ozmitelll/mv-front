import Infinity from '../assets/icons/infinity.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BTC from '../assets/icons/btc.svg'
import Ether from '../assets/icons/eth.svg'
import Ripple from '../assets/icons/ripple.svg'
// const cc = require('cryptocompare')
//
// cc.coinList()
//     .then(coinList => {
//         console.log(coinList)
//     })
//     .catch(console.error)
const courseData = [
    {
        id: 1,
        name: 'Bitcoin',
        price: '$107,342.78',
        change: '+2.56%',
        changeColor: 'text-green-500',
        capitalization: '$2,127,020,845,692.10',
        supply: '19,797,250 BTC',
        icon: BTC,
    },
    {
        id: 2,
        name: 'Ethereum',
        price: '$4,013.67',
        change: '+1.38%',
        changeColor: 'text-green-500',
        capitalization: '$483,060,808,221.46',
        supply: '120,451,108 ETH',
        icon: Ether,
    },
    {
        id: 3,
        name: 'Ripple',
        price: '$2.56',
        change: '+6.86%',
        changeColor: 'text-green-500',
        capitalization: '$147,209,210,388.52',
        supply: '57,187,870 XRP',
        icon: Ripple,
    },
];

const CourseBlock = () => {
    return (
        <div
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
                breakpoints={{
                    1024: { slidesPerView: 3, spaceBetween: 32, centeredSlides: true },
                    768: { slidesPerView: 2.2, spaceBetween: 24, centeredSlides: true },
                }}
                className="w-full px-6 lg:px-16 lg:rounded-xl "
            >
                {courseData && courseData.map((course) => (
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
