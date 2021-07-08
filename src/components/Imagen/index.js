import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import styles from './styles.module.css'

const Imagen = ({ src, alt, children }) => {
  const { ref, inView } = useInView()
  const [load, setLoad] = useState(false)
  const [tall, setTall] = useState(false)

  useEffect(() => {
    if (inView) setLoad(true)
  }, [inView])

  const onLoad = ({ w, h }) => setTall(h > w)

  return (
    <div ref={ref} className={tall ? styles.imageTaller : styles.imageWider}>
      {children}
      {load ? (
        <img
          src={src}
          alt={alt}
          onLoad={({ target: { naturalWidth, naturalHeight } }) => {
            onLoad({ w: naturalWidth, h: naturalHeight })
          }}
        />
      ) : null}
    </div>
  )
}

export default Imagen
