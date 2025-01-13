import Transfer from '../assets/icons/transfer.svg'
import Guard from '../assets/icons/guard.svg'
import Graph from '../assets/icons/graph.svg'
import Devices from '../assets/icons/devices.svg'
import Night from '../assets/icons/night.svg'
import {useTranslation} from "react-i18next";
const TradeBlock = () => {
    const {t} = useTranslation()
    return(
        <div className={'bg-[#1C4566] w-full flex justify-start items-center flex-col xl:px-36 lg:px-16 px-12'} id={'trade'}>
            <p className={'text-white lg:text-[35px] text-[25px] font-urbanist lg:py-16 py-8 text-left w-full'}>{t('t_title1')}<span className={'font-bold'}>M&V coin</span><span className={'text-[#D8CAA5] font-bold font-inter'}>{t('t_title2')}</span>{t('t_title3')}<span className={'text-[#D8CAA5] font-bold font-inter'}>{t('t_title4')}</span></p>
            <div className={'grid lg:grid-cols-6 lg:grid-rows-2 grid-cols-1 gap-6 pb-24'}>
                <div
                    className="bg-white p-4 rounded-[20px] shadow-lg shadow-[#15344D]/50 lg:col-span-3 xl:h-[220px] lg:h-[240px] md:h-[200px] h-[160px] ">
                    <div className=" md:mb-4 mb-2 flex justify-start lg:items-start items-center md:gap-6 gap-4">
                        <img src={Transfer} alt=""
                             className={'w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[80px]'}/>
                        <p className={'text-main font-bold font-urbanist xl:text-[28px] text-[16px]'}>{t('transfer_title')}</p>
                    </div>
                    <p className="font-inter md:text-[16px] text-[14px]">
                        {t('transfer_subtitle')}
                    </p>
                </div>
                <div
                    className="bg-white p-4 rounded-[20px] shadow-lg shadow-[#15344D]/50 lg:col-span-3 xl:h-[220px] lg:h-[240px] md:h-[200px] h-[225px]">
                    <div className=" md:mb-4 mb-2 flex justify-start  lg:items-start items-center md:gap-6 gap-4">
                        <img src={Guard} alt=""
                             className={'w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]'}/>
                        <p className={'text-main font-bold font-urbanist xl:text-[28px] text-[16px]'}>{t('guard_title')}</p>
                    </div>
                    <p className="font-inter md:text-[16px] text-[14px] ">{t('guard_subtitle')}</p>
                </div>
                <div
                    className="bg-white p-4 rounded-[20px] shadow-lg shadow-[#15344D]/50 lg:col-span-2 xl:h-[220px] lg:h-[240px] md:h-[200px] h-[160px]">
                    <div className=" md:mb-4 mb-2 flex justify-start  lg:items-start items-center  md:gap-6 gap-4">
                        <img src={Graph} alt=""
                             className={'w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]'}/>
                        <p className={'text-main font-bold font-urbanist xl:text-[28px] text-[16px]'}>{t('graph_title')}</p>
                    </div>
                    <p className="font-inter md:text-[16px] text-[14px]">{t('graph_subtitle')}</p>
                </div>
                <div
                    className="bg-white p-4 rounded-[20px] shadow-lg shadow-[#15344D]/50 lg:col-span-2 xl:h-[220px] lg:h-[240px] md:h-[200px] h-[170px]">
                    <div className=" md:mb-4 mb-2 flex justify-start  lg:items-start items-center  md:gap-6 gap-4">
                        <img src={Devices} alt=""
                             className={'w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]'}/>
                        <p className={'text-main font-bold font-urbanist xl:text-[28px] text-[16px]'}>{t('devices_title')}</p>
                    </div>
                    <p className="font-inter md:text-[16px] text-[14px]">{t('devices_subtitle')}</p>
                </div>
                <div
                    className="bg-white p-4 rounded-[20px] shadow-lg shadow-[#15344D]/50 lg:col-span-2 xl:h-[220px] lg:h-[240px] md:h-[200px] h-[170px]">
                    <div className=" md:mb-4 mb-2 flex justify-start  lg:items-start items-center  md:gap-6 gap-4">
                        <img src={Night} alt=""
                             className={'w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[60px] lg:h-[70px]'}/>
                        <p className={'text-main font-bold font-urbanist xl:text-[28px] text-[16px]'}>{t('night_title')}</p>
                    </div>
                    <p className="font-inter md:text-[16px] text-[14px]">{t('night_subtitle')}</p>
                </div>


            </div>
        </div>
    )
}

export default TradeBlock