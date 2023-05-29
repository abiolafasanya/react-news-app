import { Box } from '@mui/material'
import React from 'react'

type Props = {
    children: React.ReactNode
}
const Container = ({children}: Props) => {
  return (
    <Box className="flex flex-col sm:w-full md:w-3/4 mx-auto">
        {children}
    </Box>
  )
}

export default Container