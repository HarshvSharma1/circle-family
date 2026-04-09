import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

        <div className="space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the Circle application and related services ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. Description of Service</h2>
            <p>Circle is a family coordination application that helps families organize their schedules by extracting event information from various sources such as images, emails, and messages. The Service includes AI-powered event extraction, a triage review queue, and a shared family calendar.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. User Accounts</h2>
            <p>To use certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and complete information when creating your account.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. Acceptable Use</h2>
            <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Use the Service in any way that violates any applicable law or regulation</li>
              <li>Attempt to interfere with or disrupt the Service or its infrastructure</li>
              <li>Upload or transmit any harmful, offensive, or illegal content</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are owned by Circle and are protected by international copyright, trademark, and other intellectual property laws. You retain ownership of any content you submit through the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. Disclaimer of Warranties</h2>
            <p>The Service is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. We do not guarantee that the Service will be uninterrupted, secure, or error-free. AI-powered features may occasionally produce inaccurate results, and users should review extracted information before relying on it.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Circle shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">8. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the "Last updated" date at the top of this page. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">9. Termination</h2>
            <p>We may terminate or suspend your access to the Service at any time, without prior notice or liability, for any reason, including if you breach these Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">10. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
            <p className="mt-2">
              <a href="mailto:harshvardhan.n.sharma@gmail.com" className="text-primary hover:underline font-medium">harshvardhan.n.sharma@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
