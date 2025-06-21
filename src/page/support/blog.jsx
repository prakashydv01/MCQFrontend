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
    {
      id: 2,
      title: 'Understanding the Psychology of Test-Taking',
      excerpt: 'Learn how mental preparation and psychological techniques can significantly impact your exam results.',
      content: `Test-taking psychology often makes the difference between average and exceptional performance. The phenomenon of "test anxiety" affects nearly 40% of students, triggering fight-or-flight responses that impair recall. 

Combat this with the 4-4-4 box breathing technique: inhale for 4 seconds, hold for 4, exhale for 4. This activates the parasympathetic nervous system, reducing stress hormones by up to 50%. Growth mindset principles show that viewing exams as learning opportunities rather than threats improves outcomes by an average of 17%.

The "hard start" technique suggests beginning with difficult questions then switching to easier ones, leveraging your brain's background processing. Research from the University of Chicago reveals that writing down worries before an exam can improve scores by 15% by freeing working memory.

Familiarity breeds confidence - practice in environments resembling your testing center. Beware of the "illusion of competence" where recognition masquerades as recall; test yourself actively. Positive self-talk rewires neural pathways - replace "I'll fail" with "I'm prepared." Visualization techniques used by Olympic athletes apply equally to exams: mentally rehearse success scenarios.`,
      category: 'Psychology',
      date: 'April 28, 2023',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      featured: false,
      author: 'Priya Patel',
      authorBio: 'Cognitive psychologist specializing in learning optimization',
      authorImage: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      title: 'Time Management During Competitive Exams',
      excerpt: 'Essential tips to allocate your time effectively during exams to ensure you complete all sections.',
      content: `Effective time management during competitive exams requires strategic planning and disciplined execution. Begin by analyzing the exam structure during preparation - note sections by difficulty and mark weightage. 

The 80/20 rule applies: 20% of your study time should address 80% of high-value content. During the exam, implement the "2-pass" system: first quickly answer all questions you're certain about (completing ~60% in half the allotted time), then return for deeper analysis.

Allocate time proportionally to marks - a 10-mark question deserves twice the time of a 5-mark one. Set mini-deadlines; if a 60-minute section has 30 questions, you have 2 minutes per question. Watch for time sinks - questions consuming disproportionate time should be marked and revisited.

Practice with a visible clock to develop internal timing radar. Include 5-minute buffers for review - catching one mistake often justifies the time investment. For computer-based tests, disable notifications and use full-screen mode to minimize distractions. These techniques prevent the common pitfall of leaving high-value questions unanswered due to poor time allocation.`,
      category: 'Exam Tips',
      date: 'April 15, 2023',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      featured: true,
      author: 'Amit Joshi',
      authorBio: 'Competitive exam coach for 8 years',
      authorImage: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    {
      id: 4,
      title: 'The Science Behind Effective Learning',
      excerpt: 'Explore cognitive science principles that can help you study smarter, not harder.',
      content: `Cognitive science reveals powerful evidence-based learning techniques. Spaced repetition, where you review material at increasing intervals, can improve retention by up to 200% compared to cramming. The forgetting curve shows we lose 70% of new information within 24 hours unless reinforced.

Active recall (testing yourself) is 50% more effective than passive review. A University of Waterloo study found students using this technique scored a full letter grade higher. Interleaving - mixing different subjects/problems - improves discrimination skills by 43%.

The Feynman Technique (explaining concepts simply) exposes knowledge gaps. Sleep plays a crucial role - during deep sleep, the brain replays and consolidates memories at 20x daytime speed. Exercise increases BDNF (brain-derived neurotrophic factor) by 30%, enhancing neuroplasticity.

Contextual learning (studying in similar environments to testing) improves recall by 40%. Dual coding (combining words + visuals) leverages both verbal and visual memory systems. These science-backed methods can triple learning efficiency when applied consistently.`,
      category: 'Learning Science',
      date: 'March 30, 2023',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      featured: false,
      author: 'Dr. Neha Gupta',
      authorBio: 'Neuroscience researcher and education consultant',
      authorImage: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      id: 5,
      title: 'How to Analyze Your Mock Test Results',
      excerpt: 'A step-by-step guide to interpreting your practice test scores and identifying areas for improvement.',
      content: `Mock tests are only valuable if you properly analyze your results. Begin by categorizing mistakes into knowledge gaps (content you didn't know), application errors (misapplied concepts), and careless mistakes. Research shows this classification improves subsequent performance by 28%.

Create an error log tracking question types, topics, and mistake patterns. The 80/20 rule applies here - focus on the 20% of topics causing 80% of errors. Calculate your accuracy rate per subject area to identify weakest sections.

Time analysis is crucial - note questions that took disproportionately long. For computer-adaptive tests, the difficulty level of questions you got wrong reveals your true capability ceiling. Review correct answers too - ensure your reasoning matches the optimal approach.

Track progress quantitatively - aim for at least 5% improvement in weakest areas before the next mock. This data-driven approach transforms practice tests from anxiety-inducing chores to powerful diagnostic tools.`,
      category: 'Exam Analysis',
      date: 'March 22, 2023',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      featured: false,
      author: 'Sanjay Kapoor',
      authorBio: 'Test preparation strategist and data analyst',
      authorImage: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
      id: 6,
      title: 'Memory Techniques for Long-Term Retention',
      excerpt: 'Powerful memorization methods that can help you retain information for your exams and beyond.',
      content: `Effective memorization requires understanding how memory works. The forgetting curve shows we lose 70% of new information within 24 hours, but spaced repetition can reduce this to just 10%. The Leitner system, using progressively longer review intervals, boosts retention by up to 200%.

Mnemonic devices like acronyms and acrostics improve recall of lists by 35%. The method of loci (memory palace) leverages spatial memory - ancient Greek orators could recall hours-long speeches using this technique. Chunking information into groups of 3-4 items matches our working memory capacity.

Elaborative encoding connects new information to existing knowledge - creating vivid mental images improves recall by 40%. Sleep is crucial for memory consolidation - students who sleep after learning retain 50% more than those who pull all-nighters.

Regular retrieval practice strengthens neural pathways - testing yourself is far more effective than passive review. These techniques combined can transform your ability to retain complex information for exams and beyond.`,
      category: 'Study Techniques',
      date: 'March 10, 2023',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      featured: false,
      author: 'Ananya Desai',
      authorBio: 'Memory coach and learning specialist',
      authorImage: 'https://randomuser.me/api/portraits/women/52.jpg'
    }
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
      color: '#2d3748',
      '@media (max-width: 768px)': {
        padding: '15px'
      }
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
      '@media (max-width: 768px)': {
        marginBottom: '30px'
      }
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '15px',
      background: 'linear-gradient(90deg, #3182ce, #805ad5)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      '@media (max-width: 768px)': {
        fontSize: '2rem'
      }
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#4a5568',
      maxWidth: '700px',
      margin: '0 auto',
      '@media (max-width: 768px)': {
        fontSize: '1rem'
      }
    },
    featuredSection: {
      marginBottom: '60px',
      '@media (max-width: 768px)': {
        marginBottom: '40px'
      }
    },
    sectionTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      marginBottom: '30px',
      color: '#1a365d',
      position: 'relative',
      paddingBottom: '10px',
      '::after': {
        content: '""',
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '60px',
        height: '4px',
        background: 'linear-gradient(90deg, #3182ce, #805ad5)',
        borderRadius: '2px'
      },
      '@media (max-width: 768px)': {
        fontSize: '1.5rem',
        marginBottom: '20px'
      }
    },
    featuredPosts: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '20px'
      }
    },
    featuredPostCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
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
      color: '#1a365d',
      '@media (max-width: 768px)': {
        fontSize: '1.3rem'
      }
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
      fontSize: '0.9rem',
      '> *': {
        marginRight: '15px',
        display: 'flex',
        alignItems: 'center'
      }
    },
    metaIcon: {
      marginRight: '5px',
      fontWeight: 'bold'
    },
    readMoreLink: {
      display: 'inline-flex',
      alignItems: 'center',
      color: '#3182ce',
      fontWeight: '600',
      textDecoration: 'none',
      marginTop: '15px',
      ':hover': {
        textDecoration: 'underline'
      }
    },
    blogControls: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '40px',
      flexWrap: 'wrap',
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: '30px'
      }
    },
    searchContainer: {
      position: 'relative',
      width: '300px',
      '@media (max-width: 768px)': {
        width: '100%',
        marginBottom: '20px'
      }
    },
    searchInput: {
      width: '100%',
      padding: '12px 15px',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      ':focus': {
        outline: 'none',
        borderColor: '#3182ce',
        boxShadow: '0 0 0 3px rgba(49, 130, 206, 0.2)'
      }
    },
    categoryButtons: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      '@media (max-width: 768px)': {
        width: '100%',
        overflowX: 'auto',
        paddingBottom: '10px'
      }
    },
    categoryButton: {
      padding: '8px 16px',
      backgroundColor: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      ':hover': {
        backgroundColor: '#f7fafc'
      }
    },
    activeCategoryButton: {
      backgroundColor: '#3182ce',
      color: 'white',
      borderColor: '#3182ce',
      ':hover': {
        backgroundColor: '#2c5282'
      }
    },
    blogPostsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '30px',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '20px'
      }
    },
    postCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
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
      fontSize: '0.8rem',
      '> *': {
        marginRight: '12px',
        display: 'flex',
        alignItems: 'center'
      }
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '50px',
      '@media (max-width: 768px)': {
        marginTop: '30px'
      }
    },
    paginationButton: {
      padding: '8px 16px',
      margin: '0 5px',
      backgroundColor: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      ':hover': {
        backgroundColor: '#f7fafc'
      }
    },
    activePaginationButton: {
      backgroundColor: '#3182ce',
      color: 'white',
      borderColor: '#3182ce',
      ':hover': {
        backgroundColor: '#2c5282'
      }
    },
    // Expanded post styles
    expandedPostContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      '@media (max-width: 768px)': {
        padding: '15px'
      }
    },
    backButton: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      color: '#3182ce',
      fontSize: '1rem',
      cursor: 'pointer',
      marginBottom: '30px',
      padding: '8px 0',
      ':hover': {
        textDecoration: 'underline'
      }
    },
    backIcon: {
      marginRight: '8px',
      fontWeight: 'bold'
    },
    expandedPostTitle: {
      fontSize: '2rem',
      fontWeight: '800',
      marginBottom: '20px',
      color: '#1a365d',
      lineHeight: '1.3',
      '@media (max-width: 768px)': {
        fontSize: '1.7rem'
      }
    },
    expandedPostImage: {
      width: '100%',
      maxHeight: '400px',
      objectFit: 'cover',
      borderRadius: '12px',
      margin: '25px 0',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      '@media (max-width: 768px)': {
        maxHeight: '250px'
      }
    },
    expandedPostContent: {
      lineHeight: '1.8',
      color: '#2d3748',
      fontSize: '1.1rem',
      '@media (max-width: 768px)': {
        fontSize: '1rem'
      }
    },
    contentParagraph: {
      marginBottom: '25px'
    },
    authorInfo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '25px',
      paddingBottom: '20px',
      borderBottom: '1px solid #e2e8f0'
    },
    authorImage: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginRight: '15px',
      border: '2px solid #ebf8ff'
    },
    authorName: {
      fontWeight: '600',
      marginBottom: '5px',
      color: '#1a365d'
    },
    authorBio: {
      color: '#718096',
      fontSize: '0.9rem'
    },
    relatedPosts: {
      marginTop: '60px',
      paddingTop: '30px',
      borderTop: '1px solid #e2e8f0'
    }
  };

  // Helper function to apply responsive styles
  const getStyles = (styleName, isActive = false) => {
    const baseStyle = styles[styleName] || {};
    const mobileStyle = styles[styleName]?.['@media (max-width: 768px)'] || {};
    const activeStyle = isActive ? styles.activeCategoryButton || styles.activePaginationButton || {} : {};
    
    return { ...baseStyle, ...mobileStyle, ...activeStyle };
  };

  if (expandedPost) {
    return (
      <div style={styles.container}>
        <button onClick={() => setExpandedPost(null)} style={styles.backButton}>
          <span style={styles.backIcon}>←</span> Back to articles
        </button>
        
        <h1 style={styles.expandedPostTitle}>{expandedPost.title}</h1>
        
        <div style={styles.authorInfo}>
          <img 
            src={expandedPost.authorImage} 
            alt={expandedPost.author} 
            style={styles.authorImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://www.gravatar.com/avatar/?d=mp';
            }}
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
        
        <div style={styles.relatedPosts}>
          <h3 style={styles.sectionTitle}>Related Articles</h3>
          <div style={styles.blogPostsGrid}>
            {blogPosts
              .filter(post => post.id !== expandedPost.id && post.category === expandedPost.category)
              .slice(0, 3)
              .map(post => (
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
                      <span><span style={styles.metaIcon}>📅</span> {post.date}</span>
                      <span><span style={styles.metaIcon}>⏱</span> {post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Hamro Exam Blog</h1>
        <p style={styles.subtitle}>
          Expert tips, study strategies, and exam preparation resources to help you succeed
        </p>
      </div>

      {/* Featured Posts Section */}
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
                  <span><span style={styles.metaIcon}>📅</span> {post.date}</span>
                  <span><span style={styles.metaIcon}>⏱</span> {post.readTime}</span>
                </div>
                <div style={styles.readMoreLink}>
                  Read more →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Posts Section */}
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
                  ...getStyles('categoryButton'),
                  ...(selectedCategory === category ? getStyles('activeCategoryButton', true) : {})
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
                  <span><span style={styles.metaIcon}>📅</span> {post.date}</span>
                  <span><span style={styles.metaIcon}>⏱</span> {post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div style={styles.pagination}>
          <button style={getStyles('paginationButton', true)}>1</button>
          <button style={getStyles('paginationButton')}>2</button>
          <button style={getStyles('paginationButton')}>3</button>
          <button style={getStyles('paginationButton')}>Next →</button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;