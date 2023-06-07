import Head from 'next/head'
import { useRef, useState } from 'react'

export default function Home() {
  const [path, setPath] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main style={{ background: 'gray' }}>
        <input
          ref={inputRef}
          type='file'
          onChange={(e) => {
            console.log('e', e)

            if (inputRef.current) {
              var file = inputRef.current.files?.[0]
              var video = document.getElementById('myvideo')
              var source = document.getElementById('videosrc')

              if (file) setPath(URL.createObjectURL(file))
            }
          }}
        />

        <video src={path}></video>
      </main>
    </>
  )
}
