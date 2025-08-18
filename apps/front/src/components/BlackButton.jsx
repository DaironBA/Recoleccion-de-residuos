function BlackButton({ text, className, onClick = () => {} }){
    return (
        <button type="submit" className={`bg-black text-white text-xs py-4 mt-8 w-full cursor-pointer hover:bg-black/80 ${className}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default BlackButton;