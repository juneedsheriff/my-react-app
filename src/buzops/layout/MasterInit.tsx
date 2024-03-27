import {useEffect, useState} from 'react'
import {Tab} from 'bootstrap'
import React from 'react'
import {
  MenuComponent,
  // DrawerComponent,
  // ScrollComponent,
  // ScrollTopComponent,
  // StickyComponent,
  // ToggleComponent,
  // SwapperComponent,
} from '../assets/ts/components'
import {ThemeModeComponent} from '../assets/ts/layout'

import {useLayout} from './core'

export function MasterInit() {
  const {config} = useLayout()
  const [initialized, setInitialized] = useState(false)
  const pluginsInitialization = () => {
    ThemeModeComponent.init()
    setTimeout(() => {
     
      MenuComponent.bootstrap()
       
      document.querySelectorAll('[data-bs-toggle="tab"]').forEach((tab) => {
        Tab.getOrCreateInstance(tab)
      })
    }, 500)
  }

  useEffect(() => {
    if (!initialized) {
      setInitialized(true)
      pluginsInitialization()
    }
  }, [config, initialized])

  return <></>
}
