import Item from './item';

const Navbar = ({ selected }) => {
    const items = ['Home', 'Team', 'Shop', 'Fixtures', 'Contact', 'Blog'];

    return (
        <nav className="inline-flex list-none relative rounded-t-3xl border-b-2">
            {items.map((item) => (
                <Item key={item} isSelected={selected === item} name={item} />
            ))}
        </nav>
    );
};

export default Navbar;