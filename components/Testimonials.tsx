
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquare, User, Send, CheckCircle2, Quote } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  feeling: string;
  rating: number;
  date: string;
  verified: boolean;
}

const Testimonials: React.FC = () => {
  // Initialized as empty array to start fresh with real customers
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState('');
  const [feeling, setFeeling] = useState('');
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Load reviews from local storage if any exist (optional persistence)
  useEffect(() => {
    const saved = localStorage.getItem('arise_testimonials');
    if (saved) {
      try {
        setReviews(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse reviews");
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !feeling.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call / delay
    setTimeout(() => {
      const newReview: Review = {
        id: Math.random().toString(36).substr(2, 9),
        name: name.trim(),
        feeling: feeling.trim(),
        rating,
        date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        verified: true // Marking as verified for display
      };
      
      const updatedReviews = [newReview, ...reviews];
      setReviews(updatedReviews);
      localStorage.setItem('arise_testimonials', JSON.stringify(updatedReviews));
      
      setName('');
      setFeeling('');
      setRating(5);
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-4 px-8 py-3 bg-orange-50 rounded-full border border-orange-100 mb-6">
          <Quote size={18} className="text-[#CE5826]" />
          <span className="text-xs font-black uppercase tracking-[0.4em] text-[#CE5826]">Voice of the Visionaries</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight text-white">Elite <span className="text-[#357FA6]">Feelings</span></h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg font-medium uppercase tracking-widest leading-relaxed">
          The transformation wall. Real feedback from those who chose market dominance.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-start max-w-7xl mx-auto">
        {/* Post a Review Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-10 md:p-14 bg-white/5 backdrop-blur-md rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-white/10 relative overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#357FA6]/5 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black mb-10 uppercase tracking-tighter text-white">
              Share Your <span className="text-[#CE5826]">Story</span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Full Name / Organization</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Elite Ventures Africa"
                  className="w-full px-8 py-6 bg-white/10 border border-white/10 rounded-2xl focus:outline-none focus:border-[#357FA6] transition-all font-bold text-white placeholder:text-slate-500"
                  required
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Your Experience</label>
                <textarea 
                  value={feeling}
                  onChange={(e) => setFeeling(e.target.value)}
                  rows={4}
                  placeholder="What was the result of your collaboration with Arise?"
                  className="w-full px-8 py-6 bg-white/10 border border-white/10 rounded-2xl focus:outline-none focus:border-[#357FA6] transition-all font-bold text-white placeholder:text-slate-500 resize-none"
                  required
                />
              </div>

              <div className="flex items-center space-x-8">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Rating</span>
                <div className="flex space-x-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`transition-all transform hover:scale-125 ${rating >= star ? 'text-[#CE5826]' : 'text-slate-200'}`}
                    >
                      <Star size={28} fill={rating >= star ? '#CE5826' : 'transparent'} />
                    </button>
                  ))}
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-8 bg-slate-900 text-white rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] hover:bg-[#357FA6] transition-all flex items-center justify-center space-x-5 shadow-xl active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? (
                   <div className="flex items-center space-x-3">
                     <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                     <span>Submitting...</span>
                   </div>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Post Public Review</span>
                  </>
                )}
              </button>
            </form>

            <AnimatePresence>
              {showSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-8 p-6 bg-green-50 border border-green-100 rounded-2xl flex items-center justify-center space-x-4 text-green-600 font-bold text-sm uppercase tracking-widest"
                >
                  <CheckCircle2 size={20} />
                  <span>Success! Your review is now visible.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Display Testimonials */}
        <div className="space-y-10 max-h-[750px] overflow-y-auto pr-4 scrollbar-hide">
          <AnimatePresence initial={false}>
            {reviews.map((rev, index) => (
              <motion.div 
                key={rev.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="p-10 bg-white/5 border border-white/10 rounded-[3rem] shadow-sm relative group"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-5">
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-slate-400">
                      <User size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-white uppercase text-sm tracking-widest">{rev.name}</h4>
                      <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mt-1">{rev.date}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className={i < rev.rating ? 'text-[#CE5826]' : 'text-white/10'} fill={i < rev.rating ? '#CE5826' : 'transparent'} />
                    ))}
                  </div>
                </div>
                
                <p className="text-slate-200 text-base md:text-lg font-bold leading-relaxed mb-8 italic">
                  "{rev.feeling}"
                </p>

                {rev.verified && (
                  <div className="inline-flex items-center space-x-3 px-5 py-2 bg-green-50 rounded-full border border-green-100">
                    <CheckCircle2 size={14} className="text-green-500" />
                    <span className="text-[10px] font-black uppercase text-green-600 tracking-[0.2em]">Verified Arise Client</span>
                  </div>
                )}
                
                <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-10 transition-opacity">
                   <Quote size={100} className="text-slate-900" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {reviews.length === 0 && (
            <div className="text-center py-40 opacity-30 text-white">
              <MessageSquare size={80} className="mx-auto mb-8" />
              <h4 className="text-xl font-black uppercase tracking-[0.4em]">Empty Wall</h4>
              <p className="text-sm font-black uppercase tracking-widest mt-4">Waiting for the next visionary to share their story.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
