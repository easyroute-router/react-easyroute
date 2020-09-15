import Router from "../react-easyroute";
import IndexPage from "../Pages/Index";
import MainLayout from "../Layout/MainLayout";
import {NotFound} from "../Pages/NotFound";
import {MarkdownPage} from "../Pages/Markdown";
import {fetchSlugMarkdown} from "./utils";
import {PlaygroundPage} from "../Pages/Playground";

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: MainLayout,
            children: [
                {
                    path: '',
                    component: IndexPage
                },
                {
                    name: 'Page',
                    path: 'page/:slug',
                    component: MarkdownPage
                },
                {
                    path: 'playground/:param1/:param2',
                    component: PlaygroundPage
                },
                {
                    path: '(.*)',
                    component: NotFound
                }
            ]
        },
        {
            path: '(.*)',
            component: MainLayout,
            children: [
                {
                    path: '(.*)',
                    component: NotFound
                }
            ]
        }
    ]
})

router.beforeEach = async (to, from, next) => {
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

export default router