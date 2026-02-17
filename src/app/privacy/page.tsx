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
          <h1>PRIVACY POLICY</h1>
          <p className="text-gray-500 text-sm">
            <strong>Last updated January 09, 2026</strong>
          </p>

          <p>
            This Privacy Notice for <strong>HomeCloser AI</strong> (&quot;
            <strong>we</strong>,&quot; &quot;<strong>us</strong>,&quot; or &quot;
            <strong>our</strong>&quot;), describes how and why we might access,
            collect, store, use, and/or share (&quot;
            <strong>process</strong>&quot;) your personal information when you
            use our services (&quot;<strong>Services</strong>&quot;), including
            when you:
          </p>

          <ul>
            <li>
              Download and use our mobile application (HomeCloser AI), or any
              other application of ours that links to this Privacy Notice
            </li>
            <li>
              Use HomeCloser AI. A platform for real estate agents to improve
              their safety and success through the use of technology.
            </li>
            <li>
              Engage with us in other related ways, including any marketing or
              events
            </li>
          </ul>

          <p>
            <strong>Questions or concerns?</strong> Reading this Privacy Notice
            will help you understand your privacy rights and choices. We are
            responsible for making decisions about how your personal information
            is processed. If you do not agree with our policies and practices,
            please do not use our Services. If you still have any questions or
            concerns, please contact us at{" "}
            <a href="mailto:christian@homecloserai.com">
              christian@homecloserai.com
            </a>
            .
          </p>

          <h2>SUMMARY OF KEY POINTS</h2>

          <p>
            <strong>
              <em>
                This summary provides key points from our Privacy Notice, but
                you can find out more details about any of these topics by
                clicking the link following each key point or by using our{" "}
                <a href="#toc">table of contents</a> below to find the section
                you are looking for.
              </em>
            </strong>
          </p>

          <p>
            <strong>What personal information do we process?</strong> When you
            visit, use, or navigate our Services, we may process personal
            information depending on how you interact with us and the Services,
            the choices you make, and the products and features you use. Learn
            more about{" "}
            <a href="#personalinfo">personal information you disclose to us</a>.
          </p>

          <p>
            <strong>
              Do we process any sensitive personal information?
            </strong>{" "}
            We do not process sensitive personal information.
          </p>

          <p>
            <strong>
              Do we collect any information from third parties?
            </strong>{" "}
            We do not collect any information from third parties.
          </p>

          <p>
            <strong>How do we process your information?</strong> We process your
            information to provide, improve, and administer our Services,
            communicate with you, for security and fraud prevention, and to
            comply with law. We may also process your information for other
            purposes with your consent. We process your information only when we
            have a valid legal reason to do so. Learn more about{" "}
            <a href="#infouse">how we process your information</a>.
          </p>

          <p>
            <strong>
              In what situations and with which types of parties do we share
              personal information?
            </strong>{" "}
            We may share information in specific situations and with specific
            categories of third parties. Learn more about{" "}
            <a href="#whoshare">
              when and with whom we share your personal information
            </a>
            .
          </p>

          <p>
            <strong>How do we keep your information safe?</strong> We have
            adequate organizational and technical processes and procedures in
            place to protect your personal information. However, no electronic
            transmission over the internet or information storage technology can
            be guaranteed to be 100% secure, so we cannot promise or guarantee
            that hackers, cybercriminals, or other unauthorized third parties
            will not be able to defeat our security and improperly collect,
            access, steal, or modify your information. Learn more about{" "}
            <a href="#infosafe">how we keep your information safe</a>.
          </p>

          <p>
            <strong>What are your rights?</strong> Depending on where you are
            located geographically, the applicable privacy law may mean you have
            certain rights regarding your personal information. Learn more about{" "}
            <a href="#privacyrights">your privacy rights</a>.
          </p>

          <p>
            <strong>How do you exercise your rights?</strong> The easiest way to
            exercise your rights is by submitting a{" "}
            <a
              href="https://app.termly.io/dsar/d6b2f00c-3a33-4ea2-bccc-da749a942bb1"
              target="_blank"
              rel="noopener noreferrer"
            >
              data subject access request
            </a>
            , or by contacting us. We will consider and act upon any request in
            accordance with applicable data protection laws.
          </p>

          <p>
            Want to learn more about what we do with any information we collect?{" "}
            <a href="#toc">Review the Privacy Notice in full</a>.
          </p>

          <h2 id="toc">TABLE OF CONTENTS</h2>

          <ol>
            <li>
              <a href="#infocollect">WHAT INFORMATION DO WE COLLECT?</a>
            </li>
            <li>
              <a href="#infouse">HOW DO WE PROCESS YOUR INFORMATION?</a>
            </li>
            <li>
              <a href="#whoshare">
                WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </a>
            </li>
            <li>
              <a href="#cookies">
                DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </a>
            </li>
            <li>
              <a href="#ai">
                DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
              </a>
            </li>
            <li>
              <a href="#inforetain">HOW LONG DO WE KEEP YOUR INFORMATION?</a>
            </li>
            <li>
              <a href="#infosafe">HOW DO WE KEEP YOUR INFORMATION SAFE?</a>
            </li>
            <li>
              <a href="#infominors">
                DO WE COLLECT INFORMATION FROM MINORS?
              </a>
            </li>
            <li>
              <a href="#privacyrights">WHAT ARE YOUR PRIVACY RIGHTS?</a>
            </li>
            <li>
              <a href="#DNT">CONTROLS FOR DO-NOT-TRACK FEATURES</a>
            </li>
            <li>
              <a href="#uslaws">
                DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </a>
            </li>
            <li>
              <a href="#policyupdates">DO WE MAKE UPDATES TO THIS NOTICE?</a>
            </li>
            <li>
              <a href="#contact">
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </a>
            </li>
            <li>
              <a href="#request">
                HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                YOU?
              </a>
            </li>
          </ol>

          <h2 id="infocollect">1. WHAT INFORMATION DO WE COLLECT?</h2>

          <h3 id="personalinfo">Personal information you disclose to us</h3>

          <p>
            <strong>
              <em>In Short:</em>
            </strong>{" "}
            <em>We collect personal information that you provide to us.</em>
          </p>

          <p>
            We collect personal information that you voluntarily provide to us
            when you register on the Services, express an interest in obtaining
            information about us or our products and Services, when you
            participate in activities on the Services, or otherwise when you
            contact us.
          </p>

          <p>
            <strong>Personal Information Provided by You.</strong> The personal
            information that we collect depends on the context of your
            interactions with us and the Services, the choices you make, and the
            products and features you use. The personal information we collect
            may include the following:
          </p>

          <ul>
            <li>names</li>
            <li>phone numbers</li>
            <li>email addresses</li>
            <li>mailing addresses</li>
            <li>passwords</li>
            <li>client information</li>
          </ul>

          <p>
            <strong>Sensitive Information.</strong> We do not process sensitive
            information.
          </p>

          <p>
            <strong>Application Data.</strong> If you use our application(s), we
            also may collect the following information if you choose to provide
            us with access or permission:
          </p>

          <ul>
            <li>
              <em>Geolocation Information.</em> We may request access or
              permission to track location-based information from your mobile
              device, either continuously or while you are using our mobile
              application(s), to provide certain location-based services. If you
              wish to change our access or permissions, you may do so in your
              device&apos;s settings.
            </li>
            <li>
              <em>Mobile Device Access.</em> We may request access or permission
              to certain features from your mobile device, including your mobile
              device&apos;s microphone, bluetooth, reminders, and other
              features. If you wish to change our access or permissions, you may
              do so in your device&apos;s settings.
            </li>
          </ul>

          <p>
            This information is primarily needed to maintain the security and
            operation of our application(s), for troubleshooting, and for our
            internal analytics and reporting purposes.
          </p>

          <p>
            All personal information that you provide to us must be true,
            complete, and accurate, and you must notify us of any changes to
            such personal information.
          </p>

          <h3>Information automatically collected</h3>

          <p>
            <strong>
              <em>In Short:</em>
            </strong>{" "}
            <em>
              Some information — such as your Internet Protocol (IP) address
              and/or browser and device characteristics — is collected
              automatically when you visit our Services.
            </em>
          </p>

          <p>
            We automatically collect certain information when you visit, use, or
            navigate the Services. This information does not reveal your
            specific identity (like your name or contact information) but may
            include device and usage information, such as your IP address,
            browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location,
            information about how and when you use our Services, and other
            technical information. This information is primarily needed to
            maintain the security and operation of our Services, and for our
            internal analytics and reporting purposes.
          </p>

          <p>
            Like many businesses, we also collect information through cookies
            and similar technologies.
          </p>

          <p>The information we collect includes:</p>

          <ul>
            <li>
              <em>Log and Usage Data.</em> Log and usage data is
              service-related, diagnostic, usage, and performance information
              our servers automatically collect when you access or use our
              Services and which we record in log files. Depending on how you
              interact with us, this log data may include your IP address,
              device information, browser type, and settings and information
              about your activity in the Services (such as the date/time stamps
              associated with your usage, pages and files viewed, searches, and
              other actions you take such as which features you use), device
              event information (such as system activity, error reports
              (sometimes called &quot;crash dumps&quot;), and hardware
              settings).
            </li>
            <li>
              <em>Location Data.</em> We collect location data such as
              information about your device&apos;s location, which can be either
              precise or imprecise. How much information we collect depends on
              the type and settings of the device you use to access the
              Services. For example, we may use GPS and other technologies to
              collect geolocation data that tells us your current location
              (based on your IP address). You can opt out of allowing us to
              collect this information either by refusing access to the
              information or by disabling your Location setting on your device.
              However, if you choose to opt out, you may not be able to use
              certain aspects of the Services.
            </li>
          </ul>

          <h2 id="infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>

          <p>
            <strong>
              <em>In Short:</em>
            </strong>{" "}
            <em>
              We process your information to provide, improve, and administer
              our Services, communicate with you, for security and fraud
              prevention, and to comply with law. We may also process your
              information for other purposes with your consent.
            </em>
          </p>

          <p>
            <strong>
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </strong>
          </p>

          <ul>
            <li>
              <strong>
                To facilitate account creation and authentication and otherwise
                manage user accounts.
              </strong>{" "}
              We may process your information so you can create and log in to
              your account, as well as keep your account in working order.
            </li>
            <li>
              <strong>
                To deliver and facilitate delivery of services to the user.
              </strong>{" "}
              We may process your information to provide you with the requested
              service.
            </li>
            <li>
              <strong>To request feedback.</strong> We may process your
              information when necessary to request feedback and to contact you
              about your use of our Services.
            </li>
            <li>
              <strong>
                To evaluate and improve our Services, products, marketing, and
                your experience.
              </strong>{" "}
              We may process your information when we believe it is necessary to
              identify usage trends, determine the effectiveness of our
              promotional campaigns, and to evaluate and improve our Services,
              products, marketing, and your experience.
            </li>
            <li>
              <strong>To identify usage trends.</strong> We may process
              information about how you use our Services to better understand
              how they are being used so we can improve them.
            </li>
            <li>
              <strong>
                To determine the effectiveness of our marketing and promotional
                campaigns.
              </strong>{" "}
              We may process your information to better understand how to
              provide marketing and promotional campaigns that are most relevant
              to you.
            </li>
          </ul>

          <h2 id="whoshare">
            3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </h2>

          <p>
            <strong>
              <em>In Short:</em>
            </strong>{" "}
            <em>
              We may share information in specific situations described in this
              section and/or with the following categories of third parties.
            </em>
          </p>

          <p>
            <strong>
              Vendors, Consultants, and Other Third-Party Service Providers.
            </strong>{" "}
            We may share your data with third-party vendors, service providers,
            contractors, or agents (&quot;<strong>third parties</strong>&quot;)
            who perform services for us or on our behalf and require access to
            such information to do that work. We have contracts in place with
            our third parties, which are designed to help safeguard your
            personal information. This means that they cannot do anything with
            your personal information unless we have instructed them to do it.
            They will also not share your personal information with any
            organization apart from us. They also commit to protect the data
            they hold on our behalf and to retain it for the period we instruct.
          </p>

          <p>
            The categories of third parties we may share personal information
            with are as follows:
          </p>

          <ul>
            <li>Communication &amp; Collaboration Tools</li>
            <li>Data Analytics Services</li>
          </ul>

          <p>
            We also may need to share your personal information in the following
            situations:
          </p>

          <ul>
            <li>
              <strong>Business Transfers.</strong> We may share or transfer your
              information in connection with, or during negotiations of, any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business to another company.
            </li>
            <li>
              <strong>Affiliates.</strong> We may share your information with
              our affiliates, in which case we will require those affiliates to
              honor this Privacy Notice. Affiliates include our parent company
              and any subsidiaries, joint venture partners, or other companies
              that we control or that are under common control with us.
            </li>
            <li>
              <strong>Business Partners.</strong> We may share your information
              with our business partners to offer you certain products,
              services, or promotions.
            </li>
            <li>
              <strong>Offer Wall.</strong> Our application(s) may display a
              third-party hosted &quot;offer wall.&quot; Such an offer wall
              allows third-party advertisers to offer virtual currency, gifts,
              or other items to users in return for the acceptance and
              completion of an advertisement offer. Such an offer wall may
              appear in our application(s) and be displayed to you based on
              certain data, such as your geographic area or demographic
              information. When you click on an offer wall, you will be brought
              to an external website belonging to other persons and will leave
              our application(s). A unique identifier, such as your user ID,
              will be shared with the offer wall provider in order to prevent
              fraud and properly credit your account with the relevant reward.
            </li>
          </ul>

          <h2 id="cookies">
            4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
          </h2>

          <p>
            <strong>
              <em>In Short:</em>
            </strong>{" "}
            <em>
              We may use cookies and other tracking technologies to collect and
              store your information.
            </em>
          </p>

          <p>
            We may use cookies and similar tracking technologies (like web
            beacons and pixels) to gather information when you interact with our
            Services. Some online tracking technologies help us maintain the
            security of our Services and your account, prevent crashes, fix
            bugs, save your preferences, and assist with basic site functions.
          </p>

          <p>
            We also permit third parties and service providers to use online
            tracking technologies on our Services for analytics and advertising,
            including to help manage and display advertisements, to tailor
            advertisements to your interests, or to send abandoned shopping cart
            reminders (depending on your communication preferences). The third
            parties and service providers use their technology to provide
            advertising about products and services tailored to your interests
            which may appear either on our Services or on other websites.
          </p>

          <p>
            To the extent these online tracking technologies are deemed to be a
            &quot;sale&quot;/&quot;sharing&quot; (which includes targeted
            advertising, as defined under the applicable laws) under applicable
            US state laws, you can opt out of these online tracking technologies
            by submitting a request as described below under section &quot;
            <a href="#uslaws">
              DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </a>
            &quot;
          </p>

          <p>
            Specific information about how we use such technologies and how you
            can refuse certain cookies is set out in our Cookie Notice.
          </p>

          <h2 id="ai">
            5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
          </h2>

          <p>
            <strong>
              <em>In Short:</em>
            </strong>{" "}
            <em>
              We offer products, features, or tools powered by artificial
              intelligence, machine learning, or similar technologies.
            </em>
          </p>

          <p>
            As part of our Services, we offer products, features, or tools
            powered by artificial intelligence, machine learning, or similar
            technologies (collectively, &quot;AI Products&quot;). These tools
            are designed to enhance your experience and provide you with
            innovative solutions. The terms in this Privacy Notice govern your
            use of the AI Products within our Services.
          </p>

          <h4>Use of AI Technologies</h4>

          <p>
            We provide the AI Products through third-party service providers
            (&quot;AI Service Providers&quot;), including OpenAI. As outlined in
            this Privacy Notice, your input, output, and personal information
            will be shared with and processed by these AI Service Providers to
            enable your use of our AI Products for purposes outlined in &quot;
            <a href="#whoshare">
              WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </a>
            &quot; You must not use the AI Products in any way that violates the
            terms or policies of any AI Service Provider.
          </p>

          <h4>Our AI Products</h4>

          <p>
            Our AI Products are designed for the following functions:
          </p>

          <ul>
            <li>AI translation</li>
          </ul>

          <h4>How We Process Your Data Using AI</h4>

          <p>
            All personal information processed using our AI Products is handled
            in line with our Privacy Notice and our agreement with third
            parties. This ensures high security and safeguards your personal
            information throughout the process, giving you peace of mind about
            your data&apos;s safety.
          </p>

          <h2 id="inforetain">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>

          <p>
            <strong>
              <em>In Short:</em>
            </strong>{" "}
            <em>
              We keep your information for as long as necessary to fulfill the
              purposes outlined in this Privacy Notice unless otherwise required
              by law.
            </em>
          </p>

          <p>
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this Privacy Notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting, or other legal requirements). No purpose in this
            notice will require us keeping your personal information for longer
            than the period of time in which users have an account with us.
          </p>

          <p>
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymize such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
          </p>

          <h2 id="infosafe">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>

          <p>
            <strong>
              <em>In Short:</em>
            </strong>{" "}
            <em>
              We aim to protect your personal information through a system of
              organizational and technical security measures.
            </em>
          </p>

          <p>
            We have implemented appropriate and reasonable technical and
            organizational security measures designed to protect the security of
            any personal information we process. However, despite our safeguards
            and efforts to secure your information, no electronic transmission
            over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that
            hackers, cybercriminals, or other unauthorized third parties will
            not be able to defeat our security and improperly collect, access,
            steal, or modify your information. Although we will do our best to
            protect your personal information, transmission of personal
            information to and from our Services is at your own risk. You should
            only access the Services within a secure environment.
          </p>

          <h2 id="infominors">
            8. DO WE COLLECT INFORMATION FROM MINORS?
          </h2>

          <p>
            <strong>
              <em>In Short:</em>
            </strong>{" "}
            <em>
              We do not knowingly collect data from or market to children under
              18 years of age.
            </em>
          </p>

          <p>
            We do not knowingly collect, solicit data from, or market to
            children under 18 years of age, nor do we knowingly sell such
            personal information. By using the Services, you represent that you
            are at least 18 or that you are the parent or guardian of such a
            minor and consent to such minor dependent&apos;s use of the
            Services. If we learn that personal information from users less than
            18 years of age has been collected, we will deactivate the account
            and take reasonable measures to promptly delete such data from our
            records. If you become aware of any data we may have collected from
            children under age 18, please contact us at{" "}
            <a href="mailto:christian@homecloserai.com">
              christian@homecloserai.com
            </a>
            .
          </p>

          <h2 id="privacyrights">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>

          <p>
            <strong>
              <em>In Short:</em>
            </strong>{" "}
            <em>
              You may review, change, or terminate your account at any time,
              depending on your country, province, or state of residence.
            </em>
          </p>

          <p>
            <strong>
              <u>Withdrawing your consent:</u>
            </strong>{" "}
            If we are relying on your consent to process your personal
            information, which may be express and/or implied consent depending
            on the applicable law, you have the right to withdraw your consent
            at any time. You can withdraw your consent at any time by contacting
            us by using the contact details provided in the section &quot;
            <a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
            &quot; below.
          </p>

          <p>
            However, please note that this will not affect the lawfulness of the
            processing before its withdrawal nor, when applicable law allows,
            will it affect the processing of your personal information conducted
            in reliance on lawful processing grounds other than consent.
          </p>

          <h3>Account Information</h3>

          <p>
            If you would at any time like to review or change the information in
            your account or terminate your account, you can:
          </p>

          <ul>
            <li>
              Log in to your account settings and update your user account.
            </li>
          </ul>

          <p>
            Upon your request to terminate your account, we will deactivate or
            delete your account and information from our active databases.
            However, we may retain some information in our files to prevent
            fraud, troubleshoot problems, assist with any investigations,
            enforce our legal terms and/or comply with applicable legal
            requirements.
          </p>

          <p>
            <strong>
              <u>Cookies and similar technologies:</u>
            </strong>{" "}
            Most Web browsers are set to accept cookies by default. If you
            prefer, you can usually choose to set your browser to remove cookies
            and to reject cookies. If you choose to remove cookies or reject
            cookies, this could affect certain features or services of our
            Services.
          </p>

          <p>
            If you have questions or comments about your privacy rights, you may
            email us at{" "}
            <a href="mailto:christian@homecloserai.com">
              christian@homecloserai.com
            </a>
            .
          </p>

          <h2 id="DNT">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>

          <p>
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track (&quot;DNT&quot;) feature or
            setting you can activate to signal your privacy preference not to
            have data about your online browsing activities monitored and
            collected. At this stage, no uniform technology standard for
            recognizing and implementing DNT signals has been finalized. As
            such, we do not currently respond to DNT browser signals or any
            other mechanism that automatically communicates your choice not to
            be tracked online. If a standard for online tracking is adopted that
            we must follow in the future, we will inform you about that practice
            in a revised version of this Privacy Notice.
          </p>

          <p>
            California law requires us to let you know how we respond to web
            browser DNT signals. Because there currently is not an industry or
            legal standard for recognizing or honoring DNT signals, we do not
            respond to them at this time.
          </p>

          <h2 id="uslaws">
            11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </h2>

          <p>
            <strong>
              <em>In Short:</em>
            </strong>{" "}
            <em>
              If you are a resident of California, Colorado, Connecticut,
              Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota,
              Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode
              Island, Tennessee, Texas, Utah, or Virginia, you may have the
              right to request access to and receive details about the personal
              information we maintain about you and how we have processed it,
              correct inaccuracies, get a copy of, or delete your personal
              information. You may also have the right to withdraw your consent
              to our processing of your personal information. These rights may
              be limited in some circumstances by applicable law. More
              information is provided below.
            </em>
          </p>

          <h3>Categories of Personal Information We Collect</h3>

          <p>
            The table below shows the categories of personal information we have
            collected in the past twelve (12) months.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                    Category
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                    Examples
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                    Collected
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    A. Identifiers
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Contact details, such as real name, alias, postal address,
                    telephone or mobile contact number, unique personal
                    identifier, online identifier, Internet Protocol address,
                    email address, and account name
                  </td>
                  <td className="border border-gray-300 px-4 py-2">YES</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    B. Personal information (California Customer Records)
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Name, contact information, education, employment, employment
                    history, and financial information
                  </td>
                  <td className="border border-gray-300 px-4 py-2">YES</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    C. Protected classification characteristics
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Gender, age, date of birth, race and ethnicity, national
                    origin, marital status, and other demographic data
                  </td>
                  <td className="border border-gray-300 px-4 py-2">NO</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    D. Commercial information
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Transaction information, purchase history, financial
                    details, and payment information
                  </td>
                  <td className="border border-gray-300 px-4 py-2">YES</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    E. Biometric information
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Fingerprints and voiceprints
                  </td>
                  <td className="border border-gray-300 px-4 py-2">YES</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    F. Internet or other similar network activity
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Browsing history, search history, online behavior, interest
                    data, and interactions with our and other websites,
                    applications, systems, and advertisements
                  </td>
                  <td className="border border-gray-300 px-4 py-2">YES</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    G. Geolocation data
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Device location
                  </td>
                  <td className="border border-gray-300 px-4 py-2">YES</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    H. Audio, electronic, sensory, or similar information
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Images and audio, video or call recordings created in
                    connection with our business activities
                  </td>
                  <td className="border border-gray-300 px-4 py-2">YES</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    I. Professional or employment-related information
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Business contact details in order to provide you our
                    Services at a business level or job title, work history, and
                    professional qualifications
                  </td>
                  <td className="border border-gray-300 px-4 py-2">YES</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    J. Education Information
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Student records and directory information
                  </td>
                  <td className="border border-gray-300 px-4 py-2">YES</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    K. Inferences drawn from collected personal information
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Inferences drawn from any of the collected personal
                    information listed above to create a profile or summary
                    about, for example, an individual&apos;s preferences and
                    characteristics
                  </td>
                  <td className="border border-gray-300 px-4 py-2">NO</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    L. Sensitive personal Information
                  </td>
                  <td className="border border-gray-300 px-4 py-2"></td>
                  <td className="border border-gray-300 px-4 py-2">NO</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            We will use and retain the collected personal information as needed
            to provide the Services or for as long as the user has an account
            with us.
          </p>

          <h3>Your Rights</h3>

          <p>
            You have rights under certain US state data protection laws.
            However, these rights are not absolute, and in certain cases, we may
            decline your request as permitted by law. These rights include:
          </p>

          <ul>
            <li>
              <strong>Right to know</strong> whether or not we are processing
              your personal data
            </li>
            <li>
              <strong>Right to access</strong> your personal data
            </li>
            <li>
              <strong>Right to correct</strong> inaccuracies in your personal
              data
            </li>
            <li>
              <strong>Right to request</strong> the deletion of your personal
              data
            </li>
            <li>
              <strong>Right to obtain a copy</strong> of the personal data you
              previously shared with us
            </li>
            <li>
              <strong>Right to non-discrimination</strong> for exercising your
              rights
            </li>
            <li>
              <strong>Right to opt out</strong> of the processing of your
              personal data if it is used for targeted advertising (or sharing
              as defined under California&apos;s privacy law), the sale of
              personal data, or profiling in furtherance of decisions that
              produce legal or similarly significant effects
              (&quot;profiling&quot;)
            </li>
          </ul>

          <h3>How to Exercise Your Rights</h3>

          <p>
            To exercise these rights, you can contact us by submitting a{" "}
            <a
              href="https://app.termly.io/dsar/d6b2f00c-3a33-4ea2-bccc-da749a942bb1"
              target="_blank"
              rel="noopener noreferrer"
            >
              data subject access request
            </a>
            , by emailing us at{" "}
            <a href="mailto:Christian@homecloserai.com">
              Christian@homecloserai.com
            </a>
            , or by referring to the contact details at the bottom of this
            document.
          </p>

          <h3>Request Verification</h3>

          <p>
            Upon receiving your request, we will need to verify your identity to
            determine you are the same person about whom we have the information
            in our system. We will only use personal information provided in
            your request to verify your identity or authority to make the
            request. However, if we cannot verify your identity from the
            information already maintained by us, we may request that you
            provide additional information for the purposes of verifying your
            identity and for security or fraud-prevention purposes.
          </p>

          <p>
            If you submit the request through an authorized agent, we may need
            to collect additional information to verify your identity before
            processing your request and the agent will need to provide a written
            and signed permission from you to submit such request on your
            behalf.
          </p>

          <h3>Appeals</h3>

          <p>
            Under certain US state data protection laws, if we decline to take
            action regarding your request, you may appeal our decision by
            emailing us at{" "}
            <a href="mailto:christian@homecloserai.com">
              christian@homecloserai.com
            </a>
            . We will inform you in writing of any action taken or not taken in
            response to the appeal, including a written explanation of the
            reasons for the decisions. If your appeal is denied, you may submit
            a complaint to your state attorney general.
          </p>

          <h3>
            California &quot;Shine The Light&quot; Law
          </h3>

          <p>
            California Civil Code Section 1798.83, also known as the &quot;Shine
            The Light&quot; law, permits our users who are California residents
            to request and obtain from us, once a year and free of charge,
            information about categories of personal information (if any) we
            disclosed to third parties for direct marketing purposes and the
            names and addresses of all third parties with which we shared
            personal information in the immediately preceding calendar year. If
            you are a California resident and would like to make such a request,
            please submit your request in writing to us by using the contact
            details provided in the section &quot;
            <a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
            &quot;
          </p>

          <h2 id="policyupdates">12. DO WE MAKE UPDATES TO THIS NOTICE?</h2>

          <p>
            <strong>
              <em>In Short:</em>
            </strong>{" "}
            <em>
              Yes, we will update this notice as necessary to stay compliant
              with relevant laws.
            </em>
          </p>

          <p>
            We may update this Privacy Notice from time to time. The updated
            version will be indicated by an updated &quot;Revised&quot; date at
            the top of this Privacy Notice. If we make material changes to this
            Privacy Notice, we may notify you either by prominently posting a
            notice of such changes or by directly sending you a notification. We
            encourage you to review this Privacy Notice frequently to be
            informed of how we are protecting your information.
          </p>

          <h2 id="contact">
            13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </h2>

          <p>
            If you have questions or comments about this notice, you may email
            us at{" "}
            <a href="mailto:christian@homecloserai.com">
              christian@homecloserai.com
            </a>{" "}
            or contact us by post at:
          </p>

          <p>
            HomeCloser AI
            <br />
            345 E Woolbright Rd
            <br />
            Boynton Beach, FL 33435
            <br />
            United States
          </p>

          <h2 id="request">
            14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </h2>

          <p>
            Based on the applicable laws of your country or state of residence
            in the US, you may have the right to request access to the personal
            information we collect from you, details about how we have processed
            it, correct inaccuracies, or delete your personal information. You
            may also have the right to withdraw your consent to our processing
            of your personal information. These rights may be limited in some
            circumstances by applicable law. To request to review, update, or
            delete your personal information, please fill out and submit a{" "}
            <a
              href="https://app.termly.io/dsar/d6b2f00c-3a33-4ea2-bccc-da749a942bb1"
              target="_blank"
              rel="noopener noreferrer"
            >
              data subject access request
            </a>
            .
          </p>

          <hr className="my-8" />

          <p className="text-sm text-gray-500">
            This Privacy Policy was created using Termly&apos;s{" "}
            <a
              href="https://termly.io/products/privacy-policy-generator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy Generator
            </a>
            .
          </p>
        </article>
      </main>
    </>
  );
}
