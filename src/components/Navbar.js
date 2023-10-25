import logo from '../assets/hyperboost logo 1.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
      <div className='flex items-center ml-72'>
        <img src={logo} className='w-11 mr-2' alt='logo' />
        <div className='text-secondary01 text-lg font-bold font'>Hyperboost</div>
      </div>
      <div className='flex items-center'>
        <ul className='flex flex-row justify-end mr-16 pr-60'>
          <li className='px-5 py-2 text-secondary01 '>Home</li>
          <li className='px-5 py-2 text-secondary01 '>Blog</li>
          <li className='px-5 py-2 text-secondary01 '>Case Studies</li>
        </ul>
        <button className='bg-primary03 text-white px-4 py-2 rounded-md font-semibold mr-40'>
            Get Started
        </button>
      </div>
    </div>
  )
}

export default Navbar