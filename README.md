# amplify-example

Minimum example of #5028

- Fill in cognito environment variables (see .env.sample, create your own .env.local)
- Run the app
- Sign in (this will redirect to `/projected`)
- Refresh. The `ProtectedView` and `HomeView` will show that the user is signed out
- Navigate to `/signin`. A signin attempt will as the user is already signed in
