import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Home, Search, Sparkles, BookOpen } from "lucide-react";

const quickLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/names", label: "Browse Names", icon: Search },
  { to: "/generator", label: "Name Generator", icon: Sparkles },
  { to: "/discover", label: "Discover", icon: BookOpen },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <Helmet>
        <title>Page Not Found (404) | MuslimName.me</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center max-w-xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-muted text-muted-foreground"
          >
            <span className="font-display text-4xl font-bold">404</span>
          </motion.div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Page not found
          </h1>
          <p className="text-muted-foreground mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-md mb-10">
            {quickLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
              >
                <Link
                  to={link.to}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-card hover:bg-muted/50 hover:border-primary/30 hover:shadow-md transition-all duration-200 group"
                >
                  <link.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{link.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            <Home className="h-4 w-4" />
            Return to Home
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NotFound;
