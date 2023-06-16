import github from '../../assets/images/github2.png'
import linkedin from '../../assets/images/linked2.png'

export const Footer = () => {
  return (
    <footer className='bg-blue-600 py-4 gap-1 w-full flex flex-col justify-center items-center'>
        <div className='flex gap-2'>
            <a href="https://github.com/Deathlezz300" target='_blank'><img className='w-5' src={github} alt="" /></a>
            <a href="https://www.linkedin.com/in/alejandro-toledo-185979226" target='_blank'><img src={linkedin} alt="" className='w-5' /></a>
        </div>
        <p className='font-bold text-white'>Developed by Alejandro Toledo</p>
        <p className='font-bold text-white'>{new Date().getFullYear()}</p>
    </footer>
  )
}
