import rank from '@/interfaces/taxon.interface'
const TaxonPreviewListItem = ({name, taxonRank, identifier, handleSelectRankClick}: {name: string, taxonRank: string, identifier: string, handleSelectRankClick: any}) => {
  return <div className="text-left inline md:pr-4"><a onClick={handleSelectRankClick} id={identifier}>{name}({taxonRank})</a> </div>
}

export default TaxonPreviewListItem