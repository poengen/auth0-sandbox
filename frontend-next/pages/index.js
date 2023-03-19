import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton, LogoutButton, Profile, ApiButton } from "../auth";

export default function Home() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated && <LoginButton nav>Log In</LoginButton>}
      {isAuthenticated && <LogoutButton nav>Log Out</LogoutButton>}
      <Profile></Profile>
      <ApiButton></ApiButton>
    </>
  )
}
