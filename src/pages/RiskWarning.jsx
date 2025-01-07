const RiskWarning = () => {
    return (
        <div
            className={'bg-main w-full h-full flex flex-col items-center justify-center font-urbanist xl:px-48 lg:px-16 px-12 text-white pb-12'}>
            <div className={'w-full flex items-center justify-center border-b-2 border-black'}>
                <p className={'text-3xl py-8 w-full'}>Risk warning</p>
                <div className={'cursor-pointer'} onClick={() => window.location.replace('/')}>
                    <p className={'text-xl px-4'}>Back</p>
                </div>
            </div>
            <div className={'w-full flex flex-col items-start justify-center py-8 gap-6'}>
                <p> This disclosure contains information about the risks associated with the services provided by MV
                    Coin
                    Limited (MV). MV services include operations with cryptocurrencies. Cryptocurrency markets are
                    decentralized and unregulated; therefore, the services we provide related to cryptocurrency trading
                    are unregulated services that are not subject to the provisions of the relevant European legislation
                    (including the provisions of the EU Financial Instrument Markets Directive (MiFID)). Therefore, for
                    MV clients, rules applicable to regulated investment services will not be applicable, including they
                    will not be able to claim material compensation provided by the Compensation Fund for clients, and
                    they will not be able to seek the help of the Financial Market Ombudsman Service to resolve possible
                    disputes. In relation to MV clients, the rules for executing transactions on the best conditions and
                    ensuring the safety of client assets apply.
                    All of these products carry a high risk of capital loss and may not be suitable for investors. We
                    hereby inform you of the risks associated with the use of these products. At the same time, all
                    possible circumstances of each investor and the specific risks associated with them cannot be taken
                    into account. We recommend that you seek the help of a professional consultant for your investment
                    decision. When concluding transactions with MV, you should be fully aware of the possible risks and
                    evaluate your financial capabilities in case of such risks, as well as understand the need for
                    constant tracking of positions. Trading operations are associated with a high risk of loss of
                    capital. You should not invest money that you cannot afford to lose, but under no circumstances can
                    you lose an amount in excess of your total balance.
                </p>
                <p className={'text-4xl font-semibold'}>Execution</p>
                <p>MV is an automated trading platform, and we adhere to the principles of the execution of client
                    orders on the best conditions. Nevertheless, in the period between the placement of the order and
                    the moment of execution, the market price may change, therefore, we cannot guarantee that the
                    execution price will correspond to the displayed price at the time of the order transfer, i.e., the
                    real execution price can be both more or less profitable for you. In addition, there are risks
                    associated with the use of online transaction and bidding systems, including, but not limited to,
                    malfunctions in hardware and software and disruption to the Internet connection.
                </p>
                <p className={'text-4xl font-semibold'}>Cryptocurrencies</p>
                <div className={'flex flex-col gap-4 xl:pl-6 lg:pl-6 pl-2'}>
                    <li>Cryptocurrency market conditions depend only on demand and supply. Cryptocurrency markets are a
                        dynamically developing field. Prices in these markets are extremely volatile and difficult to
                        predict. Cryptocurrency prices, as a rule, are not transparent, are highly speculative in nature
                        and are subject to manipulation by market participants. In the worst-case scenario, your assets
                        can completely depreciate.
                    </li>
                    <li>It is important to distinguish between the estimated prices displayed on the charts and the
                        execution prices broadcasted on our trading platform. Indicative quotes indicate the current
                        state of the market. The decentralized nature of cryptocurrency markets means the absence of a
                        single central exchange for transactions, so each market maker can set prices independently,
                        which will vary slightly. Thus, all prices displayed on the charts provided by us or by third
                        parties are only indicative prices, which may not coincide with the actual transaction prices.
                    </li>
                    <li>Cryptocurrency trading can be used for criminal purposes, which is facilitated by the anonymity
                        of transactions. Investigations by law enforcement agencies regarding illegal actions can
                        negatively impact investors.
                    </li>

                    <li>Cryptocurrency should always be considered as a highly risky instrument, and you should never
                        invest funds you cannot afford to lose. Given the above, cryptocurrencies may not be suitable
                        for all investors. You should not trade cryptocurrencies if you do not have the necessary
                        knowledge and do not understand the features of the MV platform and the level of risk assumed.
                        In addition, you must be sure that the services offered meet your individual circumstances and
                        financial situation. Using our services cannot be considered as a safe investment and is rather
                        an investment that is characterized by a high level of inherent risk. In addition, our own
                        spread is included in online quotes, which increases the volatility of trading on our online
                        platforms.
                    </li>
                    <li>The risk of loss that may arise in the course of cryptocurrency trading can be significant. In
                        this regard, you need to carefully evaluate the appropriateness for you of this type of trade,
                        taking into account your situation and financial condition. You must understand that there is a
                        possibility of a complete loss of all funds in your account.
                    </li>
                    <li><span className={'font-bold'}>Blockchain risks.</span> Blockchain is an independent, public
                        peer-to-peer network that is not dependent on MV, therefore MV cannot be held responsible for
                        any failure, error, malfunction, and (or) violation that occurred on the blockchain or any other
                        networks in which cryptocurrency issuance and (or) trading. You are subject to all changes and
                        (or) amendments made to the blockchain system, as well as all provisions of the applicable
                        legislation in the field of blockchain. We do not make any representations or give any express
                        or implied warranties, either provided for by law or otherwise, regarding the functioning of the
                        blockchain, as well as the violation of the security of the blockchain.
                    </li>
                    <li><span className={'font-bold'}>The work of cryptocurrency protocols.</span> MV does not own the
                        basic software protocols that control the functioning of cryptocurrencies traded on our platform
                        and does not control their work. As a rule, basic protocols are open; anyone can use, copy,
                        modify, and distribute them. MV is not responsible for the operation of basic protocols and does
                        not guarantee their operation, security, and availability. Unforeseen changes (the so-called
                        fork) can be made to the rules of the basic protocols, which can significantly affect the cost,
                        functioning, and / or name of the cryptocurrency that is stored by MV in your interests. In the
                        event of a fork, MV may temporarily suspend its operation (with or without notice) and may (a)
                        make or change the configuration of its systems or (b) decide to completely refuse support (or
                        terminate support) of the protocol implemented as a result of forks. MV may (but is not required
                        to) adjust your account in connection with a fork, depending on the circumstances of each event
                        affecting a particular cryptocurrency in your account.
                    </li>
                    <li><span className={'font-bold'}>Risks associated with third parties.</span> MV may cooperate with
                        Third Parties in order to execute orders and (or) store fiat currencies and Cryptocurrencies.
                        Such Third Parties are not banking institutions that hold fiat / virtual currencies on deposits.
                        In case of loss of funds by the Third Party, its bankruptcy or liquidation, the law does not
                        provide for any special remedies to compensate you for the loss of funds held by Third Parties,
                        even if such Third Parties are properly registered by state authorities. Depending on the
                        structure and level of security, some digital wallets are vulnerable to hacking, as a result of
                        which virtual currency can be stolen or customer assets may be lost. MV is not responsible for
                        losses incurred through the fault of a Third Party.
                    </li>
                    <li><span className={'font-bold'}>Delisting and / or unsupported cryptocurrencies.</span> If at some
                        point a cryptocurrency is delisted from the MV platform, you will then have the option within a
                        certain period to transfer the existing funds to an external wallet. Otherwise, we will exchange
                        the existing funds for you after the deadline expires in a way MV finds best.
                    </li>

                </div>
                <p className={'text-4xl font-semibold'}>Risks associated with automated trading and the Internet</p>
                <p>While working on our site and (or) using applications, system errors may occur. You must be aware
                    of the risks associated with the failure of the system, which may lead to non-execution or
                    delayed execution of your order.
                    You understand the risks associated with the use of a trading system based on Internet
                    technologies, including, but not limited to, the risks of hardware and software failure and
                    Internet connection failure; risk of introducing malicious code; the risk of unauthorized access
                    by third parties to information and (or) assets (including cryptocurrencies owned by you and
                    stored on your behalf); the risk of a cyber attack, a failure in the blockchain network, the
                    appearance of computer viruses, disruptions in communication systems, crashes, errors,
                    distortions, and delays of any nature that may occur during trading using our services; risks
                    associated with spyware, fake antiviruses, trojans, network worms, and other malicious programs
                    that can affect your computer, as well as phishing and spoofing attacks, etc. You should also be
                    aware that SMS services and e-mails are vulnerable to phishing and spoofing attacks, and be
                    careful when receiving messages that, at first glance, are sent to you on behalf of MV.
                </p>
                <p className={'text-4xl font-semibold'}>Commissions and Fees</p>
                <p>Information on fees charged is subject to change; therefore, current information is available
                    online under mvcoin.io/fees. We recommend that you familiarize yourself with all applicable fees
                    and commissions, as they may affect the profitability of your transactions.</p>
                <p className={'text-4xl font-semibold'}>Information</p>
                <p>Any opinions, news reports, research data, price information, analytical and other information
                    published on our website are of a general analytical nature and cannot be considered as an
                    investment recommendation. Under no circumstances will MV be liable for losses incurred as a
                    result of investments made on the basis of any recommendation, forecast, or information
                    provided.</p>
                <p className={'text-4xl font-semibold'}>Historical indicators</p>
                <p>Historical indicators are not a guarantee of future results. The value of your investment can
                    change in any direction.</p>
                <div>
                    <p>M&V Coin</p>
                    <p>last update 15.10.2024</p>
                </div>

            </div>
        </div>
    )
}

export default RiskWarning