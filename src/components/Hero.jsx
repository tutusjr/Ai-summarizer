import {logo} from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

            <button className='black_btn' type="button" onClick={()=> window.open('')}>Github</button>
        </nav>
        <h1 className='head_text'>
            Summirize Articles with <br className='max-md:hidden'/>
            <span className='orange_gradient'>OpenAi GPT-4</span>
        </h1>
        <h2 className="decs">Simplify your reading with Summize, an open-source article summarizer that transforms lengthy aricles into clear and concise summaries</h2>
    </header>
  )
}

export default Hero