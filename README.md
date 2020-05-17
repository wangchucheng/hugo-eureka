# Hugo Eureka

Eureka is a elegant and powerful theme for [Hugo](https://gohugo.io/). Eureka is committed to providing an elegant, feature-rich and highly customizable theme.

## Get Started

### Prerequisites

-   [Git](https://git-scm.com/)
-   [Hugo Extended v0.65.0+](https://gohugo.io/getting-started/installing/)

Eureka uses [Hugo Pipes](https://gohugo.io/hugo-pipes/introduction/) to process PostCSS, so customizing assets in Eureka requires an extended version of Hugo. If you are new to Hugo, you can read Hugo's [quick start](https://gohugo.io/getting-started/quick-start/).

### Installation

```shell
cd your_hugo_site
git init
git submodule add https://github.com/wangchucheng/hugo-eureka.git themes/eureka
```

Then, add the theme to the site configuration.

```
theme = "eureka"
```

## Usage

Copy the `config.toml` in Eureka's `exampleSite` folder to the root folder of your Hugo site. Feel free to change it.

Then you can add some content in your blog:

```shell
hugo new post/hello-world.md
```

After that, you can preview it in the browser:

```shell
hugo server
```

For more usage, please refer to Hugo's [basic usage](https://gohugo.io/getting-started/usage/).
