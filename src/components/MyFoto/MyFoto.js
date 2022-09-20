import React from 'react';
import foto from '../../images/img1.jpg';

function MyFoto() {
  const styles = {
    container: {
      height: "100%",
      overflow: "hidden",
      display: "flex",
    },
    wrapper: {
      objectFit: "cover",
      objectPosition: "center"
    }
  }
  
  return (
    <div style={styles.container}>
      <img src={foto} style={styles.wrapper} alt='Junior frontend developer' width="900px" />
    </div>
  )
}

export default MyFoto