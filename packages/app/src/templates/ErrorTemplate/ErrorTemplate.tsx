import Link from 'next/link';
import { FC, useEffect, useState } from 'react';

export const ErrorTemplate: FC<{
  error: { code: number; message: string };
  messages: string[];
}> = ({
  error = { code: 500, message: 'Internal Server Error' },
  messages = [],
}) => {
  const [{ message = '', path = '' }, setState] = useState<{
    message: string;
    path: string;
  }>({
    message: '',
    path: '',
  });

  useEffect(() => {
    const randomizeMessage = () => {
      const randomMessage: string =
        messages[Math.floor(Math.random() * messages.length)];
      const notFoundPath: string =
        typeof window === 'undefined' ? '' : window.location.pathname;
      setState({ message: randomMessage, path: notFoundPath });
    };
    randomizeMessage();
  }, [messages]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Backspace' || e.key === 'ArrowLeft') {
        window.history.back();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="bg-base-200 flex min-h-screen items-center justify-center p-4 md:p-8">
      <div className="card bg-base-100 w-full max-w-md shadow-xl">
        <div className="card-body text-center">
          <div className="flex flex-col gap-y-2 md:gap-y-4">
            <h1 className="text-error text-7xl font-bold">{error.code}</h1>

            <h2 className="text-2xl font-semibold">{error.message}</h2>

            <p className="text-base-content/70">{message}</p>

            {path && (
              <p className="text-base-content/40 text-xs break-all">
                Requested path: <code>{path}</code>
              </p>
            )}

            <div className="card-actions justify-center gap-2">
              <Link href="/" className="btn btn-primary btn-sm">
                Go home
              </Link>
            </div>

            <p className="text-base-content/50 text-sm">
              Press <kbd className="kbd kbd-sm">←</kbd> or{' '}
              <kbd className="kbd kbd-sm">Backspace</kbd> to go back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ErrorTemplate.displayName = 'ErrorTemplate';
