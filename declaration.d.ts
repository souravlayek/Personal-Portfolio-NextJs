// declaration.d.ts
declare module '*.scss' {
  const content: Record<string, string>
  export default content
}
declare module '*.css' {
  const content: Record<string, string>
  export default content
}
declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any
  export default content
}

declare interface projectItem {
  title: string
  about: string
  challenges: string
  image: string
  small_details: string
  tech_used: string[]
  type: 'mobile' | 'web' | 'other'
}

declare interface skillData {
  title: string
  value: number
}

declare interface experienceItem {
  visibility_index: number
  about: string
  additional_details: string
  end_time: string
  start_time: string
  title: string
  worked_for: string
}
