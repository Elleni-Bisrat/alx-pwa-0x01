interface MovieCardProps {
  title: string;
  year: string;
  image?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, year, image }) => {
  return (
    <div className="shadow-md rounded-lg p-3 bg-gray-100">
      {image && <img src={image} alt={title} className="rounded-lg mb-3" />}
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-600">{year}</p>
    </div>
  );
};

export default MovieCard;
