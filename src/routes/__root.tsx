import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "../lib/theme";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <img
        src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative text-center px-6 max-w-xl">
        <span className="eyebrow">Error 404</span>
        <h1 className="font-serif text-5xl md:text-6xl mt-4">Oops, this property doesn't exist</h1>
        <p className="mt-5 text-muted-foreground">
          The page you were looking for has been moved, sold, or never existed in our portfolio.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-solid">Back to Home</Link>
          <Link to="/properties" className="btn-gold">Browse Properties</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl text-foreground">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or return home.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-solid"
          >
            Try again
          </button>
          <a href="/" className="btn-gold">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Elara Estates — Where Luxury Meets Home" },
      { name: "description", content: "Elara Estates is a private office representing extraordinary residences across Europe, the Americas, and the Middle East." },
      { property: "og:title", content: "Elara Estates — Where Luxury Meets Home" },
      { property: "og:description", content: "Elara Estates is a private office representing extraordinary residences across Europe, the Americas, and the Middle East." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Elara Estates — Where Luxury Meets Home" },
      { name: "twitter:description", content: "Elara Estates is a private office representing extraordinary residences across Europe, the Americas, and the Middle East." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1b83a2e8-8a43-4e17-8696-c47584e4c04e/id-preview-22a13c0a--d7bc07a7-53f6-4033-a213-7150a7c66091.lovable.app-1780313673504.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1b83a2e8-8a43-4e17-8696-c47584e4c04e/id-preview-22a13c0a--d7bc07a7-53f6-4033-a213-7150a7c66091.lovable.app-1780313673504.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Navbar />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
