import Router from "../react-easyroute";
import Test1 from "../Test1";
import Test2 from "../Test2";
import Test1_1 from "../Test1_1";
import MainLayout from "../Layout/MainLayout";

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: MainLayout,
            children: [
                {
                    path: '',
                    component: Test1
                },
                {
                    path: 'test',
                    component: Test2
                }
            ]
        }
    ]
})

export default router