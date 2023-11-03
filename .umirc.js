/*
 * Author: yuanzhirong
 * Date: 2021-06-03 17:13:49
 * LastEditors: yuanzhirong
 * LastEditTime: 2021-06-04 14:25:07
 * Description: 
 */

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/simple', component: '../pages/simple' },
        { path: '/my', component: '../pages/myformpage' },
        { path: '/mynew', component: '../pages/myFormFieldPage' }
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: 'example',
        dll: true,
        locale: {
          enable: true,
          default: 'en-US',
        },
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  proxy: {
    '/gateway': {
      target: 'http://gateway',
      changeOrigin: true,
    },
  },
};
