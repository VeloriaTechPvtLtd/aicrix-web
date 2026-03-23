'use client';
import { Mail, Phone, MapPin, Clock, AlertCircle, Building, Send, Trash2 } from 'lucide-react';
import { PageLayout, Section, InfoRow } from './PageLayout';
import { useState } from 'react';

export const ContactUsPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    return (
        <PageLayout title="Contact Us" lastUpdated="February 20, 2026">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                We value your feedback, questions, and concerns. Please feel free to reach out to us through any of the following channels. Our team is here to assist you.
            </p>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 sm:p-5 rounded-2xl page-card transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl page-icon-wrap-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5" />
                    </div>
                    <h2 className="font-semibold text-sm mb-1" style={{ color: 'var(--text)' }}>Email Support</h2>
                    <a href="mailto:support@aicrix.com" className="text-sm transition-colors">support@aicrix.com</a>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl page-card transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl page-icon-wrap-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Phone className="w-5 h-5" />
                    </div>
                    <h2 className="font-semibold text-sm mb-1" style={{ color: 'var(--text)' }}>Phone</h2>
                    <a href="tel:+916361562262" className="text-sm transition-colors">+91 63615 62262</a>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl page-card transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl page-icon-wrap-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <h2 className="font-semibold text-sm mb-1" style={{ color: 'var(--text)' }}>Office Address</h2>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>12-132, Main Road, Pedda Devaram Padu, Ammanabrolu, Ongole Mandal, Prakasham, 523180, Andhra Pradesh, India</p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl page-card transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl page-icon-wrap-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Clock className="w-5 h-5" />
                    </div>
                    <h2 className="font-semibold text-sm mb-1" style={{ color: 'var(--text)' }}>Operating Hours</h2>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>Monday – Saturday<br />9:00 AM – 6:00 PM IST</p>
                </div>
            </div>

            {/* Contact Form */}
            <Section title="Send Us a Message">
                <div className="p-4 sm:p-6 rounded-2xl page-card">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                        <input
                            type="text" placeholder="Your Name" value={formData.name}
                            onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl page-input text-sm transition-all"
                            aria-label="Your Name"
                        />
                        <input
                            type="email" placeholder="Your Email" value={formData.email}
                            onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl page-input text-sm transition-all"
                            aria-label="Your Email"
                        />
                    </div>
                    <input
                        type="text" placeholder="Subject" value={formData.subject}
                        onChange={e => setFormData(d => ({ ...d, subject: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl page-input text-sm transition-all mb-4"
                        aria-label="Subject"
                    />
                    <textarea
                        placeholder="Your Message" rows={5} value={formData.message}
                        onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl page-input text-sm transition-all mb-4 resize-none"
                        aria-label="Your Message"
                    />
                    <button type="button" className="group px-6 py-3 page-btn-primary text-sm flex items-center gap-2">
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        <span>Send Message</span>
                    </button>
                </div>
            </Section>

            {/* Company info */}
            <Section title="Company Information">
                <div className="p-4 sm:p-5 rounded-2xl page-card">
                    <div className="flex items-center gap-3 mb-4">
                        <Building className="w-5 h-5 shrink-0" style={{ color: 'var(--accent)' }} />
                        <span className="font-semibold text-sm" style={{ color: 'var(--text)' }}>VELORIA TECH (OPC) PRIVATE LIMITED</span>
                    </div>
                    <InfoRow label="Registered Address" value="12-132, Main Road, Pedda Devaram Padu, Ammanabrolu, Ongole Mandal, Prakasham, 523180, Andhra Pradesh, India" />
                    <InfoRow label="Country" value="India" />
                    <InfoRow label="Email" value="support@aicrix.com" href="mailto:support@aicrix.com" />
                    <InfoRow label="Phone" value="+91 63615 62262" href="tel:+916361562262" />
                </div>
            </Section>

            {/* Department emails */}
            <Section title="Specific Department Inquiries">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {[
                        { title: 'Privacy & Data Protection', email: 'support@aicrix.com', subject: 'Privacy Inquiry' },
                        { title: 'Legal & Compliance', email: 'support@aicrix.com', subject: 'Legal Inquiry' },
                        { title: 'Business & Partnerships', email: 'admin@aicrix.com', subject: 'Business Inquiry' },
                        { title: 'Media & Press', email: 'support@aicrix.com', subject: 'Media Inquiry' },
                        { title: 'Feedback & Suggestions', email: 'support@aicrix.com', subject: 'Feedback' },
                    ].map(dept => (
                        <div key={dept.title} className="p-3 sm:p-4 rounded-xl page-card">
                            <div className="text-[13px] font-medium mb-1" style={{ color: 'var(--text)' }}>{dept.title}</div>
                            <a href={`mailto:${dept.email}?subject=${dept.subject}`} className="text-xs transition-colors">{dept.email}</a>
                            <div className="text-[10px] mt-0.5" style={{ color: 'var(--muted)', opacity: 0.7 }}>Subject: "{dept.subject}"</div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Response times */}
            <Section title="Response Times">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                        { type: 'General', time: '24-48 hrs' },
                        { type: 'Support', time: 'Within 24 hrs' },
                        { type: 'Privacy', time: '30-45 days' },
                        { type: 'Legal', time: '3-5 business days' },
                    ].map(item => (
                        <div key={item.type} className="p-3 rounded-xl page-card text-center">
                            <div className="text-[10px] uppercase tracking-wider mb-1" style={{ color: 'var(--muted)' }}>{item.type}</div>
                            <div className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{item.time}</div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* User Data Deletion */}
            <Section title="User Data Deletion">
                <div className="p-4 sm:p-5 rounded-2xl page-card">
                    <div className="flex items-start gap-3 mb-3">
                        <Trash2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                        <p className="text-sm" style={{ color: 'var(--muted)' }}>
                            If you wish to delete your account and associated personal data, you can submit a data deletion request to our support team.
                        </p>
                    </div>
                    <InfoRow label="Email" value="support@aicrix.com" href="mailto:support@aicrix.com?subject=User%20Data%20Deletion%20Request" />
                    <InfoRow label="Required Info" value="Please send the email from your registered email address and include your username/account details." />
                    <InfoRow label="Processing Time" value="Requests are typically processed within 30 days of verification." />
                    <p className="text-xs mt-3" style={{ color: 'var(--muted)', opacity: 0.8 }}>
                        Note: Some data may be retained for legal, security, or fraud prevention purposes as outlined in our Privacy Policy.
                    </p>
                </div>
            </Section>

            {/* Grievance */}
            <Section title="Grievance Redressal">
                <div className="p-4 sm:p-5 rounded-2xl page-card">
                    <div className="flex items-start gap-3 mb-3">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#fbbf24' }} />
                        <p className="text-sm" style={{ color: 'var(--muted)' }}>If you have any grievance regarding the Platform, you may contact our Grievance Officer:</p>
                    </div>
                    <InfoRow label="Grievance Officer" value="VELORIA TECH (OPC) PRIVATE LIMITED" />
                    <InfoRow label="Email" value="support@aicrix.com" href="mailto:support@aicrix.com?subject=Grievance" />
                    <InfoRow label="Response" value="Acknowledgment within 24 hours; resolution within 15 days" />
                    <p className="text-xs mt-3" style={{ color: 'var(--muted)', opacity: 0.8 }}>To file a grievance, send an email with the subject "Grievance" including your full name, account details, description of the issue, and supporting evidence.</p>
                </div>
            </Section>

            {/* Security notice */}
            <div className="p-3 sm:p-4 rounded-xl page-notice-warning">
                <div className="flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#fbbf24' }} />
                    <div className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                        <strong>Security Notice:</strong> Never share passwords or payment details via email or phone.
                        Our official team members will never ask for your passwords through unofficial channels.
                        For emergency support, mark emails as "URGENT" or call our phone number.
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};
