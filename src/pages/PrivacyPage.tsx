import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: February 2026</p>

          <div className="prose prose-sm max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="font-display text-xl font-semibold mb-2">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                MuslimName.me is committed to protecting your privacy. This platform is designed to work entirely client-side — your data stays in your browser. We do not collect, store, or transmit personal information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-2">Data We Do NOT Collect</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>Personal names or identity information</li>
                <li>Search queries or name preferences</li>
                <li>Location data or IP addresses (by us)</li>
                <li>Account information (no accounts required)</li>
                <li>Cookies for tracking purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-2">How the Platform Works</h2>
              <p className="text-muted-foreground leading-relaxed">
                All name search, filtering, and generation happens locally in your web browser using a local JSON database. No data is sent to any server for these operations. This is intentional — we understand the sensitivity of the name selection process, especially for converts.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-2">Hosting & Analytics</h2>
              <p className="text-muted-foreground leading-relaxed">
                The website is hosted on Vercel. Standard web server logs (IP addresses, browser type, pages visited) may be collected by the hosting provider as part of normal web operations. We do not use any third-party analytics, tracking pixels, or advertising networks.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-2">Local Storage</h2>
              <p className="text-muted-foreground leading-relaxed">
                The platform may use your browser's local storage to save preferences (such as favorited names). This data is stored only on your device and is never transmitted to us or any third party. You can clear this data at any time through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-2">External Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our platform contains links to external resources (government websites, Islamic reference sites, etc.). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-2">Open Source Transparency</h2>
              <p className="text-muted-foreground leading-relaxed">
                MuslimName.me is fully open-source. You can review our entire codebase at github.com/codingshot/muslimname to verify our privacy practices. We believe transparency is the best privacy policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-2">Changes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any changes to this privacy policy will be reflected on this page and in our GitHub repository.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold mb-2">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related questions, please open an issue on our GitHub repository or contact us via X (Twitter) at @ummahbuild.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
