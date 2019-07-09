<template>
  <div class="balmui-container">
    <template v-if="noLayout">
      <router-view></router-view>
    </template>
    <template v-else>
      <!-- header -->
      <ui-top-app-bar class="balmui-head" contentSelector=".balmui-body" navId="balmui-menu">
        <router-link to="/" :class="['catalog-title', $themeColor('on-primary')]">Balm Scroll</router-link>
        <template #toolbar="{ itemClass }">
          <a :class="itemClass" href="https://github.com/balmjs/balm-scroll">
            <svg-github></svg-github>
          </a>
        </template>
      </ui-top-app-bar>
      <!-- content -->
      <main class="balmui-body">
        <ui-dismissible-drawer v-model="open" class="balmui-menu" menuSelector="#balmui-menu">
          <ui-drawer-content>
            <ui-list-nav class="catalog-list">
              <template #default="{ itemClass, activeClass }">
                <h3 :class="$textColor('primary', 'light')">Guide</h3>
                <router-link
                  :class="[itemClass, $textColor('primary', 'light')]"
                  to="/"
                >Introduction</router-link>
                <h3 :class="$textColor('primary', 'light')">Demos</h3>
                <template v-for="(item, index) in menu">
                  <router-link
                    :key="`item${index}`"
                    :class="[itemClass, $textColor('primary', 'light')]"
                    :to="{ name: item.name }"
                  >{{ item.path }}</router-link>
                </template>
              </template>
            </ui-list-nav>
          </ui-drawer-content>
        </ui-dismissible-drawer>

        <div :class="[$tt('body1'), 'balmui-content']">
          <div :class="$tt('body2')">
            <router-view></router-view>
          </div>
        </div>
      </main>
    </template>
  </div>
</template>

<script>
import SvgGithub from '@/components/github';
import menu from '@/routes/demos';

export default {
  components: {
    SvgGithub
  },
  data() {
    return {
      menu,
      open: false
    };
  },
  computed: {
    noLayout() {
      return /^demos.*/.test(this.$route.name);
    }
  },
  mounted() {
    this.open = window.innerWidth >= 1024;

    window.addEventListener('balmResize', () => {
      this.open = window.innerWidth >= 1024;
    });
  }
};
</script>
