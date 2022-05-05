import Home from './Page/HomePage/Home';
import Board from './Page/BoardPage/Board';

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/board/:id',
		component: Board,
	},
];

export default routes;