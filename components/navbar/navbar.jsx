import Item from './item';

const Navbar = ({ selected }) => {
    const items = ['Home', 'About us', 'Showcase', 'Blog', 'Contact', 'Sign In'];

    return (
        <nav className="inline-flex justify-between list-none w-max">
            {items.map((item) => (
                <Item key={item} isSelected={selected === item} name={item} />
            ))}
        </nav>
    );
};

export default Navbar;