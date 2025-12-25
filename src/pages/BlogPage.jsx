import { useState } from 'react'
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './BlogPage.css'

const BlogPage = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')

    const categories = ['All', 'Entrepreneurship', 'Business Strategy', 'Digital Skills', 'Leadership', 'Innovation']

    const blogPosts = [
        {
            id: 1,
            title: 'Building a Successful Business in Nigeria: A Comprehensive Guide',
            excerpt: 'Discover the essential steps and strategies to establish and grow a thriving business in the Nigerian market. From understanding local regulations to building customer relationships.',
            category: 'Entrepreneurship',
            author: 'Dr. Amina Mohammed',
            date: 'December 18, 2024',
            readTime: '8 min read',
            image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
            featured: true
        },
        {
            id: 2,
            title: 'Digital Transformation for Small Businesses',
            excerpt: 'Learn how to leverage digital tools and technologies to streamline operations, reach more customers, and compete in the modern marketplace.',
            category: 'Digital Skills',
            author: 'Chinedu Okafor',
            date: 'December 15, 2024',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            featured: true
        },
        {
            id: 3,
            title: 'Financial Management Tips for MSMEs',
            excerpt: 'Master the fundamentals of financial management to ensure your business remains profitable and sustainable in the long term.',
            category: 'Business Strategy',
            author: 'Fatima Ibrahim',
            date: 'December 12, 2024',
            readTime: '7 min read',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
            featured: false
        },
        {
            id: 4,
            title: 'Leadership Skills for Emerging Entrepreneurs',
            excerpt: 'Develop the leadership qualities needed to inspire your team, drive innovation, and achieve your business goals.',
            category: 'Leadership',
            author: 'Ibrahim Yusuf',
            date: 'December 10, 2024',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
            featured: false
        },
        {
            id: 5,
            title: 'Innovation in African Markets: Opportunities and Challenges',
            excerpt: 'Explore the unique opportunities for innovation in African markets and learn how to overcome common challenges faced by entrepreneurs.',
            category: 'Innovation',
            author: 'Ngozi Adebayo',
            date: 'December 8, 2024',
            readTime: '9 min read',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
            featured: false
        },
        {
            id: 6,
            title: 'Marketing Strategies for Local Businesses',
            excerpt: 'Effective marketing techniques tailored for Nigerian businesses to increase brand awareness and customer engagement.',
            category: 'Business Strategy',
            author: 'Kunle Adeyemi',
            date: 'December 5, 2024',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80',
            featured: false
        }
    ]

    const filteredPosts = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory)

    const featuredPosts = blogPosts.filter(post => post.featured)

    const handleSearch = (e) => {
        e.preventDefault()
        // TODO: Implement search functionality
    }

    return (
        <div className="blog-page">
            <Header />

            {/* Hero Section */}
            <section className="blog-page__hero">
                <div className="blog-page__hero-overlay"></div>
                <div className="container">
                    <div className="blog-page__hero-content">
                        <h1 className="blog-page__hero-title">KASEDA Blog</h1>
                        <p className="blog-page__hero-subtitle">
                            Insights, strategies, and inspiration for entrepreneurs and business leaders
                        </p>

                        {/* Search Bar */}
                        <form className="blog-page__search-form" onSubmit={handleSearch}>
                            <div className="blog-page__search-wrapper">
                                <Search className="blog-page__search-icon" size={20} />
                                <input
                                    type="text"
                                    className="blog-page__search-input"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button type="submit" className="blog-page__search-btn">
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="blog-page__categories">
                <div className="container">
                    <div className="blog-page__category-list">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`blog-page__category-btn ${selectedCategory === category ? 'blog-page__category-btn--active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            {selectedCategory === 'All' && (
                <section className="blog-page__featured">
                    <div className="container">
                        <h2 className="blog-page__section-title">Featured Articles</h2>
                        <div className="blog-page__featured-grid">
                            {featuredPosts.map((post) => (
                                <article key={post.id} className="blog-card blog-card--featured">
                                    <div className="blog-card__image-wrapper">
                                        <img src={post.image} alt={post.title} className="blog-card__image" />
                                        <div className="blog-card__badge">Featured</div>
                                    </div>
                                    <div className="blog-card__content">
                                        <div className="blog-card__category">
                                            <Tag size={14} />
                                            <span>{post.category}</span>
                                        </div>
                                        <h3 className="blog-card__title">{post.title}</h3>
                                        <p className="blog-card__excerpt">{post.excerpt}</p>
                                        <div className="blog-card__meta">
                                            <div className="blog-card__meta-item">
                                                <User size={16} />
                                                <span>{post.author}</span>
                                            </div>
                                            <div className="blog-card__meta-item">
                                                <Calendar size={16} />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="blog-card__meta-item">
                                                <Clock size={16} />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                        <button className="blog-card__read-more">
                                            Read More
                                            <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* All Posts */}
            <section className="blog-page__posts">
                <div className="container">
                    <h2 className="blog-page__section-title">
                        {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
                    </h2>
                    <div className="blog-page__posts-grid">
                        {filteredPosts.map((post) => (
                            <article key={post.id} className="blog-card">
                                <div className="blog-card__image-wrapper">
                                    <img src={post.image} alt={post.title} className="blog-card__image" />
                                </div>
                                <div className="blog-card__content">
                                    <div className="blog-card__category">
                                        <Tag size={14} />
                                        <span>{post.category}</span>
                                    </div>
                                    <h3 className="blog-card__title">{post.title}</h3>
                                    <p className="blog-card__excerpt">{post.excerpt}</p>
                                    <div className="blog-card__meta">
                                        <div className="blog-card__meta-item">
                                            <User size={16} />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="blog-card__meta-item">
                                            <Clock size={16} />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                    <button className="blog-card__read-more">
                                        Read More
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default BlogPage
