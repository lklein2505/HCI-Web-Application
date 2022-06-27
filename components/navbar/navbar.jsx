import Item from './item';
import { navigationItems } from '../../const/navbarList';

const Navbar = ({ selected }) => {
    
    return (
        <nav className="hidden sm:inline-flex list-none relative rounded-t-3xl border-b-2">
            {navigationItems.map((item) => (
                <Item key={item} isSelected={selected === item} name={item} />
            ))}
        </nav>
    );
};

export default Navbar;