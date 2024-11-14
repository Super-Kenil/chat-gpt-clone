"use client"
import type { ChildrenType } from '@/types'
import { SidebarProvider } from './ui/sidebar'

const AppProvidersWrapper = ({ children }: ChildrenType) => {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  )
}

export default AppProvidersWrapper