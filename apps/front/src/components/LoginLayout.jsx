function LoginLayout({children, image, imagePhrase}){
    return (
// screen
    <div className="relative min-h-screen flex justify-center items-center mb-8">

      {/* content */}
      <div className="fixed top-0 grid grid-cols-2 w-full h-screen -z-10">
        <div className="bg-alternative-default md:bg-white"></div>
        <div className="bg-alternative-default"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full max-h-[700px] max-w-[700px]">
        <div className="bg-white flex flex-col w-[75%] pl-4 md:pl-0 md:w-full mx-auto pt-24">
          {children}
        </div>

        {/* Right */}
        <div className="hidden md:flex bg-alternative-default p-6 flex-col pt-24 items-center">
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