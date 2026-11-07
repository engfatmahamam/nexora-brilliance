import { QueryClient } from "@tanstack/react-query";
import { createRouter, Link, useRouter, type ErrorComponentProps } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { routeTree } from "./routeTree.gen";

function DefaultError({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-5 text-center">
      <div className="max-w-md">
        <h1 className="font-display text-4xl text-foreground">This page didn&apos;t load</h1>
        <p className="mt-3 text-muted-foreground">
          {error instanceof Error ? error.message : "Something went wrong. Please try again."}
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <Button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-gold text-primary-foreground hover:bg-gold/90"
          >
            Try again
          </Button>
          <Button asChild variant="outline">
            <Link to="/">Go home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function DefaultNotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-5 text-center">
      <div>
        <h1 className="font-display text-6xl text-foreground">404</h1>
        <p className="mt-3 text-muted-foreground">The page you’re looking for couldn’t be found.</p>
        <Button asChild className="mt-7 bg-gold text-primary-foreground hover:bg-gold/90">
          <Link to="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultError,
    defaultNotFoundComponent: DefaultNotFound,
  });

  return router;
};
