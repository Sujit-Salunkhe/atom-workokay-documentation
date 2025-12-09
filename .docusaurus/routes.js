import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentation/__docusaurus/debug',
    component: ComponentCreator('/documentation/__docusaurus/debug', 'c3b'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/config',
    component: ComponentCreator('/documentation/__docusaurus/debug/config', 'e83'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/content',
    component: ComponentCreator('/documentation/__docusaurus/debug/content', '8fc'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/globalData',
    component: ComponentCreator('/documentation/__docusaurus/debug/globalData', 'f7c'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/metadata',
    component: ComponentCreator('/documentation/__docusaurus/debug/metadata', 'dc0'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/registry',
    component: ComponentCreator('/documentation/__docusaurus/debug/registry', '352'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/routes',
    component: ComponentCreator('/documentation/__docusaurus/debug/routes', '7c8'),
    exact: true
  },
  {
    path: '/documentation/markdown-page',
    component: ComponentCreator('/documentation/markdown-page', '1c7'),
    exact: true
  },
  {
    path: '/documentation/docs',
    component: ComponentCreator('/documentation/docs', '49b'),
    routes: [
      {
        path: '/documentation/docs',
        component: ComponentCreator('/documentation/docs', '2ef'),
        routes: [
          {
            path: '/documentation/docs',
            component: ComponentCreator('/documentation/docs', '32e'),
            routes: [
              {
                path: '/documentation/docs/category/component',
                component: ComponentCreator('/documentation/docs/category/component', '16a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/fifth',
                component: ComponentCreator('/documentation/docs/category/fifth', '839'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/first',
                component: ComponentCreator('/documentation/docs/category/first', '180'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/first-1',
                component: ComponentCreator('/documentation/docs/category/first-1', '3e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/first-10',
                component: ComponentCreator('/documentation/docs/category/first-10', 'ede'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/first-2',
                component: ComponentCreator('/documentation/docs/category/first-2', '52d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/first-3',
                component: ComponentCreator('/documentation/docs/category/first-3', '7e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/first-4',
                component: ComponentCreator('/documentation/docs/category/first-4', '252'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/first-5',
                component: ComponentCreator('/documentation/docs/category/first-5', '17a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/first-6',
                component: ComponentCreator('/documentation/docs/category/first-6', '7af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/first-7',
                component: ComponentCreator('/documentation/docs/category/first-7', '157'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/first-8',
                component: ComponentCreator('/documentation/docs/category/first-8', '833'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/first-9',
                component: ComponentCreator('/documentation/docs/category/first-9', 'f23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/fourth',
                component: ComponentCreator('/documentation/docs/category/fourth', 'cf8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/primary',
                component: ComponentCreator('/documentation/docs/category/primary', '578'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/primary-1',
                component: ComponentCreator('/documentation/docs/category/primary-1', '418'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/primary-2',
                component: ComponentCreator('/documentation/docs/category/primary-2', '66c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/primary-3',
                component: ComponentCreator('/documentation/docs/category/primary-3', '770'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/second',
                component: ComponentCreator('/documentation/docs/category/second', '677'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/second-1',
                component: ComponentCreator('/documentation/docs/category/second-1', '3e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/second-10',
                component: ComponentCreator('/documentation/docs/category/second-10', '45a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/second-2',
                component: ComponentCreator('/documentation/docs/category/second-2', '67c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/second-3',
                component: ComponentCreator('/documentation/docs/category/second-3', '15c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/second-4',
                component: ComponentCreator('/documentation/docs/category/second-4', '1af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/second-5',
                component: ComponentCreator('/documentation/docs/category/second-5', 'e5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/second-6',
                component: ComponentCreator('/documentation/docs/category/second-6', '630'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/second-7',
                component: ComponentCreator('/documentation/docs/category/second-7', 'c41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/second-8',
                component: ComponentCreator('/documentation/docs/category/second-8', 'abe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/second-9',
                component: ComponentCreator('/documentation/docs/category/second-9', 'ff7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/secondary',
                component: ComponentCreator('/documentation/docs/category/secondary', 'b0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/secondary-1',
                component: ComponentCreator('/documentation/docs/category/secondary-1', '543'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/secondary-2',
                component: ComponentCreator('/documentation/docs/category/secondary-2', 'b7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/secondary-3',
                component: ComponentCreator('/documentation/docs/category/secondary-3', '722'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/secondary-4',
                component: ComponentCreator('/documentation/docs/category/secondary-4', '647'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/tertiary',
                component: ComponentCreator('/documentation/docs/category/tertiary', 'c46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/third',
                component: ComponentCreator('/documentation/docs/category/third', '919'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/third-1',
                component: ComponentCreator('/documentation/docs/category/third-1', 'df2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/third-10',
                component: ComponentCreator('/documentation/docs/category/third-10', 'cee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/third-11',
                component: ComponentCreator('/documentation/docs/category/third-11', '459'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/third-12',
                component: ComponentCreator('/documentation/docs/category/third-12', 'f77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/third-13',
                component: ComponentCreator('/documentation/docs/category/third-13', '0e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/third-14',
                component: ComponentCreator('/documentation/docs/category/third-14', '00c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/third-15',
                component: ComponentCreator('/documentation/docs/category/third-15', '4f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/third-2',
                component: ComponentCreator('/documentation/docs/category/third-2', '523'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/third-3',
                component: ComponentCreator('/documentation/docs/category/third-3', '057'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/third-4',
                component: ComponentCreator('/documentation/docs/category/third-4', '475'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/third-5',
                component: ComponentCreator('/documentation/docs/category/third-5', 'f70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/third-6',
                component: ComponentCreator('/documentation/docs/category/third-6', '663'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/third-7',
                component: ComponentCreator('/documentation/docs/category/third-7', '270'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/third-8',
                component: ComponentCreator('/documentation/docs/category/third-8', '52c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/category/third-9',
                component: ComponentCreator('/documentation/docs/category/third-9', '892'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/button',
                component: ComponentCreator('/documentation/docs/component/button', 'a18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/page-2',
                component: ComponentCreator('/documentation/docs/component/page-2', 'bac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/secondary/first/page-1',
                component: ComponentCreator('/documentation/docs/component/secondary/first/page-1', '6f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/secondary/first/page-2',
                component: ComponentCreator('/documentation/docs/component/secondary/first/page-2', 'c19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/secondary/first/page-3',
                component: ComponentCreator('/documentation/docs/component/secondary/first/page-3', 'af9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/secondary/page-1',
                component: ComponentCreator('/documentation/docs/component/secondary/page-1', '202'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/secondary/page-2',
                component: ComponentCreator('/documentation/docs/component/secondary/page-2', '009'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/secondary/second/page-1',
                component: ComponentCreator('/documentation/docs/component/secondary/second/page-1', '81b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/secondary/second/page-2',
                component: ComponentCreator('/documentation/docs/component/secondary/second/page-2', '607'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/secondary/second/page-3',
                component: ComponentCreator('/documentation/docs/component/secondary/second/page-3', '546'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/secondary/third/page-1',
                component: ComponentCreator('/documentation/docs/component/secondary/third/page-1', '086'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/secondary/third/page-2',
                component: ComponentCreator('/documentation/docs/component/secondary/third/page-2', 'be7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/secondary/third/page-3',
                component: ComponentCreator('/documentation/docs/component/secondary/third/page-3', '703'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/third/first/page-1',
                component: ComponentCreator('/documentation/docs/component/third/first/page-1', 'f2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/third/first/page-2',
                component: ComponentCreator('/documentation/docs/component/third/first/page-2', '6f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/third/first/page-3',
                component: ComponentCreator('/documentation/docs/component/third/first/page-3', '5d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/third/page-1',
                component: ComponentCreator('/documentation/docs/component/third/page-1', '06b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/third/page-2',
                component: ComponentCreator('/documentation/docs/component/third/page-2', 'eb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/third/second/page-1',
                component: ComponentCreator('/documentation/docs/component/third/second/page-1', '6a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/third/second/page-2',
                component: ComponentCreator('/documentation/docs/component/third/second/page-2', '627'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/third/second/page-3',
                component: ComponentCreator('/documentation/docs/component/third/second/page-3', '269'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/third/third/page-1',
                component: ComponentCreator('/documentation/docs/component/third/third/page-1', '8b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/third/third/page-2',
                component: ComponentCreator('/documentation/docs/component/third/third/page-2', '77f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/component/third/third/page-3',
                component: ComponentCreator('/documentation/docs/component/third/third/page-3', 'efc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/components',
                component: ComponentCreator('/documentation/docs/components', '89f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/dependencies',
                component: ComponentCreator('/documentation/docs/dependencies', '482'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fifth/primary/first/page-1',
                component: ComponentCreator('/documentation/docs/fifth/primary/first/page-1', 'b2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fifth/primary/first/page-2',
                component: ComponentCreator('/documentation/docs/fifth/primary/first/page-2', 'a03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fifth/primary/first/page-3',
                component: ComponentCreator('/documentation/docs/fifth/primary/first/page-3', '3ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fifth/third/first/page-1',
                component: ComponentCreator('/documentation/docs/fifth/third/first/page-1', 'f3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fifth/third/first/page-2',
                component: ComponentCreator('/documentation/docs/fifth/third/first/page-2', '1a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fifth/third/first/page-3',
                component: ComponentCreator('/documentation/docs/fifth/third/first/page-3', '9c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fifth/third/second/page-1',
                component: ComponentCreator('/documentation/docs/fifth/third/second/page-1', '836'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fifth/third/second/page-2',
                component: ComponentCreator('/documentation/docs/fifth/third/second/page-2', 'a5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fifth/third/third/page-1',
                component: ComponentCreator('/documentation/docs/fifth/third/third/page-1', '3a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fifth/third/third/page-2',
                component: ComponentCreator('/documentation/docs/fifth/third/third/page-2', '620'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/page-1',
                component: ComponentCreator('/documentation/docs/fourth/page-1', '729'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/page-2',
                component: ComponentCreator('/documentation/docs/fourth/page-2', '74f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/primary/first/page-1',
                component: ComponentCreator('/documentation/docs/fourth/primary/first/page-1', '01a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/primary/first/page-2',
                component: ComponentCreator('/documentation/docs/fourth/primary/first/page-2', 'f4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/primary/page-1',
                component: ComponentCreator('/documentation/docs/fourth/primary/page-1', '16e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/primary/page-2',
                component: ComponentCreator('/documentation/docs/fourth/primary/page-2', '7f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/primary/second/page-1',
                component: ComponentCreator('/documentation/docs/fourth/primary/second/page-1', '15f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/primary/second/page-2',
                component: ComponentCreator('/documentation/docs/fourth/primary/second/page-2', 'f79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/primary/third/page-1',
                component: ComponentCreator('/documentation/docs/fourth/primary/third/page-1', '229'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/primary/third/page-2',
                component: ComponentCreator('/documentation/docs/fourth/primary/third/page-2', 'af1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/secondary/first/page-1',
                component: ComponentCreator('/documentation/docs/fourth/secondary/first/page-1', '9e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/secondary/first/page-2',
                component: ComponentCreator('/documentation/docs/fourth/secondary/first/page-2', '758'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/secondary/page-1',
                component: ComponentCreator('/documentation/docs/fourth/secondary/page-1', 'f0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/secondary/page-2',
                component: ComponentCreator('/documentation/docs/fourth/secondary/page-2', 'edb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/secondary/second/page-1',
                component: ComponentCreator('/documentation/docs/fourth/secondary/second/page-1', '499'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/secondary/second/page-2',
                component: ComponentCreator('/documentation/docs/fourth/secondary/second/page-2', 'ff3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/secondary/third/page-1',
                component: ComponentCreator('/documentation/docs/fourth/secondary/third/page-1', '7de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/secondary/third/page-2',
                component: ComponentCreator('/documentation/docs/fourth/secondary/third/page-2', '5a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/third/first/page-1',
                component: ComponentCreator('/documentation/docs/fourth/third/first/page-1', '1eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/third/first/page-2',
                component: ComponentCreator('/documentation/docs/fourth/third/first/page-2', '674'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/third/first/page-3',
                component: ComponentCreator('/documentation/docs/fourth/third/first/page-3', '129'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/third/page-1',
                component: ComponentCreator('/documentation/docs/fourth/third/page-1', '1dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/third/page-2',
                component: ComponentCreator('/documentation/docs/fourth/third/page-2', '22c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/third/second/page-1',
                component: ComponentCreator('/documentation/docs/fourth/third/second/page-1', '28b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/third/second/page-2',
                component: ComponentCreator('/documentation/docs/fourth/third/second/page-2', '742'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/third/second/page-3',
                component: ComponentCreator('/documentation/docs/fourth/third/second/page-3', '861'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/third/third/page-1',
                component: ComponentCreator('/documentation/docs/fourth/third/third/page-1', 'e0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/third/third/page-2',
                component: ComponentCreator('/documentation/docs/fourth/third/third/page-2', '3a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/fourth/third/third/page-3',
                component: ComponentCreator('/documentation/docs/fourth/third/third/page-3', 'dae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/globalsetup',
                component: ComponentCreator('/documentation/docs/globalsetup', '4ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/intro',
                component: ComponentCreator('/documentation/docs/intro', '5f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/page-1',
                component: ComponentCreator('/documentation/docs/secondary/page-1', 'bb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/page-2',
                component: ComponentCreator('/documentation/docs/secondary/page-2', 'c77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/primary/first/page-1',
                component: ComponentCreator('/documentation/docs/secondary/primary/first/page-1', '9e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/primary/first/page-2',
                component: ComponentCreator('/documentation/docs/secondary/primary/first/page-2', '151'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/primary/first/page-3',
                component: ComponentCreator('/documentation/docs/secondary/primary/first/page-3', '9ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/primary/page-1',
                component: ComponentCreator('/documentation/docs/secondary/primary/page-1', 'c44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/primary/page-2',
                component: ComponentCreator('/documentation/docs/secondary/primary/page-2', '031'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/primary/page-3',
                component: ComponentCreator('/documentation/docs/secondary/primary/page-3', '694'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/primary/second/page-1',
                component: ComponentCreator('/documentation/docs/secondary/primary/second/page-1', 'b3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/primary/second/page-2',
                component: ComponentCreator('/documentation/docs/secondary/primary/second/page-2', '241'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/primary/second/page-3',
                component: ComponentCreator('/documentation/docs/secondary/primary/second/page-3', '90e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/primary/third/page-1',
                component: ComponentCreator('/documentation/docs/secondary/primary/third/page-1', '3dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/primary/third/page-2',
                component: ComponentCreator('/documentation/docs/secondary/primary/third/page-2', '66b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/primary/third/page-3',
                component: ComponentCreator('/documentation/docs/secondary/primary/third/page-3', 'bbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/secondary/first/page-1',
                component: ComponentCreator('/documentation/docs/secondary/secondary/first/page-1', '8fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/secondary/first/page-2',
                component: ComponentCreator('/documentation/docs/secondary/secondary/first/page-2', 'adb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/secondary/first/page-3',
                component: ComponentCreator('/documentation/docs/secondary/secondary/first/page-3', 'cbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/secondary/page-1',
                component: ComponentCreator('/documentation/docs/secondary/secondary/page-1', '789'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/secondary/page-2',
                component: ComponentCreator('/documentation/docs/secondary/secondary/page-2', 'e01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/secondary/page-3',
                component: ComponentCreator('/documentation/docs/secondary/secondary/page-3', 'd9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/secondary/second/page-1',
                component: ComponentCreator('/documentation/docs/secondary/secondary/second/page-1', '7aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/secondary/second/page-2',
                component: ComponentCreator('/documentation/docs/secondary/secondary/second/page-2', 'b22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/secondary/second/page-3',
                component: ComponentCreator('/documentation/docs/secondary/secondary/second/page-3', 'f37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/secondary/third/page-1',
                component: ComponentCreator('/documentation/docs/secondary/secondary/third/page-1', 'af1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/secondary/third/page-2',
                component: ComponentCreator('/documentation/docs/secondary/secondary/third/page-2', '670'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/secondary/third/page-3',
                component: ComponentCreator('/documentation/docs/secondary/secondary/third/page-3', '350'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/third/first/page-1',
                component: ComponentCreator('/documentation/docs/secondary/third/first/page-1', 'a1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/third/first/page-2',
                component: ComponentCreator('/documentation/docs/secondary/third/first/page-2', 'f72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/third/first/page-3',
                component: ComponentCreator('/documentation/docs/secondary/third/first/page-3', '0d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/third/page-1',
                component: ComponentCreator('/documentation/docs/secondary/third/page-1', 'c9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/third/page-2',
                component: ComponentCreator('/documentation/docs/secondary/third/page-2', 'ac5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/third/page-3',
                component: ComponentCreator('/documentation/docs/secondary/third/page-3', 'df4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/third/second/page-1',
                component: ComponentCreator('/documentation/docs/secondary/third/second/page-1', 'd8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/third/second/page-2',
                component: ComponentCreator('/documentation/docs/secondary/third/second/page-2', 'ec7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/third/second/page-3',
                component: ComponentCreator('/documentation/docs/secondary/third/second/page-3', '4f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/third/third/page-1',
                component: ComponentCreator('/documentation/docs/secondary/third/third/page-1', '3b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/third/third/page-2',
                component: ComponentCreator('/documentation/docs/secondary/third/third/page-2', '909'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/secondary/third/third/page-3',
                component: ComponentCreator('/documentation/docs/secondary/third/third/page-3', 'a82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/themes',
                component: ComponentCreator('/documentation/docs/themes', '8c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/page-1',
                component: ComponentCreator('/documentation/docs/third/page-1', '32d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/page-2',
                component: ComponentCreator('/documentation/docs/third/page-2', '882'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/primary/first/page-1',
                component: ComponentCreator('/documentation/docs/third/primary/first/page-1', '144'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/primary/first/page-2',
                component: ComponentCreator('/documentation/docs/third/primary/first/page-2', 'f7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/primary/first/page-3',
                component: ComponentCreator('/documentation/docs/third/primary/first/page-3', '149'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/primary/page-1',
                component: ComponentCreator('/documentation/docs/third/primary/page-1', '981'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/primary/page-2',
                component: ComponentCreator('/documentation/docs/third/primary/page-2', '7eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/primary/second/page-1',
                component: ComponentCreator('/documentation/docs/third/primary/second/page-1', '1ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/primary/second/page-2',
                component: ComponentCreator('/documentation/docs/third/primary/second/page-2', '0c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/primary/second/page-3',
                component: ComponentCreator('/documentation/docs/third/primary/second/page-3', 'f84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/primary/third/page-1',
                component: ComponentCreator('/documentation/docs/third/primary/third/page-1', 'daf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/primary/third/page-2',
                component: ComponentCreator('/documentation/docs/third/primary/third/page-2', 'a09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/secondary/first/page-1',
                component: ComponentCreator('/documentation/docs/third/secondary/first/page-1', '317'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/secondary/first/page-2',
                component: ComponentCreator('/documentation/docs/third/secondary/first/page-2', 'ebb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/secondary/first/page-3',
                component: ComponentCreator('/documentation/docs/third/secondary/first/page-3', '3e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/secondary/second/page-1',
                component: ComponentCreator('/documentation/docs/third/secondary/second/page-1', '66c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/secondary/second/page-2',
                component: ComponentCreator('/documentation/docs/third/secondary/second/page-2', 'f17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/secondary/second/page-3',
                component: ComponentCreator('/documentation/docs/third/secondary/second/page-3', 'de0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/secondary/third/page-1',
                component: ComponentCreator('/documentation/docs/third/secondary/third/page-1', '3f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/secondary/third/page-2',
                component: ComponentCreator('/documentation/docs/third/secondary/third/page-2', '653'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/secondary/third/page-3',
                component: ComponentCreator('/documentation/docs/third/secondary/third/page-3', '8b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/third/first/page-1',
                component: ComponentCreator('/documentation/docs/third/third/first/page-1', '8d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/third/first/page-2',
                component: ComponentCreator('/documentation/docs/third/third/first/page-2', '41b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/third/first/page-3',
                component: ComponentCreator('/documentation/docs/third/third/first/page-3', '5b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/third/second/page-1',
                component: ComponentCreator('/documentation/docs/third/third/second/page-1', 'c26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/third/second/page-2',
                component: ComponentCreator('/documentation/docs/third/third/second/page-2', 'b1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/third/third/page-1',
                component: ComponentCreator('/documentation/docs/third/third/third/page-1', '711'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/third/third/third/page-2',
                component: ComponentCreator('/documentation/docs/third/third/third/page-2', '6ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/tokens',
                component: ComponentCreator('/documentation/docs/tokens', '8ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/docs/working_example',
                component: ComponentCreator('/documentation/docs/working_example', '1e5'),
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
    path: '/documentation/',
    component: ComponentCreator('/documentation/', '4a1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
