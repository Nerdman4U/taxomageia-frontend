const Toggleable = (props: any) => {
  //const hideWhenVisible = (props.visible) ? { display: 'none' } : {}
  const showWhenVisible = (props.visible) ? {} : { display: 'none' }
  return (
    <div>
      {/* Section header */}
      <div>
      {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
        <h1 className="h4 mb-6 pb-0 underline" role="button" id={props.id} onClick={props.toggleVisibility}>{props.topic}</h1>
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