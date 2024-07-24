export const Check = ({...props}) => {
    return <input 
        type="checkbox" 
        className="w-4 h-4 rounded-md focus:ring-primary-900 focus:ring-1 focus:ring-offset-2 m-2"
        {...props}
    />
}