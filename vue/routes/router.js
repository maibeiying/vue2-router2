import Foo from '../components/foo';
import Bar from '../components/bar';

module.exports = [
	{ path: '/foo/:id', component: Foo },
  	{ path: '/bar', component: Bar }
]