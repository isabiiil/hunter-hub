import React from 'react'

export default function Item({text}) {
  const styles = {
    container: {
      height: '128px',
      width: '128px',
      border: 'solid 1px black',
      
    },
    icon: {
      width: '100px',
      height: '100px',
      margin: '14px',
    },
  }
  
  return (
    <div style={styles.container}>
      {/* <img src="https://source.unsplash.com/120x120/" style={styles.icon} /> */}
      <p>{text}</p>
    </div>
  )
}