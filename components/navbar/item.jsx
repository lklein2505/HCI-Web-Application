const selectedStyle =
    "cursor-pointer w-24 py-3 font-bold text-base text-center text-vagon-blue text-opacity-60 bg-neutral-200 border-l-2";
const defaultStyle =
    "cursor-pointer w-24 py-3 font-normal text-base text-center text-black hover:text-vagon-blue hover:text-opacity-60 hover:bg-neutral-200 border-l-2 bg-white";
const lastStyle = 
    "cursor-pointer w-24 py-3 font-normal text-base text-center text-black rounded-tr-3xl hover:text-vagon-blue hover:text-opacity-60 hover:bg-neutral-200 hover:rounded-tr-3xl border-l-2 bg-white"
const firstStyle = 
    "cursor-pointer w-24 py-3 font-normal text-base text-center text-black hover:text-vagon-blue hover:text-opacity-60 hover:bg-neutral-200 border-l-2 bg-white"
const selectedFirstStyle = 
    "cursor-pointer w-24 py-3 font-bold text-base text-center text-vagon-blue text-opacity-60 bg-neutral-200 border-x-2 rounded-tl-3xl";
const selectedLastStyle = 
    "cursor-pointer w-24 py-3 font-bold text-base text-center text-vagon-blue text-opacity-60 bg-neutral-200 border-l-2";

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