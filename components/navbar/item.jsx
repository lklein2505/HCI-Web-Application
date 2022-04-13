const selectedStyle =
    'cursor-pointer w-36 py-4 font-bold text-2xl text-center text-white bg-vagon-blue';
const defaultStyle =
    'cursor-pointer w-36 py-4 font-normal text-2xl text-center text-vagon-blue hover:text-white hover:bg-vagon-blue';

const Item = ({ name, isSelected }) => (
    <li className={isSelected ? selectedStyle : defaultStyle}>{name}</li>
);

export default Item;