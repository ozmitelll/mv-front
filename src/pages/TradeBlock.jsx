import Transfer from '../assets/icons/transfer.svg'
import Guard from '../assets/icons/guard.svg'
import Graph from '../assets/icons/graph.svg'
import Devices from '../assets/icons/devices.svg'
import Night from '../assets/icons/night.svg'
const TradeBlock = () => {
    return(
        <div className={'bg-[#1C4566] w-full flex justify-start items-center flex-col xl:px-36 lg:px-16 px-12'}>
            <p className={'text-white lg:text-[35px] text-[25px] font-urbanist lg:py-16 py-8 text-left w-full'}>Обмен в <span className={'font-bold'}>M&V coin</span><span className={'text-[#D8CAA5] font-bold font-inter'}> просто, быстро</span> и<span className={'text-[#D8CAA5] font-bold font-inter'}> надежно</span></p>
            <div className={'grid lg:grid-cols-6 lg:grid-rows-2 grid-cols-1 gap-6 pb-24'}>
                <div
                    className="bg-white p-4 rounded-[20px] shadow-lg shadow-[#15344D]/50 lg:col-span-3 xl:h-[220px] lg:h-[240px] md:h-[200px] h-[160px] ">
                    <div className=" md:mb-4 mb-2 flex justify-start lg:items-start items-center md:gap-6 gap-4">
                        <img src={Transfer} alt=""
                             className={'w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[80px]'}/>
                        <p className={'text-main font-bold font-urbanist xl:text-[28px] text-[22px]'}>Автоматическая
                            система
                            перевода</p>
                    </div>
                    <p className="font-inter md:text-[16px] text-[14px]">
                        Обмен без участия третьего лица — продавец подтверждает перевод, а
                        покупатель — получение.
                    </p>
                </div>
                <div
                    className="bg-white p-4 rounded-[20px] shadow-lg shadow-[#15344D]/50 lg:col-span-3 xl:h-[220px] lg:h-[240px] md:h-[200px] h-[225px]">
                    <div className=" md:mb-4 mb-2 flex justify-start  lg:items-start items-center md:gap-6 gap-4">
                        <img src={Guard} alt=""
                             className={'w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]'}/>
                        <p className={'text-main font-bold font-urbanist xl:text-[28px] text-[22px]'}>Достоверная
                            информация</p>
                    </div>
                    <p className="font-inter md:text-[16px] text-[14px] ">
                        В профиле трейдера указан резерв выбранной валюты, информация о времени совершения сделки, числе
                        сделок — эти данные помогут оценить надежность трейдера перед началом сделки.
                    </p>
                </div>
                <div
                    className="bg-white p-4 rounded-[20px] shadow-lg shadow-[#15344D]/50 lg:col-span-2 xl:h-[220px] lg:h-[240px] md:h-[200px] h-[160px]">
                    <div className=" md:mb-4 mb-2 flex justify-start  lg:items-start items-center  md:gap-6 gap-4">
                        <img src={Graph} alt=""
                             className={'w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]'}/>
                        <p className={'text-main font-bold font-urbanist xl:text-[28px] text-[22px]'}>Множество
                            предложений</p>
                    </div>
                    <p className="font-inter md:text-[16px] text-[14px]">
                        Множество предложений от пользователей позволяет выбрать выгодное направление на обмен.
                    </p>
                </div>
                <div
                    className="bg-white p-4 rounded-[20px] shadow-lg shadow-[#15344D]/50 lg:col-span-2 xl:h-[220px] lg:h-[240px] md:h-[200px] h-[160px]">
                    <div className=" md:mb-4 mb-2 flex justify-start  lg:items-start items-center  md:gap-6 gap-4">
                        <img src={Devices} alt=""
                             className={'w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]'}/>
                        <p className={'text-main font-bold font-urbanist xl:text-[28px] text-[22px]'}>Быстрая
                            регистрация</p>
                    </div>
                    <p className="font-inter md:text-[16px] text-[14px]">
                        Регистрация занимает всего пару минут, вы получите доступ к P2P бирже, приложению и внутреннему
                        кошельку.
                    </p>
                </div>
                <div
                    className="bg-white p-4 rounded-[20px] shadow-lg shadow-[#15344D]/50 lg:col-span-2 xl:h-[220px] lg:h-[240px] md:h-[200px] h-[160px]">
                    <div className=" md:mb-4 mb-2 flex justify-start  lg:items-start items-center  md:gap-6 gap-4">
                        <img src={Night} alt=""
                             className={'w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[60px] lg:h-[70px]'}/>
                        <p className={'text-main font-bold font-urbanist xl:text-[28px] text-[22px]'}>Доступность</p>
                    </div>
                    <p className="font-inter md:text-[16px] text-[14px]">
                        Любой клиент может купить биткоин днем и ночью, без комиссии сервиса за ввод и вывод средств и
                        по выгодному курсу.
                    </p>
                </div>


            </div>
        </div>
    )
}

export default TradeBlock