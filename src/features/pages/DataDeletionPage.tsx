import { PageLayout, Section, InfoRow } from './PageLayout';

export const DataDeletionPage = () => {
    return (
        <PageLayout title="Data Deletion Instructions" lastUpdated="March 9, 2026">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                This page provides instructions on how to request the deletion of your personal data collected via Facebook Login and other means when using the <strong style={{ color: 'var(--text)' }}>Aicrix</strong> platform.
            </p>

            <Section title="1. Information Collected">
                <p>When you log in or sign up using Facebook, we may collect the following information:</p>
                <ul className="list-disc list-inside text-white/40 text-sm space-y-1.5 pl-1 mt-2">
                    <li>Your name</li>
                    <li>Your email address</li>
                    <li>Your profile picture</li>
                </ul>
                <p className="mt-2">This data is used solely to create and manage your Aicrix account and provide you with our services.</p>
            </Section>

            <Section title="2. How to Request Data Deletion">
                <p>If you wish to delete your account and remove all associated personal data from our systems, you can do so by following these steps:</p>
                <ul className="list-disc list-inside text-white/40 text-sm space-y-1.5 pl-1 mt-2">
                    <li>Send an email to <a href="mailto:support@aicrix.com" className="text-white hover:text-white/80 transition-colors">support@aicrix.com</a> from the email address associated with your Aicrix account.</li>
                    <li>Use the subject line: <strong>"Data Deletion Request"</strong>.</li>
                    <li>In the body of the email, please include your full name and the email address used to sign in via Facebook.</li>
                </ul>
            </Section>

            <Section title="3. What Happens When You Request Deletion">
                <p>Once we receive and verify your request, we will process the deletion within <strong>30 days</strong>. The following will occur:</p>
                <ul className="list-disc list-inside text-white/40 text-sm space-y-1.5 pl-1 mt-2">
                    <li>Your account will be permanently deleted and cannot be recovered.</li>
                    <li>Personal data, including your name, email, and profile picture, will be erased from our active databases.</li>
                    <li>Any associated usage data and preferences linked directly to your account will be removed.</li>
                </ul>
            </Section>

            <Section title="4. Data Retention Exceptions">
                <p>Please note that we may retain certain information even after a deletion request if required by law or for legitimate business purposes. This may include:</p>
                <ul className="list-disc list-inside text-white/40 text-sm space-y-1.5 pl-1 mt-2">
                    <li>Data necessary to comply with legal and regulatory obligations.</li>
                    <li>Information related to unresolved disputes or billing issues.</li>
                    <li>Anonymized or aggregated data that can no longer be used to identify you personally.</li>
                </ul>
            </Section>

            <Section title="5. Contact Us">
                <p>If you have any questions or need assistance with your data deletion request, please contact us:</p>
                <div className="p-4 rounded-xl page-card mt-2">
                    <InfoRow label="Company" value="VELORIA TECH (OPC) PRIVATE LIMITED" />
                    <InfoRow label="Email" value="support@aicrix.com" href="mailto:support@aicrix.com?subject=Data Deletion Request" />
                    <InfoRow label="Phone" value="+91 63615 62262" href="tel:+916361562262" />
                    <InfoRow label="Website" value="https://aicrix.com/contact-us" href="/contact-us" />
                </div>
            </Section>
        </PageLayout>
    );
};
