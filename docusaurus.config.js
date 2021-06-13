/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'egee.xyz',
  tagline: 'Dinosaurs are cool',
  url: 'https://egee.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'egee-irl', // Usually your GitHub org/user name.
  projectName: 'egee-xyz', // Usually your repo name.
  themeConfig: { },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/egee-irl/egee-xyz/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/egee-irl/egee-xyz/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
