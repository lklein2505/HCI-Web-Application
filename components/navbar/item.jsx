const selectedStyle =
    "cursor-pointer w-36 py-4 font-bold text-2xl text-center text-vagon-blue text-opacity-60 bg-neutral-200 border-2 rounded-t-3xl";
const defaultStyle =
    "cursor-pointer w-36 py-4 font-normal text-2xl text-center text-black hover:text-vagon-blue hover:text-opacity-60 hover:bg-neutral-200 border-2 rounded-t-3xl";

const Item = ({ name, isSelected }) => (
    <li className={isSelected ? selectedStyle : defaultStyle}>{name}</li>
);

export default Item;