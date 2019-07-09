import Scroll2D from '@/views/demos/2d-scroll';
import Barebone from '@/views/demos/barebone';
import BounceEasing from '@/views/demos/bounce-easing';
import Horizontal from '@/views/demos/horizontal';
import Minimap from '@/views/demos/minimap';
import Infinite from '@/views/demos/infinite';
import Parallax from '@/views/demos/parallax';
import Probe from '@/views/demos/probe';
import Pull2refresh from '@/views/demos/pull-to-refresh';
import Scrollbars from '@/views/demos/scrollbars';
import Simple from '@/views/demos/simple';
import Snap from '@/views/demos/snap';
import StyledScrollbars from '@/views/demos/styled-scrollbars';
import Zoom from '@/views/demos/zoom';

export default [
  {
    path: '2d-scroll',
    name: 'demos.2d-scroll',
    component: Scroll2D
  },
  {
    path: 'barebone',
    name: 'demos.barebone',
    component: Barebone
  },
  {
    path: 'bounce-easing',
    name: 'demos.bounce-easing',
    component: BounceEasing
  },
  {
    path: 'horizontal',
    name: 'demos.horizontal',
    component: Horizontal
  },
  {
    path: 'minimap',
    name: 'demos.minimap',
    component: Minimap
  },
  {
    path: 'infinite',
    name: 'demos.infinite',
    component: Infinite
  },
  {
    path: 'parallax',
    name: 'demos.parallax',
    component: Parallax
  },
  {
    path: 'probe',
    name: 'demos.probe',
    component: Probe
  },
  {
    path: 'pull2refresh',
    name: 'demos.pull2refresh',
    component: Pull2refresh
  },
  {
    path: 'scrollbars',
    name: 'demos.scrollbars',
    component: Scrollbars
  },
  {
    path: 'simple',
    name: 'demos.simple',
    component: Simple
  },
  {
    path: 'snap',
    name: 'demos.snap',
    component: Snap
  },
  {
    path: 'styled-scrollbars',
    name: 'demos.styled-scrollbars',
    component: StyledScrollbars
  },
  {
    path: 'zoom',
    name: 'demos.zoom',
    component: Zoom
  }
];
