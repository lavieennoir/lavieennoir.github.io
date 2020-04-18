import Home from "../pages/Home";

const routes = [{ path: "/", component: Home }];

export default routes;

export const pathList = routes.map(({ path }) => path);
