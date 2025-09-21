import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  IconShoppingBag, 
  IconHeart, 
  IconStar,
  IconShirt,
  IconBottle,
  IconBarbell
} from '@tabler/icons-react';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: <IconShoppingBag className="h-5 w-5" /> },
    { id: 'apparel', name: 'Apparel', icon: <IconShirt className="h-5 w-5" /> },
    { id: 'accessories', name: 'Accessories', icon: <IconBottle className="h-5 w-5" /> },
    { id: 'equipment', name: 'Equipment', icon: <IconBarbell className="h-5 w-5" /> }
  ];

  const products = [
    {
      id: 1,
      name: "AfroHeat Training Top",
      category: "apparel",
      price: 1200,
      originalPrice: 1500,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      description: "Comfortable and breathable training top with AfroHeat logo",
      rating: 4.8,
      reviews: 24,
      inStock: true,
      badge: "Popular"
    },
    {
      id: 2,
      name: "High-Waist Leggings",
      category: "apparel", 
      price: 1800,
      originalPrice: 2000,
      image: "https://images.unsplash.com/photo-1506629905587-4b3f1b2da5a5?w=400&h=400&fit=crop",
      description: "Premium high-waist leggings perfect for any workout",
      rating: 4.9,
      reviews: 36,
      inStock: true,
      badge: "Best Seller"
    },
    {
      id: 3,
      name: "AfroHeat Water Bottle",
      category: "accessories",
      price: 450,
      originalPrice: 500,
      image: "https://images.unsplash.com/photo-1582451711522-bb88d2e0e6c6?w=400&h=400&fit=crop",
      description: "Insulated water bottle with motivational quotes",
      rating: 4.7,
      reviews: 18,
      inStock: true,
      badge: null
    },
    {
      id: 4,
      name: "Resistance Bands Set",
      category: "equipment",
      price: 800,
      originalPrice: 1000,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      description: "Complete set of resistance bands for home workouts",
      rating: 4.6,
      reviews: 12,
      inStock: true,
      badge: "New"
    },
    {
      id: 5,
      name: "AfroHeat Sports Bra",
      category: "apparel",
      price: 900,
      originalPrice: 1100,
      image: "https://images.unsplash.com/photo-1594736797933-d0380d0960d8?w=400&h=400&fit=crop",
      description: "Supportive sports bra for high-intensity workouts", 
      rating: 4.8,
      reviews: 28,
      inStock: false,
      badge: null
    },
    {
      id: 6,
      name: "Gym Towel Set",
      category: "accessories",
      price: 600,
      originalPrice: 700,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      description: "Quick-dry towel set with AfroHeat branding",
      rating: 4.5,
      reviews: 15,
      inStock: true,
      badge: null
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <section className="py-20 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-industry">
              AfroHeat{" "}
              <span className="text-primary">
                Shop
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-poppins">
              Discover our collection of premium fitness apparel and accessories.
              Represent AfroHeat style while you train and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground hover:bg-muted'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                      product.badge === 'Popular' ? 'bg-primary text-primary-foreground' :
                      product.badge === 'Best Seller' ? 'bg-secondary text-secondary-foreground' :
                      'bg-accent text-accent-foreground'
                    }`}>
                      {product.badge}
                    </div>
                  )}
                  <button className="absolute top-4 right-4 p-2 bg-background/50 rounded-full text-foreground hover:bg-primary transition-colors">
                    <IconHeart className="h-5 w-5" />
                  </button>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                      <span className="text-foreground font-medium">Out of Stock</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-poppins">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 font-poppins">{product.description}</p>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-secondary">
                      {[...Array(5)].map((_, i) => (
                        <IconStar key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-muted-foreground text-sm ml-2 font-poppins">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary font-poppins">{product.price} ETB</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-muted-foreground line-through font-poppins">{product.originalPrice} ETB</span>
                      )}
                    </div>
                    <button
                      disabled={!product.inStock}
                      className={`px-6 py-2 rounded-lg font-medium transition-all font-poppins ${
                        product.inStock
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                          : 'bg-muted text-muted-foreground cursor-not-allowed'
                      }`}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 font-industry">Join the AfroHeat Style</h2>
            <p className="text-xl text-muted-foreground mb-8 font-poppins">
              Represent AfroHeat wherever you go. Premium quality apparel and accessories
              designed for the modern African woman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl relative overflow-hidden group font-poppins"
              >
                <span className="relative z-10">View All Products</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
              <button className="border border-border text-foreground px-8 py-4 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all font-poppins">
                Size Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Shop;