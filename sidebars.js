/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
// const sidebars = {
//   // By default, Docusaurus generates a sidebar from the docs folder structure
//   tutorialSidebar: [{ type: "autogenerated", dirName: "." }],
// };

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
  quickstarts: [
    {
      type: "doc",
      label: "Get Started",
      id: "get-started/index",
    },
    {
      type: "category",
      label: "Concepts",
      link: {
        type: "doc",
        id: "concepts/features",
      },
      collapsed: false,
      items: [
        "concepts/features",
        "concepts/architecture/index",
        "api/s3/index",
      ],
    },
    {
      type: "category",
      label: "AWS S3 SDKs",
      link: {
        type: "doc",
        id: "sdks/s3/index",
      },
      items: [
        "sdks/s3/aws-cli",
        "sdks/s3/aws-js-sdk",
        "sdks/s3/aws-go-sdk",
        "sdks/s3/aws-python-sdk",
        "sdks/s3/aws-php-sdk",
        "sdks/s3/aws-ruby-sdk",
        "sdks/s3/aws-net-sdk",
      ],
    },
  ],
  concepts: [],
  community: [
    {
      type: "doc",
      label: "Community",
      id: "community/index",
    },
    {
      type: "doc",
      label: "Code of Conduct",
      id: "community/code-of-conduct",
    },
  ],
};

module.exports = sidebars;