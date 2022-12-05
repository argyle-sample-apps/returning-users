![Cover](https://res.cloudinary.com/argyle-media/image/upload/c_scale,q_67,w_1999/v1669985269/argyle-x/meta/returning-users-github-cover.webp)

In progress.

## Getting Started

Rename env.example to .env and fill in Argyle related keys from your [console.argyle.com](https://console.argyle.com) account.

Install the dependencies

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [localhost:3000/returning-users](http://localhost:3000/returning-users) with your browser to see the result.

## Required Accounts

To run the project locally, you need to follow the steps described below.

1. Rename `config.example.ts` to `config.ts`,
2. Follow the steps described [here](https://docs.argyle.com/guides/docs/advanced-testing#trigger-errors) to trigger a specific error while connecting an account. Instead of using Argyle Console's Link emulator, visit `/user-notification/connect` on localhost to start creating accounts necessary for this demo.
3. Connect three separate accounts, each following steps described below:
   1. ### Reconnect Flow
      Connect an account using a Link Item that doesn't require MFA, for example `usps`. Simulate an `auth_required` error using the generated password from Console. After successful account connection, `userId`, `accountId` and `linkItemId` will be printed to browser's console. Copy-paste those values to corresponding keys in `config.ts`.
   2. ### DDS Flow
      Connect an account using a Link Item that supports direct deposit switching, for example `amazon`. Use default sample credentials available in Console. After successful account connection, `userId`, `accountId` and `linkItemId` will be printed to browser's console. Copy-paste those values to corresponding keys in `config.ts`.
   3. ### MFA Flow
      Connect an account using a Link Item that does require MFA, for example `uber`. Simulate an `auth_required` error using the generated password from Console. After successful account connection, `userId`, `accountId` and `linkItemId` will be printed to browser's console. Copy-paste those values to corresponding keys in `config.ts`.

## Folder structure (in `src`)

- **Components** - components that do not carry their own state but rather use what is provided via props.
- **Hooks** - used when caching when same network calls are required for multiple components.
- **Layouts** - define reusable page layouts.
- **Models** - store reusable TypeScript types.
- **Pages** - API for all backend functionality that's hidden from end-user. To not expose any keys or potentially abusive calls.
- **Stores** - [Jotai](https://jotai.org/) React state management with an atomic model.
- **Styles** - [TailwindCSS](https://tailwindcss.com/) globals and [react-day-picker](https://react-day-picker.js.org/) style overrides. `tailwind.config.js` file contains custom styling presets like fonts and colors.
- **Utils** - store reusable functions.
- **Views** - smart views that have their own state, business logic and are reused over multiple screens.

## Learn More

To learn more, take a look at the following resources:

- [Returning Users](https://docs.argyle.com/guides/docs/returning-users)
- [Argyle Docs](https://argyle.com/docs) - learn about Argyle integration
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
