import { Separator } from "@/components/ui/separator"

export default function TermsOfUse() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-12">
            <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-balance">
                        Board&Benchers Terms of Service
                    </h1>
                </div>

                <Separator />

                {/* Introduction */}
                <div className="space-y-6">
                    <p className="text-xl text-muted-foreground leading-7">
                        Welcome to Board&Benchers Terms of Service. For purposes of this agreement:
                    </p>

                    <ul className="space-y-3 text-sm leading-7">
                        <li className="flex gap-2">
                            <span className="font-semibold min-w-fit">"Site"</span>
                            <span>
                                refers to our website, accessible at{" "}
                                <a
                                    href="https://www.boardandbenchers.com"
                                    className="font-medium text-primary hover:no-underline"
                                >
                                    www.boardandbenchers.com
                                </a>
                                .
                            </span>
                        </li>
                        <li className="flex gap-2">
                            <span className="font-semibold min-w-fit">"Product"</span>
                            <span>
                                refers to our educational technology software, platforms, tools, and related materials provided to users
                                via the Site or other distribution methods.
                            </span>
                        </li>
                        <li className="flex gap-2">
                            <span className="font-semibold min-w-fit">"We," "us,"</span>
                            <span>
                                and <strong>"our"</strong> refer to Board&Benchers.
                            </span>
                        </li>
                        <li className="flex gap-2">
                            <span className="font-semibold min-w-fit">"You"</span>
                            <span>refers to you, as a user of our Site or Product.</span>
                        </li>
                    </ul>

                    <p className="leading-7">
                        The following Terms of Use apply when you access or use our Product via our website or authorized platforms.
                    </p>

                    <p className="leading-7">
                        Please review these terms carefully. By accessing or using the Product, you agree to these Terms of Use. If
                        you do not agree, you may not use the Product.
                    </p>
                </div>

                {/* Privacy Policy Section */}
                <div className="space-y-4">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight uppercase">Privacy Policy</h2>
                    <p className="leading-7">
                        We respect your privacy. Our <span className="text-muted-font-medium text-primary hover:no-underline"><a href="/privacy">Privacy Policy</a></span>{" "}
                        explains how we collect, use, and disclose your information. By using the Product, you agree to our Privacy
                        Policy and these Terms.
                    </p>
                </div>

                {/* Intellectual Property Section */}
                <div className="space-y-4">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight uppercase">
                        Intellectual Property
                    </h2>
                    <p className="leading-7">
                        You acknowledge that we (and our licensors) retain all rights, title, and interest in the Product, including
                        copyrights, trademarks, patents, and trade secrets. Third-party names or logos mentioned are property of
                        their respective owners. Unauthorized use is prohibited.
                    </p>
                </div>

                {/* Email Communications Section */}
                <div className="space-y-6">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight uppercase">
                        Email Communications
                    </h2>

                    <div className="space-y-4">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Legal Notice</h3>
                        <p className="leading-7">
                            Communications via our Product's email/messaging system do not constitute legal notice to Board&Benchers
                            or its representatives.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Consent to Electronic Communications</h3>
                        <p className="leading-7">For contractual purposes, you:</p>
                        <ol className="list-decimal list-inside space-y-2 leading-7 ml-4">
                            <li>
                                Consent to receive communications (e.g., updates, policies) electronically via your provided email.
                            </li>
                            <li>Agree that electronic notices satisfy legal requirements for written communication.</li>
                        </ol>
                        <p className="leading-7">
                            We may also send promotional emails. You can opt out via account settings, the "Unsubscribe" link, or by
                            emailing <span className="text-muted-foreground">[contanct@boardandbenchers.com]</span>. Opting out may
                            limit Product-related updates.
                        </p>
                    </div>
                </div>

                {/* Warranty Disclaimer Section */}
                <div className="space-y-4">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight uppercase">
                        Warranty Disclaimer
                    </h2>
                    <blockquote className="border-l-2 pl-6 italic bg-muted/50 p-4 rounded-r-lg">
                        <p className="leading-7 font-medium">
                            THE PRODUCT IS PROVIDED "AS IS" TO THE FULLEST EXTENT PERMITTED BY LAW. WE DISCLAIM ALL WARRANTIES
                            (EXPRESS, IMPLIED, OR STATUTORY), INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY,
                            AND NON-INFRINGEMENT. WE DO NOT GUARANTEE UNINTERRUPTED, ERROR-FREE, OR SECURE OPERATION. YOU USE THE
                            PRODUCT AT YOUR OWN RISK.
                        </p>
                    </blockquote>
                    <p className="text-sm text-muted-foreground leading-7">
                        (Some jurisdictions limit warranty disclaimers; this section may not apply to you.)
                    </p>
                </div>

                {/* Limitation of Liability Section */}
                <div className="space-y-4">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight uppercase">
                        Limitation of Liability
                    </h2>
                    <p className="leading-7 font-medium uppercase">
                        TO THE EXTENT PERMITTED BY LAW, WE (INCLUDING AFFILIATES, EMPLOYEES, OR PARTNERS) ARE NOT LIABLE FOR:
                    </p>
                    <ul className="list-disc list-inside space-y-2 leading-7 ml-4 uppercase font-medium">
                        <li>LOST PROFITS, DATA, OR USE;</li>
                        <li>INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES;</li>
                        <li>ISSUES ARISING FROM YOUR USE OF THE PRODUCT OR INTERACTIONS WITH OTHER USERS.</li>
                    </ul>
                    <p className="text-sm text-muted-foreground leading-7">
                        (Some jurisdictions limit liability disclaimers; this section may not apply.)
                    </p>
                </div>

                {/* Modification of Terms Section */}
                <div className="space-y-4">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight uppercase">
                        Modification of Terms
                    </h2>
                    <p className="leading-7">
                        We may update these Terms periodically. Check the Site for changes. Continued use signifies acceptance. We
                        may notify you of material changes via email or Site notices. No waiver/modification is valid unless in
                        writing and signed by our authorized representative.
                    </p>
                </div>

                {/* General Terms Section */}
                <div className="space-y-4">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight uppercase">General Terms</h2>
                    <ul className="space-y-3 leading-7">
                        <li>
                            <strong>Severability:</strong> If any term is invalid, the rest remain enforceable.
                        </li>
                        <li>
                            <strong>Waiver:</strong> Our failure to enforce a term is not a waiver.
                        </li>
                        <li>
                            <strong>Governing Law:</strong> Governed by the laws of [India/State], without regard to conflict of law
                            principles.
                        </li>
                        <li>
                            <strong>Assignment:</strong> We may transfer rights under these Terms; you may not without our written
                            consent.
                        </li>
                        <li>
                            <strong>Legal Claims:</strong> Any claim must be filed within SIX months of its cause.
                        </li>
                    </ul>
                </div>

                {/* Acceptance Section */}
                <div className="space-y-4">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight uppercase">Acceptance</h2>
                    <p className="leading-7">
                        By using the Product, you confirm you've read, understood, and agreed to these Terms and our Privacy Policy.
                        These Terms supersede all prior agreements.
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
