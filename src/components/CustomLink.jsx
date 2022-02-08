import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function CustomLink({children, extraClass, to, ...props}) {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })
  return (
    <Link 
      className={`${ match ? 'is-active ':'' }${extraClass}`}
      to={to}
      {...props}>
      {children}
    </Link>
  )
}

export default CustomLink
