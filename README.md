# Nuxt 3 + Tailwind + Storybook

The idea is to get a tech stack around **Vue 3** with the following requirements.

- Web Framework: **Nuxt 3** with auto imports.
- CSS utility: **TailwindCSS**
- Design system: **Storybook** that can load Nuxt 3 that uses auto imports and Tailwind.
- Unit tests: **Vitest** for fast testing.

![about](readme/setup.svg 'setup')

Because there seems to be no `nuxt/storybook` out of the box integration, the configuration is setup twice.

The configuration setup in nuxt config is duplicated in other files as well. 


### Nuxt Demo

It is deployed as a generated Nuxt 3 app here.
The deployed app might or might not be the latest from this repo.

https://polite-wave-0d8d9f803.3.azurestaticapps.net


### Storybook demo

It is deployed as a build Storybook here.
The deployed app might or might not be the latest from this repo.

https://salmon-dune-05cd01103.3.azurestaticapps.net



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
