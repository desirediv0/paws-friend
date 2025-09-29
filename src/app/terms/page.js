import React from 'react'

const Terms = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-24 px-2 sm:px-4 lg:px-8">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-lg p-5">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
                        <p className="text-sm text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>
                    </div>

                    {/* Introduction */}
                    <div className="prose max-w-none text-gray-700 space-y-6">
                        <p className="text-lg leading-relaxed">
                            Please read the terms of service (&quot;Terms&quot;) carefully before using our website and services.
                            This website <strong>pawsfriend.in</strong> (&quot;Platform&quot;) is owned and operated by
                            <strong> Paws Friend</strong> (&quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;), a pet care service provider
                            having its registered office at 314, Sec 23, Gurgaon, Haryana 122017.
                        </p>

                        <p>
                            These Terms of Service (&quot;Terms&quot;) govern your access to or use of the Platform and the Services
                            made available on the Platform. By accessing the Platform or using the Service, you (&quot;User&quot;, &quot;You&quot;, &quot;Your&quot;)
                            agree to be bound by these Terms.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                            <p className="text-blue-800 font-medium">
                                Unless you notify us in writing of your intention to opt out from further marketing communications,
                                you agree to continue receiving emails, calls and messages for our pet care services.
                            </p>
                        </div>

                        <p>
                            The Company provides pet care services including: veterinary care, pet grooming, lab testing,
                            pet training, emergency care, vaccinations, and related pet care products (&quot;Services&quot;).
                        </p>

                        {/* Section 1: Eligibility and Access */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Eligibility and Access</h2>
                            <div className="space-y-4">
                                <p>
                                    The Service is not available to persons under the age of 18 years or to any User suspended
                                    or removed from the Platform. You represent that you are of legal age to form a binding contract
                                    and are not barred from using the Platform under applicable laws of India.
                                </p>
                                <p>
                                    The Services are always evolving and may change from time to time. The Company may stop providing
                                    the Service (or any features) temporarily or permanently and may not be able to provide prior notice.
                                </p>
                            </div>
                        </div>

                        {/* Section 2: Account Access */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Access and Use of Service</h2>
                            <div className="space-y-4">
                                <p>
                                    To use the Service, you must create an account by providing your credentials, such as your name,
                                    email address and other required details (&quot;Account&quot;).
                                </p>
                                <p>
                                    You shall ensure that the Account information provided is complete, accurate and up-to-date.
                                    If there are any changes, update your Account information promptly or contact us at
                                    <span className="text-blue-600 font-medium"> connect@pawsfriend.in</span>.
                                </p>
                                <p>
                                    You are responsible for maintaining the confidentiality of your Account information and for all
                                    activities that occur in connection with your Account. You must notify us immediately of any
                                    unauthorized access.
                                </p>
                            </div>
                        </div>

                        {/* Section 3: Services */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Pet Care Services</h2>
                            <div className="space-y-4">
                                <p>The Company provides the following services:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Veterinary care and consultation</li>
                                    <li>Pet grooming services</li>
                                    <li>Laboratory testing for pets</li>
                                    <li>Pet training programs</li>
                                    <li>Emergency pet care (24/7)</li>
                                    <li>Pet vaccinations</li>
                                    <li>Pet care products and accessories</li>
                                </ul>
                                <p>
                                    All veterinary services are provided by registered medical practitioners.
                                    By placing an order, you make an offer to the Company. We reserve the right to accept,
                                    decline, or limit orders at our discretion.
                                </p>
                            </div>
                        </div>

                        {/* Section 4: Acceptable Use */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
                            <div className="space-y-4">
                                <p>You agree not to:</p>
                                <ul className="list-disc pl-6 space-y-2 text-sm">
                                    <li>Upload or share content that is illegal, harmful, abusive, threatening, or objectionable</li>
                                    <li>Violate any law, regulation, or court order</li>
                                    <li>Infringe on intellectual property rights of others</li>
                                    <li>Engage in fraudulent or illegal activities</li>
                                    <li>Attempt to harm or disrupt the Platform or other users</li>
                                    <li>Use automated means to access or collect data from the Platform</li>
                                </ul>
                            </div>
                        </div>



                        {/* Section 6: Contact Information */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact Information</h2>
                            <div className="bg-gray-50 rounded-lg p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2">General Contact:</h3>
                                        <p className="text-gray-600">Email: connect@pawsfriend.in</p>
                                        <p className="text-gray-600">Phone: +91 8800682777</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2">Emergency:</h3>
                                        <p className="text-gray-600">24/7 Emergency: +91 9112561322</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h3 className="font-semibold text-gray-800 mb-2">Address:</h3>
                                    <p className="text-gray-600">314, Sec 23, Gurgaon, Haryana 122017</p>
                                </div>
                                <div className="mt-4">
                                    <h3 className="font-semibold text-gray-800 mb-2">Business Hours:</h3>
                                    <p className="text-gray-600">Mon-Fri: 8AM-8PM | Sat-Sun: 9AM-6PM | Emergency: 24/7</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 6: Privacy */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacy</h2>
                            <p>
                                Your privacy is important to us. Our Privacy Policy explains how we collect, use, handle and
                                share personal information. Please refer to our Privacy Policy available on our website.
                            </p>
                        </div>

                        {/* Section 7: Communications */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Communications</h2>
                            <p>
                                You expressly agree to receive communications via SMS, WhatsApp and/or emails from us relating
                                to our pet care services. You can opt-out anytime, except for essential service communications.
                            </p>
                            <p className="mt-2">
                                By using our website, you authorize us to contact you via email, phone, SMS or WhatsApp to
                                offer our services and provide product information, even if registered under DND/DNC/NCPR services.
                            </p>
                        </div>

                        {/* Section 8: Liability Limitations */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimers and Liability Limitations</h2>
                            <div className="space-y-4">
                                <p>
                                    You acknowledge that your use of the Platform is at your own risk and that the Platform
                                    is provided on an &quot;as is&quot; and &quot;as available&quot; basis.
                                </p>
                                <p>
                                    We make no representations about the accuracy or completeness of content available on the Platform.
                                    We do not warrant the effectiveness, quality or safety of services available on the Platform.
                                </p>
                                <p className="text-sm text-gray-600">
                                    Our total liability to you will be limited to the amount paid by you for services on
                                    the Platform during the period immediately preceding the date of the claim.
                                </p>
                            </div>
                        </div>

                        {/* Section 9: Termination */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
                            <p>
                                You may cancel your Account by writing to us at connect@pawsfriend.in. We reserve the right
                                to terminate your Account or block access to the Platform at any time for any reason.
                            </p>
                        </div>

                        {/* Section 10: Governing Law */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law and Jurisdiction</h2>
                            <p>
                                These Terms are governed by the laws of India. Any disputes shall be subject to the
                                exclusive jurisdiction of courts at Gurgaon, Haryana, India.
                            </p>
                        </div>

                        {/* Section 11: Changes to Terms */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
                            <p>
                                We may revise these Terms at any time. Updated Terms will be posted on the Platform with
                                an updated &quot;Last Updated&quot; date. Your continued use signifies acceptance of the revised Terms.
                            </p>
                        </div>

                        {/* Section 12: Grievance Redressal */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Grievance Redressal</h2>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <p className="text-blue-800 mb-4">
                                    For any complaints arising from the access or usage of the Platform, contact us at:
                                </p>
                                <div className="text-blue-700">
                                    <p><strong>Email:</strong> connect@pawsfriend.in</p>
                                    <p><strong>Phone:</strong> +91 8800682777</p>
                                    <p><strong>Emergency:</strong> +91 9112561322</p>
                                    <p><strong>Address:</strong> 314, Sec 23, Gurgaon, Haryana 122017</p>
                                </div>
                                <p className="text-blue-600 text-sm mt-4">
                                    We will acknowledge complaints within 24 hours and resolve them within 15 days.
                                </p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="bg-gray-900 text-white rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-4">Contact Paws Friend</h3>
                                <div className="grid md:grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <p className="font-medium">Website:</p>
                                        <p className="text-gray-300">www.pawsfriend.in</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Email:</p>
                                        <p className="text-gray-300">connect@pawsfriend.in</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Phone:</p>
                                        <p className="text-gray-300">+91 8800682777</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-xs mt-4">
                                    Professional pet care services at your doorstep. Licensed • Insured • 5-Star Service
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms