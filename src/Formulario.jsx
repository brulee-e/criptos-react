import React from 'react'
import styled from '@emotion/styled'

const InputSubmit = styled.input`

`

const Formulario = () => {
  return (
    <form>
        <InputSubmit 
            type="submit" 
            value="Cotizar"
        />
    </form>
  )
}

export default Formulario