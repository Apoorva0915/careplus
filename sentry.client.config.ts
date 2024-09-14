import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://68126ba3ba744d6c74c686c8ef4aef23@o4507610445185024.ingest.us.sentry.io/4507610447020032",

  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});