import { useState } from 'react'
import { CopyIcon } from './Icons'

const TOKEN_RE =
  /(\/\/[^\n]*)|(\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(\b(?:const|let|var|function|return|if|else|import|from|export|default|class|extends|new|async|await|for|of|in|true|false|null|undefined|typeof|switch|case|break)\b)|(\b\d+(?:\.\d+)?\b)|(<\/?[A-Za-z][\w.]*|\/?>)|([A-Za-z_][\w-]*(?=\s*=))/g

function tokenize(code) {
  const tokens = []
  let last = 0

  for (const match of code.matchAll(TOKEN_RE)) {
    if (match.index > last) {
      tokens.push([code.slice(last, match.index), null])
    }
    let cls = 'attr'
    if (match[1] || match[2]) cls = 'comment'
    else if (match[3]) cls = 'string'
    else if (match[4]) cls = 'keyword'
    else if (match[5]) cls = 'number'
    else if (match[6]) cls = 'tag'
    tokens.push([match[0], cls])
    last = match.index + match[0].length
  }

  if (last < code.length) {
    tokens.push([code.slice(last), null])
  }

  return tokens
}

function CodeBlock({ code, lang = 'JSX' }) {
  const [copied, setCopied] = useState(false)
  const tokens = tokenize(code)

  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="codeblock">
      <div className="codeblock-bar">
        <span className="codeblock-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="codeblock-lang">{lang}</span>
        <button className="codeblock-copy" onClick={copy} type="button">
          <CopyIcon />
          {copied ? 'Nusxalandi' : 'Nusxalash'}
        </button>
      </div>
      <pre>
        <code>
          {tokens.map(([text, cls], i) =>
            cls ? (
              <span key={i} className={'tok-' + cls}>
                {text}
              </span>
            ) : (
              <span key={i}>{text}</span>
            ),
          )}
        </code>
      </pre>
    </div>
  )
}

export default CodeBlock
