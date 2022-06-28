import Item from './item';
import { navigationItems } from '../../const/navbarList';

const Navbar = ({ classes, selected }) => {
    
    return (
        <nav className={`${ classes ? 'block' : 'hidden'} md:inline-flex list-none relative rounded-t-3xl border-b-2 ${classes}`}>
            {navigationItems.map((item) => (
                <Item key={item} isSelected={selected === item} name={item} />
            ))}
        </nav>
    );
};

export default Navbar;