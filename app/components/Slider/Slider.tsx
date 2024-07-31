export const Slider =({
    min=0,
    max=100,
    ...props
}:{
    min?:number,
    max?:number
}) =>{
    return <input type="range" min={min} max={max} className="w-full" {...props}/>
}