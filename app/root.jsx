import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

import rootStyles from "~/styles/root.css"
import transaction_historyStyles from "~/styles/pages/transaction-history.css"
import MainNavigation, {
  links as MainNavigationStyles,
} from "~/components/MainNavigation"
import { links as UpBarStyles } from "./components/UpBar"

/**
 * @returns {import("@remix-run/node").LinkDescriptor[]}
 */

export const links = () => [
  {
    rel: "stylesheet",
    href: rootStyles,
  },
  {
    rel: "stylesheet",
    href: transaction_historyStyles,
  },
  ...MainNavigationStyles(),
  ...UpBarStyles(),
]

/**
 * @returns {import("@remix-run/node").MetaFunction}
 */
export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
})

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <main>
          <MainNavigation />
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export function ErrorBoundary({ error }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>an error occured!</title>
      </head>
      <body>
        <div className="error">
          <h1>an error occured!</h1>
          <p>error: {error.message}</p>
          <p>
            Back to <Link to="/">safety!</Link>
          </p>
          <p>or come back later</p>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
