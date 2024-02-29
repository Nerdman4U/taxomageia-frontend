import { breadcrumb } from "@/lib/features/studio/breadcrumbs/breadcrumb.type"
import { useSelector, useDispatch } from 'react-redux'
import { TState } from "@/lib/store"
import { pop } from "@/lib/features/studio/breadcrumbs/reducer"

const Breadcrumbs = () => {
  const dispatch = useDispatch()
  const breadcrumbs = useSelector((state: TState) => state.breadcrumbs)

  const handleBreadcrumbClick = (e: React.MouseEvent) => {
    console.log('handleBreadcrumbClick()', e.target)
    e.preventDefault()
    dispatch(pop())
  }

  return <p>{breadcrumbs.flatMap(
    (t: breadcrumb, i: number) => [
      (i ? [' > '] : []), <span key={i}><a href="" onClick={handleBreadcrumbClick}>{t.name}</a></span>]
  )}</p>
}

export default Breadcrumbs

