import nada from '../../assets/images/nada.jpg'
export const NoResultsPage = () => {
  return (
    <section className="w-[100%] mt-4 flex flex-col justify-center items-center py-4">
        <img src={nada} alt="" className='w-[20%]' />
        <h2 className='font-conden text-3xl mt-6 font-bold text-center'>Sorry, there are no results for your search</h2>
    </section>
  )
}
