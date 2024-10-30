function ArticleCard({ title, url, description, mainPhoto, tags, subPhotos }) {
  return (
    <div className="flex mb-10 ">
      {/* img section */}
      <img
        src={mainPhoto}
        alt={title}
        className="w-full max-w-[60rem] h-[40rem] rounded-3xl object-cover"
      />
      {/* Content Section */}
      <div className="ml-10">
        <h2 className="Title font-bold text-[3rem] mb-3">{title}</h2>
        <p className="Description text-[2.05rem] text-slate-600 mb-3">
          {description.slice(0, 100)}...
        </p>
        <a
          href={url}
          target="blank"
          className="read-more text-sm text-sky-400 text-[1.77rem] underline"
        >
          อ่านต่อ
        </a>
        {/* Catagories */}
        <div className="Catagories text-xs text-slate-500 text-[1.77rem] mt-6">
          <span>หมวด</span>
          {tags.map((tag, index) => (
            <span key={index} className="underline ml-2">
              {tag}
              {index < tags.length - 1 && ","}
            </span>
          ))}
        </div>

        {/* Sub-Img */}
        <div className="sub-img flex gap-5 mt-9 ">
          {subPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`sub-${index}`}
              className="w-40 h-40 rounded-md object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
