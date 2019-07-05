import Simple from '@/views/demos/simple';
import Zoom from '@/views/demos/zoom';
import Infinite from '@/views/demos/infinite';
import Pull2refresh from '@/views/demos/pull-to-refresh';

export default [
  {
    path: 'simple',
    name: 'demos.simple',
    component: Simple
  },
  {
    path: 'zoom',
    name: 'demos.zoom',
    component: Zoom
  },
  {
    path: 'infinite',
    name: 'demos.infinite',
    component: Infinite
  },
  {
    path: 'pull2refresh',
    name: 'demos.pull2refresh',
    component: Pull2refresh
  }
];
