import { useState } from 'react'
import { Drawer as Drwr } from '@material-ui/core'

const Drawer = props => {
  return (
    <Drwr anchor='top' open={props.state.top} onClose={props.toggleDrawer('top', false)}>
      {props.list('top')}
    </Drwr>
  )
}

export default Drawer
