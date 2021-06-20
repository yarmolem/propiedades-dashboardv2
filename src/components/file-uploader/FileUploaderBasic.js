import { useState } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const FileUploaderBasic = () => {
  const [img, setImg] = useState(null)

  const uppy = new Uppy({
    meta: { type: 'avatar' },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true
  })

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    setImg(preview)
  })

  const locale = {
    strings: {
      dropHereOr: 'Deja caer la foto aqui o %{browse}',
      browse: 'seleccionala'
    }
  }
  return (
    <CardBody>
      <DragDrop locale={locale} uppy={uppy} />
    </CardBody>
  )
}

export default FileUploaderBasic
