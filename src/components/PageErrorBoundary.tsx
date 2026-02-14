import { Component, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { Button } from "./ui/button";
import { AlertCircle, Home, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Catches errors in a single page so other pages remain usable.
 * Resets when the user navigates to a different route (new instance).
 */
export class PageErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Page failed to load:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Layout>
          <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[50vh] text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
              <AlertCircle className="h-8 w-8" />
            </div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">
              This page could not load
            </h2>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              Something went wrong on this page. You can try again or go somewhere else — the rest of the site works fine.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="outline" asChild>
                <Link to="/" className="inline-flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Go to Home
                </Link>
              </Button>
              <Button onClick={this.handleRetry} className="inline-flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Try again
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/names">Browse Names</Link>
              </Button>
            </div>
          </div>
        </Layout>
      );
    }

    return this.props.children;
  }
}
