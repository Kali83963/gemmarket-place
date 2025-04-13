import { Separator } from "@/components/ui/seperator";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-gray-600 mb-8">Last Updated: April 10, 2023</p>

      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          Welcome to Gemstone Marketplace. These terms and conditions outline
          the rules and regulations for the use of our website.
        </p>
        <p className="mb-6">
          By accessing this website, we assume you accept these terms and
          conditions in full. Do not continue to use Gemstone Marketplace if you
          do not accept all of the terms and conditions stated on this page.
        </p>

        <Separator className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">Definitions</h2>
        <p className="mb-4">
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and any or all Agreements:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>"Client", "You" and "Your"</strong> refers to you, the
            person accessing this website and accepting the Company's terms and
            conditions.
          </li>
          <li className="mb-2">
            <strong>"The Company", "Ourselves", "We", "Our" and "Us"</strong>{" "}
            refers to Gemstone Marketplace.
          </li>
          <li className="mb-2">
            <strong>"Party", "Parties", or "Us"</strong> refers to both the
            Client and ourselves, or either the Client or ourselves.
          </li>
          <li className="mb-2">
            <strong>"Marketplace"</strong> refers to our online platform where
            Sellers can list Gemstones for sale and Buyers can purchase them.
          </li>
          <li className="mb-2">
            <strong>"Seller"</strong> refers to any user who lists Gemstones for
            sale on our Marketplace.
          </li>
          <li className="mb-2">
            <strong>"Buyer"</strong> refers to any user who purchases Gemstones
            from our Marketplace.
          </li>
          <li className="mb-2">
            <strong>"Gemstone"</strong> refers to any precious or semi-precious
            stone listed for sale on our Marketplace.
          </li>
        </ul>

        <Separator className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">Account Registration</h2>
        <p className="mb-4">
          To access certain features of the Marketplace, you may be required to
          register for an account. You agree to provide accurate, current, and
          complete information during the registration process and to update
          such information to keep it accurate, current, and complete.
        </p>
        <p className="mb-4">
          You are responsible for safeguarding your password and for all
          activities that occur under your account. You agree to notify us
          immediately of any unauthorized use of your account.
        </p>
        <p className="mb-6">
          We reserve the right to terminate or suspend your account at any time
          for any reason, including, but not limited to, violation of these
          Terms.
        </p>

        <Separator className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">Marketplace Rules</h2>
        <h3 className="text-xl font-semibold mb-3">For Sellers</h3>
        <p className="mb-4">As a Seller, you agree to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            Provide accurate and complete information about the Gemstones you
            list, including their type, weight, dimensions, color, clarity, cut,
            origin (if known), and any treatments.
          </li>
          <li className="mb-2">
            Upload clear, high-quality photographs of the Gemstones you list.
          </li>
          <li className="mb-2">
            Set fair and reasonable prices for your Gemstones.
          </li>
          <li className="mb-2">
            Ship Gemstones promptly after receiving payment.
          </li>
          <li className="mb-2">
            Respond to inquiries from potential Buyers in a timely manner.
          </li>
          <li className="mb-2">
            Comply with all applicable laws and regulations related to the sale
            of Gemstones.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">For Buyers</h3>
        <p className="mb-4">As a Buyer, you agree to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            Pay for Gemstones you have committed to purchase.
          </li>
          <li className="mb-2">Provide accurate shipping information.</li>
          <li className="mb-2">
            Inspect Gemstones promptly upon receipt and report any issues within
            the specified timeframe.
          </li>
          <li className="mb-2">Communicate respectfully with Sellers.</li>
        </ul>

        <Separator className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">Fees and Payments</h2>
        <p className="mb-4">
          Sellers will be charged a commission on each sale, as specified in our
          Fee Schedule. The commission will be deducted from the sale price
          before the funds are transferred to the Seller.
        </p>
        <p className="mb-4">
          Buyers will pay the listed price of the Gemstone, plus any applicable
          taxes and shipping fees.
        </p>
        <p className="mb-6">
          All payments will be processed through our secure payment system. We
          accept major credit cards, PayPal, and bank transfers.
        </p>

        <Separator className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">Shipping and Returns</h2>
        <p className="mb-4">
          Sellers are responsible for shipping Gemstones to Buyers. All
          Gemstones must be shipped with tracking and insurance.
        </p>
        <p className="mb-4">
          Buyers have 30 days from the date of receipt to return a Gemstone if
          it does not match the description provided by the Seller. The Gemstone
          must be returned in its original condition.
        </p>
        <p className="mb-6">
          If a return is approved, the Buyer will receive a full refund, minus
          shipping costs.
        </p>

        <Separator className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
        <p className="mb-4">
          The content on our website, including text, graphics, logos, images,
          and software, is the property of Gemstone Marketplace or its content
          suppliers and is protected by international copyright laws.
        </p>
        <p className="mb-6">
          You may not reproduce, duplicate, copy, sell, resell, or exploit any
          portion of our website without our express written permission.
        </p>

        <Separator className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
        <p className="mb-4">
          To the fullest extent permitted by applicable law, Gemstone
          Marketplace shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or any loss of profits or
          revenues, whether incurred directly or indirectly, or any loss of
          data, use, goodwill, or other intangible losses, resulting from:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            Your access to or use of or inability to access or use the
            Marketplace.
          </li>
          <li className="mb-2">
            Any conduct or content of any third party on the Marketplace.
          </li>
          <li className="mb-2">Any content obtained from the Marketplace.</li>
          <li className="mb-2">
            Unauthorized access, use, or alteration of your transmissions or
            content.
          </li>
        </ul>

        <Separator className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these terms at any time. If we make
          changes to these terms, we will provide notice of such changes, such
          as by sending an email notification, providing notice through the
          Marketplace, or updating the "Last Updated" date at the beginning of
          these terms.
        </p>
        <p className="mb-6">
          By continuing to access or use the Marketplace after the revisions
          become effective, you agree to be bound by the revised terms.
        </p>

        <Separator className="my-6" />

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us at:
        </p>
        <div className="mb-6">
          <p>Gemstone Marketplace</p>
          <p>123 Gemstone Avenue</p>
          <p>New York, NY 10001</p>
          <p>United States</p>
          <p>Email: terms@gemstonemarketplace.com</p>
        </div>
      </div>
    </div>
  );
}
