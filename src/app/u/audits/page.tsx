import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div
        style={{
        width: '100%',
        height: '100vh',
        display: 'flex'
        }}
    >
        <div
            style={{
                backgroundColor: '#555555',
                flex: '1',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1>Audits</h1>
        </div>
    </div>
  )
}

export default Page