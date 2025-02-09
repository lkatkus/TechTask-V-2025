# ImaginatorX

> Frontend development is like a magic show—half of it is imagination, and the other half is convincing the browser it actually works.

## Running locally

### Development
`vite` is used to bootstrap development environment.

To run locally:
- `nvm use`
- `npm i`
- `npm run dev` or `npm run dev:mock` to use mock api client

### Storybook
`storybook` is preferred way to develop isolated and minimal components before implementing in the app.

To run locally:
- `npm run storybook`

### Updating Pexels Query
Default Pexels query key is `cat`. If you don't like it (shame on you), it can be updated by adding `PEXELS_QUERY_KEY` to localStorage with desired value.

### Docker
Initial docker container setup is prepared to ease deployment process.

To run locally:
- `docker build -t imaginator-x .`
- `docker run --rm --name your-imaginator-x -d -p 8080:80 imaginator-x`

## Testing

### Unit tests
`vitest` is used for unit tests.

To run locally:
- `npm run test`

### Cypress
`cypress` is used for E2E testing. Current setup is based on mock api client for consistency and to prevent flaky results.

To run locally:
- `npm run dev`
- in separate terminal `npm run cy:run` to run headless cypress locally or `npm run cy:open` to open cypress app
