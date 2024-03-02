import metadata from './metadata.json' assert { type: 'json' }

export const find = (identifier: string) => {
  console.log('find() identifier:', identifier)
  return metadata.find((m: any) => {
    return m.identifier === identifier
  })
}
