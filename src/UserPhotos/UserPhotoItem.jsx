const UserPhotoItem = ({ photos }) => {
  if (!photos || photos.length === 0)
    return (
      <svg className="spinner-ring" viewBox="25 25 50 50" strokeWidth="5">
        <circle cx="50" cy="50" r="20" />
      </svg>
    );
  return (
    <>
      {photos.map((item) => {
        return (
          <div className="card  card-image-cover" key={item.id}>
            <div className="card-body">
              <h2 className="card-header">
                {item.id}. {item.title}
              </h2>
              <p className="text-content2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
                quae!
              </p>
              <img src={item.thumbnailUrl} alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UserPhotoItem;
