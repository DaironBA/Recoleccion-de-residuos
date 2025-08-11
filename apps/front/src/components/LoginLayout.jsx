function LoginLayout({children, image, imagePhrase}){
    return (
// screen
    <div className="h-screen w-screen flex justify-center items-center">

      {/* content */}
      <div className="absolute grid grid-cols-2 w-full h-full -z-10">
        <div className="bg-white"></div>
        <div className="bg-alternative-default"></div>
      </div>
      <div className="grid grid-cols-2 h-full w-full max-h-[700px] max-w-[700px]">
        <div className="bg-white flex flex-col pt-24">
          {children}
        </div>

        {/* Right */}
        <div className="bg-alternative-default p-6 flex flex-col pt-24 items-center">
          <div className="bg-white border border-gray-700 rounded-xl flex flex-col items-center p-4">
            {image}
            <p className="text-xs text-center">{imagePhrase}</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default LoginLayout;