import Item from './item';

const Navbar = ({ selected }) => {
    const items = ['Home', 'Team', 'Shop', 'Fixtures', 'Contact', 'Blog'];

    return (
        <nav className="pt-1 inline-flex justify-between list-none items-center relative bg-white">
            {items.map((item) => (
                <Item key={item} isSelected={selected === item} name={item} />
            ))}
        </nav>
    );
};

export default Navbar;