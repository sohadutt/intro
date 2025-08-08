import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicy() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-12">
            <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-balance">
                        Privacy Policy
                    </h1>
                </div>

                <Separator />

                {/* Introduction */}
                <div className="space-y-6">
                    <p className="text-xl leading-7">
                        Board&Benchers (the "Company") is committed to protecting the privacy of our users. This Privacy Policy
                        explains how we collect, use, and safeguard your information when you interact with our educational
                        technology products.
                    </p>

                    <div className="space-y-4">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Definitions</h3>
                        <ul className="space-y-3 text-sm leading-7">
                            <li className="flex gap-2">
                                <span className="font-semibold min-w-fit">"Site":</span>
                                <span>
                                    Our website at <a
                                        href="https://www.boardandbenchers.com"
                                        className="font-medium text-primary hover:no-underline"
                                    >
                                        www.boardandbenchers.com
                                    </a>.
                                </span>
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold min-w-fit">"Product":</span>
                                <span>Our EdTech software, platforms, tools, and related services.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold min-w-fit">"We," "us," "our":</span>
                                <span>Refers to Board&Benchers.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold min-w-fit">"You":</span>
                                <span>You, as a user of our Site or Product.</span>
                            </li>
                        </ul>
                    </div>

                    <p className="leading-7">
                        By using our Site or Product, you agree to this Privacy Policy and our{" "}
                        <a href="./tos" className="font-medium text-primary hover:no-underline">
                            Terms of Use
                        </a>
                        .
                    </p>
                </div>

                {/* Information We Collect Section */}
                <div className="space-y-6">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight uppercase">
                        I. Information We Collect
                    </h2>
                    <p className="leading-7">
                        We collect Personal Information and Usage Data to provide and improve our Product.
                    </p>

                    <div className="space-y-4">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">1. Personal Information You Provide</h3>
                        <p className="leading-7">When you:</p>
                        <ul className="list-disc list-inside space-y-2 leading-7 ml-4">
                            <li>Create an account</li>
                            <li>Contact us (via forms, email, or support channels)</li>
                            <li>Subscribe to newsletters or updates</li>
                            <li>Participate in surveys or feedback programs</li>
                        </ul>
                        <p className="leading-7">We may collect:</p>
                        <ul className="list-disc list-inside space-y-2 leading-7 ml-4">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number (optional)</li>
                            <li>Institution/School details (if applicable)</li>
                            <li>Payment information (for paid subscriptions)</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">2. Automatically Collected Data</h3>
                        <p className="leading-7">When you use our Product, we may collect:</p>
                        <ul className="list-disc list-inside space-y-2 leading-7 ml-4">
                            <li>Device & Browser Information (IP address, OS, browser type)</li>
                            <li>Usage Data (features accessed, session duration, interactions)</li>
                        </ul>
                        <p className="text-muted-foreground leading-7 mt-4">
                            (For students/minors, we comply with (DPDPA) and similar laws—parental consent may be required.)
                        </p>
                    </div>
                </div>

                {/* How We Use & Share Information Section */}
                <div className="space-y-6">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight uppercase">
                        II. How We Use & Share Information
                    </h2>

                    <div className="space-y-4">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Personal Information</h3>
                        <p className="leading-7">We do not sell your data. We use it to:</p>
                        <ul className="list-disc list-inside space-y-2 leading-7 ml-4">
                            <li>Provide, personalize, and improve the Product.</li>
                            <li>Respond to inquiries and offer customer support.</li>
                            <li>Send administrative emails (updates, security alerts).</li>
                            <li>Send promotional emails (you can unsubscribe anytime).</li>
                            <li>Analyze trends to enhance user experience.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Third-Party Sharing</h3>
                        <p className="leading-7">We may share data with:</p>
                        <ul className="list-disc list-inside space-y-2 leading-7 ml-4">
                            <li>Service Providers (hosting, analytics, payment processors).</li>
                            <li>Educational Institutions (if part of a school/organization plan).</li>
                            <li>Legal Compliance (if required by law or to prevent harm).</li>
                        </ul>
                        <p className="text-muted-foreground leading-7 mt-4">
                            (All third parties must adhere to strict confidentiality agreements.)
                        </p>
                    </div>
                </div>

                {/* Data Protection Section */}
                <div className="space-y-4">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight uppercase">
                        III. Data Protection
                    </h2>
                    <p className="leading-7">We implement security measures, including:</p>
                    <ul className="list-disc list-inside space-y-2 leading-7 ml-4">
                        <li>Encryption (SSL/TLS for data transmission).</li>
                        <li>Access controls (limited to authorized personnel).</li>
                        <li>Regular security audits</li>
                    </ul>
                    <p className="leading-7">However, no system is 100% secure. You should:</p>
                    <ul className="list-disc list-inside space-y-2 leading-7 ml-4">
                        <li>Use strong passwords.</li>
                        <li>Avoid sharing account details.</li>
                    </ul>
                </div>

                {/* Your Rights Section */}
                <div className="space-y-4">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight uppercase">IV. Your Rights</h2>
                    <p className="leading-7">You can:</p>
                    <ul className="list-disc list-inside space-y-2 leading-7 ml-4">
                        <li>Opt out of marketing emails (via "Unsubscribe" link).</li>
                        <li>Request access, correction, or deletion of your data.</li>
                        <li>Disable cookies (via browser settings).</li>
                    </ul>
                    <p className="text-muted-foreground leading-7 mt-4">
                        (Note: Some data may be retained for legal/compliance reasons.)
                    </p>
                </div>

                {/* Changes to This Policy Section */}
                <div className="space-y-4">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight uppercase">
                        V. Changes to This Policy
                    </h2>
                    <p className="leading-7">We may update this policy periodically. Significant changes will be notified via:</p>
                    <ul className="list-disc list-inside space-y-2 leading-7 ml-4">
                        <li>Email (registered users).</li>
                        <li>Site banner/notification</li>
                    </ul>
                    <p className="leading-7">Non-material changes take effect immediately. Check this page for updates.</p>
                </div>

                {/* Contact Us Section */}
                <div className="space-y-4">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight uppercase">VI. Contact Us</h2>
                    <p className="leading-7">
                        For questions or data requests, email:{" "}
                        <a
                            href="mailto:contact@boardandbenchers.com"
                            className="font-medium text-primary hover:no-underline"
                        >
                            contact@boardandbenchers.com
                        </a>
                    </p>
                </div>

                <Separator className="my-8" />

                <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                        <em>Last Updated: 02-08-2025</em>
                    </p>
                </div>
            </div>
        </div>
    )
}
