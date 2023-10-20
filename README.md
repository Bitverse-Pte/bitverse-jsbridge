# 介绍

Bitverse App jsBridge API

## 📦 安装

### umd 安装

```html
<script src="https://unpkg.com/bitverse-bridge@latest"></script>
```

### cmd 安装

```bash
npm i bitverse-bridge --save

yarn add bitverse-bridge -S
```

### 🔨 使用

#### umd 使用方式

```js
// 以 script 的形式引入，之后可通过全局变量 window.bitverseBridge 访问
bitverseBridge.ready(() => {});

bitverseBridge.getUserInfo();

bitverseBridge.navigateTo(parmas);
```

##### cmd 使用方式

```js
import {
    navigateTo,
    getUserInfo
} from 'bitverse-bridge';
```

## development

```js
// 部署
yarn deploy
```

## demo url

<http://bitverse_bridge-demo.ofe.option.byops.io/>
