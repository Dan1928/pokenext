import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'

const about = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam harum
        labore placeat temporibus quae eos itaque facilis omnis inventore
        mollitia, perspiciatis ex similique et ea. Eum suscipit molestias ex
        illum!
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="charizard"
      />
    </div>
  )
}

export default about
