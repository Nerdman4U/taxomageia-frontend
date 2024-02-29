import rank from '@/lib/interfaces/taxon.interface'
const TaxonPreviewListItem = ({name, taxon_rank, identifier, handleSelectRankClick}: {name: string, taxon_rank: string, identifier: string, handleSelectRankClick: any}) => {
  return <div className="text-left inline md:pr-4"><a role="button" onClick={handleSelectRankClick} id={identifier}>{name}({taxon_rank})</a> </div>
}

export default TaxonPreviewListItem