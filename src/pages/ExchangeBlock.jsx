import React, { useState } from 'react';
import ChangeIcon from '../assets/icons/arrow-down-arrow-up-svgrepo-com.svg'
import {t} from "i18next";
const ExchangeBlock = () => {
    const [activeTab, setActiveTab] = useState('buy'); // "buy" або "sell"

    return (
        <div className="w-full bg-[#15344D] flex flex-col justify-center items-center p-8 font-urbanist">
            {/* Tabs */}
            <div className="flex w-full max-w-xl bg-[#15344D] rounded-t-lg  ">
                <button
                    className={`flex-1 text-center py-3 font-medium ${
                        activeTab === 'buy' ? 'text-white border-b-2 border-[#D8CAA5]   rounded-tl-xl ' : 'text-gray-400'
                    }`}
                    onClick={() => setActiveTab('buy')}
                >
                    Купить
                </button>
                <button
                    className={`flex-1 text-center py-3 font-medium ${
                        activeTab === 'sell' ? 'text-white border-b-2 border-[#D8CAA5]  rounded-tr-xl' : 'text-gray-400'
                    }`}
                    onClick={() => setActiveTab('sell')}
                >
                    Продать
                </button>
            </div>

            {/* Form */}
            <div className="w-full max-w-xl bg-main p-6 rounded-2xl rounded-t-none shadow-md">
                <div className="">
                    <div className="flex w-full items-center border rounded-lg h-12">
                        <input
                            type="text"
                            className="h-full px-3 w-4/5 focus:outline-none rounded-l-lg"
                            placeholder="Сумма"
                        />
                        <select className="h-full w-1/5 border-l rounded-r-lg focus:outline-none">
                            <option value="BTC">BTC</option>
                            <option value="ETH">ETH</option>
                            <option value="TRX">TRX</option>
                            <option value="USDT">USDT</option>
                        </select>
                    </div>
                </div>
                <div className={'w-full h-5 flex items-center justify-center relative'}>
                    <div className={"absolute w-12 h-12 flex justify-center items-center bg-white rounded-full border-2"}>
                        <img src={ChangeIcon} className={'w-8 h-8'} alt=""/>
                    </div>
                </div>
                <div className="mb-4">
                <div className="flex items-center border rounded-lg h-12">
                        <input
                            type="text"
                            className="h-full px-3 w-4/5 focus:outline-none rounded-l-lg"
                            placeholder="Сумма"
                        />
                        <select className="h-full w-1/5 border-l rounded-r-lg focus:outline-none">
                            <option value="BTC">BTC</option>
                            <option value="ETH">ETH</option>
                            <option value="TRX">TRX</option>
                            <option value="USDT">USDT</option>
                        </select>
                    </div>
                </div>

                <div className="mb-6">
                    <select className="w-full p-3 border rounded-lg focus:outline-none">
                        <option value="" disabled={true} selected={true}>Выберите способ оплаты</option>
                        <option value="card">TRC20</option>
                        <option value="paypal">PayPal</option>
                        <option value="qiwi">QIWI</option>
                    </select>
                </div>

                <button className="w-full bg-[#D8CAA5] text-black py-3 rounded-lg font-medium hover:bg-[#ccaa50]">
                    Показать предложения
                </button>
            </div>
        </div>
    );
};

export default ExchangeBlock;