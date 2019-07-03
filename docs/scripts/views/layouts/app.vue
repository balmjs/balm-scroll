<template>
  <div class="container">
    <template v-if="noLayout">
      <router-view></router-view>
    </template>
    <template v-else>
      <ui-top-app-bar contentSelector=".demo-main">Balm Scroll</ui-top-app-bar>

      <main class="demo-main">
        <ui-permanent-drawer>
          <ui-drawer-header>
            <ui-drawer-title>标题</ui-drawer-title>
          </ui-drawer-header>
          <ui-drawer-content>
            demos
            <!-- <ui-list-nav>
            <template v-for="(item, index) in menu">
              <ui-list-divider v-if="item === '-'" :key="`divider-${index}`"></ui-list-divider>
              <template v-else>
                <ui-list-group-subheader
                  v-if="item.subheader"
                  :key="`subheader-${index}`"
                >{{ item.subheader }}</ui-list-group-subheader>
                <ui-item-a
                  v-for="(subItem, subIndex) in item.items"
                  :key="`item-${index}-${subIndex}`"
                  :firstIcon="subItem.icon"
                >{{ subItem.name }}</ui-item-a>
              </template>
            </template>
            </ui-list-nav>-->
          </ui-drawer-content>
        </ui-permanent-drawer>

        <div :class="[$tt('body1'), 'demo-content']">
          <div :class="$tt('body2')">
            <router-view></router-view>
          </div>
        </div>
      </main>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    noLayout() {
      return /^demos.*/.test(this.$route.name);
    }
  }
};
</script>
