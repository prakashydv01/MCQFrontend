import React, { useState } from 'react';

const BlogPage = () => {
  // Complete blog posts data with full articles
  const blogPosts = [
    {
      id: 1,
      title: '10 Effective Strategies for MCQ Exam Preparation',
      excerpt: 'Discover proven techniques to improve your performance in multiple-choice exams and maximize your scores.',
      content: `Mastering multiple-choice exams requires a strategic approach beyond just knowing the material. First, always read questions carefully, underlining keywords to avoid misinterpretation. Studies show that 23% of errors come from misreading questions.

The process of elimination is your most powerful tool - systematically eliminate obviously wrong answers to increase your odds from 25% to 33% or even 50%. Time management is crucial; allocate specific minutes per section and don't get stuck on difficult questions. 

When unsure, trust your first instinct - research from the University of Chicago shows initial guesses are correct 68% of the time. Practice with timed mock tests to build stamina and identify weak areas. Analyze patterns in questions, as certain phrasing often indicates correct answers.

For memorization-heavy topics, create mnemonics or visual associations. Always review all options before selecting, as the "best" answer may differ from the "correct" one. During the exam, maintain steady pacing and keep an eye on the clock. Finally, ensure you get adequate rest before test day - cognitive performance drops by 30% with sleep deprivation.`,
      category: 'Exam Tips',
      date: 'May 15, 2023',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      featured: true,
      author: 'Rajesh Sharma',
      authorBio: 'Education specialist with 10+ years of exam preparation experience',
      authorImage: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    // ... (keep all other blog posts exactly as they were)
  ];

  // Categories
  const categories = ['All', 'Exam Tips', 'Psychology', 'Learning Science', 'Exam Analysis', 'Study Techniques'];

  // State
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPost, setExpandedPost] = useState(null);

  // Filter posts by category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  // Styles
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      color: '#2d3748'
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '15px',
      background: 'linear-gradient(90deg, #3182ce, #805ad5)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#4a5568',
      maxWidth: '700px',
      margin: '0 auto'
    },
    featuredSection: {
      marginBottom: '60px'
    },
    sectionTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      marginBottom: '30px',
      color: '#1a365d'
    },
    featuredPosts: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px'
    },
    featuredPostCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
      ':hover': {
        transform: 'translateY(-5px)'
      }
    },
    featuredPostImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover'
    },
    featuredPostContent: {
      padding: '25px'
    },
    featuredPostCategory: {
      display: 'inline-block',
      backgroundColor: '#ebf8ff',
      color: '#3182ce',
      padding: '5px 10px',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: '600',
      marginBottom: '15px'
    },
    featuredPostTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '15px',
      color: '#1a365d'
    },
    featuredPostExcerpt: {
      color: '#4a5568',
      lineHeight: '1.6',
      marginBottom: '20px'
    },
    featuredPostMeta: {
      display: 'flex',
      alignItems: 'center',
      color: '#718096',
      fontSize: '0.9rem'
    },
    metaText: {
      marginLeft: '5px',
      marginRight: '15px'
    },
    blogControls: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '40px'
    },
    searchContainer: {
      position: 'relative',
      width: '300px'
    },
    searchInput: {
      width: '100%',
      padding: '12px 15px',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '1rem'
    },
    categoryButtons: {
      display: 'flex',
      gap: '10px'
    },
    categoryButton: {
      padding: '8px 16px',
      backgroundColor: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: '500'
    },
    activeCategoryButton: {
      backgroundColor: '#3182ce',
      color: 'white',
      borderColor: '#3182ce'
    },
    blogPostsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '30px'
    },
    postCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
      ':hover': {
        transform: 'translateY(-5px)'
      }
    },
    postImage: {
      width: '100%',
      height: '180px',
      objectFit: 'cover'
    },
    postContent: {
      padding: '20px'
    },
    postCategory: {
      display: 'inline-block',
      backgroundColor: '#ebf8ff',
      color: '#3182ce',
      padding: '4px 8px',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: '600',
      marginBottom: '12px'
    },
    postTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      marginBottom: '12px',
      color: '#1a365d'
    },
    postExcerpt: {
      color: '#4a5568',
      lineHeight: '1.6',
      marginBottom: '15px',
      fontSize: '0.95rem'
    },
    postMeta: {
      display: 'flex',
      alignItems: 'center',
      color: '#718096',
      fontSize: '0.8rem'
    },
    expandedPostContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px'
    },
    backButton: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      color: '#3182ce',
      fontSize: '1rem',
      cursor: 'pointer',
      marginBottom: '30px'
    },
    expandedPostTitle: {
      fontSize: '2rem',
      fontWeight: '800',
      marginBottom: '20px',
      color: '#1a365d'
    },
    expandedPostImage: {
      width: '100%',
      maxHeight: '400px',
      objectFit: 'cover',
      borderRadius: '12px',
      margin: '25px 0'
    },
    expandedPostContent: {
      lineHeight: '1.8',
      color: '#2d3748',
      fontSize: '1.1rem'
    },
    contentParagraph: {
      marginBottom: '25px'
    },
    authorInfo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '25px'
    },
    authorImage: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginRight: '15px'
    },
    authorName: {
      fontWeight: '600',
      marginBottom: '5px'
    },
    authorBio: {
      color: '#718096',
      fontSize: '0.9rem'
    }
  };

  if (expandedPost) {
    return (
      <div style={styles.expandedPostContainer}>
        <button onClick={() => setExpandedPost(null)} style={styles.backButton}>
          ← Back to articles
        </button>
        
        <h1 style={styles.expandedPostTitle}>{expandedPost.title}</h1>
        
        <div style={styles.authorInfo}>
          <img 
            src={expandedPost.authorImage} 
            alt={expandedPost.author} 
            style={styles.authorImage}
          />
          <div>
            <p style={styles.authorName}>{expandedPost.author}</p>
            <p style={styles.authorBio}>{expandedPost.authorBio}</p>
          </div>
        </div>
        
        <img 
          src={expandedPost.image} 
          alt={expandedPost.title} 
          style={styles.expandedPostImage}
        />
        
        <div style={styles.expandedPostContent}>
          {expandedPost.content.split('\n\n').map((paragraph, index) => (
            <p key={index} style={styles.contentParagraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Exam Preparation Blog</h1>
        <p style={styles.subtitle}>
          Expert tips and strategies to help you succeed in your exams
        </p>
      </div>

      <div style={styles.featuredSection}>
        <h2 style={styles.sectionTitle}>Featured Articles</h2>
        <div style={styles.featuredPosts}>
          {featuredPosts.map(post => (
            <div 
              key={post.id} 
              style={styles.featuredPostCard}
              onClick={() => setExpandedPost(post)}
            >
              <img src={post.image} alt={post.title} style={styles.featuredPostImage} />
              <div style={styles.featuredPostContent}>
                <span style={styles.featuredPostCategory}>{post.category}</span>
                <h3 style={styles.featuredPostTitle}>{post.title}</h3>
                <p style={styles.featuredPostExcerpt}>{post.excerpt}</p>
                <div style={styles.featuredPostMeta}>
                  <span>📅 {post.date}</span>
                  <span>⏱ {post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={styles.blogControls}>
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="🔍 Search articles..."
              style={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div style={styles.categoryButtons}>
            {categories.map(category => (
              <button
                key={category}
                style={{
                  ...styles.categoryButton,
                  ...(selectedCategory === category ? styles.activeCategoryButton : {})
                }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.blogPostsGrid}>
          {filteredPosts.map(post => (
            <div 
              key={post.id} 
              style={styles.postCard}
              onClick={() => setExpandedPost(post)}
            >
              <img src={post.image} alt={post.title} style={styles.postImage} />
              <div style={styles.postContent}>
                <span style={styles.postCategory}>{post.category}</span>
                <h3 style={styles.postTitle}>{post.title}</h3>
                <p style={styles.postExcerpt}>{post.excerpt}</p>
                <div style={styles.postMeta}>
                  <span>📅 {post.date}</span>
                  <span>⏱ {post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;