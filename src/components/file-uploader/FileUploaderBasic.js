import { useState } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'

const FileUploaderBasic = ({ setImgs, maxFiles = 1 }) => {
  const uppy = new Uppy({
    meta: { type: 'avatar' },
    restrictions: { maxNumberOfFiles: maxFiles },
    autoProceed: true
  })

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    setImgs((prev) => [...prev, file.name])
  })

  const locale = {
    strings: {
      dropHereOr: 'Deja caer la foto aqui o %{browse}',
      browse: 'seleccionala'
    }
  }
  return (
    <div className="mb-2">
      <DragDrop locale={locale} uppy={uppy} />
    </div>
  )
}

export default FileUploaderBasic
