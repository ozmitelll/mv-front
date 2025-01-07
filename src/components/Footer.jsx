import AppStore from '../assets/icons/AppStore_PC.png'
import GooglePlay from '../assets/icons/PlayMarket_PC.png'
import Apk from '../assets/icons/APK_PC.png'
import Telegram from '../assets/icons/telegram.svg'
import HeaderIcon from '../assets/icons/icon.svg';

import AppStoreMob from '../assets/icons/SVGAPPSTORE.png'
import GooglePlayMob from '../assets/icons/SVGGOOGLEPLAY.png'
import ApkMob from '../assets/icons/SVGAPK.png'

const Footer = () => {
    return (
        <div
            className={'w-screen flex flex-col justify-center lg:items-center items-start xl:px-36 lg:px-16 px-12 text-white gap-4 pt-12 pb-4'}>
            <div
                className={'w-full flex flex-row-reverse lg:flex-col justify-center lg:items-center items-start text-white gap-4'}>
                <div className={'flex flex-col justify-center items-start lg:w-full w-3/5 gap-4'}>
                    <p className={'font-inter font-extrabold text-left w-full lg:text-[25px] text-[18px]'}>O M&V
                        coin</p>
                    <p className={'font-urbanist underline text-left w-full '}>О нас</p>
                    <p className={'font-urbanist underline text-left w-full '}>Контакты</p>
                    <div className={'flex lg:hidden flex-col-reverse items-start justify-between w-full gap-4'}>
                        <div className={'flex flex-col gap-4'}>
                            <img src={AppStoreMob} alt="" className={'drop-shadow-2xl   shadow-2xl h-[34px]'}/>
                            <img src={GooglePlayMob} alt="" className={'drop-shadow-2xl shadow-2xl h-[34px]'}/>
                            <img src={ApkMob} alt="" className={'drop-shadow-2xl   shadow-2xl h-[34px]'}/>
                        </div>
                        <img src={Telegram} alt="" className={' w-[50px] h-[50px]'}/>
                    </div>
                </div>
                <div className={'flex lg:flex-row flex-col justify-start w-full lg:gap-8 gap-4 '}>
                    <div className={'lg:w-1/4 w-full'}>
                        <p className={'font-inter font-semibold text-left w-full lg:text-[18px] text-[17px]'}>Правовая
                            информация</p>
                    </div>
                    <div
                        className={'lg:grid flex flex-col grid-rows-2 grid-cols-6 gap-4 font-extralight font-inter w-full'}>
                        <p className={' text-left w-full col-span-2 hover:underline cursor-pointer'} onClick={()=>window.location.replace('/policy')}>Политика конфиденциальности</p>
                        <p className={' text-left w-full col-span-2 hover:underline cursor-pointer'} onClick={() => window.location.replace('/terms')}>Правила пользования сервисом</p>
                        <p className={' text-left w-full col-span-2 hover:underline cursor-pointer'} onClick={() => window.location.replace('/risks')}>Предупреждение о рисках</p>
                        <div className={'flex flex-col gap-4 lg:gap-0 lg:flex-row row-start-2 col-span-3 '}>
                            <p className={' text-left w-full hover:underline cursor-pointer'} onClick={() => window.location.replace('/kyc-aml')}>KYC и AML</p>
                            <p className={' text-left w-full hover:underline cursor-pointer'}>Bug bounty</p>
                            <p className={' text-left w-full hover:underline cursor-pointer'}>Cookies</p>
                        </div>
                    </div>
                </div>
                <div className={'lg:flex hidden items-center justify-between w-full'}>
                    <div className={'flex'}>
                        <img src={AppStore} alt="" className={'drop-shadow-2xl w-[160px] h-[70px]'}/>
                        <img src={GooglePlay} alt="" className={'drop-shadow-2xl w-[160px] h-[70px]'}/>
                        <img src={Apk} alt="" className={'drop-shadow-2xl w-[160px] h-[70px]'}/>
                    </div>
                    <img src={Telegram} alt="" className={'l-5 w-[50px] h-[50px]'}/>
                </div>
                <hr className={'lg:block hidden border-t-1 opacity-50 border-[#52A2EC] w-full'}/>
                <div className={'lg:flex hidden justify-start items-center w-full gap-8 font-inter'}>
                    <img src={HeaderIcon} alt="" className={'w-[140px]'}/>
                    <p>© {new Date().getFullYear()}, M&V coin</p>
                    <p className={'pl-12'}>Information on this website is provided by M&V COIN</p>
                </div>
            </div>
            <hr className={'lg:hidden border-t-1 opacity-50 border-[#52A2EC] w-full'}/>
            <div className={'flex flex-col lg:hidden justify-start items-center w-full font-inter font-normal'}>
                <div className={'flex justify-center items-center'}>
                <img src={HeaderIcon} alt="" className={'w-[140px]'}/>
                <p>© {new Date().getFullYear()}, M&V coin</p>
                </div>
                <p className={'w-full text-[12px] font-inter text-center'}>Information on this website is provided by M&V COIN</p>
            </div>
        </div>
    )
}

export default Footer