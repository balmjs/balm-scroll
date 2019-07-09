import Scroll2D from '@/views/demos/2d-scroll';
import Barebone from '@/views/demos/barebone';
import BounceEasing from '@/views/demos/bounce-easing';
import Infinite from '@/views/demos/infinite';
import Probe from '@/views/demos/probe';
import Pull2refresh from '@/views/demos/pull-to-refresh';
import Simple from '@/views/demos/simple';
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
    path: 'infinite',
    name: 'demos.infinite',
    component: Infinite
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
    path: 'simple',
    name: 'demos.simple',
    component: Simple
  },
  {
    path: 'zoom',
    name: 'demos.zoom',
    component: Zoom
  }
];
