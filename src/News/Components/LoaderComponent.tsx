

export const LoaderComponent = () => {
  return (
    <div  className="bg-white cursor-pointer hover:scale-[1.01] rounded-lg shadow-md w-full px-1 py-3 border-2 flex flex-col gap-1 items-center justify-center">

        <div className="w-[90%] flex flex-col gap-3 justify-center items-center md:flex-row rounded-lg">
          <div className="bg-center object-cover bg-no-repeat h-[150px] w-[100%] rounded-lg md:w-[50%] bg-gray-300" />
          <div className="w-[50%] h-[80%] bg-gray-300 rounded-lg"></div>
        </div>
        
        <div className="flex flex-col justify-center w-[90%] h-auto mt-2" >
            <div className="w-[100%] h-[90px] bg-gray-300 rounded-lg"></div>
            <div className="mt-2 w-[20%] h-[15px] bg-gray-300 rounded-lg" ></div>
        </div>

    </div>
  )
}
