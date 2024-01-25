import { relative } from "path"

const Toggleable = (props: any) => {
  const hideWhenVisible = (props.visible) ? { display: 'none' } : {}
  const showWhenVisible = (props.visible) ? {} : { display: 'none' }
  return (
    <div>
      {/* Section header */}
      <div className="">
      {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
        <h1 className="h2 mb-0 pb-0" role="button" onClick={props.toggleVisibility}>{props.topic}</h1>
      </div>
      {/* <div style={hideWhenVisible}>
        <button onClick={props.toggleVisibility}>View</button>
      </div> */}
      <div style={showWhenVisible}>       
        {props.children}
      </div>
    </div>
  )
}

export default Toggleable