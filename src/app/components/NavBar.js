import BtnTheme from './BtnTheme';

export default function NavBar() {
    //TODO: add more options on NavBar (exemple: system default theme, other themes etc.)
    return (
        <header className='flex items-center w-screen h-10 bg-[--color-obj]'>
            <ul className='flex ml-3 gap-5 flex-row text-white'>
                <li><h1 className='text-[--color-text] font-[LoveYaLikeSister] text-lg'>Random Math Operation</h1></li>
                <li><BtnTheme /></li>
            </ul>
        </header>
    )
}