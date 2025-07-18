import studentImg from '../../assets/images/student.jpg';

export default function Hero() {
  return (
    <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img 
          src={studentImg} 
          alt="Students preparing for exams"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/70 to-gray-900" />
      </div>
      
      {/* Content container - centered */}
      <div className="relative z-10 w-full max-w-4xl px-6 py-12 mx-auto text-left">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            <span className="text-blue-400">B.Sc. CSIT</span>, <span className="text-blue-400">BIT</span> & <span className="text-blue-400">IOE</span> 
            <br />
            Entrance Preparation
          </h1>
          
          <div className="max-w-2xl mr-auto space-y-4 text-gray-300">
  <p className="text-lg md:text-xl leading-relaxed text-left">
    Comprehensive resources for Nepal's top engineering and IT entrance examinations
  </p>
  <p className="text-base md:text-lg leading-relaxed text-left">
    Previous year questions • Detailed solutions • Topic-wise practice
  </p>
</div>
          
          <p className="text-sm text-gray-400 mt-8">
            Trusted by 10,000+ students nationwide
          </p>
        </div>
      </div>
    </div>
  );
}