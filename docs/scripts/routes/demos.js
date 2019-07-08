import Infinite from '@/views/demos/infinite';
import Probe from '@/views/demos/probe';
import Pull2refresh from '@/views/demos/pull-to-refresh';
import Simple from '@/views/demos/simple';
import Zoom from '@/views/demos/zoom';

export default [
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
