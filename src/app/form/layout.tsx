import ParticlesComponentBounce from '@/utils/particlesBouces'
import React from 'react'

interface Props {
  children: React.ReactNode
}
export default function layout({ children }: Props) {
  return <>
  <ParticlesComponentBounce/>
  {children}
  </>
}
