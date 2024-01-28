import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/store";
import Counter from "./components/Counter";
import UserData from "./components/UserData";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import Counter3 from "./components/Counter3";
import Display from "./components/Display";
import { Button1 } from "./components/Button1";
import { TutorailDisplay } from "./components/TutorailDisplay";
import { ListTutorial } from "./components/ListTutorial";
import { ErrorBoundary } from "react-error-boundary";
import BuggyCounterError from "./BuggyCounterError";
import ErrorHandling from "./ErrorHandling";
import * as Sentry from "@sentry/react";


Sentry.init({
  dsn: "https://d9cfead0f2ddcccfd44d0a392cf952d4@o4506619416805376.ingest.sentry.io/4506619465760768",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.Replay({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <ErrorBoundary fallback={<div>Something went wrong!!!!!</div>}>

{/* <ErrorHandling> */}

    <Provider store={store}>
          
      <Counter />

        {/*<Button1>this is my children props</Button1> */}

    </Provider>

{/* </ErrorHandling> */}

    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
