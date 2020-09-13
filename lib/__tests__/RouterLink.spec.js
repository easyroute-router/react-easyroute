import { render } from '@testing-library/svelte'
import RouterLink from '../svelte-components/RouterLink.svelte'
import RouterOutlet from '../svelte-components/RouterOutlet.svelte'
import Router from '../dist'

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'test',
      component: RouterLink
    }
  ]
})

describe('RouterLink.svelte', () => {
  it('Should render component correctly', () => {
    const { container } = render(RouterOutlet, {
      props: {
        router
      }
    })
    expect(container.querySelector('.easyroute-outlet')).toBeTruthy()
  })
})
