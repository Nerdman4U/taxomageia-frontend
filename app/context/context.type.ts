import { model_metadata } from '@/components/dungeon/editor.types'

export type version = {
  version: string
  features?: string[]
  issues?: string[]
  changes?: string[]
  fixed?: string[]
  next?: string[]
  notes?: string[]
}
export type template = {
  name: string
  current: string
  description: string
  licence: string
  versions: version[]
}
export type code = {
  current: string
  versions: version[]
}
export type codenames = {
  name: string
  type: string
  date: string
  backend: number
  frontend: number
  description: string
}
export type application = {
  frontend: code
  backend: code
  data: template[]
  codenames: any[]
  model_metadata: model_metadata[]
}

