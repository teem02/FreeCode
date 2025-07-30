import React from 'react';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-content">
          <div className="legal-header">
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last updated: January 15, 2024</p>
          </div>

          <div className="legal-body">
            <section className="legal-section">
              <h2>1. Information We Collect</h2>
              <p>
                At LocalR.io, we collect information to provide you with our review management services. 
                This includes:
              </p>
              <ul>
                <li><strong>Account Information:</strong> Name, email address, phone number, and business information you provide when creating an account.</li>
                <li><strong>Business Data:</strong> Information about your business, including Google Business Profile data, reviews, and customer interactions.</li>
                <li><strong>Usage Data:</strong> Information about how you use our service, including log data, device information, and analytics.</li>
                <li><strong>Communication Data:</strong> Records of communications between you and our support team.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Provide and improve our review management services</li>
                <li>Monitor and respond to reviews on your behalf</li>
                <li>Send automated review requests to your customers</li>
                <li>Generate AI-powered responses to reviews</li>
                <li>Provide customer support and technical assistance</li>
                <li>Send important service updates and notifications</li>
                <li>Comply with legal obligations and prevent fraud</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>3. Information Sharing</h2>
              <p>
                We do not sell, rent, or share your personal information with third parties, except:
              </p>
              <ul>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
                <li><strong>Service Providers:</strong> Trusted third-party services that help us operate our platform</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information:
              </p>
              <ul>
                <li>SSL/TLS encryption for data transmission</li>
                <li>Encrypted data storage with regular security audits</li>
                <li>Access controls and authentication requirements</li>
                <li>Regular security training for our team</li>
                <li>Incident response procedures and monitoring</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>5. Data Retention</h2>
              <p>
                We retain your information for as long as necessary to provide our services and comply 
                with legal obligations. You can request deletion of your account and associated data 
                at any time, subject to legal and contractual requirements.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Your Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              </ul>
              <p>
                To exercise these rights, please contact us at privacy@localr.io or use the 
                settings in your account dashboard.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to enhance your experience, analyze usage, 
                and improve our services. You can control cookie preferences through your browser 
                settings, though some features may not function properly if cookies are disabled.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Third-Party Integrations</h2>
              <p>
                Our service integrates with third-party platforms like Google Business Profile, 
                Facebook, and others. These integrations are governed by the privacy policies 
                of those respective platforms in addition to this policy.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Children's Privacy</h2>
              <p>
                Our service is not intended for use by children under 13 years of age. We do not 
                knowingly collect personal information from children under 13. If we become aware 
                that we have collected such information, we will take steps to delete it promptly.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. International Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your 
                country of residence. We ensure appropriate safeguards are in place to protect 
                your information in accordance with this privacy policy.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any 
                material changes by email or through our service. Your continued use of our 
                service after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="legal-section">
              <h2>12. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our data practices, 
                please contact us:
              </p>
              <div className="contact-info">
                <p><strong>Email:</strong> privacy@localr.io</p>
                <p><strong>Address:</strong> LocalR.io, Inc.<br />
                123 Business Avenue, Suite 456<br />
                New York, NY 10001</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;