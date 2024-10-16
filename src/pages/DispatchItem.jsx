import { MdOutlineReadMore } from 'react-icons/md';

const DispatchItem = ({ image, text }) => {
  return (
    <div className="dispatch-image-container">
      <img src={image} alt="Profile" />
      <p className="dispatch-overlay-text">
        {text}
        <p>
          Dig Deeper <MdOutlineReadMore size={25} />
        </p>
      </p>
    </div>
  );
};

export default DispatchItem;
