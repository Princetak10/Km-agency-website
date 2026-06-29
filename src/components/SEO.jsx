import { useEffect } from 'react'

export default function SEO({ title, description }) {
  useEffect(() => {
    document.title = `${title} | Krishna Madhav Agency`
    const tag = document.querySelector('meta[name="description"]')
    if (tag) tag.setAttribute('content', description)
  }, [title, description])
  return null
}
