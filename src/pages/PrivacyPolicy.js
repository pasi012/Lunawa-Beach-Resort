import React, { useEffect } from "react";
import aboutHero from "../assets/hero.jpg";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[40vh] w-full">
                <img
                    src={aboutHero}
                    alt="Lunawa Beach Resort Privacy Policy"
                    className="absolute inset-0 w-full h-full object-fixed"
                />
                <div className="absolute inset-0 bg-black/60" />
                
            </section>

            {/* ================= CONTENT ================= */}
            <div className="max-w-5xl mx-auto px-4 py-14">

                <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
                    PRIVACY POLICY
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                    At <strong>Lunawa Beach Resort</strong>, we are committed to protecting the
                    privacy and security of our guests’ personal information. This Privacy
                    Policy explains how we collect, use, and safeguard your information when
                    you visit our website, contact us, or make a reservation. By using our
                    website or services, you agree to the practices described in this policy.
                </p>

                {/* 1 */}
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                        1. Information We Collect
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        When you visit our website, make an inquiry, or book a stay with us,
                        we may collect personal information such as your name, email address,
                        phone number, and booking-related information. We may also collect
                        non-personal information such as IP address, browser type, device
                        information, and website usage data through cookies.
                    </p>
                </div>

                {/* 2 */}
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                        2. Use of Information
                    </h3>
                    <ul className="list-disc list-inside text-lg text-gray-600 space-y-3">
                        <li>Respond to inquiries and reservation requests</li>
                        <li>Manage and confirm bookings</li>
                        <li>Communicate booking confirmations and stay-related details</li>
                        <li>Improve our services and guest experience</li>
                        <li>Maintain website functionality and security</li>
                        <li>Prevent fraud or unauthorized activities</li>
                    </ul>
                </div>

                {/* 3 */}
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                        3. Information Sharing
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Lunawa Beach Resort does not sell, rent, or trade your personal
                        information to third parties without your consent, except as described
                        in this policy.
                    </p>
                </div>

                {/* 4 */}
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                        4. Trusted Service Providers
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We may share your information with trusted third-party service providers
                        such as booking platforms or IT service providers who assist us in
                        operating our business. These providers are required to protect your
                        information and use it only for the intended purpose.
                    </p>
                </div>

                {/* 5 */}
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                        5. Legal Requirements
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We may disclose your personal information if required by law or in
                        response to valid legal requests by government or regulatory authorities.
                    </p>
                </div>

                {/* 6 */}
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                        6. Data Security
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We take reasonable and appropriate measures to protect your personal
                        information from unauthorized access, alteration, disclosure, or
                        destruction. While we strive to protect your data, no method of
                        transmission over the internet is 100% secure.
                    </p>
                </div>

                {/* 7 */}
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                        7. Cookies and Tracking Technologies
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Our website may use cookies to enhance user experience, analyze website
                        traffic, and improve our services. You can choose to disable cookies
                        through your browser settings; however, some website features may not
                        function properly.
                    </p>
                </div>

                {/* 8 */}
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                        8. Changes to This Privacy Policy
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Lunawa Beach Resort reserves the right to update this Privacy Policy at
                        any time. Any changes will be posted on this page with an updated
                        revision date.
                    </p>
                </div>

                {/* ================= CONTACT ================= */}
                <div className="mt-14 p-8 bg-white rounded-xl shadow">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                        Contact Us
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">
                        If you have any questions or concerns about this Privacy Policy or how
                        your information is handled, please contact us:
                    </p>

                    <p className="text-lg text-gray-700 mb-2">
                        📧{" "}
                        <a
                            href="mailto:lunawabeachresortmoratuwa@gmail.com"
                            className="text-blue-600 hover:underline"
                        >
                            lunawabeachresortmoratuwa@gmail.com
                        </a>
                    </p>
                    <p className="text-lg text-gray-700">
                        📍 120/1, A Lady soisa drive uyana, Moratuwa, Sri Lanka
                    </p>
                </div>

            </div>
        </div>
    );
};

export default PrivacyPolicy;
