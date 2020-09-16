import React, { ReactElement } from 'react'

function PlaygroundPage(props: any): ReactElement {
  const { param1, param2 } = props.currentRoute.params
  return (
    <article>
      <h2>Playground</h2>
      <p>
        This is <code>{param1}</code> page that shows you how <code>{param2}</code> are working.
      </p>
      <p>Try edit parts of url on this page in your address bar.</p>
      <div>
        <div>
          Path params
          <pre>{JSON.stringify(props.currentRoute.params, null, 2)}</pre>
        </div>
        <div>
          Query
          <pre>{JSON.stringify(props.currentRoute.query, null, 2)}</pre>
        </div>
      </div>
    </article>
  )
}

export default PlaygroundPage
