<template>
  <div :class="[$tt('body1'), 'demo--home']">
    <div :class="[$tt('body2'), 'pure-docs']">
      <ui-markdown :text="docs"></ui-markdown>
    </div>
  </div>
</template>

<script>
import docs from '@/docs/intro.md';

export default {
  data() {
    return {
      docs
    };
  }
};
</script>
