import React, { useState } from 'react';
import { Computer, Construction, Clock, Brain, BookOpen, BarChart2, Search, ArrowLeft } from 'lucide-react';
import Prakash from '../../assets/images/Prakash.jpeg';

const BlogPage = () => {
  // Complete blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'BIT Entrance Exam in Nepal: A Complete Guide for Aspiring Students',
      excerpt: 'Everything you need to know about the BIT entrance exam in Nepal, including syllabus, preparation tips, and career prospects.',
      content: `The Bachelor of Information Technology (BIT) is one of the most sought-after programs in Nepal for students interested in IT, software development, and computer science. With increasing demand for tech professionals, securing a seat in a reputed college requires thorough preparation for the BIT entrance exam.  

Understanding the BIT Entrance Exam  
The BIT entrance exam in Nepal is a competitive test conducted by various universities, including Tribhuvan University (TU), Purbanchal University (PU), and Pokhara University (PoU). The exam typically includes:  
- Multiple-Choice Questions (MCQs) covering Mathematics, English, and Computer Fundamentals.  
- Logical Reasoning and General Knowledge sections in some universities.  
- Time duration: Usually 1.5 to 2 hours.  

Syllabus Breakdown  
1. Mathematics (40-50% weightage): Algebra, Trigonometry, Calculus, Probability, and Statistics.  
2. English (20-30% weightage): Grammar, Comprehension, Vocabulary.  
3. Computer Fundamentals (20-30% weightage): Basics of Programming, Hardware, Software, Networking.  

Top 5 Preparation Strategies  
1. Master the Basics: Strengthen your foundation in Mathematics and Computer concepts.  
2. Practice Previous Year Questions: Familiarize yourself with the exam pattern.  
3. Take Mock Tests: Simulate exam conditions to improve speed and accuracy.  
4. Focus on Weak Areas: Identify and improve topics where you struggle.  
5. Time Management: Allocate time per section to avoid last-minute rushing.  

Career Prospects After BIT  
- Software Developer  
- IT Consultant  
- Network Administrator  
- Data Analyst  
- Cybersecurity Specialist  

Top Colleges Offering BIT in Nepal  
1. Tribhuvan University (TU): Institute of Science and Technology (IOST), Amrit Science Campus (ASCOL).  
2. Purbanchal University (PU): Nobel College, Kathford International College.  
3. Pokhara University (PoU): Pokhara University School of Engineering.  

Pro Tip: Many colleges also consider +2 grades, so maintain a good academic record.  

With proper preparation and dedication, cracking the BIT entrance exam in Nepal is achievable. Start early, stay consistent, and aim for excellence!`,
      category: 'BIT Entrance Exam',
      date: 'July 3, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      featured: true,
      author: 'Prakash Yadav',
      authorBio: 'Education specialist with 10+ years of exam preparation experience',
      authorImage: Prakash,
      icon: <Computer className="w-5 h-5" />
    },
    {
      id: 2,
      title: 'B.Sc. CSIT Entrance Exam in Nepal: A Complete Guide',
      excerpt: 'Everything you need to know about the B.Sc. CSIT entrance exam in Nepal, including syllabus, preparation tips, and career opportunities.',
      content: `The Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT) is one of the most prestigious and competitive undergraduate programs in Nepal for students aspiring to build a career in IT and computer science. Conducted by Tribhuvan University (TU), the B.Sc. CSIT entrance exam is the gateway to securing a seat in this highly sought-after program.

Understanding the B.Sc. CSIT Entrance Exam

The B.Sc. CSIT entrance exam is a centralized test conducted by the Institute of Science and Technology (IOST), Tribhuvan University. The exam is highly competitive, with thousands of applicants vying for limited seats in reputed colleges across Nepal. The exam typically consists of:
- Multiple-Choice Questions (MCQs) covering Physics, Chemistry, Mathematics, English and Computer Science.
- Questions designed to test analytical and logical reasoning skills.
- A total of 100 questions to be completed in 2 hours.

Syllabus Breakdown

1. Physics (25% weightage): Mechanics, Heat and Thermodynamics, Waves and Optics, Electricity and Magnetism, Modern Physics.

2. Chemistry (25% weightage): General and Physical Chemistry, Inorganic Chemistry, Organic Chemistry.

3. Mathematics (25% weightage): Algebra, Trigonometry, Calculus, Coordinate Geometry, Probability and Statistics.

4. English (15% weightage): Grammar, Vocabulary, Comprehension, Basic Writing Skills.

5. Computer Science (10% weightage): Basics of Computer, Programming Concepts, Data Structures, Algorithms.

Top 5 Preparation Strategies:

1. Understand the Syllabus: Familiarize yourself with the detailed syllabus and focus on high-weightage topics.

2. Practice Past Papers: Solve previous years' question papers to understand the exam pattern and difficulty level.

3. Strengthen Basics: Build a strong foundation in Physics, Chemistry, and Mathematics, especially topics from your +2 curriculum.

4. Time Management: Practice solving questions within the time limit to improve speed and accuracy.

5. Take Mock Tests: Regular mock tests will help you assess your preparation and identify areas for improvement.

Career Prospects After B.Sc. CSIT:
- Software Engineer/Developer,
- Data Scientist/Analyst,
- Network and Security Engineer,
- AI/ML Engineer,
- IT Consultant,
- System Analyst,
- Cybersecurity Specialist

Top Colleges Offering B.Sc. CSIT in Nepal

1. Tribhuvan University: Institute of Science and Technology (IOST), Amrit Science Campus (ASCOL), Patan Multiple Campus.

2. Kathmandu University: School of Science, Dhulikhel.

3. Private Colleges: St. Xavier's College, Prime College, Texas International College.

Pro Tip: Along with entrance exam preparation, focus on your +2 grades as they play a significant role in the final selection process.

With dedication, strategic preparation, and consistent effort, cracking the B.Sc. CSIT entrance exam is within your reach. Start your preparation early, stay focused, and aim for success in this promising field.`,
      category: 'CSIT Entrance Exam',
      date: 'July 3, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      featured: true,
      author: 'Prakash Yadav',
      authorBio: 'Education specialist with 10+ years of exam preparation experience',
      authorImage: Prakash,
      icon: <Computer className="w-5 h-5" />
    },
    {
      id: 3,
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
      author: 'Prakash Yadav',
      authorBio: 'Education specialist with 10+ years of exam preparation experience',
      authorImage: Prakash,
      icon: <Clock className="w-5 h-5" />
    },
    {
      id: 4,
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
      author: 'Prakash Yadav',
      authorBio: 'Cognitive psychologist specializing in learning optimization',
      authorImage: Prakash,
      icon: <Brain className="w-5 h-5" />
    },
    {
      id: 5,
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
      featured: false,
      author: 'Prakash Yadav',
      authorBio: 'Competitive exam coach for 8 years',
      authorImage: Prakash,
      icon: <Clock className="w-5 h-5" />
    },
    {
      id: 6,
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
      author: 'Prakash Yadav',
      authorBio: 'Neuroscience researcher and education consultant',
      authorImage: Prakash,
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: 7,
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
      author: 'Prakash Yadav',
      authorBio: 'Test preparation strategist and data analyst',
      authorImage: Prakash,
      icon: <BarChart2 className="w-5 h-5" />
    },
    {
      id: 8,
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
      author: 'Prakash Yadav',
      authorBio: 'Memory coach and learning specialist',
      authorImage: Prakash,
      icon: <BookOpen className="w-5 h-5" />
    }
  ];

  const categories = ['All', 'Exam Tips', 'Psychology', 'Learning Science', 'Exam Analysis', 'Study Techniques', 'BIT Entrance Exam', 'CSIT Entrance Exam'];
  
  const categoryIcons = {
    'Exam Tips': <Clock className="w-4 h-4 mr-2" />,
    'Psychology': <Brain className="w-4 h-4 mr-2" />,
    'Learning Science': <BookOpen className="w-4 h-4 mr-2" />,
    'Exam Analysis': <BarChart2 className="w-4 h-4 mr-2" />,
    'Study Techniques': <BookOpen className="w-4 h-4 mr-2" />,
    'BIT Entrance Exam': <Computer className="w-4 h-4 mr-2" />,
    'CSIT Entrance Exam': <Computer className="w-4 h-4 mr-2" />
  };

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPost, setExpandedPost] = useState(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  if (expandedPost) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setExpandedPost(null)}
            className="flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to articles
          </button>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {expandedPost.title}
          </h1>
          
          <div className="flex items-center mb-8 pb-6 border-b border-gray-700">
            <img 
              src={expandedPost.authorImage} 
              alt={expandedPost.author}
              className="w-12 h-12 rounded-full border-2 border-blue-500/30 mr-4"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://www.gravatar.com/avatar/?d=mp';
              }}
            />
            <div>
              <p className="font-semibold">{expandedPost.author}</p>
              <p className="text-sm text-gray-400">{expandedPost.authorBio}</p>
            </div>
            <div className="ml-auto text-sm text-gray-400">
              {expandedPost.date} • {expandedPost.readTime}
            </div>
          </div>
          
          <img 
            src={expandedPost.image} 
            alt={expandedPost.title}
            className="w-full h-64 sm:h-80 object-cover rounded-xl mb-8 shadow-lg"
          />
          
          <div className="prose prose-invert max-w-none">
            {expandedPost.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed">{paragraph}</p>
            ))}
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter(post => post.id !== expandedPost.id && post.category === expandedPost.category)
                .slice(0, 3)
                .map(post => (
                  <div 
                    key={post.id}
                    onClick={() => setExpandedPost(post)}
                    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl cursor-pointer hover:translate-y-[-4px] transition-transform"
                  >
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-5">
                      <div className="flex items-center mb-3">
                        <span className="text-xs font-semibold px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h4 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h4>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Hamro Exam Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert tips, study strategies, and exam preparation resources to help you succeed
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <div 
                key={post.id}
                onClick={() => setExpandedPost(post)}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-semibold px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mt-4 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    Read more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div className="relative w-full sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category !== 'All' && categoryIcons[category]}
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <div 
                key={post.id}
                onClick={() => setExpandedPost(post)}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:translate-y-[-4px] transition-transform"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-400">No articles found matching your criteria</h3>
              <button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-700 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                1
              </button>
              <button className="px-4 py-2 border border-gray-700 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors">
                2
              </button>
              <button className="px-4 py-2 border border-gray-700 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors">
                3
              </button>
              <button className="px-4 py-2 border border-gray-700 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;