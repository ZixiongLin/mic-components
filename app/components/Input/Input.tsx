export const Input = ({id, ...props}:{id?:string }) =>{
    return <>
        <input  className=" px-4 py-2 bg-white border rounded-lg border-neutrals-200" 
            type="text" 
            id={id}
            placeholder="input"
            {...props}
            
        />
    </>
}