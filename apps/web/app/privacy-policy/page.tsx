import { Separator } from "@/components/ui/seperator";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last Updated: April 10, 2023</p>

      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          At Gemstone Marketplace, we respect your privacy and are committed to
          protecting your personal data. This privacy policy will inform you
          about how we look after your personal data when you visit our website
          and tell you about your privacy rights and how the law protects you.
        </p>
        <p className="mb-6">
          This privacy policy aims to give you information on how Gemstone
          Marketplace collects and processes your personal data through your use
          of this website, including any data you may provide through this
          website when you sign up for an account, purchase a product, or take
          part in a promotion.
        </p>

        <Separator className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">
          The Data We Collect About You
        </h2>
        <p className="mb-4">
          Personal data, or personal information, means any information about an
          individual from which that person can be identified. It does not
          include data where the identity has been removed (anonymous data).
        </p>
        <p className="mb-4">
          We may collect, use, store and transfer different kinds of personal
          data about you which we have grouped together as follows:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>Identity Data</strong> includes first name, last name,
            username or similar identifier, title, date of birth, and gender.
          </li>
          <li className="mb-2">
            <strong>Contact Data</strong> includes billing address, delivery
            address, email address, and telephone numbers.
          </li>
          <li className="mb-2">
            <strong>Financial Data</strong> includes payment card details.
          </li>
          <li className="mb-2">
            <strong>Transaction Data</strong> includes details about payments to
            and from you and other details of products you have purchased from
            us.
          </li>
          <li className="mb-2">
            <strong>Technical Data</strong> includes internet protocol (IP)
            address, your login data, browser type and version, time zone
            setting and location, browser plug-in types and versions, operating
            system and platform, and other technology on the devices you use to
            access this website.
          </li>
          <li className="mb-2">
            <strong>Profile Data</strong> includes your username and password,
            purchases or orders made by you, your interests, preferences,
            feedback, and survey responses.
          </li>
          <li className="mb-2">
            <strong>Usage Data</strong> includes information about how you use
            our website and services.
          </li>
          <li className="mb-2">
            <strong>Marketing and Communications Data</strong> includes your
            preferences in receiving marketing from us and our third parties and
            your communication preferences.
          </li>
        </ul>

        <Separator className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">
          How We Use Your Personal Data
        </h2>
        <p className="mb-4">
          We will only use your personal data when the law allows us to. Most
          commonly, we will use your personal data in the following
          circumstances:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            Where we need to perform the contract we are about to enter into or
            have entered into with you.
          </li>
          <li className="mb-2">
            Where it is necessary for our legitimate interests (or those of a
            third party) and your interests and fundamental rights do not
            override those interests.
          </li>
          <li className="mb-2">
            Where we need to comply with a legal obligation.
          </li>
        </ul>
        <p className="mb-6">
          Generally, we do not rely on consent as a legal basis for processing
          your personal data although we will get your consent before sending
          third party direct marketing communications to you via email or text
          message. You have the right to withdraw consent to marketing at any
          time by contacting us.
        </p>

        <Separator className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p className="mb-4">
          We have put in place appropriate security measures to prevent your
          personal data from being accidentally lost, used, or accessed in an
          unauthorized way, altered, or disclosed. In addition, we limit access
          to your personal data to those employees, agents, contractors, and
          other third parties who have a business need to know. They will only
          process your personal data on our instructions, and they are subject
          to a duty of confidentiality.
        </p>
        <p className="mb-6">
          We have put in place procedures to deal with any suspected personal
          data breach and will notify you and any applicable regulator of a
          breach where we are legally required to do so.
        </p>

        <Separator className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">Your Legal Rights</h2>
        <p className="mb-4">
          Under certain circumstances, you have rights under data protection
          laws in relation to your personal data, including the right to:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Request access to your personal data.</li>
          <li className="mb-2">Request correction of your personal data.</li>
          <li className="mb-2">Request erasure of your personal data.</li>
          <li className="mb-2">Object to processing of your personal data.</li>
          <li className="mb-2">
            Request restriction of processing your personal data.
          </li>
          <li className="mb-2">Request transfer of your personal data.</li>
          <li className="mb-2">Right to withdraw consent.</li>
        </ul>
        <p className="mb-6">
          If you wish to exercise any of the rights set out above, please
          contact us.
        </p>

        <Separator className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this privacy policy or our privacy
          practices, please contact us at:
        </p>
        <div className="mb-6">
          <p>Gemstone Marketplace</p>
          <p>123 Gemstone Avenue</p>
          <p>New York, NY 10001</p>
          <p>United States</p>
          <p>Email: privacy@gemstonemarketplace.com</p>
        </div>
      </div>
    </div>
  );
}
