const Gallery = () => {
  return (
    <div className="text-white/80">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="aspect-square bg-white/10 rounded"></div>
        <div className="aspect-square bg-white/10 rounded"></div>
        <div className="aspect-square bg-white/10 rounded"></div>
        {/* Add more gallery items */}
      </div>
    </div>
  );
};

export default Gallery; 