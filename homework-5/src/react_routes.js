import PostList from './components/PostList';
import PostSinglePage from './components/PostSinglePage';

const root_routes = [
    {
        type: "public",
        path: "/",
        component: PostList,
        exact: true
    },
    {
        type: "public",
        path: "/posts/:postid",
        component: PostSinglePage,
        exact: true
    },
    {
        type: "public",
        path: "/posts/limit/:nums",
        component: PostList,
        exact: true
    }
];

export default root_routes;
