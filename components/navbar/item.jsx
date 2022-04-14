const selectedStyle =
    "cursor-pointer w-36 py-4 font-bold text-2xl text-center text-vagon-blue text-opacity-60 bg-neutral-200 border-l-2";
const defaultStyle =
    "cursor-pointer w-36 py-4 font-normal text-2xl text-center text-black hover:text-vagon-blue hover:text-opacity-60 hover:bg-neutral-200 border-l-2";
const lastStyle = 
    "cursor-pointer w-36 py-4 font-normal text-2xl text-center text-black hover:text-vagon-blue hover:text-opacity-60 hover:bg-neutral-200 hover:rounded-tr-3xl border-l-2"
const firstStyle = 
    "cursor-pointer w-36 py-4 font-normal text-2xl text-center text-black hover:text-vagon-blue hover:text-opacity-60 hover:bg-neutral-200 border-l-2"
const selectedFirstStyle = 
    "cursor-pointer w-36 py-4 font-bold text-2xl text-center text-vagon-blue text-opacity-60 bg-neutral-200 border-x-2 rounded-tl-3xl";
const selectedLastStyle = 
    "cursor-pointer w-36 py-4 font-bold text-2xl text-center text-vagon-blue text-opacity-60 bg-neutral-200 border-l-2";

const Item = ({ name, isSelected }) => (
    <li className={
        (isSelected && (name=="Home")) ? selectedFirstStyle : 
        (isSelected && (name=="Blog")) ? selectedLastStyle :
        isSelected ? selectedStyle : 
        (!isSelected && (name=="Home")) ? firstStyle : 
        (!isSelected && (name=="Blog")) ? lastStyle : defaultStyle    
    }
    >
    {name}
    </li>
);

export default Item;