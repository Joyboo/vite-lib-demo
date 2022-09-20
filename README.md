### vite lib mode demo

> npm install

> npm run build

测试： 浏览器运行index.html文件，打开控制台即可调试

- 此demo演示将src内容赋值为一个全局变量（window下），打包为一个js文件，第三方通过 `<script src>` 方式引入并使用此变量
- 支持引入 Element、Ant Design Vue、Vant 等UI框架
- 各UI框架无需amount的组件可直接使用，如Modal、Drawer等等

#### link

- [vite库模式](https://cn.vitejs.dev/config/build-options.html#build-lib)
