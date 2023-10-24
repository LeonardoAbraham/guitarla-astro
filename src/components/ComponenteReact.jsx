import React, { useState } from 'react'


function ComponenteReact() {
    const [cliente, setCliente] = useState('Leonardo')
    return (
        <div>{cliente}</div>
    )
}

export default ComponenteReact