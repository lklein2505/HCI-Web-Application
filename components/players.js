import Image from 'next/image';
import PlayerAvatar from '../assets/player.jpg';

const Product = ({ name, number, role }) => (
    <div className="md:h-96 h-64 border-2 border-vagon-blue rounded-t-3xl overflow-hidden md:m-0 m-5">
        <div className="md:h-3/5 h-2/5 relative overflow-hidden">
            <Image
                src={PlayerAvatar}
                alt="Player"
            />
        </div>
        <div className="md:h-2/5 h-3/5 grid rows-3 p-2 border-t-2 border-t-vagon-blue bg-vagon-blue bg-opacity-20">
            <p className="text-center p-1">{name}</p>
            <p className="text-center p-1">{number}</p>
            <p className="text-center p-1">{role}</p>
        </div>
    </div>
);

export default Product;