const Products = () => {
  return (
    <div className="text-white/80 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h3 className="text-xl font-medium">Premium Cardamom</h3>
          <p>Our signature product, carefully selected and graded.</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-medium">Other Spices</h3>
          <p>Explore our range of premium spices.</p>
        </div>
      </div>
    </div>
  );
};

export default Products; 