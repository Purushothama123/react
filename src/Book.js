export const Book = (props) => {
  const { img, title, author, no } = props;
  //   console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{`# ${no + 1}`}</span>
    </article>
  );
};
