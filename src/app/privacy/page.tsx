import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy - HomeCloser AI",
  description: "Privacy Policy for HomeCloser AI",
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Simple header */}
      <header className="bg-white border-b border-gray-100">
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icon.png"
                alt="HomeCloser AI"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="text-xl font-bold text-gray-900">
                HomeCloser<span className="text-blue-600">AI</span>
              </span>
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              &larr; Back to Home
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none privacy-policy">
          <h1>HOMECLOSER AI</h1>
          <h2>PRIVACY POLICY</h2>
          <p className="text-gray-500 text-sm">
            <strong>Effective Date: February 19, 2026 &nbsp;|&nbsp; Last Updated: February 19, 2026</strong>
          </p>

          <h2>TABLE OF CONTENTS</h2>
          <ol>
            <li><a href="#overview">Overview and Scope</a></li>
            <li><a href="#infocollect">Information We Collect</a></li>
            <li><a href="#infouse">How We Use Your Information</a></li>
            <li><a href="#audio">Audio Recording and AI Processing &mdash; Key Disclosures</a></li>
            <li><a href="#whoshare">How We Share Your Information</a></li>
            <li><a href="#thirdparty">Third-Party Service Providers</a></li>
            <li><a href="#retention">Data Retention</a></li>
            <li><a href="#security">Data Security</a></li>
            <li><a href="#rights">Your Rights and Choices</a></li>
            <li><a href="#children">Children&apos;s Privacy</a></li>
            <li><a href="#changes">Changes to This Policy</a></li>
            <li><a href="#contact">Contact Information</a></li>
          </ol>

          <h2 id="overview">1. OVERVIEW AND SCOPE</h2>

          <p>
            <strong>1.1 About This Policy.</strong> HomeCloser AI, LLC
            (&quot;HomeCloser AI,&quot; &quot;Company,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) operates the HomeCloser AI
            mobile application and associated backend services (collectively,
            the &quot;Service&quot;). This Privacy Policy explains what personal
            information we collect, how we use and share it, and the choices
            available to you. By using the Service, you agree to the collection
            and use of information as described in this Policy.
          </p>

          <p>
            <strong>1.2 Scope.</strong> This Policy applies to information
            collected through the HomeCloser AI mobile application, our backend
            servers, and any associated features. It does not apply to
            third-party services that maintain their own privacy policies, even
            when those services are integrated with ours.
          </p>

          <p>
            <strong>1.3 U.S. Service.</strong> The Service is currently offered
            solely within the United States. If you are located outside the
            United States, please do not use the Service.
          </p>

          <h2 id="infocollect">2. INFORMATION WE COLLECT</h2>

          <p>
            <strong>2.1 Account and Profile Information.</strong> When you
            register for an account, we collect the following information:
          </p>
          <ul>
            <li>Full legal name</li>
            <li>Email address</li>
            <li>Password (stored using industry-standard hashing; we do not store plaintext passwords)</li>
            <li>United States mobile phone number (used to enable emergency dispatch)</li>
            <li>U.S. state of practice</li>
            <li>Years of real estate experience</li>
            <li>Gender</li>
            <li>Brokerage name (optional)</li>
            <li>
              Safety code phrase &mdash; a custom word or phrase you configure
              to trigger emergency dispatch. This phrase is stored in your
              profile and used to monitor your session audio for safety
              activation.
            </li>
          </ul>

          <p>
            <strong>2.2 Showing and Client Information.</strong> When you create
            or conduct a property showing, we collect:
          </p>
          <ul>
            <li>Property address (street, city, state, ZIP code)</li>
            <li>Client name</li>
            <li>Showing notes you enter manually</li>
            <li>Showing start time and completion status</li>
          </ul>

          <p>
            <strong>2.3 Audio Recordings.</strong> When you start a showing
            session, the Service continuously records audio from your
            device&apos;s microphone for the duration of that session. These
            recordings are:
          </p>
          <ul>
            <li>Captured on your device as temporary audio files</li>
            <li>Transmitted to our servers over an encrypted connection</li>
            <li>Processed by third-party AI service providers for speech-to-text transcription</li>
            <li>Deleted from your device after successful upload</li>
            <li>Retained on our servers in transcribed text form; raw audio files are not retained long-term</li>
          </ul>
          <p>
            You are solely responsible for obtaining all legally required
            consents from any persons (clients, homeowners, co-agents, or
            bystanders) who may be present and recorded during a showing
            session, in accordance with all applicable federal, state, and local
            recording laws.
          </p>

          <p>
            <strong>2.4 AI-Generated Content.</strong> Following a showing, we
            use third-party AI services to automatically generate:
          </p>
          <ul>
            <li>
              Transcripts &mdash; full text transcriptions of the audio captured
              during the showing, stored in our systems and linked to your
              account
            </li>
            <li>
              AI Showing Notes &mdash; coaching notes and property summaries
              generated by AI language models based on your transcript and
              showing analytics
            </li>
            <li>
              Feature requests &mdash; free-text feedback you optionally submit
              through the app
            </li>
          </ul>

          <p>
            <strong>2.5 Showing Analytics.</strong> We automatically calculate
            and store performance metrics derived from your audio recordings and
            session data, including speaking time, talk ratio, filler word
            usage, monologue duration, and question frequency. These metrics are
            used to generate your post-showing performance feedback.
          </p>

          <p>
            <strong>2.6 Device and Technical Information.</strong> We and our
            service providers may automatically collect:
          </p>
          <ul>
            <li>Device type, model, and operating system version</li>
            <li>Network connectivity status</li>
            <li>App usage events and session data</li>
            <li>IP address and general network information</li>
          </ul>
          <p>
            We do not collect precise GPS location. Location information is
            limited to the U.S. state you select during registration and the
            property addresses you enter for your showings.
          </p>

          <p>
            <strong>2.7 Permissions Requested.</strong> The Service requests
            the following device permissions:
          </p>
          <ul>
            <li>
              <strong>Microphone</strong> &mdash; required to capture audio
              during showings for safety monitoring, transcription, and
              performance analytics
            </li>
            <li>
              <strong>Speech Recognition</strong> &mdash; used by the operating
              system in connection with audio processing
            </li>
            <li>
              <strong>Location (when in use)</strong> &mdash; used to support
              safety features in connection with the property address you have
              entered
            </li>
            <li>
              <strong>Camera and Photo Library</strong> &mdash; requested for
              potential future features; not actively used in the current version
              of the Service
            </li>
            <li>
              <strong>Background Audio</strong> &mdash; the app runs audio
              recording in the background during an active showing session;
              recording stops if you navigate away from the app
            </li>
          </ul>

          <h2 id="infouse">3. HOW WE USE YOUR INFORMATION</h2>

          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>
              <strong>Account creation and authentication</strong> &mdash; to
              create and manage your account and verify your identity
            </li>
            <li>
              <strong>Emergency dispatch</strong> &mdash; to transmit your name,
              phone number, and property address to our authorized emergency
              dispatch partner when your safety phrase is detected during a
              showing
            </li>
            <li>
              <strong>Audio transcription</strong> &mdash; to process your audio
              recordings through AI transcription services for safety phrase
              detection and post-showing analytics
            </li>
            <li>
              <strong>AI-generated notes and analytics</strong> &mdash; to
              generate showing performance feedback and property notes using
              AI language models
            </li>
            <li>
              <strong>Service delivery and improvement</strong> &mdash; to
              operate, maintain, and improve the features and performance of the
              Service
            </li>
            <li>
              <strong>Safety event logging</strong> &mdash; to maintain an audit
              log of safety-related events for your account
            </li>
            <li>
              <strong>Subscription management</strong> &mdash; to manage your
              subscription and process payments through the Apple App Store and
              our subscription management provider
            </li>
            <li>
              <strong>Product analytics</strong> &mdash; to understand how users
              interact with the Service in aggregate; no personally identifiable
              information is included in analytics data
            </li>
            <li>
              <strong>Customer support</strong> &mdash; to respond to your
              inquiries, feature requests, and reported issues
            </li>
            <li>
              <strong>Legal compliance</strong> &mdash; to comply with
              applicable laws, regulations, and legal process, and to enforce
              our Terms of Service
            </li>
          </ul>

          <p>
            We do not use your personal information for targeted advertising. We
            do not sell your personal information to third parties.
          </p>

          <h2 id="audio">
            4. AUDIO RECORDING AND AI PROCESSING &mdash; KEY DISCLOSURES
          </h2>

          <p>
            This section describes the most privacy-sensitive aspects of the
            Service. Please read it carefully.
          </p>

          <p>
            <strong>4.1 What Is Recorded.</strong> During an active showing
            session, the Service records all ambient audio picked up by your
            device&apos;s microphone &mdash; including, but not limited to,
            your own voice, client voices, and any other sounds in the
            environment. Recording is continuous and automatic once a session is
            started; it does not require you to press a button for each
            recording.
          </p>

          <p>
            <strong>4.2 How Audio Is Processed.</strong> Audio captured during
            a session is analyzed for voice activity on your device, transmitted
            over an encrypted connection to our servers, forwarded to our
            third-party AI transcription provider for speech-to-text conversion,
            scanned for your safety code phrase, and stored as a transcript
            record linked to your account and showing.
          </p>

          <p>
            <strong>4.3 Third-Party AI Processing.</strong> Your audio
            recordings and transcript text are transmitted to a third-party AI
            service provider for transcription and language model processing.
            HomeCloser AI does not use your audio or transcripts to train AI
            models. However, our AI service provider&apos;s own data use and
            retention policies apply to data transmitted through their services.
            You may request the identity of our current AI service provider by
            contacting us at{" "}
            <a href="mailto:contact@homecloserai.com">
              contact@homecloserai.com
            </a>
            .
          </p>

          <p>
            <strong>4.4 AI Notes Generation.</strong> After a showing, we send
            your transcript text and showing analytics to our AI provider to
            generate coaching notes. These notes are stored in your showing
            record in our systems.
          </p>

          <p>
            <strong>4.5 NO OPT-OUT FOR CORE FEATURES.</strong> AUDIO RECORDING
            AND AI PROCESSING ARE FUNDAMENTAL TO THE SERVICE&apos;S CORE
            FEATURES, INCLUDING SAFETY MONITORING, TRANSCRIPTION, AND
            AI-GENERATED NOTES. THERE IS CURRENTLY NO OPTION TO USE THE SHOWING
            FEATURE WITHOUT AUDIO RECORDING AND AI PROCESSING. IF YOU DO NOT
            CONSENT TO THIS, DO NOT START A SHOWING SESSION.
          </p>

          <p>
            <strong>4.6 Consent Responsibility.</strong> You are solely
            responsible for disclosing to &mdash; and obtaining any legally
            required consent from &mdash; all individuals who may be recorded
            during a showing, in compliance with all applicable wiretapping,
            eavesdropping, and recording laws in your jurisdiction.
          </p>

          <h2 id="whoshare">5. HOW WE SHARE YOUR INFORMATION</h2>

          <p>
            We do not sell your personal information. We share your information
            only in the following circumstances:
          </p>

          <p>
            <strong>5.1 Emergency Dispatch.</strong> When your safety code
            phrase is detected during a showing, we automatically transmit the
            following information to our authorized emergency dispatch partner:
          </p>
          <ul>
            <li>Your full name</li>
            <li>Your mobile phone number</li>
            <li>The property address for the active showing</li>
            <li>A reference showing identifier</li>
          </ul>
          <p>
            Our emergency dispatch partner uses this information to contact and
            coordinate with emergency responders on your behalf. That partner
            may share your information with public safety answering points,
            law enforcement, fire, or emergency medical services as necessary.
            Your use of the emergency dispatch feature constitutes your consent
            to this disclosure.
          </p>

          <p>
            <strong>5.2 AI Service Providers.</strong> We share your audio
            recordings and transcript data with our third-party AI service
            provider to deliver transcription and AI-generated showing notes.
            See Section 4 for full details.
          </p>

          <p>
            <strong>5.3 Infrastructure and Operational Service Providers.</strong>{" "}
            We share information with trusted third-party vendors who assist us
            in operating the Service, subject to confidentiality obligations.
            These vendors fall into the following categories:
          </p>
          <ul>
            <li>
              <strong>Cloud database and authentication providers</strong> &mdash;
              store your profile data, showing records, transcripts, and safety
              event logs on our behalf
            </li>
            <li>
              <strong>Cloud hosting and infrastructure providers</strong> &mdash;
              host our backend services and handle data in transit between your
              device and our systems
            </li>
            <li>
              <strong>Subscription and payment management providers</strong> &mdash;
              manage your in-app subscription status and purchase history in
              connection with the Apple App Store
            </li>
            <li>
              <strong>Product analytics providers</strong> &mdash; receive
              anonymized behavioral event data to help us understand aggregate
              usage patterns; no personally identifiable information is shared
              with these providers
            </li>
          </ul>

          <p>
            <strong>5.4 Apple App Store.</strong> In-app subscription payments
            are processed directly by Apple. Apple&apos;s own privacy policy
            governs all payment data.
          </p>

          <p>
            <strong>5.5 Business Transfers.</strong> In the event of a merger,
            acquisition, reorganization, sale of assets, or bankruptcy, your
            personal information may be transferred to a successor entity as
            part of the transaction. We will provide notice before your
            information becomes subject to a different privacy policy.
          </p>

          <p>
            <strong>5.6 Legal Requirements.</strong> We may disclose your
            information if required to do so by law, court order, or
            governmental authority, or if we believe in good faith that such
            disclosure is necessary to comply with legal obligations; protect
            the rights or safety of HomeCloser AI, our users, or the public;
            detect, prevent, or address fraud or security issues; or enforce our
            Terms of Service.
          </p>

          <h2 id="thirdparty">6. THIRD-PARTY SERVICE PROVIDERS</h2>

          <p>
            We engage third-party service providers to support the operation of
            the Service. These providers are contractually obligated to process
            your information only as directed by us and to maintain appropriate
            security measures. The categories of service providers we engage
            include: AI transcription and language model services; emergency
            dispatch services; cloud database and authentication services; cloud
            hosting and infrastructure services; subscription and payment
            management services; and product analytics services.
          </p>

          <p>
            We do not authorize any service provider to use your personal
            information for their own independent purposes. If you would like to
            request the identity of a specific service provider category, please
            contact us at{" "}
            <a href="mailto:contact@homecloserai.com">
              contact@homecloserai.com
            </a>
            .
          </p>

          <h2 id="retention">7. DATA RETENTION</h2>

          <p>
            <strong>7.1 Account Data.</strong> We retain your account profile
            information for as long as your account remains active.
          </p>

          <p>
            <strong>7.2 Showing Records and Transcripts.</strong> Showing
            records (including property addresses, client names, notes,
            analytics, and AI-generated notes) and transcripts are retained
            while your account is active. We do not currently apply automatic
            time-based deletion to individual showing records.
          </p>

          <p>
            <strong>7.3 Safety Event Logs.</strong> Logs of safety-related
            events are retained for as long as your account is active.
          </p>

          <p>
            <strong>7.4 Account Deletion.</strong> If you delete your account
            through the in-app account deletion feature, we will delete your
            profile, all showing records, all transcripts, and all safety event
            logs from our systems. This deletion is permanent and irreversible.
            Data previously transmitted to third-party service providers may be
            subject to those providers&apos; own retention policies.
          </p>

          <p>
            <strong>7.5 Analytics Data.</strong> Anonymized product analytics
            events are retained per our analytics provider&apos;s standard
            retention policies and are not linked to your personal identity.
          </p>

          <h2 id="security">8. DATA SECURITY</h2>

          <p>
            <strong>8.1 Measures.</strong> We implement commercially reasonable
            technical and organizational measures to protect your personal
            information, including encryption of data in transit, secure
            authentication protocols, access controls limiting data to your
            authenticated account, cryptographic verification of third-party
            service integrations, and deletion of temporary audio files from
            your device following successful processing.
          </p>

          <p>
            <strong>8.2 Limitations.</strong> No method of data transmission or
            storage is completely secure. We cannot guarantee absolute security
            of your personal information. In the event of a data breach that
            affects your rights, we will notify you as required by applicable
            law.
          </p>

          <p>
            <strong>8.3 Phone Number Storage.</strong> Your mobile phone number
            is stored in our systems to enable emergency dispatch functionality.
            It is protected by the security measures described in Section 8.1.
          </p>

          <h2 id="rights">9. YOUR RIGHTS AND CHOICES</h2>

          <p>
            <strong>9.1 Access and Correction.</strong> You may view and update
            your account profile information through the Settings screen within
            the app.
          </p>

          <p>
            <strong>9.2 Account and Data Deletion.</strong> You may delete your
            account and all associated data at any time through the in-app
            account deletion feature. Deletion removes your profile, showings,
            transcripts, and safety event logs from our systems. This action is
            permanent.
          </p>

          <p>
            <strong>9.3 State-Specific Rights.</strong> Residents of certain
            U.S. states have additional privacy rights under applicable law:
          </p>
          <ul>
            <li>
              <strong>California (CCPA/CPRA):</strong> California residents have
              the right to know what personal information we collect, use, share,
              or sell; to request deletion of personal information; to correct
              inaccurate personal information; to opt out of the sale or sharing
              of personal information (we do not sell personal information); and
              to non-discrimination for exercising these rights.
            </li>
            <li>
              <strong>Other States:</strong> Residents of Colorado, Connecticut,
              Virginia, Texas, and other states with comprehensive privacy laws
              may have similar rights to access, correct, delete, or obtain a
              copy of their personal information, and to opt out of certain
              processing.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:contact@homecloserai.com">
              contact@homecloserai.com
            </a>
            . We will respond to verifiable requests within the timeframe
            required by applicable law.
          </p>

          <p>
            <strong>9.4 Do Not Track.</strong> The Service is a mobile
            application and does not respond to browser &quot;Do Not Track&quot;
            signals. We do not track users across third-party applications or
            websites for advertising purposes.
          </p>

          <p>
            <strong>9.5 Analytics.</strong> We collect anonymized product
            analytics to improve the Service. These analytics events do not
            contain personally identifiable information.
          </p>

          <h2 id="children">10. CHILDREN&apos;S PRIVACY</h2>

          <p>
            The Service is not directed to children under 18 years of age. We
            do not knowingly collect personal information from children under
            18. If we become aware that we have inadvertently collected personal
            information from a child under 18, we will take steps to delete that
            information promptly. If you believe we have collected information
            from a child, please contact us at{" "}
            <a href="mailto:contact@homecloserai.com">
              contact@homecloserai.com
            </a>
            .
          </p>

          <h2 id="changes">11. CHANGES TO THIS POLICY</h2>

          <p>
            We may update this Privacy Policy from time to time. When we make
            material changes, we will notify you by posting the updated Policy
            within the application and updating the &quot;Last Updated&quot;
            date at the top of this document. For significant changes, we may
            also send a notification to the email address associated with your
            account. Your continued use of the Service after the effective date
            of any changes constitutes your acceptance of the updated Policy. We
            encourage you to review this Policy periodically.
          </p>

          <h2 id="contact">12. CONTACT INFORMATION</h2>

          <p>
            If you have questions, concerns, or requests regarding this Privacy
            Policy or our data practices, please contact us at:
          </p>

          <p>
            HomeCloser AI, LLC
            <br />
            345 E Woolbright Rd
            <br />
            Boynton Beach, FL 33435
            <br />
            Email:{" "}
            <a href="mailto:contact@homecloserai.com">
              contact@homecloserai.com
            </a>
            <br />
            Website:{" "}
            <a href="https://www.homecloserai.com/privacy">
              www.homecloserai.com/privacy
            </a>
          </p>

          <hr className="my-8" />

          <p className="text-sm text-gray-500">
            This Privacy Policy was last reviewed and updated on February 19,
            2026. HomeCloser AI recommends that you save a copy of this Policy
            for your records.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-6">
            <p className="text-sm font-semibold text-gray-700 mb-0">
              ACKNOWLEDGMENT: BY USING THE HOMECLOSER AI SERVICE, YOU
              ACKNOWLEDGE THAT YOU HAVE READ THIS PRIVACY POLICY IN ITS
              ENTIRETY AND THAT YOU CONSENT TO THE COLLECTION, USE, AND SHARING
              OF YOUR INFORMATION AS DESCRIBED HEREIN, INCLUDING THE RECORDING
              OF AUDIO DURING SHOWING SESSIONS AND THE PROCESSING OF THAT AUDIO
              BY THIRD-PARTY AI SERVICE PROVIDERS.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
