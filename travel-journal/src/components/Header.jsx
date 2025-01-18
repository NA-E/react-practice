import globe from '../globe.PNG'

export default function Header (){
    return (
        <header className='header-class'>
            <img className='globe-icon' src={globe} alt = "icon of globe"/>
            <span>my travel journal</span>
        </header>
        
    );
}