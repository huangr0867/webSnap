import { logo, gh_icon, li_icon } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="sumz_logo"
            className="w-28 object-contain"/>
            <div>
                <button type="button" 
                onClick={() => window.open('https://www.linkedin.com/in/ryanyukihuang/')}
                className='nav_icon mr-2'>
                    <img src={li_icon}/>
                </button>
                <button type="button" 
                onClick={() => window.open('https://github.com/huangr0867')}
                className='nav_icon'>
                    <img src={gh_icon}/>
                </button>
            </div>
        </nav>

        <h1 className="head_text">
            Summarize Articles with <br className="max-md:hidden"/>
            <span className="orange_gradient">webSnap</span>
        </h1>
        <h2 className="desc">
        ⚡ Lightning-fast summary of websites, papers, and articles using <b>OpenAI GPT-4</b>
        </h2>
    </header>
  )
}

export default Hero