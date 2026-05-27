import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <Helmet>
        <title>404 — Page Not Found</title>
      </Helmet>
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 font-display text-5xl font-bold">Page not found</h1>
      <p className="mt-4 max-w-md text-text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button to="/" variant="primary" className="mt-8">
        Back to Home
      </Button>
    </div>
  );
}
