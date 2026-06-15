import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

        <div className="space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-3">1. Introduction</h2>
            <p>Circle ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use the Circle application and related services ("Service").</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Account Information:</strong> Name, email address, and other details you provide when creating an account</li>
              <li><strong>Content You Provide:</strong> Images, messages, and emails you submit for event extraction</li>
              <li><strong>Calendar Data:</strong> Events, schedules, and family member information you create within the Service</li>
              <li><strong>Usage Data:</strong> Information about how you interact with the Service, including device information and log data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide, maintain, and improve the Service</li>
              <li>Process and extract event information from your submitted content</li>
              <li>Manage your account and provide customer support</li>
              <li>Send you important updates about the Service</li>
              <li>Ensure the security and integrity of the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. Data Processing and AI</h2>
            <p>Circle uses artificial intelligence to extract event information from images, messages, and emails you submit. This content is processed to identify dates, times, locations, and other event details. We process this data solely for the purpose of providing the Service to you and do not use your personal content to train AI models.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. Data Sharing</h2>
            <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>With your family members:</strong> Calendar events and related information are shared with members of your family circle as part of the Service's core functionality</li>
              <li><strong>Service providers:</strong> We may use third-party services to help operate and improve the Service</li>
              <li><strong>Legal requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. Data Retention</h2>
            <p>We retain your information for as long as your account is active or as needed to provide the Service. You may request deletion of your account and associated data at any time by contacting us.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">8. Account Deletion</h2>
            <p>
              If you need to cancel your account, email us at{" "}
              <a href="mailto:account-deletion@circle-family.com" className="text-primary hover:underline font-medium">account-deletion@circle-family.com</a>
              {" "}and we will take care of it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">9. Your Rights</h2>
            <p>Depending on your location, you may have rights regarding your personal information, including the right to access, correct, delete, or port your data. To exercise these rights, please contact us using the information below.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">10. Children's Privacy</h2>
            <p>The Service is intended for use by families, including parents managing schedules for their children. We do not knowingly collect personal information directly from children under 13 without parental consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last updated" date at the top of this page.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">12. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
            <p className="mt-2">
              <a href="mailto:harshvardhan.n.sharma@gmail.com" className="text-primary hover:underline font-medium">harshvardhan.n.sharma@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
