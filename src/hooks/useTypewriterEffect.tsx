import { useEffect, useState } from 'react'

const useTypewriterEffect = (words: string[], delay = 100) => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const currentWord = words[wordIndex] || ''
    let typingTimeout: ReturnType<typeof setTimeout>
    let deletingTimeout: ReturnType<typeof setTimeout>

    if (isDeleting) {
      deletingTimeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1))
        if (text === '') {
          setWordIndex((prevValue) => {
            if (prevValue === words.length - 1) {
              return 0
            } else {
              return prevValue + 1
            }
          })
          setIsDeleting(false)
        }
      }, delay)
    } else {
      typingTimeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1))
        if (currentWord === text) {
          setTimeout(() => {
            setIsDeleting(true)
          }, 2000)
        }
      }, delay)
    }

    return () => {
      clearTimeout(typingTimeout)
      clearTimeout(deletingTimeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, wordIndex])

  return text
}

export default useTypewriterEffect
