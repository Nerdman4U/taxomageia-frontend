import rank from '@/interfaces/taxon.interface'
const TaxonPreviewListItem = ({name, identifier, handleSelectRankClick}: {name: string, identifier: string, handleSelectRankClick: any}) => {
  return <div className="text-left inline md:pr-4"><a onClick={handleSelectRankClick} id={identifier}>{name} ({identifier})</a></div>
}

export default TaxonPreviewListItem