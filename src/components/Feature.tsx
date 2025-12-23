export default function Feature() {
  const features = [
    { title: "Mood Tracker",
     description: "Track happy, energetic, neutral, sad, and angry moods with fun emojis. See patterns over time!", 
     icon: "🤩" 
    },
    { title: "Meal Time", 
    description: "Log meal times and what was eaten. Monitor nutrition and eating patterns of your child.", 
    icon: "🍼" 
  },
    { title: "Attendance",
     description: "Mark present or absent. Keep track of school days and special occasions of your child.", 
     icon: "🏅" 
    },
    { title: "Behaviour",
     description: "Log behaviors like smiling, focused, curious, and more. Celebrate the good moments!", 
     icon: "🏆" 
    },
    { title: "Potty Training",
     description: "Track potty training progress. Celebrate milestones and build confidence!", 
     icon: "🚽" 
    },
    { title: "Nap Time", 
      description: "Track total nap time and sleep patterns. Understand your child's rest needs.",
       icon: "😴" },
  ];
  return (
   
    <section id="Feature" className="text-center py-20 bg-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Watch Your Little One <br />
        Grow & Shine!
      </h1>
      <span className="inline-block bg-brand-blue text-white text-xs px-2 py-1 rounded-full mb-4">
        Curiosity Leads
      </span>
      <p className="text-gray-600 font-bold mb-6 max-w-xl mx-auto">
        Track moods, behaviors, meals, naps, and potty training all in one fun
        app. See your childs amazing journey unfold!
      </p>
      <button className="px-5 py-3 bg-brand-blue text-white rounded-lg hover:bg-blue-500 transition">
        Get started &rarr;
      </button>
      <h2 className="text-2xl md:text-3xl px-7 py-4 font-bold mb-4">
         Everything You Need To Track!
      </h2>
      <h3 className="text-xl md:text-xl lg:text-2xl font-light text-[#6C6C6C] mb-6">
        Keep track of what your child is doing.
      </h3>
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* mathi ko array yesma basxa */}
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-10 bg-[#f0f9ff] border-2 border-[#bae6fd] rounded-[2.5rem] text-center shadow-sm"
          >
            
            <div className="w-16 h-16 mb-6 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm text-3xl">
              {feature.icon}
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              {feature.title}
            </h3>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
