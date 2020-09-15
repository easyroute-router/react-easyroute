import Router from "../react-easyroute";
import {fetchSlugMarkdown} from "./utils";
import nProgress from "nprogress";

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import(/* webpackChunkName: "main-layout" */ '../Layout/MainLayout'),
            children: [
                {
                    path: '',
                    component: () => import(/* webpackChunkName: "index-page" */ '../Pages/Index')
                },
                {
                    name: 'Page',
                    path: 'page/:slug',
                    component: () => import(/* webpackChunkName: "markdown-page" */ '../Pages/Markdown')
                },
                {
                    path: 'playground/:param1/:param2',
                    component: () => import(/* webpackChunkName: "playground" */ '../Pages/Playground')
                },
                {
                    path: '(.*)',
                    component: () => import(/* webpackChunkName: "not-found" */ '../Pages/NotFound')
                }
            ]
        },
        {
            path: '(.*)',
            component: () => import(/* webpackChunkName: "main-layout" */ '../Layout/MainLayout'),
            children: [
                {
                    path: '(.*)',
                    component: () => import(/* webpackChunkName: "not-found" */ '../Pages/NotFound')
                }
            ]
        }
    ]
})

router.beforeEach = async (to, from, next) => {
    nProgress.start()
    if (to.name === 'Page') {
        console.log(`[BeforeEachHook]: fetching page data`)
        const { slug } = to.params
        try {
            to.meta.pageText = await fetchSlugMarkdown(slug)
            const titlePart = to.meta.pageText.split('\n')[0].replace(/^(#+ )/, '')
            document.title = titlePart
                ? `${titlePart} | React Easyroute`
                : 'React Easyroute'
            next()
        } catch (e) {
            console.error(e)
            next('/not-found')
        }
        next()
    } else {
        document.title = to.meta.title
            ? `${to.meta.title} | React Easyroute`
            : 'React Easyroute'
        next()
    }
}

router.afterEach = () => {
    nProgress.done()
}

export default router