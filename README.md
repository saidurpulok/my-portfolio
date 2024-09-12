Here's an updated version of the README file, taking into account that you used GitHub Actions for deployment:

```markdown
# Next.js Static Site for GitHub Pages (via GitHub Actions)

This repository contains a Next.js project configured for static export and deployed automatically to GitHub Pages using GitHub Actions.

## Prerequisites

Before getting started, ensure you have the following installed on your system:
- Node.js (12.x or higher)
- npm (6.x or higher)
- Git

## Getting Started

To get started with this project, clone the repository to your local machine.

```bash
git clone https://github.com/saidurpulok/my-portfolio.git
cd my-portfolio
```

You can then copy the folder contents to a folder named `your-username.github.io`

## Installation

After cloning, install the required dependencies:

```bash
npm install
```

## Configuration

Make sure your `next.config.js` file includes the necessary settings for static export:

```js
// next.config.js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
};
```

This configuration ensures that the project is set up for static export, which is necessary for deployment to GitHub Pages.

## Building the Site Locally (Optional)

To build the site locally, you can run:

```bash
npm run build
```

This will generate the static files necessary for deployment in the `.next` directory, but **this step is optional** as GitHub Actions will handle the build and deployment for you.


### Steps for Deployment in Github Pages

First of all create a repository with the same name of your project. Then follow the usual steps to connect the local repository to github and then the following steps.

1. **Push your code to GitHub**:

   After making changes or adding new content to the site, push the changes to the `main` branch:

   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **GitHub Actions Workflow**:
   
   Go to the `Settings` tab in your repository and find the `Pages` option. Choose `Github Actions` from `Source` dropdown menu in place of "Deploy from Branch". It will automatically detect your NextJs app and you will get a `Configure` button. Hit the button and this will create a YML file. Commit the change and that's all you need to do!
   The workflow YAML file (`.github/workflows/nextjs.yml`) will be triggered automatically whenever you push to `main`.

You can view the deployment status in the "Actions" tab of your repository on GitHub.

### GitHub Pages URL

After deployment, your site will be available at:

```
https://your-username.github.io/
```


## Contributing

Contributions are welcome! Feel free to open a pull request with any changes or suggestions.

## License

This project is open source and available under the [MIT License](LICENSE).
```