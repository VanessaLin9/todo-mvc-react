
export default function useDBclick(onClick, onDoubleClick){
  let clicks = []
  let timeOut;

  return (event, ...rest) => {
    clicks.push(new Date().getTime())
    console.log(clicks)
    clearTimeout(timeOut)
    timeOut = setTimeout(()=>{
      if(clicks.length > 1 && clicks[clicks.length-1] - clicks[clicks.length-2] < 250) {
        if (onDoubleClick) { 
          onDoubleClick(event, ...rest)
        } 
      } else if (onClick) {
        onClick(event, ...rest)
      }
      clicks= []
    }, 250)
  }
}

 