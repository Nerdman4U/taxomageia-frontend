import * as types from "./editor.types"

const Breadcrumbs = ({breadcrumbs, handleClick}: {breadcrumbs: types.breadcrumb[], handleClick: any}) => {
  if (!breadcrumbs) return
  //if (breadcrumbs.length < 2) return

  return <p>{breadcrumbs.flatMap(
    (t, i) => [(i ? [' > '] : []), <span key={i}><a href="" onClick={handleClick}>{t.name}</a></span>]
  )}</p>
}

export default Breadcrumbs