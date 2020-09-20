import React from 'react'

function Footer({children, ...restProps}) {
  return (
    <container {...restProps}>
      {children}
    </container>
  )
}

Footer.Row = function footerRow({children, ...restProps}) {
return (<Row {...restProps}>{children}</Row> )
}

export default Footer
