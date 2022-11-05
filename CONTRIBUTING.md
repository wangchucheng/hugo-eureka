Thank you for investing your time in contributing to Eureka! This is a document that is still under construction and therefore does not cover all considerations during development.

## CSS Resources

Always remember to update the cached resources in `resources/_gen/` when you make changes to CSS.

When doing so make sure to use production mode so they are optimized.

### How to update cached CSS

1. Make sure you have the latest version of HUGO extended installed, as there's a chance of the resource hashing algorithm to be changed.
2. Make sure you have Node.js installed and the `npm` command is available.
3. If there are any `/config.yaml` or `/config/_default/config.yaml` make sure that `useResourceCacheWhen` is not set to `always`.
    - It would be better if it's set to `never` during this process.
4. Install the Node.js dependencies using `npm i`.
5. Delete the `resources/_gen` folder to cleanup the cache.
6. Run `hugo --environment production` and the resources should be built.
7. Push the newly generated cache to the repository.
8. Ensure that `useResourceCacheWhen` is not left as `never` so that the cache gets actually used.

## Font Awesome

Eureka reduce the size of Font Awesome with tree shaking. If your PR contains changes to Font Awesome icons, please make sure to update `layouts/partials/utils/get-fontawesome-icons.html` to include all related icons.