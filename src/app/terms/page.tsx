import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Terms of Service - HomeCloser AI",
  description: "Terms of Service for HomeCloser AI",
};

export default function TermsOfService() {
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
        <article className="prose prose-gray max-w-none">
          <h1>HOMECLOSER AI TERMS OF SERVICE</h1>
          <p className="text-gray-500 text-sm">
            <strong>
              Effective Date: February 19, 2026 &nbsp;|&nbsp; Last Updated:
              February 19, 2026
            </strong>
          </p>

          {/* Safety Notice */}
          <div className="not-prose bg-red-50 border-l-4 border-red-600 p-4 my-6 rounded-r-md">
            <p className="font-bold text-red-800 text-sm">
              IMPORTANT SAFETY NOTICE &mdash; READ BEFORE USE:
            </p>
            <p className="text-red-700 text-sm mt-1">
              HomeCloser AI is a supplemental safety tool designed to assist
              real estate professionals. It is NOT a replacement for calling
              9-1-1 or local emergency services. In any life-threatening
              situation, your first action should always be to call emergency
              services directly if you are able. Never rely solely on this
              application for your personal safety.
            </p>
          </div>

          {/* Table of Contents */}
          <h2 id="toc">TABLE OF CONTENTS</h2>
          <ol>
            <li>
              <a href="#section1">Acceptance of Terms</a>
            </li>
            <li>
              <a href="#section2">Eligibility and Account Registration</a>
            </li>
            <li>
              <a href="#section3">Description of Services</a>
            </li>
            <li>
              <a href="#section4">
                The Emergency Dispatch Feature &mdash; Critical Limitations and
                Disclaimers
              </a>
            </li>
            <li>
              <a href="#section5">
                User Safety Responsibilities and Best Practices
              </a>
            </li>
            <li>
              <a href="#section6">
                Audio Recording, Transcription, and Artificial Intelligence
              </a>
            </li>
            <li>
              <a href="#section7">Subscriptions, Billing, and Payments</a>
            </li>
            <li>
              <a href="#section8">Prohibited Conduct</a>
            </li>
            <li>
              <a href="#section9">Intellectual Property Rights</a>
            </li>
            <li>
              <a href="#section10">Privacy and Data Collection</a>
            </li>
            <li>
              <a href="#section11">Third-Party Services and Integrations</a>
            </li>
            <li>
              <a href="#section12">Disclaimer of Warranties</a>
            </li>
            <li>
              <a href="#section13">Limitation of Liability</a>
            </li>
            <li>
              <a href="#section14">Indemnification</a>
            </li>
            <li>
              <a href="#section15">
                Dispute Resolution; Mandatory Arbitration; Class Action Waiver
              </a>
            </li>
            <li>
              <a href="#section16">Governing Law and Venue</a>
            </li>
            <li>
              <a href="#section17">Modifications to Terms and Service</a>
            </li>
            <li>
              <a href="#section18">Term and Termination</a>
            </li>
            <li>
              <a href="#section19">Miscellaneous</a>
            </li>
            <li>
              <a href="#section20">Contact Information</a>
            </li>
          </ol>

          {/* Section 1 */}
          <h2 id="section1">1. ACCEPTANCE OF TERMS</h2>
          <p>
            <strong>1.1 Binding Agreement.</strong> These Terms of Service (the
            &ldquo;Terms&rdquo;), together with our Privacy Policy (incorporated
            herein by reference), constitute a legally binding agreement between
            you (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;)
            and HomeCloser AI, LLC (&ldquo;HomeCloser AI,&rdquo;
            &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) governing your access to and use of the
            HomeCloser AI mobile application, website, backend services, and all
            associated features, content, and functionality (collectively, the
            &ldquo;Service&rdquo; or &ldquo;Services&rdquo;).
          </p>
          <p>
            <strong>1.2 ASSENT.</strong> BY DOWNLOADING, INSTALLING, ACCESSING,
            OR USING THE SERVICE IN ANY MANNER, YOU ACKNOWLEDGE THAT YOU HAVE
            READ, UNDERSTOOD, AND AGREE TO BE LEGALLY BOUND BY THESE TERMS IN
            THEIR ENTIRETY. IF YOU DO NOT AGREE TO ALL OF THESE TERMS, YOU ARE
            NOT AUTHORIZED TO ACCESS OR USE THE SERVICE AND MUST IMMEDIATELY
            CEASE ALL USE AND UNINSTALL THE APPLICATION.
          </p>
          <p>
            <strong>1.3 Capacity to Contract.</strong> Your agreement to these
            Terms represents that you have the legal capacity to enter into a
            binding contract and that your use of the Service complies with all
            applicable laws and regulations in your jurisdiction.
          </p>
          <p>
            <strong>1.4 Electronic Acceptance.</strong> You acknowledge that
            your electronic acceptance of these Terms (including by clicking
            &ldquo;I Agree,&rdquo; &ldquo;Continue,&rdquo; completing
            registration, or commencing use of the Service) is legally
            equivalent to a handwritten signature and constitutes valid, binding
            acceptance.
          </p>

          {/* Section 2 */}
          <h2 id="section2">2. ELIGIBILITY AND ACCOUNT REGISTRATION</h2>
          <p>
            <strong>2.1 Age Requirement.</strong> The Service is intended solely
            for individuals who are at least eighteen (18) years of age. By
            using the Service, you represent and warrant that you are at least
            eighteen (18) years old.
          </p>
          <p>
            <strong>2.2 Professional Use.</strong> The Service is designed for
            use by licensed real estate professionals operating in the United
            States. By registering, you represent that you hold (or are actively
            pursuing) a valid real estate license or are otherwise employed or
            contracted in a professional real estate capacity.
          </p>
          <p>
            <strong>2.3 Account Information Accuracy.</strong> You agree to
            provide accurate, current, and complete information during
            registration, including but not limited to your legal name, email
            address, and United States mobile phone number. Inaccurate
            information &mdash; particularly an incorrect phone number &mdash;
            may render the emergency dispatch feature wholly inoperable.
            HomeCloser AI assumes no liability for failures attributable to
            inaccurate account information.
          </p>
          <p>
            <strong>2.4 Account Security.</strong> You are solely responsible
            for maintaining the confidentiality of your account credentials and
            for all activity that occurs under your account. You agree to
            immediately notify HomeCloser AI of any unauthorized use of your
            account or any other breach of security. HomeCloser AI will not be
            liable for any losses arising from unauthorized use of your account.
          </p>
          <p>
            <strong>2.5 One Account Per User.</strong> You may not create or
            maintain more than one active account. Accounts are personal,
            non-transferable, and may not be shared with any other person.
          </p>
          <p>
            <strong>2.6 United States Only.</strong> The Service is currently
            offered solely within the United States. You represent that you are
            located within the United States and are not subject to any U.S.
            government embargo or sanctions list.
          </p>

          {/* Section 3 */}
          <h2 id="section3">3. DESCRIPTION OF SERVICES</h2>
          <p>
            <strong>3.1 Core Functionality.</strong> HomeCloser AI provides the
            following primary features:
          </p>
          <ul>
            <li>
              <strong>
                (a) Voice-Activated Emergency Safety System:
              </strong>{" "}
              During a property showing, the Service continuously monitors audio
              input from your device&apos;s microphone for a pre-configured
              &ldquo;safety code phrase.&rdquo; Upon detection of this phrase,
              the Service initiates an automated emergency dispatch request
              through a third-party emergency response service provider.
            </li>
            <li>
              <strong>(b) Performance Analytics:</strong> The Service records
              and transcribes audio from property showings and uses artificial
              intelligence to generate post-showing analytics including talk
              ratio, open-ended question frequency, filler word usage, monologue
              duration, and speaking time.
            </li>
            <li>
              <strong>(c) AI-Generated Showing Notes:</strong> Following a
              showing, the Service uses artificial intelligence to generate
              summary notes and performance coaching feedback based on the
              transcribed audio content.
            </li>
            <li>
              <strong>(d) Showing Management:</strong> The Service enables users
              to schedule, track, and manage property showings, including
              recording client information and property addresses.
            </li>
          </ul>
          <p>
            <strong>3.2 Service Availability.</strong> The Service requires a
            stable internet connection to function. Features including, without
            limitation, the emergency dispatch capability, audio transcription,
            and AI analytics depend on connectivity to both the HomeCloser AI
            backend servers and third-party service providers. The Company makes
            no representation or warranty regarding uninterrupted availability
            of the Service or any component thereof.
          </p>
          <p>
            <strong>3.3 Supplemental Tool Only.</strong> The Service is designed
            as a supplemental professional tool. It is not intended to serve as,
            and shall not be construed as, a comprehensive personal safety
            system, law enforcement service, emergency medical service, or
            substitute for any of the foregoing.
          </p>

          {/* Section 4 */}
          <h2 id="section4">
            4. THE EMERGENCY DISPATCH FEATURE &mdash; CRITICAL LIMITATIONS AND
            DISCLAIMERS
          </h2>
          <p>
            <strong>
              THIS SECTION IS OF PARAMOUNT IMPORTANCE. PLEASE READ IT CAREFULLY
              AND IN ITS ENTIRETY BEFORE USING THE EMERGENCY DISPATCH FEATURE.
            </strong>
          </p>
          <p>
            <strong>4.1 NOT A REPLACEMENT FOR 9-1-1.</strong> THE EMERGENCY
            DISPATCH FEATURE IS A SUPPLEMENTAL TOOL AND IS NOT A REPLACEMENT
            FOR CALLING 9-1-1 OR YOUR LOCAL EMERGENCY SERVICES NUMBER. IN ANY
            EMERGENCY SITUATION IN WHICH YOU ARE PHYSICALLY ABLE TO CALL 9-1-1,
            YOU SHOULD DO SO IMMEDIATELY. DO NOT DELAY CALLING 9-1-1 IN
            RELIANCE ON THIS FEATURE.
          </p>
          <p>
            <strong>4.2 Technology Dependency and Failure Risk.</strong> The
            emergency dispatch feature depends on a chain of technologies and
            services, any one of which may fail independently and without
            notice:
          </p>
          <ul>
            <li>(a) Your device&apos;s microphone and hardware components;</li>
            <li>
              (b) Your device&apos;s operating system and audio processing
              subsystems;
            </li>
            <li>(c) Wireless network and cellular data connectivity;</li>
            <li>(d) HomeCloser AI&apos;s cloud-based backend servers;</li>
            <li>(e) OpenAI&apos;s speech-to-text transcription service;</li>
            <li>(f) Noonlight&apos;s emergency dispatch platform;</li>
            <li>
              (g) Public Safety Answering Points (PSAPs), local dispatch
              centers, and emergency responders.
            </li>
          </ul>
          <p>
            A failure at any point in this chain may prevent emergency services
            from being notified. HomeCloser AI expressly disclaims all liability
            for any failure, delay, or malfunction at any point in this chain.
          </p>
          <p>
            <strong>4.3 Voice Detection Limitations.</strong> The safety phrase
            detection system uses automated speech-to-text transcription and
            pattern matching. The system may fail to detect the safety phrase
            due to, among other factors: background noise; speech speed, accent,
            or pronunciation variations; microphone obstruction; low voice
            volume; poor audio quality; processing delays; connectivity
            interruptions; software errors; or transcription inaccuracies.
            HomeCloser AI does not warrant that the safety phrase will be
            detected in any particular circumstance.
          </p>
          <p>
            <strong>4.4 False Activations.</strong> The system may trigger an
            emergency dispatch in response to speech that resembles but does not
            constitute your intended safety phrase. You acknowledge that false
            activations may occur and agree to cooperate with and be responsible
            for any consequences, including any costs, fees, fines, or charges
            arising from false emergency dispatch activations attributable to
            your account.
          </p>
          <p>
            <strong>4.5 Response Time and Outcomes Disclaimed.</strong> Even if
            an emergency dispatch is successfully initiated, HomeCloser AI makes
            no representation or warranty regarding: the speed or adequacy of
            any emergency response; whether emergency responders will respond at
            all; the outcome of any emergency event; or whether any harm,
            injury, loss, or death will be prevented. HomeCloser AI has no
            control over public safety agencies and assumes no responsibility
            for their actions, inactions, delays, or errors.
          </p>
          <p>
            <strong>4.6 Location Accuracy.</strong> The emergency dispatch is
            directed to the property address you enter when creating a showing.
            You are solely responsible for entering accurate and complete
            address information. HomeCloser AI shall not be liable for any
            failed or delayed dispatch resulting from inaccurate or incorrect
            address data.
          </p>
          <p>
            <strong>4.7 Connectivity Prerequisite.</strong> The Service performs
            a connectivity check prior to initiating a showing session. However,
            connectivity may be lost at any time after a showing begins. Loss of
            internet connectivity during a showing will render the emergency
            dispatch feature inoperable, and HomeCloser AI shall bear no
            liability for failures caused by loss of connectivity.
          </p>
          <p>
            <strong>4.8 Device Requirements.</strong> You are solely responsible
            for ensuring that your device is: sufficiently charged to sustain
            the duration of the showing; configured to permit the Service to
            access the microphone; free of competing applications that may
            interrupt audio recording; operating on a current, supported
            operating system version; and physically accessible at all times.
          </p>
          <p>
            <strong>4.9 Safety Phrase Configuration.</strong> You are solely
            responsible for: selecting a safety phrase sufficiently distinct
            from ordinary conversation; memorizing your safety phrase thoroughly
            before relying on it; testing your safety phrase in a safe
            environment prior to any showing; updating your safety phrase if
            compromised; and ensuring your safety phrase is not disclosed to any
            client or third party present during a showing.
          </p>
          <p>
            <strong>4.10 NO GUARANTEE OF PERSONAL SAFETY.</strong> USE OF THE
            SERVICE DOES NOT GUARANTEE YOUR PERSONAL SAFETY. HOMECLOSER AI
            EXPRESSLY DISCLAIMS ANY REPRESENTATION THAT USE OF THE SERVICE WILL
            PREVENT VIOLENCE, HARM, CRIME, OR ANY OTHER ADVERSE EVENT. REAL
            ESTATE PROFESSIONALS ARE STRONGLY ENCOURAGED TO MAINTAIN
            COMPREHENSIVE PERSONAL SAFETY PRACTICES INDEPENDENT OF AND IN
            ADDITION TO THIS SERVICE.
          </p>

          {/* Section 5 */}
          <h2 id="section5">
            5. USER SAFETY RESPONSIBILITIES AND BEST PRACTICES
          </h2>
          <p>
            HomeCloser AI is committed to maximizing the protective value of the
            Service. To that end, you agree to comply with the following safety
            responsibilities and best practices as a condition of your use:
          </p>
          <h3>5.1 Pre-Showing Preparation.</h3>
          <ul>
            <li>
              <strong>(a) Verify Connectivity.</strong> Before beginning any
              showing, confirm your device has an active internet connection and
              that the Service&apos;s connectivity check indicates a healthy
              server connection. Do not begin a showing if the connectivity
              check fails.
            </li>
            <li>
              <strong>(b) Charge Your Device.</strong> Ensure your device is
              charged to a minimum of fifty percent (50%) battery before
              beginning any showing. A dead or dying device renders all safety
              features inoperable.
            </li>
            <li>
              <strong>(c) Test the Application.</strong> Prior to your first
              showing and periodically thereafter, test the safety phrase
              detection feature in a controlled, safe environment with no
              strangers present.
            </li>
            <li>
              <strong>(d) Share Your Location.</strong> Before any showing
              &mdash; particularly with a new or unverified client &mdash;
              inform a trusted colleague, family member, or friend of: (i) the
              property address; (ii) the client&apos;s name; (iii) your expected
              duration; and (iv) a scheduled check-in time. Ask them to call
              emergency services if you fail to check in.
            </li>
            <li>
              <strong>(e) Verify Client Identity.</strong> Before a showing,
              obtain the full legal name of the client and, where possible,
              verify their identity through a government-issued ID, legitimate
              referral source, or pre-showing consultation.
            </li>
            <li>
              <strong>(f) Pre-Show the Property.</strong> Physically inspect and
              familiarize yourself with the property before showing it to a new
              client, including noting all exits.
            </li>
            <li>
              <strong>(g) Know Your Safety Phrase.</strong> Confirm you know
              your safety phrase by heart before the showing begins.
            </li>
          </ul>
          <h3>5.2 During a Showing.</h3>
          <ul>
            <li>
              <strong>(a) Keep Your Device Accessible.</strong> Keep your device
              on your person at all times during the showing. Do not leave your
              device in a bag, vehicle, or room you are not in.
            </li>
            <li>
              <strong>(b) Do Not Mute Your Device.</strong> Ensure your device
              is not in silent mode so that the audio alarm confirmation can be
              heard upon activation.
            </li>
            <li>
              <strong>(c) Maintain Situational Awareness.</strong> The Service
              is not a substitute for your own professional judgment. Trust your
              instincts. If a situation feels unsafe, leave the property
              immediately and call 9-1-1.
            </li>
            <li>
              <strong>(d) Do Not Disclose the Safety Feature.</strong> Do not
              reveal to a client or third party that you are using a
              voice-activated safety system or disclose the wording of your
              safety phrase.
            </li>
            <li>
              <strong>(e) Confirm Alarm Activation.</strong> If you speak your
              safety phrase, confirm that an alarm has been triggered if safe to
              do so. If you do not receive confirmation, take alternative
              emergency measures immediately.
            </li>
            <li>
              <strong>(f) Do Not Terminate the Session Prematurely.</strong> Do
              not end the showing session until you have safely concluded the
              showing.
            </li>
          </ul>
          <h3>5.3 General Safety Practices.</h3>
          <ul>
            <li>
              <strong>(a) Never Rely Solely on This App.</strong> The Service is
              one layer of a multi-layered personal safety strategy. Maintain
              additional safety measures including notifying your brokerage of
              your schedule, using a safety buddy system, following brokerage
              safety protocols, and considering personal safety training.
            </li>
            <li>
              <strong>(b) Know How to Call 9-1-1.</strong> Memorize how to
              quickly place an emergency call from your locked device screen
              (e.g., your device&apos;s Emergency SOS feature) as a primary
              fallback.
            </li>
            <li>
              <strong>(c) Report Technical Issues.</strong> Report any technical
              issues &mdash; including safety phrase detection failures or
              recording interruptions &mdash; to HomeCloser AI immediately.
            </li>
          </ul>
          <p>
            <strong>5.4 Acknowledgment of Risk.</strong> You acknowledge that
            real estate property showings carry inherent personal safety risks
            and that HomeCloser AI does not represent that the Service will
            eliminate these risks. You agree to assume full personal
            responsibility for assessing and managing the risks associated with
            your professional activities.
          </p>

          {/* Section 6 */}
          <h2 id="section6">
            6. AUDIO RECORDING, TRANSCRIPTION, AND ARTIFICIAL INTELLIGENCE
          </h2>
          <p>
            <strong>6.1 CONSENT TO RECORDING.</strong> BY INITIATING A SHOWING
            SESSION, YOU CONSENT TO CONTINUOUS AUDIO RECORDING OF THE
            ENVIRONMENT SURROUNDING YOUR DEVICE FOR THE DURATION OF THAT
            SESSION. YOU ARE SOLELY RESPONSIBLE FOR OBTAINING ALL LEGALLY
            REQUIRED CONSENTS FROM ANY OTHER PERSONS &mdash; INCLUDING CLIENTS,
            CO-AGENTS, HOMEOWNERS, OR BYSTANDERS &mdash; WHO MAY BE RECORDED
            DURING A SHOWING SESSION, IN COMPLIANCE WITH ALL APPLICABLE
            FEDERAL, STATE, AND LOCAL WIRETAPPING, EAVESDROPPING, AND RECORDING
            LAWS.
          </p>
          <p>
            <strong>6.2 State Recording Laws.</strong> Recording laws vary by
            state. Many U.S. states require the consent of all parties being
            recorded (&ldquo;all-party consent&rdquo; or &ldquo;two-party
            consent&rdquo; states). You are solely responsible for
            understanding and complying with applicable recording laws.
            HomeCloser AI expressly disclaims all liability for your failure to
            obtain legally required consents, and you agree to indemnify
            HomeCloser AI for any claims arising therefrom.
          </p>
          <p>
            <strong>6.3 AI Transcription Accuracy Disclaimer.</strong>{" "}
            Transcriptions are inherently imperfect and may contain errors,
            omissions, or misinterpretations. HomeCloser AI makes no warranty
            as to the accuracy, completeness, or reliability of any
            transcription. Transcriptions should never be relied upon as a
            verbatim record and should not be used as evidence in any legal,
            regulatory, or disciplinary proceeding without independent
            verification.
          </p>
          <p>
            <strong>
              6.4 AI-Generated Notes and Analytics Disclaimer.
            </strong>{" "}
            AI-generated showing notes, coaching feedback, and analytics are for
            informational and educational purposes only. They do not constitute
            professional coaching, legal, financial, medical, or real estate
            advice. You are solely responsible for how you use, share, or act
            upon AI-generated content.
          </p>
          <p>
            <strong>6.5 Data Retention.</strong> Audio recordings, transcripts,
            and analytics data are stored on Company servers for so long as your
            account remains active and for a period thereafter as described in
            the Privacy Policy. You may request deletion of your account and
            associated data at any time through the application&apos;s account
            deletion feature.
          </p>
          <p>
            <strong>6.6 No Confidentiality Guarantee.</strong> While HomeCloser
            AI employs commercially reasonable security measures, no data
            transmission or storage system is fully secure. HomeCloser AI cannot
            guarantee the absolute security of audio recordings or transcripts.
          </p>

          {/* Section 7 */}
          <h2 id="section7">7. SUBSCRIPTIONS, BILLING, AND PAYMENTS</h2>
          <p>
            <strong>7.1 Subscription Plans.</strong> Access to certain features
            of the Service requires a paid subscription. Subscription plans,
            pricing, and included features are described within the application
            and are subject to change in accordance with Section 17.
          </p>
          <p>
            <strong>7.2 Automatic Renewal.</strong> Subscriptions are
            automatically renewing. By initiating a subscription, you expressly
            authorize HomeCloser AI (or its designated payment processor,
            including Apple App Store and RevenueCat) to charge your designated
            payment method at the applicable rate at the beginning of each
            billing cycle until you cancel. Cancellation must be made prior to
            the end of the current billing period to avoid charges for the next
            period.
          </p>
          <p>
            <strong>7.3 NO REFUNDS.</strong> ALL SUBSCRIPTION FEES ARE
            NON-REFUNDABLE. THIS INCLUDES SITUATIONS WHERE YOU DID NOT USE THE
            SERVICE; WERE DISSATISFIED WITH THE SERVICE; YOUR ACCOUNT WAS
            TERMINATED FOR VIOLATION OF THESE TERMS; THE SERVICE WAS
            TEMPORARILY UNAVAILABLE; OR YOU FORGOT TO CANCEL. PARTIAL BILLING
            PERIOD REFUNDS ARE NOT AVAILABLE. HOMECLOSER AI RESERVES THE RIGHT
            TO ISSUE REFUNDS IN EXCEPTIONAL CIRCUMSTANCES AT ITS SOLE AND
            ABSOLUTE DISCRETION.
          </p>
          <p>
            <strong>7.4 Free Trials.</strong> HomeCloser AI may offer free trial
            periods at its sole discretion. To avoid charges, cancel before the
            trial expires. HomeCloser AI reserves the right to determine trial
            eligibility and revoke a trial at any time.
          </p>
          <p>
            <strong>7.5 Price Changes.</strong> HomeCloser AI may modify
            subscription pricing at any time. For existing subscribers,
            HomeCloser AI will provide at least thirty (30) days&apos; advance
            notice of any price increase. Continued use after the effective date
            constitutes acceptance of the new price.
          </p>
          <p>
            <strong>7.6 Payment Disputes.</strong> All billing disputes must be
            submitted within thirty (30) days of the disputed charge. You agree
            not to initiate chargebacks without first contacting HomeCloser AI
            to resolve the dispute in good faith.
          </p>
          <p>
            <strong>7.7 Taxes.</strong> You are responsible for all applicable
            taxes, levies, or duties imposed in connection with your
            subscription, excluding taxes based on HomeCloser AI&apos;s net
            income.
          </p>

          {/* Section 8 */}
          <h2 id="section8">8. PROHIBITED CONDUCT</h2>
          <p>You agree that you will not, under any circumstances:</p>
          <ul>
            <li>
              (a) Use the Service for any unlawful purpose or in violation of
              any applicable law or regulation;
            </li>
            <li>
              (b) Record any person without their legally required consent under
              applicable law;
            </li>
            <li>
              (c) Trigger false emergency alarms or dispatch requests, or use
              the emergency feature outside of a genuine, good-faith belief that
              you are in danger;
            </li>
            <li>
              (d) Attempt to circumvent, disable, or interfere with the
              Service&apos;s security features, safety checks, or authentication
              mechanisms;
            </li>
            <li>
              (e) Reverse engineer, decompile, disassemble, or otherwise attempt
              to discover the source code, algorithms, or trade secrets
              underlying the Service;
            </li>
            <li>
              (f) Access or use the Service for competitive intelligence,
              benchmarking, or to build a competing product;
            </li>
            <li>
              (g) Impersonate any person or entity or misrepresent your
              affiliation with any person or entity;
            </li>
            <li>
              (h) Use automated means (bots, scrapers, crawlers) to access or
              interact with the Service;
            </li>
            <li>
              (i) Upload, transmit, or otherwise introduce any viruses, malware,
              or other harmful code;
            </li>
            <li>
              (j) Use the Service in a manner that overloads, damages, or
              disrupts the Service or its underlying infrastructure;
            </li>
            <li>
              (k) Share your account credentials or permit any other person to
              access the Service through your account;
            </li>
            <li>
              (l) Use data obtained from the Service for any purpose other than
              your own professional real estate activities;
            </li>
            <li>
              (m) Remove, obscure, or alter any proprietary notices, disclaimers,
              or branding within the Service.
            </li>
          </ul>
          <p>
            Violation of these prohibitions may result in immediate account
            termination, civil liability, and referral to law enforcement
            authorities where appropriate.
          </p>

          {/* Section 9 */}
          <h2 id="section9">9. INTELLECTUAL PROPERTY RIGHTS</h2>
          <p>
            <strong>9.1 Company Ownership.</strong> The Service &mdash;
            including all software, algorithms, designs, text, graphics, audio,
            data models, AI systems, and all other content and features &mdash;
            is owned by HomeCloser AI or its licensors and is protected by
            United States and international copyright, trademark, patent, trade
            secret, and other intellectual property laws.
          </p>
          <p>
            <strong>9.2 Limited License.</strong> Subject to your compliance
            with these Terms and payment of applicable fees, HomeCloser AI
            grants you a limited, non-exclusive, non-transferable, revocable
            license to download and use the Service on your personal mobile
            device solely for your own professional real estate activities. This
            license does not include the right to sublicense, resell,
            redistribute, or create derivative works.
          </p>
          <p>
            <strong>9.3 User Content.</strong> You retain ownership of audio
            recordings, notes, and other content you input into the Service
            (&ldquo;User Content&rdquo;). By providing User Content, you grant
            HomeCloser AI a worldwide, royalty-free, non-exclusive license to
            process, store, transmit, and use User Content solely as necessary
            to provide the Service. HomeCloser AI does not sell User Content to
            third parties.
          </p>
          <p>
            <strong>9.4 Feedback.</strong> Any feedback, suggestions, or feature
            requests you submit become the exclusive property of HomeCloser AI,
            and you hereby assign all rights therein to HomeCloser AI. HomeCloser
            AI has no obligation to act on or compensate you for feedback.
          </p>

          {/* Section 10 */}
          <h2 id="section10">10. PRIVACY AND DATA COLLECTION</h2>
          <p>
            <strong>10.1 Privacy Policy.</strong> HomeCloser AI&apos;s
            collection, use, and disclosure of personal information is governed
            by the{" "}
            <Link href="/privacy">HomeCloser AI Privacy Policy</Link>,
            incorporated into these Terms by reference.
          </p>
          <p>
            <strong>10.2 Sensitive Data.</strong> You acknowledge that the
            Service collects and processes sensitive categories of personal
            information, including audio recordings, your name, phone number,
            email address, and physical location (via property address), all
            handled in accordance with the Privacy Policy.
          </p>
          <p>
            <strong>10.3 Emergency Data Disclosure.</strong> In the event of an
            emergency alarm activation, your name, phone number, and the
            property address are automatically transmitted to Noonlight and from
            there to appropriate emergency response agencies. You acknowledge
            and consent to this disclosure as a necessary component of the
            emergency dispatch service you have enrolled in.
          </p>
          <p>
            <strong>10.4 Regulatory Compliance.</strong> You are responsible for
            ensuring that your use of the Service &mdash; including recording
            and storage of client interactions &mdash; complies with all
            applicable privacy laws, including but not limited to the California
            Consumer Privacy Act (CCPA), applicable state wiretapping statutes,
            and applicable real estate industry regulations.
          </p>

          {/* Section 11 */}
          <h2 id="section11">11. THIRD-PARTY SERVICES AND INTEGRATIONS</h2>
          <p>
            <strong>11.1 Third-Party Providers.</strong> The Service integrates
            with the following third-party providers, among others: Noonlight
            (emergency dispatch), OpenAI (transcription and AI analytics),
            Supabase (data storage and authentication), RevenueCat (subscription
            management), and PostHog (analytics). Your use of the Service is
            subject to the terms and privacy policies of these providers.
          </p>
          <p>
            <strong>11.2 No Control or Endorsement.</strong> HomeCloser AI does
            not control and is not responsible for the operation, availability,
            policies, or practices of any third-party service. Integration of a
            third-party service does not constitute an endorsement.
          </p>
          <p>
            <strong>11.3 Third-Party Failures.</strong> The Service may be
            rendered wholly or partially inoperable by the failure,
            unavailability, or malfunction of any third-party service, including
            the emergency dispatch provider. HomeCloser AI shall not be liable
            for any such disruption or the consequences thereof.
          </p>
          <p>
            <strong>11.4 Noonlight Terms.</strong> Your use of the emergency
            dispatch feature is additionally subject to Noonlight&apos;s own
            Terms of Service and Privacy Policy. HomeCloser AI expressly
            disclaims all liability for Noonlight&apos;s actions, inactions, or
            failures.
          </p>

          {/* Section 12 */}
          <h2 id="section12">12. DISCLAIMER OF WARRANTIES</h2>
          <p>
            <strong>12.1 AS-IS BASIS.</strong> THE SERVICE IS PROVIDED ON AN
            &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT
            WARRANTIES OF ANY KIND, EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE.
          </p>
          <p>
            <strong>12.2 DISCLAIMER.</strong> TO THE MAXIMUM EXTENT PERMITTED
            BY APPLICABLE LAW, HOMECLOSER AI EXPRESSLY DISCLAIMS ALL
            WARRANTIES, INCLUDING BUT NOT LIMITED TO: (A) IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
            NON-INFRINGEMENT; (B) WARRANTIES THAT THE SERVICE WILL MEET YOUR
            REQUIREMENTS; (C) WARRANTIES THAT THE SERVICE WILL BE
            UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; (D) WARRANTIES
            REGARDING THE ACCURACY OR RELIABILITY OF ANY TRANSCRIPTION OR
            AI-GENERATED OUTPUT; (E) WARRANTIES THAT THE SAFETY PHRASE WILL BE
            DETECTED IN ANY PARTICULAR CIRCUMSTANCE; (F) WARRANTIES THAT
            EMERGENCY SERVICES WILL BE NOTIFIED OR WILL RESPOND IN THE EVENT OF
            AN EMERGENCY; (G) WARRANTIES THAT USE OF THE SERVICE WILL PREVENT
            HARM, INJURY, DEATH, LOSS, OR DAMAGE OF ANY KIND.
          </p>
          <p>
            <strong>12.3 ASSUMPTION OF RISK.</strong> YOU EXPRESSLY ACKNOWLEDGE
            AND AGREE THAT YOUR USE OF THE SERVICE, AND IN PARTICULAR THE
            EMERGENCY DISPATCH FEATURE, IS AT YOUR SOLE RISK.
          </p>

          {/* Section 13 */}
          <h2 id="section13">13. LIMITATION OF LIABILITY</h2>
          <p>
            <strong>13.1 EXCLUSION OF DAMAGES.</strong> TO THE MAXIMUM EXTENT
            PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL HOMECLOSER AI, ITS
            OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, CONTRACTORS, SUCCESSORS, OR
            ASSIGNS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY: INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES;
            LOSS OF PROFITS, REVENUE, BUSINESS, DATA, GOODWILL, OR ANTICIPATED
            SAVINGS; PERSONAL INJURY OR DEATH RESULTING FROM YOUR USE OF OR
            INABILITY TO USE THE SERVICE; FAILURE OF THE EMERGENCY DISPATCH
            FEATURE TO ACTIVATE OR DETECT YOUR SAFETY PHRASE; ACTS OR OMISSIONS
            OF EMERGENCY RESPONDERS, DISPATCH CENTERS, LAW ENFORCEMENT, MEDICAL
            PERSONNEL, OR NOONLIGHT; UNAUTHORIZED ACCESS TO OR ALTERATION OF
            YOUR DATA OR ACCOUNT; OR LOSS OR DAMAGE INCURRED AS A RESULT OF
            RELIANCE ON ANY AI-GENERATED OUTPUT &mdash; EVEN IF HOMECLOSER AI
            HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND EVEN IF A
            REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
          </p>
          <p>
            <strong>13.2 AGGREGATE LIABILITY CAP.</strong> TO THE MAXIMUM
            EXTENT PERMITTED BY APPLICABLE LAW, HOMECLOSER AI&apos;S TOTAL
            CUMULATIVE LIABILITY TO YOU FOR ALL CLAIMS SHALL NOT EXCEED THE
            GREATER OF: (A) THE TOTAL SUBSCRIPTION FEES ACTUALLY PAID BY YOU IN
            THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE CLAIM; OR (B) ONE
            HUNDRED DOLLARS ($100.00).
          </p>
          <p>
            <strong>13.3 Essential Basis.</strong> You acknowledge that the
            foregoing limitations of liability reflect a reasonable allocation of
            risk between the parties and are an essential basis of the bargain
            between you and HomeCloser AI. HomeCloser AI would not provide the
            Service on the terms set forth herein without these limitations.
          </p>
          <p>
            <strong>13.4 Jurisdictional Variation.</strong> Some jurisdictions
            do not allow the exclusion of certain warranties or limitation of
            certain damages. To the extent such limitations are prohibited, the
            corresponding limitations shall apply to the fullest extent
            permitted by applicable law.
          </p>

          {/* Section 14 */}
          <h2 id="section14">14. INDEMNIFICATION</h2>
          <p>
            <strong>14.1 Your Indemnification Obligation.</strong> You agree to
            defend, indemnify, and hold harmless HomeCloser AI, its affiliates,
            licensors, and service providers, and each of their respective
            officers, directors, employees, contractors, agents, successors, and
            assigns (collectively, the &ldquo;Indemnified Parties&rdquo;) from
            and against any and all claims, liabilities, damages, judgments,
            awards, losses, costs, expenses, and fees (including reasonable
            attorneys&apos; fees and court costs) arising out of or relating to:
          </p>
          <ul>
            <li>(a) Your use or misuse of the Service;</li>
            <li>(b) Your violation of these Terms;</li>
            <li>
              (c) Your violation of any applicable law or regulation, including
              wiretapping and recording statutes;
            </li>
            <li>
              (d) Your failure to obtain legally required consent from any person
              you recorded through the Service;
            </li>
            <li>
              (e) Any false or unauthorized emergency alarm triggered from your
              account;
            </li>
            <li>
              (f) Your violation of any third party&apos;s rights, including
              privacy, intellectual property, or contractual rights;
            </li>
            <li>
              (g) Any inaccurate or incomplete information you provided during
              registration or showing setup, including incorrect property
              addresses or phone numbers;
            </li>
            <li>
              (h) Any claim by a client, homeowner, co-agent, or other party
              arising from your conduct during a showing.
            </li>
          </ul>
          <p>
            <strong>14.2 Defense and Settlement.</strong> HomeCloser AI reserves
            the right to assume exclusive control of the defense of any matter
            subject to indemnification. You shall cooperate fully with
            HomeCloser AI&apos;s defense and shall not settle any such claim
            without prior written consent of HomeCloser AI.
          </p>

          {/* Section 15 */}
          <h2 id="section15">
            15. DISPUTE RESOLUTION; MANDATORY ARBITRATION; CLASS ACTION WAIVER
          </h2>
          <p>
            <strong>15.1 Informal Resolution.</strong> Before initiating formal
            proceedings, you agree to contact HomeCloser AI in writing to
            describe your dispute and allow thirty (30) days for the parties to
            attempt to resolve it informally. This requirement is a prerequisite
            to arbitration.
          </p>
          <p>
            <strong>15.2 BINDING ARBITRATION.</strong> EXCEPT AS SET FORTH IN
            SECTION 15.5, ALL DISPUTES, CLAIMS, CONTROVERSIES, OR CAUSES OF
            ACTION ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE
            &mdash; WHETHER BASED IN CONTRACT, TORT, STATUTE, FRAUD,
            MISREPRESENTATION, OR ANY OTHER LEGAL THEORY &mdash; SHALL BE
            RESOLVED BY FINAL AND BINDING ARBITRATION, RATHER THAN IN COURT.
          </p>
          <p>
            <strong>15.3 Arbitration Procedure.</strong> Arbitration shall be
            conducted by the American Arbitration Association (&ldquo;AAA&rdquo;)
            under its Consumer Arbitration Rules, as modified by these Terms, by
            a single neutral arbitrator. The arbitration shall take place in the
            county of the User&apos;s residence unless the parties mutually agree
            otherwise. The arbitrator&apos;s decision shall be final and binding
            and may be entered as a judgment in any court of competent
            jurisdiction.
          </p>
          <p>
            <strong>15.4 CLASS ACTION WAIVER.</strong> YOU AND HOMECLOSER AI
            EACH AGREE THAT ANY DISPUTE RESOLUTION PROCEEDING WILL BE CONDUCTED
            SOLELY ON AN INDIVIDUAL BASIS AND NOT AS PART OF A CLASS,
            COLLECTIVE, CONSOLIDATED, MASS, OR REPRESENTATIVE ACTION OR
            ARBITRATION. NEITHER YOU NOR HOMECLOSER AI MAY BE A CLASS
            REPRESENTATIVE, CLASS MEMBER, OR OTHERWISE PARTICIPATE IN A CLASS
            PROCEEDING. IF THIS CLASS ACTION WAIVER IS FOUND UNENFORCEABLE AS
            TO ANY CLAIM, THAT CLAIM SHALL BE SEVERED AND LITIGATED IN COURT,
            WHILE ALL REMAINING CLAIMS SHALL PROCEED IN ARBITRATION.
          </p>
          <p>
            <strong>15.5 Exceptions.</strong> Either party may bring an
            individual action in small claims court for disputes within that
            court&apos;s jurisdictional limits. Either party may also seek
            emergency injunctive or other equitable relief in a court of
            competent jurisdiction to prevent irreparable harm pending resolution
            of a dispute by arbitration.
          </p>
          <p>
            <strong>15.6 WAIVER OF JURY TRIAL.</strong> TO THE EXTENT ANY CLAIM
            IS NOT SUBJECT TO ARBITRATION, YOU AND HOMECLOSER AI EACH
            IRREVOCABLY WAIVE THE RIGHT TO A JURY TRIAL.
          </p>
          <p>
            <strong>15.7 TIME LIMITATION ON CLAIMS.</strong> ANY CLAIM ARISING
            OUT OF OR RELATED TO THESE TERMS OR THE SERVICE MUST BE BROUGHT
            WITHIN ONE (1) YEAR AFTER THE CLAIM ARISES. CLAIMS NOT BROUGHT
            WITHIN THIS PERIOD ARE PERMANENTLY BARRED.
          </p>
          <p>
            <strong>15.8 Governing Rules.</strong> The Federal Arbitration Act
            (9 U.S. Section 1 et seq.) governs the interpretation and
            enforcement of this Section 15.
          </p>

          {/* Section 16 */}
          <h2 id="section16">16. GOVERNING LAW AND VENUE</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the State of Delaware, without regard to its conflict of
            law principles. For any disputes not subject to arbitration, you
            consent to the exclusive personal jurisdiction and venue of the
            state and federal courts located in the State of Delaware, and you
            waive any objection to jurisdiction or venue in such courts.
          </p>

          {/* Section 17 */}
          <h2 id="section17">17. MODIFICATIONS TO TERMS AND SERVICE</h2>
          <p>
            <strong>17.1 Modification of Terms.</strong> HomeCloser AI reserves
            the right to modify these Terms at any time at its sole discretion.
            We will notify you of material changes by posting updated Terms
            within the application and/or by email to the address associated
            with your account. Updated Terms take effect on the date specified
            in the notice. Your continued use of the Service after that date
            constitutes your binding acceptance of the updated Terms.
          </p>
          <p>
            <strong>17.2 Modification of Service.</strong> HomeCloser AI
            reserves the right, at any time and in its sole discretion, to
            modify, add, or remove features; change pricing; restrict access; or
            suspend or discontinue the Service or any portion thereof &mdash;
            with or without notice. HomeCloser AI shall not be liable for any
            modification, suspension, or discontinuation.
          </p>

          {/* Section 18 */}
          <h2 id="section18">18. TERM AND TERMINATION</h2>
          <p>
            <strong>18.1 Term.</strong> These Terms are effective from the date
            you first accept them and continue until terminated.
          </p>
          <p>
            <strong>18.2 Termination by You.</strong> You may terminate these
            Terms at any time by deleting your account through the
            application&apos;s account deletion feature and ceasing all use of
            the Service.
          </p>
          <p>
            <strong>18.3 Termination by HomeCloser AI.</strong> HomeCloser AI
            may suspend or terminate your access to the Service, with or without
            notice and with or without cause, including if HomeCloser AI
            reasonably believes you have violated these Terms, applicable law,
            or any third party&apos;s rights; you have failed to pay applicable
            fees; or for any other business reason at HomeCloser AI&apos;s sole
            discretion.
          </p>
          <p>
            <strong>18.4 Effect of Termination.</strong> Upon termination, your
            license terminates immediately and you must cease all use. All
            accrued payment obligations survive. Sections 4, 5, 9.3, 9.4, 10,
            12, 13, 14, 15, 16, 18.4, and 19 shall survive any termination.
          </p>

          {/* Section 19 */}
          <h2 id="section19">19. MISCELLANEOUS</h2>
          <p>
            <strong>19.1 Entire Agreement.</strong> These Terms and the Privacy
            Policy constitute the entire agreement between you and HomeCloser AI
            with respect to the Service and supersede all prior and
            contemporaneous understandings, agreements, representations, and
            warranties.
          </p>
          <p>
            <strong>19.2 Severability.</strong> If any provision of these Terms
            is found invalid, illegal, or unenforceable, it shall be modified to
            the minimum extent necessary to make it enforceable, and the
            remaining provisions shall continue in full force and effect.
          </p>
          <p>
            <strong>19.3 Waiver.</strong> HomeCloser AI&apos;s failure to
            enforce any right or provision shall not constitute a waiver of that
            right or provision.
          </p>
          <p>
            <strong>19.4 Assignment.</strong> You may not assign or transfer any
            of your rights or obligations under these Terms without HomeCloser
            AI&apos;s prior written consent. HomeCloser AI may freely assign
            these Terms, including in connection with a merger, acquisition, or
            sale of assets, without restriction.
          </p>
          <p>
            <strong>19.5 Force Majeure.</strong> HomeCloser AI shall not be
            liable for any delay or failure in performance resulting from causes
            beyond its reasonable control, including acts of God, natural
            disasters, war, terrorism, government actions, network outages,
            power failures, or failures of third-party service providers.
          </p>
          <p>
            <strong>19.6 No Professional Advice.</strong> Nothing in the Service
            or these Terms constitutes legal, medical, financial, or
            professional real estate advice. HomeCloser AI is not a licensed
            attorney, medical professional, financial advisor, or real estate
            broker.
          </p>
          <p>
            <strong>19.7 No Emergency Services Provider.</strong> HomeCloser AI
            is not an emergency services provider, public safety answering
            point, or first responder. HomeCloser AI acts solely as an
            intermediary that transmits requests to a third-party emergency
            dispatch service and has no control over, and assumes no
            responsibility for, any emergency responder or dispatch center.
          </p>
          <p>
            <strong>19.8 Electronic Communications.</strong> You consent to
            receiving communications from HomeCloser AI electronically. You
            agree that all agreements, notices, and other communications
            provided electronically satisfy any legal requirement that such
            communications be in writing.
          </p>

          {/* Section 20 */}
          <h2 id="section20">20. CONTACT INFORMATION</h2>
          <p>
            For questions regarding these Terms, to report a legal issue, or to
            submit a billing dispute, please contact:
          </p>
          <p>
            HomeCloser AI, Company Legal Department
            <br />
            345 E Woolbright Road
            <br />
            Boynton Beach, FL 33435
            <br />
            Email:{" "}
            <a href="mailto:contact@homecloserai.com">
              contact@homecloserai.com
            </a>
            <br />
            Website: www.homecloserai.com
          </p>
          <p>
            <strong>
              FOR EMERGENCY SITUATIONS: Do not contact HomeCloser AI. Call
              9-1-1 immediately.
            </strong>
          </p>

          <hr className="my-8" />

          <p>
            These Terms of Service were last reviewed and updated on February
            19, 2026. HomeCloser AI recommends that you save a copy of these
            Terms for your records.
          </p>

          <div className="not-prose bg-gray-50 border border-gray-200 rounded-md p-4 my-6">
            <p className="text-sm text-gray-700 font-semibold">
              ACKNOWLEDGMENT:
            </p>
            <p className="text-sm text-gray-700 mt-1">
              BY USING THE HOMECLOSER AI SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE
              READ THESE TERMS OF SERVICE IN THEIR ENTIRETY, THAT YOU UNDERSTAND
              THEM, AND THAT YOU AGREE TO BE BOUND BY ALL OF THEIR PROVISIONS.
              YOU FURTHER ACKNOWLEDGE THAT THESE TERMS INCLUDE IMPORTANT
              LIMITATIONS ON YOUR RIGHTS AND REMEDIES, INCLUDING LIMITATIONS ON
              LIABILITY, A WAIVER OF JURY TRIAL, A CLASS ACTION WAIVER, AND A
              MANDATORY ARBITRATION CLAUSE.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
