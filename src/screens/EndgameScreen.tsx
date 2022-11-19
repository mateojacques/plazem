import React, { useContext } from 'react'
import { TableContext } from '../contexts/tableContext'

const EndgameScreen = () => {
    const { endMessage } = useContext(TableContext);

  return (
    <section>{endMessage}</section>
  )
}

export default EndgameScreen