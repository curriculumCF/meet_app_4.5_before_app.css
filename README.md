## **Replace the Following Placeholders:**

1. in "package.json": `YOUR_GITHUB_USERNAME` (1 occurrence).
2. in "static-site-test/index.html", replace:

- `YOUR_GET_AUTH_URL` (1 occurrence).
- `YOUR_GET_ACCESS_TOKEN_URL` (1 occurrence). Note: paste the url without "/{code}"
- `YOUR_GET_EVENTS_URL` (1 occurrence). Note: paste the url without "/{access_token}"

3. in "auth-server/handler.js": `YOUR_GITHUB_USERNAME` (1 occurrence).

## **Add Missing Config**

You can refer to Exercise 4.3 if you need specific instructions on how to re-create the missing "auth-server/config.json" file. Here are some quick steps, however, if you got stuck, refer to exercise 4.3.

1. create "config.json" file inside the "auth-server" folder.
2. add necessery Google Calendar API credentials:
   - CLIENT_ID (get its value from your Google Calendar API credentials file)
   - CLIENT_SECRET (get it from your Google Calendar API credentials file)
   - CALENDAR_ID (set its value to this string: "fullstackwebdev@careerfoundry.com")

## **Replace the content of README.md**

This README.md is supposed to contain information that should be added in:

1. Task 4.1 (User Stories + Scenarios)
2. Task 4.2 (How are you going to utilize serverless in your Meet app)
