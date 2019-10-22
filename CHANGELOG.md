# BalmScroll ChangeLog

## 0.5.2 (2019.10.22)

### New Features

- update `pullUp` and `pullDown` actions
  - `pullDownAction(refresh: Function)`
  - `pullUpAction(refresh: Function)`

```html
<ui-scroll ref="iScroll" :pullUpAction="pullUpAction"></ui-scroll>
```

```js
export default {
  methods: {
    firstLoaded() {
      // Update here your DOM

      this.$refs.iScroll.refresh();
    },
    pullUpAction(refresh) {
      // Update here your DOM

      setTimeout(function() {
        refresh();
      }, 0);
    }
  }
};
```

### Breaking Change

- remove config: `refreshTimeout`

---

## 0.5.1 (2019.10.21)

### New Config

- add `debug`: `boolean` prop for development

### Bugfix

- fix `pullUpLabel` watch status

---

## 0.5.0 (2019.08.13)

### New Config

- add `scrollEnabled`: `boolean` prop for load more data controls

---

## 0.4.0 (2019.07.18)

### New Config

- add `excludes`: `array` prop

### Bugfix

- fix `transition` style bug
- fix `touchmove` event bug

---

## 0.3.0 (2019.07.12)

- demo
