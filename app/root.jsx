import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

import rootStyles from "~/styles/root.css"
import MainNavigation, {
  links as MainNavigationStyles,
} from "~/components/MainNavigation"

/**
 * @returns {import("@remix-run/node").LinkDescriptor[]}
 */

export const links = () => [
  {
    rel: "stylesheet",
    href: rootStyles,
  },
  ...MainNavigationStyles(),
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
