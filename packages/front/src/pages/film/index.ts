import { RouteInstance } from 'atomic-router';
import { createRouteView } from 'atomic-router-react';
import * as React from 'react';
import { pageModel } from './model';

const Page = React.lazy(() => import('./page'));

export const FilmPage = {
	route: pageModel.currentRoute,
	view: createRouteView({
		view: Page as React.ComponentType<any>,
		route: pageModel.authorizedRoute as RouteInstance<any>,
	}),
};
