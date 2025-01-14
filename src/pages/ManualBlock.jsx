import PhoneImage from '../assets/icons/PhoneWithApp2-removebg-preview.png';
import { useState } from "react";
import {useTranslation} from "react-i18next";

const ManualBlock = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const {t} = useTranslation();
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={'w-full  bg-[#15344D] flex flex-col justify-start items-center xl:px-36 lg:px-16 px-8'} id="manual">
            <p className={'font-urbanist font-bold lg:text-[35px] text-[25px] text-white md:py-16 py-8 text-left w-full'}>
                {t('manual_header')}
            </p>
            <div className={'flex xl:h-[630px] lg:h-[630px] lg:flex-row flex-col justify-center items-center lg:items-start w-full'}>
                <div className={`relative lg:w-1/2 w-full flex flex-col items-center transition-all ease-in-out duration-300 ${openIndex != null ? 'lg:h-[800px] md:h-[700px] h-[680px] ' : 'lg:h-[560px] md:h-[500px] h-[480px]'}`}>
                    {/* Step 1 */}
                    <div
                        onClick={() => toggleAccordion(1)}
                        className={`shadow-[0_-8px_25px_rgba(0,0,0,0.25)] absolute bg-gradient-to-l rounded-[20px] from-[#235379] to-[#517084] w-full ${openIndex === 1 ? 'h-[224px]' : 'h-[110px]'} shadow-[#132534] p-4 flex flex-col justify-between items-start transition-all duration-300 hover:-translate-y-2`}
                        style={{ top: '0px', zIndex: 0 }}>
                        <div>
                            <p className={'font-urbanist font-bold text-[#D8CAA5] md:text-[20px] text-[18px]'}>{t('manual_step1')}</p>
                            <p className={'font-urbanist text-white font-semibold md:text-[20px] text-[18px]'}>{t('manual_word1')}</p>
                        </div>
                        {openIndex === 1 && (
                        <div className={'font-light text-[#CFCECE] w-full pb-4 md:text-[18px] text-[14px] overflow-hidden'}>
                            <p>{t('manual_word2')}<span className={'font-bold'}> M&V coin </span></p>
                            <p>{t('manual_word3')}</p>
                            <p>{t('manual_word4')}</p>
                            <p>{t('manual_word5')}</p>
                        </div>
                            )}
                    </div>

                    {/* Step 2 */}
                    <div
                        onClick={() => toggleAccordion(2)}
                        className={`shadow-[0_-8px_25px_rgba(0,0,0,0.25)] absolute bg-gradient-to-l rounded-[20px] from-[#235379] to-[#517084] w-full ${openIndex === 2 ? 'h-[280px]' : 'h-[130px]'} shadow-[#132534] p-4 flex flex-col justify-between items-start transition-all duration-300 hover:-translate-y-2`}
                        style={{ top: `${openIndex === 1 ? '200px' : '100px'}`, zIndex: 1 }}>
                        <div>
                            <p className={'font-urbanist font-bold text-[#D8CAA5] md:text-[20px] text-[18px]'}>{t('manual_step2')}</p>
                            <p className={'font-urbanist text-white font-semibold md:text-[20px] text-[18px] md:w-4/5'}>{t('manual_word6')}</p>
                        </div>
                        {openIndex === 2 && (
                            <div className={'font-light text-[#CFCECE] w-full pb-4 md:text-[18px] text-[14px] overflow-hidden'}>
                                <p>{t('manual_word7')}</p>
                                <p>{t('manual_word8')}</p>
                                <p>{t('manual_word9')}</p>
                            </div>
                        )}
                    </div>

                    {/* Step 3 */}
                    <div
                        onClick={() => toggleAccordion(3)}
                        className={`absolute bg-gradient-to-l rounded-[20px] from-[#235379] to-[#517084] w-full ${openIndex === 3 ? 'h-[310px]' : 'h-[130px]'} shadow-[0_-8px_25px_rgba(0,0,0,0.25)] shadow-[#132534] p-4 flex flex-col justify-between items-start transition-all duration-300 hover:-translate-y-2`}
                        style={{ top: `${openIndex=== 1 ? '320px': openIndex === 2 ? '350px' : '210px'}`, zIndex: 2 }}>
                        <div>
                            <p className={'font-urbanist font-bold text-[#D8CAA5] md:text-[20px] text-[18px]'}>{t('manual_step3')}</p>
                            <p className={'font-urbanist text-white font-semibold md:text-[20px] text-[18px]'}>{t('manual_word10')}</p>
                        </div>
                        {openIndex === 3 && (
                            <div className={'font-light text-[#CFCECE] w-full pb-4 md:text-[18px] text-[14px] overflow-hidden'}>
                                <p>{t('manual_word11')}</p>
                                <p>{t('manual_word12')}</p>
                            </div>
                        )}
                    </div>

                    {/* Step 4 */}
                    <div
                        onClick={() => toggleAccordion(4)}
                        className={`absolute bg-gradient-to-l rounded-[20px] from-[#235379] to-[#517084] w-full ${openIndex === 4 ? 'h-[300px]' : 'h-[100px]'} shadow-[0_-8px_25px_rgba(0,0,0,0.25)] shadow-[#132534] p-4 flex flex-col justify-between items-start transition-all duration-300 hover:-translate-y-2`}
                        style={{ top: `${openIndex===1 ? '410px' : openIndex === 2 ? '440px' : openIndex === 3 ? '510px' : '300px'}`, zIndex: 3 }}>
                        <div>
                            <p className={'font-urbanist font-bold text-[#D8CAA5] md:text-[20px] text-[18px]'}>{t('manual_step4')}</p>
                            <p className={'font-urbanist text-white font-semibold md:text-[20px] text-[18px]'}>{t('manual_word13')}</p>
                        </div>
                        {openIndex === 4 && (
                            <div className={`font-light text-[#CFCECE] w-full pb-4 md:text-[18px] text-[14px] overflow-hidden`}>
                                <p>{t('manual_word14')}</p>
                                <p>{t('manual_word15')}</p>
                            </div>
                        )}
                    </div>
                </div>
                {/* Image */}
                <div className={'flex lg:items-start items-center justify-center lg:w-1/2 lg:h-screen'}>
                    <img src={PhoneImage} alt="" className={'md:w-[400px] md:h-[400px] drop-shadow-2xl'} />
                </div>
            </div>
        </div>
    );
};

export default ManualBlock;
