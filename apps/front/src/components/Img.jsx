function Img({ src, alt, className, imgClassName }) {
    return (
        <div className={className}>
            <img src={src} alt={alt} className={`w-full h-auto ${imgClassName}`} />
        </div>
    );
}

export default Img;