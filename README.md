# Hugo Eureka

Eureka is a elegant and powerful theme for [Hugo](https://gohugo.io/). Eureka is committed to providing an elegant, feature-rich and highly customizable theme.

## Get Started

### Prerequisites

-   [Git](https://git-scm.com/)
-   [Hugo Extended 0.74.0+](https://gohugo.io/getting-started/installing/)
-   [Node.js](https://nodejs.org/en/)

Eureka uses [Hugo Pipes](https://gohugo.io/hugo-pipes/introduction/) to process PostCSS.

### Installation

 If you are new to Hugo or do not have a Hugo site, you can read Hugo's [quick start](https://gohugo.io/getting-started/quick-start/).

 Then, add Eureka as a submodule to the current project.

```shell
cd <your_hugo_site>
git init
git submodule add https://github.com/wangchucheng/hugo-eureka.git themes/eureka
```

Since Eureka uses PostCSS, make sure to install `postcss-cli` and `autoprefixer` globally, which you can read Hugo's [PostCSS](https://gohugo.io/hugo-pipes/postcss/) for details.

```shell
npm install -g postcss-cli
npm install -g autoprefixer
```

Then, install the necessary packages in `themes/eureka`.

```shell
cd themes/eureka
npm install
```

Following that, set theme in `config.toml`.

```toml
theme = "eureka"
```

Finally, you can preview the site in the root directory of the site.

```shell
hugo server
```

### Specify Version

If you want to specify the version of Eureka, you can do so as follows.

```shell
cd themes/eureka
git checkout <eureka_version>
```

## Usage

Copy the `config` folder in Eureka's `exampleSite` folder to the root folder of your Hugo site. Feel free to change it. After that, you need to delete the automatically generated `config.toml` file.

Then you can add some content in your blog:

```shell
hugo new post/hello-world.md
```

After that, you can preview it in the browser:

```shell
hugo server
```

For more usage, please refer to Hugo's [basic usage](https://gohugo.io/getting-started/usage/).

## License

This project is licensed under a [MIT License](https://github.com/wangchucheng/hugo-eureka/blob/master/LICENSE).

The sample photos in the project are taken by me and licensed under a [CC BY-NC-SA 4.0 License](https://creativecommons.org/licenses/by-nc-sa/4.0/).