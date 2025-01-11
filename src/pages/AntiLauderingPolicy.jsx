const AntiLauderingPolicy = () => {
    return (
        <div
            className={'bg-main w-full h-full flex flex-col items-center justify-center font-urbanist xl:px-48 lg:px-16 px-12 text-white pb-12'}>
            <div className={'w-full flex items-center justify-center border-b-2 border-black'}>
                <p className={'text-3xl py-8 w-full'}>Anti-Money Laundering Policy (KYC and AML)</p>
                <a className={'cursor-pointer'} href={'/'}>
                    <p className={'text-xl px-4'}>Back</p>
                </a>
            </div>
            <div className={'w-full flex flex-col items-start justify-center py-8 gap-6'}>
                {/* 1. Introduction */}
                <p className={'text-3xl font-semibold'}>1. Introduction</p>
                <p><span className={'font-bold'}>1.1.</span> Having regard for the safety of the Users and due to the legal requirements of the European Union, United States of America, and other countries, <span className={'font-bold'}>MV Coin</span> has implemented Anti-Money Laundering (AML) and Know Your Customer (KYC) Policy (hereinafter - the “Policy”).</p>
                <p><span className={'font-bold'}>1.2.</span> International regulations require <span className={'font-bold'}>MV Coin</span> to implement effective internal procedures and mechanisms to prevent money laundering, terrorist financing, drug and human trafficking, and/or other illegal activity as applicable, and to take action in case of any form of suspicious activity from its Users.</p>
                <p><span className={'font-bold'}>1.3.</span> The purpose of this Policy is effective combating of money laundering and terrorist financing through proper identification of <span className={'font-bold'}>MV Coin</span>’s Users and supervision of their transactions. <span className={'font-bold'}>MV Coin</span> shall identify and cease transactions made not only to purchase/sell cryptocurrency but also to hide the criminal origin of money, finance illegal activity, or other unlawful behavior.</p>
                <p><span className={'font-bold'}>1.4.</span> Specific provisions of this Policy are confidential and for internal use only to prevent avoidance by dishonest or fraudulent Users. We would like to introduce to you some general rules and stipulations of our policies that directly concern you and affect our services we render.</p>

                {/* 2. Objectives */}
                <p className={'text-3xl font-semibold'}>2. Objectives</p>
                <p><span className={'font-bold'}>2.1.</span> Objectives of this Policy include the following:</p>
                <ul className={'list-disc pl-8'}>
                    <li>Comply with all AML rules & regulations of the jurisdictions <span className={'font-bold'}>MV Coin</span> operates in;</li>
                    <li>Establish procedures for customer identification and retain necessary identification and transactional information;</li>
                    <li>Introduce <span className={'font-bold'}>MV Coin</span>’s Compliance Officer, responsible for coordinating compliance with this Policy;</li>
                    <li>Introduce requirements for all <span className={'font-bold'}>MV Coin</span>’s employees to prevent, detect, and report to the Compliance Officer all potential instances in which <span className={'font-bold'}>MV Coin</span> or its employees, facilities, or activities have been or are about to be used for money laundering, terrorist financing, and other illegal activity;</li>
                    <li>Establish suspicious activity reporting procedures and document retention guidelines for any suspicious activity reports and supporting documentation.</li>
                </ul>

                {/* 3. Definition of Money Laundering and Financing of Terrorism */}
                <p className={'text-3xl font-semibold'}>3. Definition of Money Laundering and Financing of Terrorism</p>
                <p><span className={'font-bold'}>3.1.</span> Money laundering involves the placement of illegally obtained money into legitimate financial systems so that monetary proceeds derived from criminal activity are transformed into funds with an apparently legal source.</p>
                <p><span className={'font-bold'}>3.2.</span> With respect to entities, any involvement—whether to instigate, assist, conceal, or ignore the source, nature, location, ownership, or control of money laundering activities—can lead to both civil and criminal proceedings against both the individual and the entity involved.</p>
                <p><span className={'font-bold'}>3.3.</span> Money laundering transactions may include, but are not limited to:</p>
                <ul className={'list-disc pl-8'}>
                    <li>Engaging in any activity while willfully or recklessly disregarding the source of the funds or the nature of the Client’s transaction;</li>
                    <li>Engaging in any activity designed to hide the nature, location, source, ownership, or control of proceeds of criminal activity;</li>
                    <li>Dealing in funds to facilitate criminal activity; or</li>
                    <li>Dealing in the proceeds of criminal activity.</li>
                </ul>

                {/* 4. Compliance Officer */}
                <p className={'text-3xl font-semibold'}>4. Compliance Officer</p>
                <p><span className={'font-bold'}>4.1.</span> The Compliance Officer is the person, duly authorized by <span className={'font-bold'}>MV Coin</span>, whose duty is to ensure the effective implementation and enforcement of this Policy. It is the Compliance Officer’s responsibility to supervise all aspects of <span className={'font-bold'}>MV Coin</span>’s anti-money laundering and counterterrorist financing measures, including but not limited to:</p>
                <ul className={'list-disc pl-8'}>
                    <li>Collecting Users’ identification information;</li>
                    <li>Establishing and updating internal policies and procedures for the completion, review, submission, and retention of all reports and records required under the applicable laws and regulations;</li>
                    <li>Monitoring transactions and investigating any significant deviations from normal activity;</li>
                    <li>Implementing a records management system for appropriate storage and retrieval of documents, files, forms, and logs;</li>
                    <li>Updating risk assessment regularly;</li>
                    <li>Providing law enforcement with information as required under applicable laws and regulations.</li>
                </ul>
                <p>The Compliance Officer is entitled to interact with law enforcement involved in the prevention of money laundering, terrorist financing, and other illegal activities.</p>

                {/* 5. Procedures */}
                <p className={'text-3xl font-semibold'}>5. Procedures</p>
                <p className={'text-2xl font-semibold'}>5.1. User’s Identification</p>
                <p><span className={'font-bold'}>5.1.1.</span> First and foremost, we are obliged to verify, beyond a reasonable doubt, the identity of individuals authorized to conduct transactions on <span className={'font-bold'}>MV Coin</span>. For this purpose, we collect scans of national IDs, international passports, bank statements, and utility bills (as applicable). The authenticity of these documents is verified using specialized software provided by professional external providers.</p>
                <p><span className={'font-bold'}>5.1.2.</span> We require Users to submit a “selfie” or a video recording with their ID document to prevent unauthorized use of their documents by others. Verification of likeness to the ID photo is conducted using specialized software from professional external providers or, in cases of doubt, manually verified by our customer support team.</p>
                <p><span className={'font-bold'}>5.1.3.</span> In case of any doubts, our customer support team and/or Compliance Officer will contact you to address concerns and resolve any issues that arise.</p>
                <p><span className={'font-bold'}>5.1.4.</span> If we cannot determine, beyond a reasonable doubt, that the documents provided belong to you and are authentic, we will not permit you to execute any transactions.</p>
                <p><span className={'font-bold'}>5.1.5.</span> <span className={'font-bold'}>MV Coin</span> reserves the right to investigate certain Users who are deemed risky or suspicious. <span className={'font-bold'}>MV Coin</span> also reserves the right to verify a User’s identity on an ongoing basis, particularly when their identification information changes or their activity appears suspicious (unusual for that particular User).</p>
                <p><span className={'font-bold'}>5.1.6.</span> In addition, <span className={'font-bold'}>MV Coin</span> reserves the right to request up-to-date documents from Users, even if they have already passed identity verification in the past.</p>
                <p><span className={'font-bold'}>5.1.7.</span> User identification information will be collected, stored, shared, and protected strictly in accordance with <span className={'font-bold'}>MV Coin</span>’s Privacy Policy and related regulations. Once a User’s identity has been verified, <span className={'font-bold'}>MV Coin</span> is able to protect itself from potential legal liability should its services be used to conduct illegal activities.</p>
                {/* 5. Enhanced Due Diligence */}
                <p className={'text-3xl font-semibold'}>5.2. Enhanced Due Diligence</p>
                <p><span className={'font-bold'}>5.2.1.</span> When a User’s trade volume increases, our AML/CTF verification obligations also increase. The same applies if your transactions are flagged as suspicious or unusual, or if our verification process identifies you as posing a significant AML/CTF risk.</p>
                <p><span className={'font-bold'}>5.2.2.</span> In such cases, we will conduct Enhanced Due Diligence procedures and may require additional documentation, including proof of your exact place of residence, education, occupation, and the source of funds used on the exchange.</p>
                <p><span className={'font-bold'}>5.2.3.</span> Unfortunately, if our AML specialists determine that the information provided does not resolve our concerns, we will be obligated to terminate our cooperation with you or even report your transactions to the relevant authorities.</p>

                {/* 5.4. Verification Levels */}
                <p className={'text-3xl font-semibold'}>5.3. Verification Levels</p>
                <p>Currently, our KYC/AML verification levels are as follows:</p>
                <ul className={'list-decimal pl-8'}>
                    <li>Provide your full name and e-mail;</li>
                    <li>Provide a photocopy of your passport or ID card;</li>
                    <li>Provide a video showing your face along with the open page of your passport or ID card;</li>
                    <li>Follow the link sent to your phone screen to complete the verification process;</li>
                    <li>Additional verification data may be requested, if necessary.</li>
                </ul>

                {/* 6. Transactions’ Monitoring and Supervision */}
                <p className={'text-3xl font-semibold'}>6. Transactions’ Monitoring and Supervision</p>
                <p><span className={'font-bold'}>6.1.</span> Using our proprietary software, we also analyze all transactions that take place on <span className={'font-bold'}>MV Coin</span>, looking for suspicious and unusual behaviors. Such selected transactions are analyzed by our AML specialists and evaluated to determine whether they pose significant AML/CTF risks or need to be ceased and clarified with the User.</p>
                <p><span className={'font-bold'}>6.2.</span> The objective of the implemented control system is to protect <span className={'font-bold'}>MV Coin</span> from the various risks it faces and enable ongoing monitoring of transaction execution, ensuring compliance with all legal requirements and predefined internal procedures. This process considers the profile of the User in question. The control system enables <span className={'font-bold'}>MV Coin</span> to detect transactions that show relevant signs or suspicious features in terms of AML/CTF.</p>
                <p><span className={'font-bold'}>6.3.</span> <span className={'font-bold'}>MV Coin</span> has adopted and implemented several IT tools that automatically control and monitor Users and their transactions.</p>
                <p><span className={'font-bold'}>6.4.</span> The monitoring and control activities include, but are not limited to, the following practices:</p>
                <ul className={'list-disc pl-8'}>
                    <li>Monitoring and control of high AML risk customers and transactions;</li>
                    <li>Monitoring and control of transactions involving high AML risk countries;</li>
                    <li>Monitoring and control of complex and/or extraordinary transactions;</li>
                    <li>Continuous monitoring of the consistency between transactions and the information collected on the activities pursued by the customer, risk profile, and their financial assets. This includes both extraordinary transactions (daily alerts) and assessments of the customer’s profile over time regarding the number of transactions and average amounts involved (monthly alerts);</li>
                    <li>Automated control of transactions that exceed a pre-determined amount (based on the customer’s risk level) and verification of their consistency with the customer’s profile;</li>
                    <li>Monitoring and control of related extraordinary transactions that, together, exceed the required legal limit for customer identification;</li>
                    <li>Monitoring and control of transactions involving entities subject to sanctions and embargos listed by the United Nations, European Union, and the Office of Foreign Assets Control. This ensures compliance with international restrictions and internal lists, including restricting transactions or enforcing Enhanced Due Diligence. Real-time priorities are established based on the nature of the filtered operation;</li>
                    <li>Verification and updating of User information and documents stored in both paper and electronic systems, along with all additional information required for electronic transfers of funds.</li>
                </ul>
                <p><span className={'font-bold'}>6.5.</span> Regardless of the above-mentioned criteria—such as the AML/CTF risk level of the User, the country involved, or the complexity and risk of the transaction — <span className={'font-bold'}>MV Coin</span> pays special attention to all behaviors or activities that may increase the risk of being related to crimes such as money laundering or terrorism financing. Information and supporting documentation are collected to confirm the rationale behind the transactions analyzed.</p>
                <p><span className={'font-bold'}>6.6.</span> Monitoring and control activities are managed by the Compliance Officer, who has full access to any type of information within <span className={'font-bold'}>MV Coin</span>.</p>
                {/* 7. General AML/CTF Rules */}
                <p className={'text-3xl font-semibold'}>7. General AML/CTF Rules</p>
                <ul className={'list-disc pl-8'}>
                    <li><span className={'font-bold'}>MV Coin</span> does not accept cash deposits or cash withdrawals in any cases.</li>
                    <li><span className={'font-bold'}>MV Coin</span> does not accept any third parties’ deposits into a User account, managing the account on behalf of someone else, joint or shared accounts, etc.</li>
                    <li><span className={'font-bold'}>MV Coin</span> does not allow any exceptions in the field of documentation required from Users.</li>
                    <li><span className={'font-bold'}>MV Coin</span> reserves the right to refuse to process the User’s transaction at any time in case of suspicion of AML/CTF risk.</li>
                    <li>In accordance with international law, we are not obliged (and may even be forbidden) to inform our Users if we report their behavior as suspicious to the relevant authorities.</li>
                </ul>

                {/* 8. Reporting */}
                <p className={'text-3xl font-semibold'}>8. Reporting</p>
                <p><span className={'font-bold'}>8.1.</span> If there is a grounded suspicion that a User or a potential customer is using or intends to use <span className={'font-bold'}>MV Coin</span> to launder funds coming from an unlawful activity or to finance terrorism, <span className={'font-bold'}>MV Coin</span> will take all the steps necessary to assure the full observance of all the relevant legal requirements in force.</p>
                <p><span className={'font-bold'}>8.2.</span> <span className={'font-bold'}>MV Coin</span>’s internal regulations define the procedures to be adopted in case of the detection of transactions or activities considered suspicious. The employees of <span className={'font-bold'}>MV Coin</span> shall always report these transactions or activities to the Compliance Officer, who is responsible for thoroughly analyzing and assessing them.</p>
                <p><span className={'font-bold'}>8.3.</span> The Compliance Officer shall assess the processes analyzed and decide on the existence of grounds for the reporting of possible suspicious transactions.</p>
                <p><span className={'font-bold'}>8.4.</span> The transactions deemed suspicious are reported to the competent authorities of each jurisdiction where <span className={'font-bold'}>MV Coin</span> operates (in accordance with the specific legal framework).</p>
                <p><span className={'font-bold'}>8.5.</span> <span className={'font-bold'}>MV Coin</span> maintains a relationship of full cooperation with the competent authorities of each jurisdiction, ensuring access to all necessary information and providing the requested documents.</p>

                {/* 9. Restricted Countries */}
                <p className={'text-3xl font-semibold'}>9. Restricted Countries</p>
                <p><span className={'font-bold'}>9.1.</span> <span className={'font-bold'}>MV Coin</span> is not available in the following countries:</p>
                <p>European Union, United States, United Kingdom, Australia, Canada, New Zealand, Albania, Iceland, Norway, North Macedonia, Switzerland, Andorra, Liechtenstein, Luxembourg, Monaco, San Marino, China, Taiwan, South Korea, Japan, Singapore, North Korea, Iran, Afghanistan, Myanmar, Syria, Yemen, Antigua and Barbuda, Bahamas, Barbados, Dominica, Dominican Republic, Grenada, Jamaica, St. Kitts and Nevis, St. Lucia, St. Vincent and the Grenadines, Trinidad and Tobago, Kyrgyzstan, Tajikistan, Uzbekistan.</p>



            </div>
        </div>
    )
}

export default AntiLauderingPolicy