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

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
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
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
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
      {
        title:
          "ESANV Motors — Bosch Car Service Partner | Harur, Dharmapuri",
      },
      {
        name: "description",
        content:
          "ESANV Motors is a multi-brand car service center in Harur, Dharmapuri partnered with Bosch Car Service. 50+ services, diagnostics, bodyshop, coatings & genuine accessories.",
      },
      { name: "author", content: "ESANV Motors" },
      {
        property: "og:title",
        content: "ESANV Motors — Bosch Car Service Partner | Harur, Dharmapuri",
      },
      {
        property: "og:description",
        content:
          "ESANV Motors is a multi-brand car service center in Harur, Dharmapuri partnered with Bosch Car Service. 50+ services, diagnostics, bodyshop, coatings & genuine accessories.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "ESANV Motors" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ESANV Motors — Bosch Car Service Partner | Harur, Dharmapuri" },
      { name: "twitter:description", content: "ESANV Motors is a multi-brand car service center in Harur, Dharmapuri partnered with Bosch Car Service. 50+ services, diagnostics, bodyshop, coatings & genuine accessories." },
      { name: "robots", content: "index, follow" },
      { name: "keywords", content: "ESANV Motors, Bosch Car Service, car service Harur, car service Dharmapuri, multi-brand car service, car painting, wheel alignment, ceramic coating, PPF, car accessories" },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Harur, Dharmapuri" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "ESANV Motors",
          image: "https://esanvmotorsbosch.lovable.app/favicon.ico",
          "@id": "https://esanvmotorsbosch.lovable.app",
          url: "https://esanvmotorsbosch.lovable.app",
          telephone: "+91-99658-11776",
          email: "esanvmotor@gmail.com",
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Gopinathampatti Koot Road, near Harur",
            addressLocality: "Harur",
            addressRegion: "Tamil Nadu",
            postalCode: "636905",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 09:00-20:00",
          areaServed: ["Harur", "Dharmapuri", "Salem"],
          sameAs: ["https://instagram.com"],
        }),
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
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
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
