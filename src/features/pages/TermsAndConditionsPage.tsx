import Link from 'next/link';
import { PageLayout, Section, InfoRow } from './PageLayout';

export const TermsAndConditionsPage = () => {
    return (
        <PageLayout title="Terms and Conditions" lastUpdated="February 20, 2026">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                These Terms and Conditions ("Terms") govern your use of the Aicrix platform ("Application") and the website at <a href="https://aicrix.com">https://aicrix.com</a> ("Website"), operated by <strong style={{ color: 'var(--text)' }}>VELORIA TECH (OPC) PRIVATE LIMITED</strong> ("Company", "we", "us", or "our"). By accessing or using our Service, you agree to be bound by these Terms. If you do not agree, please do not use the Service.
            </p>

            <Section title="1. Interpretation and Definitions">
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                <ul className="list-disc list-inside text-white/40 text-sm space-y-1.5 pl-1 mt-2">
                    <li><strong className="text-white/50">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.</li>
                    <li><strong className="text-white/50">Application</strong> means Aicrix, the AI-powered cricket advisory software program provided by the Company, available on Apple App Store and Google Play Store.</li>
                    <li><strong className="text-white/50">Company</strong> (referred to as either "the Company", "we", "us", or "our" in this Agreement) refers to VELORIA TECH (OPC) PRIVATE LIMITED, 12-132, Main Road, Pedda Devaram Padu, Ammanabrolu, Ongole Mandal, Prakasham, 523180, Andhra Pradesh, India.</li>
                    <li><strong className="text-white/50">Content</strong> refers to all text, images, data, predictions, analytics, visualizations, reports, and other information available through the Service.</li>
                    <li><strong className="text-white/50">Country</strong> refers to Andhra Pradesh, India.</li>
                    <li><strong className="text-white/50">Device</strong> means any device that can access the Service such as a computer, a cellphone, or a digital tablet.</li>
                    <li><strong className="text-white/50">In-App Purchase (IAP)</strong> means any purchase of digital content, credits, subscriptions, or premium features made through the Apple App Store or Google Play Store billing systems within the Application.</li>
                    <li><strong className="text-white/50">Platform</strong> refers to the Aicrix AI-powered cricket advisory platform providing predictions, analytics, and intelligence services.</li>
                    <li><strong className="text-white/50">Service</strong> refers to the Application and the Website, individually or collectively.</li>
                    <li><strong className="text-white/50">Terms and Conditions</strong> (also referred to as "Terms") mean these Terms and Conditions that form the entire agreement between you and the Company regarding the use of the Service.</li>
                    <li><strong className="text-white/50">Third-party Social Media Service</strong> means any services or content provided by a third-party that may be displayed, included, or made available by the Service.</li>
                    <li><strong className="text-white/50">User</strong> (referred to as either "you" or "your") means any individual who accesses, browses, or uses the Platform.</li>
                    <li><strong className="text-white/50">Website</strong> refers to Aicrix, accessible from <a href="https://aicrix.com" >https://aicrix.com</a>.</li>
                </ul>
            </Section>

            <Section title="2. Platform Nature and Role">
                <p>Aicrix is an AI-powered cricket advisory platform that provides match predictions, player analytics, pitch intelligence, and strategic insights using statistical modeling and machine learning.</p>
                <p className="mt-2"><strong className="text-white/50">Important:</strong> The Company acts solely as a technology provider and information service. Aicrix is NOT a betting, gambling, or fantasy sports platform. All predictions, analytics, and insights are provided for informational and advisory purposes only. The Company does not guarantee any specific outcomes and is not responsible for decisions made based on the information provided by the Service.</p>
            </Section>

            <Section title="3. Data Sharing and Privacy">
                <p>All data collected through the Platform — including personal data, usage data, transactional data, and analytics data — is shared with and maintained by the parent company, VELORIA TECH (OPC) PRIVATE LIMITED. This data may be used for:</p>
                <ul className="list-disc list-inside text-white/40 text-sm space-y-1.5 pl-1 mt-2">
                    <li>Operating and maintaining the Platform</li>
                    <li>Processing analytics, predictions, and match insights</li>
                    <li>Generating invoices and managing subscriptions</li>
                    <li>Business intelligence and platform improvement</li>
                    <li>Marketing and promotional communications (with your consent)</li>
                    <li>Compliance with legal obligations</li>
                </ul>
                <p className="mt-2">For comprehensive details regarding data collection, use, and protection, please refer to our <Link href="/privacy-policy">Privacy Policy</Link>.</p>
            </Section>

            <Section title="4. User Eligibility and Account">
                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">4.1 Age Requirement</h3>
                <p>You must be at least 18 years old to use our Service. By using the Service, you represent and warrant that you are at least 18 years of age. The Company does not permit users under 18 to use the Service.</p>

                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">4.2 Account Creation and Accuracy</h3>
                <p>To use certain features of the Service, you must register for an account. When you register, you agree to provide accurate, complete, and current registration information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">4.3 Account Security</h3>
                <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a Third-Party Social Media Service. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
                <p className="mt-2">You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you without appropriate authorization, or a name that is otherwise offensive, vulgar, or obscene.</p>

                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">4.4 Social Media Authentication</h3>
                <p>You may sign in using third-party accounts including Google, Apple, and Facebook. If you choose to do so, you agree to comply with those providers' terms of service in addition to these Terms. The Company is not responsible for issues arising from third-party authentication services.</p>
            </Section>

            <Section title="5. Verification Requirements">
                <p>To ensure the security and integrity of the Platform, the Company may require the following verification processes:</p>
                <ul className="list-disc list-inside text-white/40 text-sm space-y-1.5 pl-1 mt-2">
                    <li><strong className="text-white/50">Email Verification:</strong> One-time verification link sent to your registered email address</li>
                    <li><strong className="text-white/50">Phone Verification:</strong> OTP (One-Time Password) sent via SMS to your registered mobile number</li>
                </ul>
                <p className="mt-2">Failure to complete required verification may limit your access to certain features of the Service.</p>
            </Section>

            <Section title="6. In-App Purchases and Coins">
                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">6.1 Free and Premium Features</h3>
                <p>The Application offers both free and premium (paid) features. The free tier provides basic access to match data and limited analytics, and is supported by third-party advertisements (including banner ads, interstitial ads, and rewarded ads) served through Google AdMob. Premium features — including advanced AI predictions, deep player analytics, pitch intelligence modules, tournament simulators, and real-time match flow analysis — require the use of Coins, which are consumable digital credits purchased within the Application.</p>
                <p className="mt-2">By using the free tier, you acknowledge and agree that advertisements will be displayed within the Application. The type, frequency, and placement of advertisements are determined at the Company's sole discretion. The Company is not responsible for the content of third-party advertisements. Interaction with advertisements is at your own risk, and any transactions between you and advertisers are solely between you and the advertiser.</p>

                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">6.2 Coins and In-App Purchases</h3>
                <p>All purchases within the Application are processed exclusively through the Apple App Store (for iOS devices) or Google Play Store (for Android devices) as <strong className="text-white/50">consumable In-App Purchases</strong>. By making a purchase, you agree to the applicable store's payment terms and billing practices.</p>
                <ul className="list-disc list-inside text-white/40 text-sm space-y-1.5 pl-1 mt-2">
                    <li><strong className="text-white/50">Coins:</strong> Digital credits that can be purchased in various packs (e.g., 50, 100, 500 coins). Coins are consumable and are deducted from your balance when you access premium features such as AI match predictions, detailed player analytics, or strategic insights.</li>
                    <li><strong className="text-white/50">Consumable Nature:</strong> Coins are consumed upon use and cannot be restored, transferred, or converted to cash once used. Unused coins remain in your account balance until used.</li>
                    <li><strong className="text-white/50">No Real-World Value:</strong> Coins have no monetary value outside the Application. They cannot be exchanged, traded, sold, or transferred to other users or accounts.</li>
                </ul>
                <p className="mt-2">Payment is charged to your Apple ID or Google account at the time of purchase confirmation. Coin packs are delivered to your in-app balance immediately upon successful payment processing.</p>

                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">6.3 Coin Usage and Expiry</h3>
                <p>Coins are deducted from your account balance each time you access a premium feature. The number of coins required per feature is displayed within the Application before confirmation. Once coins are consumed, the action cannot be reversed. Unused coins do not expire as long as your account remains active.</p>
                <p className="mt-2">If your account is terminated or deleted (whether by you or by the Company), any remaining unused coins in your account will be forfeited and are non-refundable.</p>

                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">6.4 Refund Policy</h3>
                <div className="p-4 rounded-xl page-card-accent mt-2">
                    <p className="text-sm" style={{ color: 'var(--muted)' }}><strong style={{ color: 'var(--accent)' }}>In-App Purchase Refunds:</strong> All coin purchases are processed and managed by Apple (App Store) or Google (Play Store). Refund eligibility, policies, and processing are governed entirely by the respective platform's refund policies for consumable In-App Purchases.</p>
                    <p className="text-sm mt-2" style={{ color: 'var(--muted)' }}>To request a refund:</p>
                    <ul className="list-disc list-inside text-white/40 text-sm space-y-1.5 pl-1 mt-1">
                        <li><strong style={{ color: 'var(--text)' }}>Apple App Store:</strong> Visit <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a> or follow Apple's refund process. Refund requests are subject to <a href="https://support.apple.com/en-us/HT204084"  target="_blank" rel="noopener noreferrer">Apple's refund policies</a> and applicable Consumer Protection guidelines.</li>
                        <li><strong style={{ color: 'var(--text)' }}>Google Play Store:</strong> Visit <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer">Google Play refund policy</a> or request through the Play Store app. Google typically allows refunds within 48 hours of purchase for eligible items as per their <a href="https://support.google.com/googleplay/answer/2479637"  target="_blank" rel="noopener noreferrer">refund policy</a>.</li>
                    </ul>
                    <p className="text-sm mt-2" style={{ color: 'var(--muted)' }}><strong className="text-white/50">Consumed Coins:</strong> Once coins have been used or consumed within the Application (i.e., spent on premium features), they are <strong className="text-white/50">non-refundable</strong>. Coin consumption is final and cannot be reversed.</p>
                    <p className="text-sm mt-2" style={{ color: 'var(--muted)' }}><strong className="text-white/50">Unused Coins:</strong> If you have purchased coins but have not yet consumed them, you may be eligible for a refund through the respective app store's standard refund process, subject to Apple's or Google's refund policies.</p>
                    <p className="text-sm mt-2" style={{ color: 'var(--muted)' }}>The Company does not have the ability to process refunds directly, as all payments are handled by Apple or Google. All refund requests must be directed to Apple or Google through the channels listed above. The Company will cooperate with Apple and Google on any refund-related inquiries.</p>
                </div>

                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">6.5 Pricing and Price Changes</h3>
                <p>All coin pack prices are displayed in your local currency as determined by the App Store or Play Store. Prices include applicable taxes as determined by Apple or Google based on your location.</p>
                <p className="mt-2">The Company reserves the right to modify the pricing of coin packs at any time. Price changes apply to future purchases only and take effect immediately upon being updated in the respective app store. Previously purchased coins are not affected by price changes — your existing coin balance remains intact regardless of future pricing adjustments.</p>
            </Section>

            <Section title="7. End User License Agreement (EULA)">
                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">7.1 License Grant</h3>
                <p>Subject to your compliance with these Terms, the Company grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the Application on a Device that you own or control, strictly in accordance with these Terms and the Application's documentation.</p>

                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">7.2 License Restrictions</h3>
                <p>You agree not to, and shall not permit any third party to:</p>
                <ul className="list-disc list-inside text-white/40 text-sm space-y-1.5 pl-1 mt-2">
                    <li>License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose, or otherwise commercially exploit the Application or make it available to any third party</li>
                    <li>Copy or use the Application for any purpose other than as permitted under this EULA</li>
                    <li>Modify, make derivative works of, disassemble, decrypt, reverse compile, or reverse engineer any part of the Application</li>
                    <li>Remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) of the Company or its affiliates, partners, suppliers, or licensors</li>
                    <li>Use the Application to build a similar or competitive product or service</li>
                    <li>Use the Application or any data derived from it for automated decision-making without appropriate human oversight</li>
                </ul>

                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">7.3 Ownership and Updates</h3>
                <p>The Application, including all copies, modifications, and derivative works, is the exclusive property of the Company and its licensors. The Company reserves all rights not expressly granted to you.</p>
                <p className="mt-2">The Company may from time to time issue updates, patches, or new versions of the Application. You agree that the Company may automatically update the Application on your Device. These updates may include bug fixes, feature enhancements, or security improvements and are designed to improve the Application's performance.</p>

                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">7.4 Third-Party Acknowledgements</h3>
                <p>The Application may include third-party software, libraries, or open-source components that are subject to their own license terms. Such terms are either included within the Application or available upon request. Your use of such third-party components is governed by their respective licenses.</p>

                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">7.5 Apple App Store and Google Play Store</h3>
                <p>If you downloaded the Application from the Apple App Store, you acknowledge and agree that:</p>
                <ul className="list-disc list-inside text-white/40 text-sm space-y-1.5 pl-1 mt-2">
                    <li>These Terms are between you and the Company only, and not with Apple Inc. ("Apple")</li>
                    <li>Apple has no obligation to furnish any maintenance or support services with respect to the Application</li>
                    <li>In the event of any failure of the Application to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any) to you. Apple has no other warranty obligation with respect to the Application</li>
                    <li>Apple is not responsible for addressing any claims by you or any third party relating to the Application</li>
                    <li>Apple and Apple's subsidiaries are third-party beneficiaries of these Terms, and Apple will have the right to enforce these Terms against you</li>
                </ul>
                <p className="mt-2">If you downloaded the Application from the Google Play Store, you acknowledge that Google LLC's terms of service for the Google Play Store apply to your use of the Application, and these Terms are between you and the Company, not with Google.</p>

                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">7.6 License Termination</h3>
                <p>This license is effective until terminated by you or the Company. Your rights under this license will terminate automatically without notice if you fail to comply with any of the terms. Upon termination, you shall cease all use of the Application and delete all copies from your Device.</p>
            </Section>

            <Section title="8. Acceptable Use">
                <p>You agree not to use the Service for any purpose that is prohibited by these Terms. You must not:</p>
                <ul className="list-disc list-inside text-white/40 text-sm space-y-1.5 pl-1 mt-2">
                    <li>Use the Service in any way that violates any applicable national or international law or regulation</li>
                    <li>Exploit, harm, or attempt to exploit or harm minors in any way</li>
                    <li>Transmit any material that is defamatory, obscene, threatening, or otherwise objectionable</li>
                    <li>Impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
                    <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
                    <li>Use the Service's predictions, analytics, or intelligence for illegal gambling or any activity prohibited by applicable law</li>
                    <li>Attempt to gain unauthorized access to any part of the Service, other accounts, computer systems, or networks connected to the Service</li>
                    <li>Use automated scripts, bots, crawlers, or scraping tools to access the Platform or extract data without written consent</li>
                    <li>Introduce viruses, trojans, worms, logic bombs, or other material which is malicious or technologically harmful</li>
                    <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
                    <li>Resell, redistribute, or commercially exploit any part of the Service without express written permission</li>
                    <li>Use the Service to compete directly with the Company or create a competing product</li>
                    <li>Remove, alter, or obscure any proprietary notice on any content or material on the Service</li>
                </ul>
            </Section>

            <Section title="9. User-Generated Content">
                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">9.1 Your Rights</h3>
                <p>You retain ownership of any content that you submit, post, or display on or through the Service ("User Content").</p>

                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">9.2 License Grant</h3>
                <p>By submitting User Content, you grant the Company a worldwide, perpetual, irrevocable, royalty-free, non-exclusive, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display such content in connection with the Service and the Company's business, including for promotion and redistribution of part or all of the Service in any media formats and through any media channels.</p>

                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">9.3 Prohibited Content</h3>
                <p>You may not upload or transmit content that is:</p>
                <ul className="list-disc list-inside text-white/40 text-sm space-y-1.5 pl-1 mt-2">
                    <li>Illegal, harmful, threatening, abusive, harassing, tortious, defamatory, or libelous</li>
                    <li>Invasive of another's privacy or publicity rights</li>
                    <li>Infringing on any intellectual property or other proprietary rights of any party</li>
                    <li>Fraudulent or deceptive in nature</li>
                    <li>Contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware</li>
                </ul>

                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">9.4 Content Moderation</h3>
                <p>The Company reserves the right, at its sole discretion, to monitor, review, edit, or remove any User Content at any time, for any reason, without prior notice. The Company is not obligated to monitor User Content but may do so to ensure compliance with these Terms.</p>
            </Section>

            <Section title="10. Intellectual Property">
                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">10.1 Company Intellectual Property</h3>
                <p>The Service and its original content (excluding User Content), features, functionality, underlying algorithms, machine learning models, data models, user interfaces, and design are and will remain the exclusive property of VELORIA TECH (OPC) PRIVATE LIMITED and its licensors. The Service is protected by copyright, trademark, and other laws of India and foreign countries.</p>

                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">10.2 Restrictions</h3>
                <p>You may not:</p>
                <ul className="list-disc list-inside text-white/40 text-sm space-y-1.5 pl-1 mt-2">
                    <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the Service or any part thereof</li>
                    <li>Copy, modify, adapt, translate, or create derivative works based on the Service</li>
                    <li>Distribute, license, sublicense, lease, lend, rent, or otherwise transfer the Service to any third party</li>
                    <li>Use our trademarks, service marks, trade names, logos, or product and service names without express written permission</li>
                    <li>Use any data mining, robots, or similar data gathering or extraction methods</li>
                    <li>Frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information of the Company</li>
                </ul>

                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">10.3 Feedback</h3>
                <p>Any suggestions, feedback, ideas, improvements, or recommendations provided by you to the Company regarding the Service shall remain the property of the Company. The Company is free to use, copy, modify, publish, or redistribute the feedback for any purpose and in any way without credit or compensation to you.</p>
            </Section>

            <Section title="11. Third-Party Links and Services">
                <p>The Service may contain links to third-party websites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.</p>
                <p className="mt-2">You acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.</p>
                <p className="mt-2">We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.</p>
            </Section>

            <Section title="12. Disclaimer of Warranties">
                <div className="p-4 rounded-xl page-notice-warning mt-2">
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>
                        <strong>Important Disclaimer:</strong> The Service is provided on an "AS IS" and "AS AVAILABLE" basis, without any warranties of any kind, whether express or implied. The Company disclaims all warranties, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, and course of performance.
                    </p>
                    <p className="text-sm mt-2" style={{ color: 'var(--muted)' }}>
                        The Company does not warrant that (a) the Service will function uninterrupted, secure, or available at any particular time or location; (b) any errors or defects will be corrected; (c) the Service is free of viruses or other harmful components; or (d) the results of using the Service will meet your requirements.
                    </p>
                    <p className="text-sm mt-2" style={{ color: 'var(--muted)' }}>
                        <strong>Cricket Predictions Disclaimer:</strong> All cricket predictions, match analytics, player statistics, pitch intelligence, and strategic insights provided by the Service are based on statistical models, machine learning algorithms, and historical data analysis. They are provided for informational purposes only and do not guarantee any specific outcome. Users should use the information for advisory purposes only and make independent decisions. The Company accepts no liability for any losses, damages, or decisions made based on the predictions or analytics provided by the Service.
                    </p>
                </div>
            </Section>

            <Section title="13. Limitation of Liability">
                <p>To the maximum extent permitted by applicable law, in no event shall the Company, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:</p>
                <ul className="list-disc list-inside text-white/40 text-sm space-y-1.5 pl-1 mt-2">
                    <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
                    <li>Damages resulting from your access to or use of or inability to access or use the Service</li>
                    <li>Damages resulting from any conduct or content of any third party on the Service</li>
                    <li>Damages resulting from any predictions, analytics, or recommendations provided by the Service</li>
                    <li>Damages resulting from unauthorized access, use, or alteration of your transmissions or content</li>
                    <li>Any other matter relating to the Service</li>
                </ul>
                <p className="mt-2">In no event shall the Company's total liability to you for all damages exceed the amount you have paid to the Company in the twelve (12) months preceding the event giving rise to the liability, or INR 500, whichever is greater.</p>
            </Section>

            <Section title="14. Indemnification">
                <p>You agree to defend, indemnify, and hold harmless the Company, its parent company, affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:</p>
                <ul className="list-disc list-inside text-white/40 text-sm space-y-1.5 pl-1 mt-2">
                    <li>Your violation of these Terms</li>
                    <li>Your use of the Service, including but not limited to User Content and any decisions made based on Service predictions or analytics</li>
                    <li>Your violation of any third party's rights, including intellectual property rights</li>
                    <li>Any claim related to your User Content</li>
                </ul>
            </Section>

            <Section title="15. Termination">
                <p>We may terminate or suspend your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions.</p>
                <p className="mt-2">Upon termination, your right to use the Service will cease immediately. If you wish to terminate your Account, you may simply discontinue using the Service or contact us to deactivate your account.</p>
                <p className="mt-2">All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
            </Section>

            <Section title="16. Governing Law">
                <p>The laws of India, excluding its conflicts of law rules, shall govern these Terms and your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
                <p className="mt-2">Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts at Ongole, Prakasham District, Andhra Pradesh, India.</p>
            </Section>

            <Section title="17. Dispute Resolution">
                <p>If you have any concern or dispute about the Service, you agree to first try to resolve the dispute informally by contacting the Company. If the dispute is not resolved within 30 days, either party may initiate formal proceedings.</p>
                <p className="mt-2">For users in the European Union (EU): you may also be entitled to involve the European Commission's online dispute resolution platform.</p>
            </Section>

            <Section title="18. Severability and Waiver">
                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">18.1 Severability</h3>
                <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.</p>

                <h3 className="text-white/60 font-medium text-sm mt-3 mb-2">18.2 Waiver</h3>
                <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
            </Section>

            <Section title="19. Entire Agreement">
                <p>These Terms, together with the Privacy Policy, constitute the entire agreement between you and the Company regarding your use of the Service. These Terms supersede and replace any prior agreements, understandings, or representations regarding the Service.</p>
            </Section>

            <Section title="20. Changes to These Terms">
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                <p className="mt-2">By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, in whole or in part, please stop using the Service.</p>
            </Section>

            <Section title="21. Contact Us">
                <p>If you have any questions about these Terms and Conditions, you can contact us:</p>
                <div className="p-4 rounded-xl page-card mt-2">
                    <InfoRow label="Company" value="VELORIA TECH (OPC) PRIVATE LIMITED" />
                    <InfoRow label="Email" value="support@aicrix.com" href="mailto:support@aicrix.com?subject=Legal Inquiry" />
                    <InfoRow label="Phone" value="+91 95059 62262" href="tel:+919505962262" />
                    <InfoRow label="Website" value="https://aicrix.com/contact-us" href="/contact-us" />
                    <InfoRow label="Address" value="12-132, Main Road, Pedda Devaram Padu, Ammanabrolu, Ongole Mandal, Prakasham, 523180, Andhra Pradesh, India" />
                </div>
            </Section>
        </PageLayout>
    );
};
