import {useEffect, useRef} from "react";

const RoadmapBlock = ({currentStage}) => {
    const roadmapRef = useRef(null);
    const stageRefs = useRef([]);

    useEffect(() => {
        if (roadmapRef.current) {
            const isLastStage = currentStage === 9;

            if (isLastStage) {
                stageRefs.current[currentStage - 2].scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            } else if (stageRefs.current[currentStage - 1]) {
                // Скроллим к текущему этапу
                stageRefs.current[currentStage - 1].scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }
        }
    }, [currentStage]);
    return (
        <div
            ref={roadmapRef}
            className={'w-full xl:h-screen lg:h-screen h-full bg-gradient-to-r from-[#112636] to-[#6999BF] flex flex-col items-center justify-center'}>
            <p className="font-urbanist font-medium lg:text-[35px] text-[25px] text-white pb-12 pt-12 lg:pt-0 xl:pt-0 text-left w-full xl:px-36 lg:px-16 px-12">
                Roadmap
            </p>
            <div

                className="w-full flex flex-col gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 xl:px-36 lg:px-16 px-12 xl:pb-0 lg:pb-0 pb-12">
                <div className="flex text-white  ">
                    <div
                        className="flex-shrink-0 bg-opacity-0 flex flex-col gap-4 bg-white xl:w-72 lg:w-64 w-[120px] xl:h-[200px] lg:h-[200px] h-[240px] xl:p-4 lg:p-4 p-0 text-[15px]">
                        <p className={'xl:font-semibold lg:font-semibold font-bold'}>P2P-сервис</p>
                        <p className={'font-light'}>Приложение позиционируется как глобальная платформа для
                            криптоновостей.</p>
                    </div>
                    <div
                        className="flex-shrink-0 bg-opacity-0 flex flex-col justify-end items-center xl:text-8xl lg:text-8xl text-6xl text-[#D8CAA5] bg-white xl:w-72 lg:w-64 w-[120px] xl:h-[200px] lg:h-[200px] h-[240px] rounded-lg xl:p-4 lg:p-4 p-0">
                        II
                    </div>
                    <div
                        className="flex-shrink-0 bg-opacity-0 flex flex-col gap-4 bg-white xl:w-72 lg:w-64 w-[120px] xl:h-[200px] lg:h-[200px] h-[240px] xl:p-4 lg:p-4 p-0 text-[15px]">
                        <p className={'font-light'}>Внедрение кошелька</p>
                        <p className={'xl:font-semibold lg:font-semibold font-bold'}>Интеграция платежей</p>
                        <p className={'font-light'}>Запуск программы лояльности</p>
                    </div>
                    <div
                        className="flex-shrink-0 bg-opacity-0 flex flex-col justify-end items-center xl:text-8xl lg:text-8xl text-6xl text-[#D8CAA5] bg-white xl:w-72 lg:w-64 w-[120px] xl:h-[200px] lg:h-[200px] h-[240px] rounded-lg xl:p-4 lg:p-4 p-0">
                        IV
                    </div>
                    <div
                        className="flex-shrink-0 bg-opacity-0 flex flex-col gap-4 bg-white xl:w-72 lg:w-64 w-[120px] xl:h-[200px] lg:h-[200px] h-[240px] xl:p-4 lg:p-4 p-0 text-[15px]">
                        <p className={'xl:font-semibold lg:font-semibold font-bold'}>Запуск собственного токена</p>
                        <p className={'font-light'}>Развитие экосистемы</p>
                        <p className={'xl:font-semibold lg:font-semibold font-bold'}>Партнёрства</p>
                    </div>
                    <div
                        className="flex-shrink-0 bg-opacity-0 flex flex-col justify-end items-center xl:text-8xl lg:text-8xl text-6xl text-[#D8CAA5] bg-white xl:w-72 lg:w-64 w-[120px] xl:h-[200px] lg:h-[200px] h-[240px] rounded-lg xl:p-4 lg:p-4 p-0">
                        VI
                    </div>
                    <div
                        className="flex-shrink-0 bg-opacity-0 flex flex-col gap-4 bg-white xl:w-72 lg:w-64 w-[120px] xl:h-[200px] lg:h-[200px] h-[240px] xl:p-4 lg:p-4 p-0 text-[15px]">
                        <p className={'xl:font-semibold lg:font-semibold font-bold'}>NFT и Marketplace</p>
                        <p className={'font-light'}>Интеграция NFT в экосистему токенов M&V</p>
                    </div>
                    <div
                        className="flex-shrink-0 bg-opacity-0 flex flex-col justify-end items-center xl:text-8xl lg:text-8xl text-6xl text-[#D8CAA5] bg-white xl:w-72 lg:w-64 w-[120px] xl:h-[200px] lg:h-[200px] h-[240px] rounded-lg xl:p-4 lg:p-4 p-0">
                        IIX
                    </div>
                    <div
                        className="flex-shrink-0 bg-opacity-0 flex flex-col gap-4 bg-white xl:w-72 lg:w-64 w-[120px] xl:h-[200px] lg:h-[200px] h-[240px] xl:p-4 lg:p-4 p-0 text-[15px]">
                        <p className={'xl:font-semibold lg:font-semibold font-bold'}>Полная децентрализация</p>
                        <p className={'font-light'}>Интеграция искусственного интеллекта</p>
                        <p className={'font-light'}>Cобственная блокчейн-сеть</p>
                    </div>
                    <div className="flex-shrink-0 bg-opacity-0 xl:w-[128px] lg:w-[48px] w-[24px]"></div>
                </div>
                <div className={'flex w-fit h-[25px] '}>
                    <div ref={(el) => (stageRefs.current[0] = el)} className={'bg-[#D8CAA5] xl:w-72 lg:w-64 w-[120px] rounded-l-xl border-4 border-r-0 border-white'}></div>
                    <div ref={(el) => (stageRefs.current[1] = el)} className={'bg-[#ABAC9A] xl:w-72 lg:w-64 w-[120px] border-4 border-r-0 border-l-0 border-white'}></div>
                    <div ref={(el) => (stageRefs.current[2] = el)} className={'bg-[#7E8E8E] xl:w-72 lg:w-64 w-[120px] border-4 border-r-0 border-l-0 border-white'}></div>
                    <div ref={(el) => (stageRefs.current[3] = el)} className={'bg-[#517084] xl:w-72 lg:w-64 w-[120px] border-0 border-r-0 border-l-0 border-white'}></div>
                    <div ref={(el) => (stageRefs.current[4] = el)} className={'bg-[#235379] xl:w-72 lg:w-64 w-[120px] border-0 border-r-0 border-l-0 border-white'}></div>
                    <div ref={(el) => (stageRefs.current[5] = el)} className={'bg-[#174265] xl:w-72 lg:w-64 w-[120px] border-0 border-r-0 border-l-0 border-white'}></div>
                    <div ref={(el) => (stageRefs.current[6] = el)} className={'bg-[#003661] xl:w-72 lg:w-64 w-[120px] border-0 border-r-0 border-l-0 border-white'}></div>
                    <div ref={(el) => (stageRefs.current[7] = el)} className={'bg-[#042C4B] xl:w-72 lg:w-64 w-[120px] border-0 border-r-0 border-l-0 border-white'}></div>
                    <div ref={(el) => (stageRefs.current[8] = el)} className={'bg-[#0A263C] xl:w-72 lg:w-64 w-[120px] border-0 border-l-0 rounded-r-xl border-white'}></div>
                </div>
                <div className="flex text-white  ">
                    <div
                        className="flex-shrink-0 bg-opacity-0 flex flex-col justify-start items-center xl:text-8xl lg:text-8xl text-6xl text-[#D8CAA5] bg-white xl:w-72 lg:w-64 w-[120px] xl:h-[200px] lg:h-[200px] h-[240px] rounded-lg xl:p-4 lg:p-4 p-0">
                        I
                    </div>
                    <div
                        className="flex-shrink-0 bg-opacity-0 flex flex-col xl:justify-start lg:justify-start justify-end gap-4 bg-white xl:w-72 lg:w-64 w-[120px] xl:h-[200px] lg:h-[200px] h-[240px] xl:p-4 lg:p-4 p-0 text-[15px]">
                        <p className={'xl:font-semibold lg:font-semibold font-bold'}>Улучшение P2P</p>
                        <p className={'font-light'}>Расширение функционала новостного раздела</p>
                        <p className={'xl:font-semibold lg:font-semibold font-bold'}>Маркетинг</p>
                    </div>
                    <div
                        className="flex-shrink-0 bg-opacity-0 flex flex-col justify-start items-center xl:text-8xl lg:text-8xl text-6xl text-[#D8CAA5] bg-white xl:w-72 lg:w-64 w-[120px] xl:h-[200px] lg:h-[200px] h-[240px] rounded-lg xl:p-4 lg:p-4 p-0">
                        III
                    </div>
                    <div
                        className="flex-shrink-0 bg-opacity-0 flex flex-col xl:justify-start lg:justify-start justify-end gap-4 bg-white xl:w-72 lg:w-64 w-[120px] xl:h-[200px] lg:h-[200px] h-[240px] xl:p-4 lg:p-4 p-0 text-[15px]">
                        <p className={'xl:font-semibold lg:font-semibold font-bold'}>Cross-chain</p>
                        <p className={'font-light'}>Тестирование собственного токена</p>
                        <p className={'xl:font-semibold lg:font-semibold font-bold'}>Расширение P2P</p>
                    </div>
                    <div
                        className="flex-shrink-0 bg-opacity-0 flex flex-col justify-start items-center xl:text-8xl lg:text-8xl text-6xl text-[#D8CAA5] bg-white xl:w-72 lg:w-64 w-[120px] xl:h-[200px] lg:h-[200px] h-[240px] rounded-lg xl:p-4 lg:p-4 p-0">
                        V
                    </div>
                    <div
                        className="flex-shrink-0 bg-opacity-0 flex flex-col xl:justify-start lg:justify-start justify-end gap-4 bg-white xl:w-72 lg:w-64 w-[120px] xl:h-[200px] lg:h-[200px] h-[240px] xl:p-4 lg:p-4 p-0 text-[15px]">
                        <p className={'xl:font-semibold lg:font-semibold font-bold'}>Расширение функций для бизнеса</p>
                        <p className={'font-light'}>Привлечение инвестиций</p>
                        <p>ㅤ</p>
                    </div>
                    <div
                        className="flex-shrink-0 bg-opacity-0 flex flex-col justify-start items-center xl:text-8xl lg:text-8xl text-6xl text-[#D8CAA5] bg-white xl:w-72 lg:w-64 w-[120px] xl:h-[200px] lg:h-[200px] h-[240px] rounded-lg xl:p-4 lg:p-4 p-0">
                        VII
                    </div>
                    <div
                        className="flex-shrink-0 bg-opacity-0 flex flex-col xl:justify-start lg:justify-start justify-end gap-4 bg-white xl:w-72 lg:w-64 w-[120px] xl:h-[200px] lg:h-[200px] h-[240px] xl:p-4 lg:p-4 p-0 text-[15px]">
                        <p className={'xl:font-semibold lg:font-semibold font-bold'}>Глобальное масштабирование</p>
                        <p className={'font-light'}>Добавление социального взаимодействия</p>
                        <p>ㅤ</p>
                    </div>
                    <div
                        className="flex-shrink-0 bg-opacity-0 flex flex-col justify-start items-center xl:text-8xl lg:text-8xl text-6xl text-[#D8CAA5] bg-white xl:w-72 lg:w-64 w-[120px] xl:h-[200px] lg:h-[200px] h-[240px] rounded-lg xl:p-4 lg:p-4 p-0">
                        IX
                    </div>
                    <div className="flex-shrink-0 bg-opacity-0 xl:w-[128px] lg:w-[48px] w-[24px]"></div>
                </div>
            </div>
        </div>
    )
}

export default RoadmapBlock