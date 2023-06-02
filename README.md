# Nuxt 3 + Vuetify customized + Tailwind + Storybook

The idea is to get a tech stack around **Vue 3** with the following requirements.

- Web Framework: **Nuxt 3** with auto imports.
- UI Library: **Vuetify** with customized settings and theming for fast development.
- CSS utility: **TailwindCSS**
- Design system: **Storybook** that can load Nuxt 3 that uses auto imports and custom Vuetify theme and Tailwind.
- Unit tests: **Vitest** for fast testing.

Due to possible CSS classnames conflict between Vuetify and Tailwind I have set Tailwind to have the classnames prefixed with `-`

![about](readme/setup.png 'setup')


Demo: It is deployed as a generated Nuxt 3 app here.
The deployed app might or might not be the latest from this repo.

https://polite-wave-0d8d9f803.3.azurestaticapps.net


## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

```bash
npm run dev
```

## Development Storybook

```bash
npm run storybook
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Build the application for HTML pre-generated production:

```bash
npm run generate
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
