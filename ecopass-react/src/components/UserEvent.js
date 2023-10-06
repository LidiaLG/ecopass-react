
export default function UserEvent({ image, descr }) {
  return (
    <div className="foto">
      <img src={image} alt={descr} />
    </div>
  );
}