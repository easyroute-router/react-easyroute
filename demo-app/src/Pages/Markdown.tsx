import React, { ReactElement, useEffect, useState } from 'react'
import MarkdownIt from 'markdown-it'

function MarkdownPage(props: any): ReactElement {
  const [content, setContent] = useState('')

  const md = new MarkdownIt()

  const getPageContent = async (): Promise<void> => {
    const content = props?.currentRoute?.meta?.pageText ?? 'loading...'
    setContent(md.render(content))
  }

  useEffect(() => {
    getPageContent()
  }, [props])

  return <article dangerouslySetInnerHTML={{ __html: content }} />
}

export default MarkdownPage
