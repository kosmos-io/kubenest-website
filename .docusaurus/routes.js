import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/kubenest-website/__docusaurus/debug',
    component: ComponentCreator('/kubenest-website/__docusaurus/debug', '201'),
    exact: true
  },
  {
    path: '/kubenest-website/__docusaurus/debug/config',
    component: ComponentCreator('/kubenest-website/__docusaurus/debug/config', 'cbc'),
    exact: true
  },
  {
    path: '/kubenest-website/__docusaurus/debug/content',
    component: ComponentCreator('/kubenest-website/__docusaurus/debug/content', '4dc'),
    exact: true
  },
  {
    path: '/kubenest-website/__docusaurus/debug/globalData',
    component: ComponentCreator('/kubenest-website/__docusaurus/debug/globalData', '71b'),
    exact: true
  },
  {
    path: '/kubenest-website/__docusaurus/debug/metadata',
    component: ComponentCreator('/kubenest-website/__docusaurus/debug/metadata', 'b30'),
    exact: true
  },
  {
    path: '/kubenest-website/__docusaurus/debug/registry',
    component: ComponentCreator('/kubenest-website/__docusaurus/debug/registry', 'a33'),
    exact: true
  },
  {
    path: '/kubenest-website/__docusaurus/debug/routes',
    component: ComponentCreator('/kubenest-website/__docusaurus/debug/routes', '4ca'),
    exact: true
  },
  {
    path: '/kubenest-website/blog',
    component: ComponentCreator('/kubenest-website/blog', '899'),
    exact: true
  },
  {
    path: '/kubenest-website/blog/archive',
    component: ComponentCreator('/kubenest-website/blog/archive', '709'),
    exact: true
  },
  {
    path: '/kubenest-website/blog/authors',
    component: ComponentCreator('/kubenest-website/blog/authors', '7c2'),
    exact: true
  },
  {
    path: '/kubenest-website/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/kubenest-website/blog/authors/all-sebastien-lorber-articles', 'ac0'),
    exact: true
  },
  {
    path: '/kubenest-website/blog/authors/yangshun',
    component: ComponentCreator('/kubenest-website/blog/authors/yangshun', '5a1'),
    exact: true
  },
  {
    path: '/kubenest-website/blog/first-blog-post',
    component: ComponentCreator('/kubenest-website/blog/first-blog-post', '6d1'),
    exact: true
  },
  {
    path: '/kubenest-website/blog/long-blog-post',
    component: ComponentCreator('/kubenest-website/blog/long-blog-post', '602'),
    exact: true
  },
  {
    path: '/kubenest-website/blog/mdx-blog-post',
    component: ComponentCreator('/kubenest-website/blog/mdx-blog-post', '5bd'),
    exact: true
  },
  {
    path: '/kubenest-website/blog/tags',
    component: ComponentCreator('/kubenest-website/blog/tags', 'd36'),
    exact: true
  },
  {
    path: '/kubenest-website/blog/tags/docusaurus',
    component: ComponentCreator('/kubenest-website/blog/tags/docusaurus', 'db4'),
    exact: true
  },
  {
    path: '/kubenest-website/blog/tags/facebook',
    component: ComponentCreator('/kubenest-website/blog/tags/facebook', 'e1e'),
    exact: true
  },
  {
    path: '/kubenest-website/blog/tags/hello',
    component: ComponentCreator('/kubenest-website/blog/tags/hello', 'cca'),
    exact: true
  },
  {
    path: '/kubenest-website/blog/tags/hola',
    component: ComponentCreator('/kubenest-website/blog/tags/hola', 'a24'),
    exact: true
  },
  {
    path: '/kubenest-website/blog/welcome',
    component: ComponentCreator('/kubenest-website/blog/welcome', '0e8'),
    exact: true
  },
  {
    path: '/kubenest-website/markdown-page',
    component: ComponentCreator('/kubenest-website/markdown-page', 'f92'),
    exact: true
  },
  {
    path: '/kubenest-website/docs',
    component: ComponentCreator('/kubenest-website/docs', 'f14'),
    routes: [
      {
        path: '/kubenest-website/docs',
        component: ComponentCreator('/kubenest-website/docs', 'fea'),
        routes: [
          {
            path: '/kubenest-website/docs',
            component: ComponentCreator('/kubenest-website/docs', 'f61'),
            routes: [
              {
                path: '/kubenest-website/docs/category/tutorial---basics',
                component: ComponentCreator('/kubenest-website/docs/category/tutorial---basics', '9f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kubenest-website/docs/category/tutorial---extras',
                component: ComponentCreator('/kubenest-website/docs/category/tutorial---extras', '4ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kubenest-website/docs/intro',
                component: ComponentCreator('/kubenest-website/docs/intro', 'dfd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kubenest-website/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/kubenest-website/docs/tutorial-basics/congratulations', '1fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kubenest-website/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/kubenest-website/docs/tutorial-basics/create-a-blog-post', '93b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kubenest-website/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/kubenest-website/docs/tutorial-basics/create-a-document', '655'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kubenest-website/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/kubenest-website/docs/tutorial-basics/create-a-page', '37a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kubenest-website/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/kubenest-website/docs/tutorial-basics/deploy-your-site', 'bf9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kubenest-website/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/kubenest-website/docs/tutorial-basics/markdown-features', 'a36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kubenest-website/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/kubenest-website/docs/tutorial-extras/manage-docs-versions', 'd57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kubenest-website/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/kubenest-website/docs/tutorial-extras/translate-your-site', '629'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/kubenest-website/',
    component: ComponentCreator('/kubenest-website/', 'b71'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
