import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ApiButton = () => {
  const { getAccessTokenSilently } = useAuth0();
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const callApi = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/public`);
      const responseData = await response.json();

      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      console.log(token);

      const response = await fetch(`${serverUrl}/api/private`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responseData = await response.json();

      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={(e) => callApi(e)}>Call Public Api</button>
      <button onClick={(e) => callSecureApi(e)}>Call Private Api</button>
    </div>
  );
};

export default ApiButton;
