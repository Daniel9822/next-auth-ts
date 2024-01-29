import ParticlesComponent from '@/utils/particles'

interface Props {
  children: React.ReactNode
}

export default function layout({ children }: Props) {
  return (
    <div>
      <ParticlesComponent />
      {children}
    </div>
  )
}
