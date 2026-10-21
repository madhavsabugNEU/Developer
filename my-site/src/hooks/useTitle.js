import { useEffect } from 'react'

// Sets the browser tab title for a page.
export default function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · Madhav Sabu` : 'Madhav Sabu: Data Science & Business'
  }, [title])
}
