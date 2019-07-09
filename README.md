# Balm Scroll

> Smooth scrolling for Vue.js

## 0. What is BalmScroll?

iScroll + Vue.js

## 1. Usage

### 1.1 Edit `my-project/app/scripts/main.js`

```js
import Vue from 'vue';
import BalmScroll from 'balm-scroll';

Vue.use(BalmScroll);
```

### 1.2 Edit a vue component: `my-project/app/scripts/views/demos/hello.vue`

```html
<template>
  <ui-scroll :options="options">
    <!-- Content -->
  </ui-scroll>
</template>
```

```js
export default {
  data() {
    return {
      options: {
        mouseWheel: true
      }
    };
  }
};
```

## 2. Configuring

### 2.1 The many faces of [iScroll](https://github.com/cubiq/iscroll/#the-many-faces-of-iscroll)

- `<ui-scroll>`
- `<ui-scroll-lite>`
- `<ui-scroll-probe>`
- `<ui-scroll-zoom>`
- `<ui-scroll-infinite>`

> Tips: You can [pick one](https://github.com/cubiq/iscroll/#the-many-faces-of-iscroll) component that better suits your need

### 2.2 Options

- See [here](https://github.com/cubiq/iscroll/#configuring-the-iscroll)

## 3. Props, Slots and Events

### 3.1 Props

| Name               | Type       | Default                  | Description          |
| ------------------ | ---------- | ------------------------ | -------------------- |
| `options`          | `object`   | `{}`                     | iScroll options      |
| `pullDownLabel` ⚠️ | `string`   | `'Pull down to refresh'` | Pull down label      |
| `pullUpLabel` ⚠️   | `string`   | `'Pull up to load more'` | Pull up label        |
| `releaseLabel` ⚠️  | `string`   | `'Release to update'`    | Release label        |
| `loadingLabel` ⚠️  | `string`   | `'Loading...'`           | Loading label        |
| `pullDownY` ⚠️     | `number`   | `5`                      | Pull down Y position |
| `pullAction` ⚠️    | `function` | `null`                   | Scroll action        |
| `pullDownAction`   | `function` | `null`                   | Pull down action     |
| `pullUpAction`     | `function` | `null`                   | Pull up action       |
| `refreshTimeout`   | `number`   | `1000`                   | Refresh timeout      |

> ⚠️: Applicable only for the `<ui-scroll-probe>`

- **Special function**

```html
<ui-scroll ref="iScroll"></ui-scroll>
```

```js
export default {
  methods: {
    loadMore() {
      // ...
      this.$refs.iScroll.refresh();
    }
  }
};
```

### 3.2 Slots

| Name               | Description                                        |
| ------------------ | -------------------------------------------------- |
| `default`          | The default slot holds the scroll child components |
| `pullDownIcon` ⚠️  | Custom pull down icon                              |
| `pullDownLabel` ⚠️ | Custom pull down label                             |
| `pullUpIcon` ⚠️    | Custom pull up icon                                |
| `pullUpLabel` ⚠️   | Custom pull up label                               |

> ⚠️: Applicable only for the `<ui-scroll-probe>`

## 4. Special Thanks to

- [BalmJS](https://balmjs.com/)
- [Vue.js](https://vuejs.org/)
- [iScroll](https://github.com/cubiq/iscroll/)
