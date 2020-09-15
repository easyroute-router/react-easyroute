import React, {useEffect, useState} from "react";
import MarkdownIt from "markdown-it";

function MarkdownPage(props: any) {
    let [content, setContent] = useState('')

    useEffect(() => {
        getPageContent()
    }, [props.currentRoute.params.slug])

    const md = new MarkdownIt()

    const getPageContent = async () => {
        const content = props?.currentRoute?.meta?.pageText ?? 'loading...'
        setContent(md.render(content))
    }
    return <div dangerouslySetInnerHTML={{__html: content}} />
}

export { MarkdownPage }