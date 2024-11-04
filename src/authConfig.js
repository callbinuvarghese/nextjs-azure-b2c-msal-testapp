// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: "56288fff-53ce-49d3-a41d-7a4a62a83843",
        authority: "https://login.microsoftonline.com/95ad3010-8850-495e-afec-b456e367d7cf",
        //authority: "https://cpfb2cintegrationuat1.b2clogin.com/cpfb2cintegrationuat1.onmicrosoft.com/oauth2/v2.0/authorize?p=b2c_1a_9_signup_signin",
        authority: "https://cpfb2cintegrationuat1.b2clogin.com/08943ced-c41f-47e0-a0df-cc4e7f849d13/v2.0/",
        redirectUri: "/",
        postLogoutRedirectUri: "/"
    },
    system: {
        allowNativeBroker: false, // Disables WAM Broker
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
