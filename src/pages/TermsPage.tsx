import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: February 2026</p>

          <div className="prose prose-sm max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="font-display text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using MuslimName.me ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-2">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                MuslimName.me is a free, open-source platform that helps Muslim converts discover meaningful Islamic names. The Service provides name suggestions, educational content about Islamic naming traditions, and general guidance on the legal name change process. The Service is provided "as is" and is intended for informational and educational purposes only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-2">3. No Legal Advice</h2>
              <p className="text-muted-foreground leading-relaxed">
                The legal name change information provided on this platform is for general informational purposes only and does not constitute legal advice. Laws and procedures vary by jurisdiction and change over time. We strongly recommend consulting with a qualified legal professional in your jurisdiction before initiating any legal name change process.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-2">4. Religious Content Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to provide accurate Islamic information sourced from authentic references (Quran, Sahih hadith collections), this platform does not replace consultation with qualified Islamic scholars. Name meanings, Quranic references, and hadith citations are provided for educational purposes. We encourage users to verify information with local scholars and imams.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-2">5. Open Source</h2>
              <p className="text-muted-foreground leading-relaxed">
                MuslimName.me is open-source software. The source code is available on GitHub at github.com/codingshot/muslimname. Contributions are welcome under the project's license terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-2">6. User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to use the Service respectfully and in accordance with its intended purpose. You may not use the Service to spread misinformation, engage in harassment, or for any unlawful purpose.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-2">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                MuslimName.me and its contributors shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Service. This includes any errors in name meanings, legal guidance, or religious references.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-2">8. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Continued use of the Service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-2">9. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms, please open an issue on our GitHub repository or reach out via X (Twitter) at @ummahbuild.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
