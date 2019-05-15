import React from 'react'

import Stats from './solution/Stats'
import { bg, fg, headerHeight } from '../lib/constants'

const Header = () => {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: headerHeight,
        background: bg,
        color: fg,
      }}
    >
      <div style={{ 
        maxWidth: 1260,
        height: '100%',
        margin: '0 auto',
        padding: '0 25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <h1 style={{ fontSize: 48 }}>Flood Fill</h1>
        <Stats />
      </div>
    </header>
  )
}

export default Header
