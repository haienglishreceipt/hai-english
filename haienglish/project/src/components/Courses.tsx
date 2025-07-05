import React, { useState } from 'react';
import { BookOpen, Users, Globe, Mic, PenTool, Briefcase, GraduationCap, Heart, Plane, FileText, Award, X, Clock, BarChart3 } from 'lucide-react';

interface Course {
  title: string;
  icon: React.ReactNode;
  description: string;
  category: string;
  duration: string;
  level: string;
  objectives: string[];
  prerequisites: string;
  certification: string;
  careerPaths: string[];
}

const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courses: Course[] = [
    {
      title: 'TEFL - Teaching English as a Foreign Language',
      icon: <BookOpen className="h-8 w-8" />,
      description: 'Comprehensive certification program designed for teaching English to non-native speakers in countries where English is not the primary language. Learn effective teaching methodologies, classroom management, and curriculum development.',
      category: 'Teaching',
      duration: '120 hours',
      level: 'Beginner to Advanced',
      objectives: [
        'Master fundamental teaching methodologies',
        'Develop effective classroom management skills',
        'Create engaging lesson plans and curricula',
        'Understand language acquisition theories',
        'Practice teaching techniques through practical exercises'
      ],
      prerequisites: 'Basic English proficiency (intermediate level or higher)',
      certification: 'TEFL Certificate with Golden Seal - Internationally Recognized',
      careerPaths: ['English Teacher Abroad', 'Online English Tutor', 'Language School Instructor', 'Private English Coach']
    },
    {
      title: 'TESOL - Teaching English to Speakers of Other Languages',
      icon: <Globe className="h-8 w-8" />,
      description: 'Advanced methodology course for teaching English in diverse linguistic environments. Covers multicultural classroom dynamics, language acquisition theories, and adaptive teaching strategies for various learning styles.',
      category: 'Teaching',
      duration: '120 hours',
      level: 'Intermediate to Advanced',
      objectives: [
        'Understand diverse linguistic backgrounds',
        'Develop multicultural teaching strategies',
        'Master advanced language acquisition theories',
        'Create inclusive learning environments',
        'Adapt teaching methods for different learning styles'
      ],
      prerequisites: 'Teaching experience or TEFL certification recommended',
      certification: 'TESOL Certificate with Golden Seal - Internationally Recognized',
      careerPaths: ['ESL Program Coordinator', 'University English Instructor', 'Curriculum Developer', 'Teacher Trainer']
    },
    {
      title: 'TESL - Teaching English as a Second Language',
      icon: <Users className="h-8 w-8" />,
      description: 'Specialized training for teaching English in English-speaking countries to immigrants and international students. Focus on integration, cultural adaptation, and practical communication skills.',
      category: 'Teaching',
      duration: '100 hours',
      level: 'Intermediate',
      objectives: [
        'Support immigrant and refugee language learning',
        'Facilitate cultural integration through language',
        'Develop practical communication skills',
        'Address specific challenges of second language learners',
        'Create community-based learning programs'
      ],
      prerequisites: 'Basic understanding of second language acquisition',
      certification: 'TESL Certificate with Golden Seal',
      careerPaths: ['Community College ESL Instructor', 'Adult Education Teacher', 'Immigration Services Educator', 'Corporate Language Trainer']
    },
    {
      title: 'TEYL - Teaching English to Young Learners',
      icon: <Heart className="h-8 w-8" />,
      description: 'Child-focused pedagogy for teaching English to students aged 3-12. Learn age-appropriate activities, games, storytelling techniques, and developmental psychology principles for effective young learner education.',
      category: 'Teaching',
      duration: '80 hours',
      level: 'Beginner to Intermediate',
      objectives: [
        'Understand child development and language acquisition',
        'Design age-appropriate learning activities',
        'Master storytelling and game-based learning',
        'Create engaging and fun learning environments',
        'Develop classroom management skills for young learners'
      ],
      prerequisites: 'Love for working with children and basic English skills',
      certification: 'TEYL Certificate with Golden Seal',
      careerPaths: ['Kindergarten English Teacher', 'Primary School ESL Teacher', 'Children\'s Language Center Instructor', 'Private Tutor for Kids']
    },
    {
      title: 'BASIC ENGLISH I & II',
      icon: <BookOpen className="h-8 w-8" />,
      description: 'Fundamental English skills for absolute beginners. Covers basic grammar, vocabulary, pronunciation, and everyday conversation. Perfect foundation for further English language learning.',
      category: 'Foundation',
      duration: '60 hours each',
      level: 'Beginner',
      objectives: [
        'Master basic English grammar structures',
        'Build essential vocabulary for daily communication',
        'Develop proper pronunciation and speaking skills',
        'Practice listening and comprehension',
        'Gain confidence in basic English conversations'
      ],
      prerequisites: 'No prior English knowledge required',
      certification: 'Basic English Completion Certificate',
      careerPaths: ['Foundation for Advanced English Studies', 'Basic Customer Service Roles', 'Tourism Industry Entry Level', 'Personal Development']
    },
    {
      title: 'Advanced TESOL (180 hours)',
      icon: <Award className="h-8 w-8" />,
      description: 'Intensive 180-hour program for advanced teaching certification. Includes practicum, research methodology, curriculum design, and specialized teaching techniques for professional educators.',
      category: 'Teaching',
      duration: '180 hours',
      level: 'Advanced',
      objectives: [
        'Conduct educational research and analysis',
        'Design comprehensive curriculum programs',
        'Master advanced teaching methodologies',
        'Complete supervised teaching practicum',
        'Develop leadership skills in education'
      ],
      prerequisites: 'Previous teaching experience and TESOL/TEFL certification',
      certification: 'Advanced TESOL Certificate with Golden Seal + Medal + Plaque',
      careerPaths: ['Academic Director', 'Curriculum Specialist', 'Teacher Trainer', 'Educational Consultant']
    },
    {
      title: 'Cultural Studies',
      icon: <Globe className="h-8 w-8" />,
      description: 'Understanding cultural contexts in English language teaching. Explore cross-cultural communication, cultural sensitivity, and how to integrate cultural awareness into language instruction.',
      category: 'Academic',
      duration: '40 hours',
      level: 'Intermediate',
      objectives: [
        'Understand cultural dimensions in language learning',
        'Develop cross-cultural communication skills',
        'Learn to integrate culture into language teaching',
        'Address cultural barriers in education',
        'Promote cultural sensitivity and awareness'
      ],
      prerequisites: 'Basic understanding of different cultures',
      certification: 'Cultural Studies Certificate',
      careerPaths: ['International Relations', 'Cultural Liaison Officer', 'Multicultural Education Specialist', 'Cross-Cultural Trainer']
    },
    {
      title: 'Journalism 101',
      icon: <PenTool className="h-8 w-8" />,
      description: 'Introduction to English journalism and media writing. Learn news writing, interviewing techniques, media ethics, and digital journalism skills for modern communication careers.',
      category: 'Professional',
      duration: '50 hours',
      level: 'Intermediate',
      objectives: [
        'Master news writing and reporting techniques',
        'Develop interviewing and research skills',
        'Understand media ethics and responsibility',
        'Learn digital journalism and social media',
        'Practice various forms of journalistic writing'
      ],
      prerequisites: 'Intermediate English writing skills',
      certification: 'Journalism 101 Certificate',
      careerPaths: ['Journalist', 'Content Writer', 'Social Media Manager', 'Communications Specialist']
    },
    {
      title: 'Public Speaking and Non-verbal Communication',
      icon: <Mic className="h-8 w-8" />,
      description: 'Develop confident speaking and presentation skills. Master body language, voice projection, audience engagement, and overcome speaking anxiety for professional and personal success.',
      category: 'Professional',
      duration: '40 hours',
      level: 'All Levels',
      objectives: [
        'Overcome public speaking anxiety',
        'Master voice projection and articulation',
        'Develop effective body language',
        'Create engaging presentations',
        'Build confidence in public communication'
      ],
      prerequisites: 'Basic English communication skills',
      certification: 'Public Speaking Certificate',
      careerPaths: ['Corporate Trainer', 'Sales Representative', 'Team Leader', 'Conference Speaker']
    },
    {
      title: 'Business English',
      icon: <Briefcase className="h-8 w-8" />,
      description: 'Professional English for business environments. Learn business correspondence, meeting facilitation, negotiation skills, and industry-specific vocabulary for corporate success.',
      category: 'Professional',
      duration: '60 hours',
      level: 'Intermediate to Advanced',
      objectives: [
        'Master business correspondence and emails',
        'Develop meeting facilitation skills',
        'Learn negotiation and presentation techniques',
        'Build industry-specific vocabulary',
        'Practice professional communication scenarios'
      ],
      prerequisites: 'Intermediate English proficiency',
      certification: 'Business English Certificate',
      careerPaths: ['Business Manager', 'International Sales', 'Corporate Communications', 'Executive Assistant']
    },
    {
      title: 'English Literature',
      icon: <BookOpen className="h-8 w-8" />,
      description: 'Explore classic and contemporary English literature. Analyze literary works, develop critical thinking skills, and understand cultural and historical contexts of major literary movements.',
      category: 'Academic',
      duration: '80 hours',
      level: 'Intermediate to Advanced',
      objectives: [
        'Analyze classic and contemporary literature',
        'Develop critical thinking and interpretation skills',
        'Understand historical and cultural contexts',
        'Master literary analysis techniques',
        'Explore various literary genres and movements'
      ],
      prerequisites: 'Strong English reading and comprehension skills',
      certification: 'English Literature Certificate',
      careerPaths: ['Literature Teacher', 'Editor', 'Literary Critic', 'Academic Researcher']
    },
    {
      title: 'Creative Writing',
      icon: <PenTool className="h-8 w-8" />,
      description: 'Develop creative writing skills and techniques. Learn storytelling, character development, poetry, and various writing genres while building your unique voice as a writer.',
      category: 'Creative',
      duration: '60 hours',
      level: 'All Levels',
      objectives: [
        'Develop storytelling and narrative techniques',
        'Master character and plot development',
        'Explore poetry and creative expression',
        'Build your unique writing voice',
        'Practice various creative writing genres'
      ],
      prerequisites: 'Basic English writing skills and creativity',
      certification: 'Creative Writing Certificate',
      careerPaths: ['Author', 'Screenwriter', 'Content Creator', 'Creative Writing Teacher']
    },
    {
      title: 'English for Traveling',
      icon: <Plane className="h-8 w-8" />,
      description: 'Practical English for travelers and tourists. Learn essential phrases, navigation skills, cultural etiquette, and emergency communication for confident international travel.',
      category: 'Practical',
      duration: '30 hours',
      level: 'Beginner to Intermediate',
      objectives: [
        'Master essential travel phrases and vocabulary',
        'Learn navigation and direction skills',
        'Understand cultural etiquette in different countries',
        'Practice emergency communication',
        'Build confidence for international travel'
      ],
      prerequisites: 'Basic English knowledge helpful but not required',
      certification: 'Travel English Certificate',
      careerPaths: ['Tour Guide', 'Travel Agent', 'Hospitality Industry', 'International Business Travel']
    },
    {
      title: 'Intermediate English 1, 2, 3',
      icon: <GraduationCap className="h-8 w-8" />,
      description: 'Progressive intermediate level English courses. Build upon basic skills with advanced grammar, expanded vocabulary, complex sentence structures, and improved fluency.',
      category: 'Foundation',
      duration: '50 hours each',
      level: 'Intermediate',
      objectives: [
        'Master intermediate grammar structures',
        'Expand vocabulary for various contexts',
        'Develop complex sentence construction',
        'Improve listening and speaking fluency',
        'Prepare for advanced English studies'
      ],
      prerequisites: 'Completion of Basic English or equivalent knowledge',
      certification: 'Intermediate English Certificate (Levels 1, 2, 3)',
      careerPaths: ['Customer Service Representative', 'Administrative Assistant', 'Retail Supervisor', 'Preparation for Advanced Studies']
    },
    {
      title: 'English for Kids',
      icon: <Heart className="h-8 w-8" />,
      description: 'Fun and engaging English learning for children aged 5-12. Interactive lessons with songs, games, stories, and activities designed to make learning enjoyable and effective.',
      category: 'Children',
      duration: '40 hours',
      level: 'Beginner',
      objectives: [
        'Learn English through fun games and activities',
        'Develop basic vocabulary and pronunciation',
        'Build confidence in English communication',
        'Enjoy learning through songs and stories',
        'Create positive associations with English learning'
      ],
      prerequisites: 'Designed for children aged 5-12, no prior English required',
      certification: 'English for Kids Completion Certificate',
      careerPaths: ['Foundation for Academic English', 'Preparation for International Schools', 'Enhanced Communication Skills', 'Cultural Awareness']
    },
    {
      title: 'English 101',
      icon: <BookOpen className="h-8 w-8" />,
      description: 'Foundational English course covering essential grammar, basic vocabulary, sentence construction, and fundamental communication skills for everyday situations.',
      category: 'Foundation',
      duration: '60 hours',
      level: 'Beginner',
      objectives: [
        'Learn fundamental English grammar rules',
        'Build essential vocabulary for daily life',
        'Practice basic sentence construction',
        'Develop listening and speaking skills',
        'Gain confidence in everyday English communication'
      ],
      prerequisites: 'No prior English knowledge required',
      certification: 'English 101 Completion Certificate',
      careerPaths: ['Entry-level Customer Service', 'Basic Administrative Roles', 'Foundation for Further Studies', 'Personal Development']
    },
    {
      title: 'English Proficiency Test',
      icon: <FileText className="h-8 w-8" />,
      description: 'Comprehensive English proficiency assessment covering reading, writing, listening, and speaking skills. Receive detailed feedback and certification of your English level.',
      category: 'Assessment',
      duration: '4 hours',
      level: 'All Levels',
      objectives: [
        'Assess current English proficiency level',
        'Identify strengths and areas for improvement',
        'Receive detailed performance feedback',
        'Get official certification of English level',
        'Plan future learning pathway'
      ],
      prerequisites: 'Open to all English learners',
      certification: 'Official English Proficiency Certificate with Level Rating',
      careerPaths: ['Academic Placement', 'Job Applications', 'Immigration Requirements', 'Personal Assessment']
    },
    {
      title: 'Advanced English',
      icon: <Award className="h-8 w-8" />,
      description: 'High-level English for advanced learners. Master complex grammar, sophisticated vocabulary, academic writing, and near-native fluency for professional and academic excellence.',
      category: 'Advanced',
      duration: '80 hours',
      level: 'Advanced',
      objectives: [
        'Master complex grammar and syntax',
        'Develop sophisticated vocabulary',
        'Perfect academic and professional writing',
        'Achieve near-native fluency',
        'Prepare for highest-level English requirements'
      ],
      prerequisites: 'Upper-intermediate English proficiency',
      certification: 'Advanced English Certificate with Golden Seal',
      careerPaths: ['University Professor', 'International Business Executive', 'Professional Translator', 'Academic Researcher']
    }
  ];

  const categories = ['All', 'Teaching', 'Foundation', 'Professional', 'Academic', 'Creative', 'Practical', 'Children', 'Assessment', 'Advanced'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const handleLearnMore = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of English courses designed to meet your specific learning goals and career aspirations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-blue-200 group"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-blue-100 rounded-lg p-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {course.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                      {course.category}
                    </span>
                    <span className="inline-block bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                      {course.duration}
                    </span>
                    <span className="inline-block bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full text-xs font-medium">
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {course.description}
              </p>
              
              <button 
                onClick={() => handleLearnMore(course)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Course Information Footer */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Courses?</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Internationally Recognized</h4>
              <p className="text-gray-600 text-sm">All certificates are accredited and accepted worldwide</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Instructors</h4>
              <p className="text-gray-600 text-sm">Learn from qualified and experienced English educators</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Flexible Learning</h4>
              <p className="text-gray-600 text-sm">Study at your own pace with comprehensive course materials</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Details Modal */}
      {isModalOpen && selectedCourse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 rounded-lg p-3 text-blue-600">
                  {selectedCourse.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedCourse.title}</h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedCourse.category}
                    </span>
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{selectedCourse.duration}</span>
                    </span>
                    <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <BarChart3 className="h-4 w-4" />
                      <span>{selectedCourse.level}</span>
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Course Description</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedCourse.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Learning Objectives</h3>
                  <ul className="space-y-2">
                    {selectedCourse.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="bg-blue-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-600 text-sm">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Prerequisites</h3>
                  <p className="text-gray-600 text-sm bg-gray-50 p-3 rounded-lg">{selectedCourse.prerequisites}</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Certification</h3>
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="h-5 w-5 text-yellow-600" />
                      <span className="font-medium text-gray-900">Certificate Details</span>
                    </div>
                    <p className="text-gray-700 text-sm">{selectedCourse.certification}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Career Opportunities</h3>
                  <div className="space-y-2">
                    {selectedCourse.careerPaths.map((career, index) => (
                      <div key={index} className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                        <span className="text-emerald-800 font-medium text-sm">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Ready to Enroll?</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Take the next step in your English learning journey. Contact us for enrollment details and package options.
                  </p>
                  <div className="flex flex-col space-y-2">
                    <a
                      href="#bundles"
                      onClick={closeModal}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                    >
                      View Package Options
                    </a>
                    <a
                      href="#payment"
                      onClick={closeModal}
                      className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-blue-600 text-center"
                    >
                      Payment Information
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;