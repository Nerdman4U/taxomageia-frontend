import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import metadata from '../../../config/metadata.json' assert { type: 'json' }
import * as config from '@/lib/config'
import * as types from './metadata.type'
import { setModelMetadata } from './metadataReducer'

// for try with static metadata
export const find = (identifier: string) => {
  console.log('find() identifier:', identifier)
  return metadata.find((m: any) => {
    return m.identifier === identifier
  })
}


/**
 * 1. load a list of to be updated metadata models
 * 2. load metadata
 * 3. update store
 * 4. save to localforage
 */
const Metadata = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('Metadata() metadata:', metadata)
    fetch(config.metadata)
      .then(response => {
        const data = response.json() as Promise<types.model_metadata[]>
        console.log('data: ', data)

        // dispatch data to store
        dispatch(setModelMetadata(data))
      })
      .catch(e => {
        console.error(e)
      })

  }, [])

}

export default Metadata