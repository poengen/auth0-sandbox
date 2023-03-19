import { Auth0Provider } from "@auth0/auth0-react";

export default function App({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={typeof window !== "undefined" ? window.location.origin : ""}
      /* authorizationParams={{
        redirect_uri:
          typeof window !== "undefined" ? window.location.origin : "",
      }} */
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      scope="read:current_user update:current_user_metadata read:messages"
      useRefreshTokens={true}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  )
}
