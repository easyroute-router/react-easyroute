export function fetchSlugMarkdown(slug: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', `/pages/${slug}.md`, true)

    xhr.send() // (1)

    xhr.onreadystatechange = function (): void {
      // (3)
      if (xhr.readyState !== 4) return

      if (xhr.status !== 200) {
        reject(xhr.statusText)
      } else {
        resolve(xhr.responseText)
      }
    }
  })
}
