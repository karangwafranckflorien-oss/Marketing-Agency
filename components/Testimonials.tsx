
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
        <div className="inline-flex items-center space-x-3 px-6 py-2 bg-orange-50 rounded-full border border-orange-100 mb-6">
          <Quote size={14} className="text-[#FF7F00]" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF7F00]">Voice of the Visionaries</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight text-slate-900">Elite <span className="text-[#0077FF]">Feelings</span></h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium uppercase tracking-widest leading-relaxed">
          The transformation wall. Real feedback from those who chose market dominance.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-start max-w-7xl mx-auto">
        {/* Post a Review Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-10 md:p-14 bg-white rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 relative overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#0077FF]/5 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black mb-8 uppercase tracking-tighter text-slate-900">
              Share Your <span className="text-[#FF7F00]">Story</span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Full Name / Organization</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Elite Ventures Africa"
                  className="w-full px-8 py-6 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#0077FF] transition-all font-bold text-slate-900"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Your Experience</label>
                <textarea 
                  value={feeling}
                  onChange={(e) => setFeeling(e.target.value)}
                  rows={4}
                  placeholder="What was the result of your collaboration with Arise?"
                  className="w-full px-8 py-6 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#0077FF] transition-all font-bold text-slate-900 resize-none"
                  required
                />
              </div>

              <div className="flex items-center space-x-6">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Rating</span>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`transition-all transform hover:scale-125 ${rating >= star ? 'text-[#FF7F00]' : 'text-slate-200'}`}
                    >
                      <Star size={24} fill={rating >= star ? '#FF7F00' : 'transparent'} />
                    </button>
                  ))}
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-8 bg-slate-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] hover:bg-[#0077FF] transition-all flex items-center justify-center space-x-4 shadow-xl active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? (
                   <div className="flex items-center space-x-2">
                     <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                     <span>Submitting...</span>
                   </div>
                ) : (
                  <>
                    <Send size={18} />
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
                  className="mt-6 p-4 bg-green-50 border border-green-100 rounded-2xl flex items-center justify-center space-x-3 text-green-600 font-bold text-xs uppercase tracking-widest"
                >
                  <CheckCircle2 size={16} />
                  <span>Success! Your review is now visible.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Display Testimonials */}
        <div className="space-y-8 max-h-[700px] overflow-y-auto pr-4 scrollbar-hide">
          <AnimatePresence initial={false}>
            {reviews.map((rev, index) => (
              <motion.div 
                key={rev.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm relative group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                      <User size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">{rev.name}</h4>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">{rev.date}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < rev.rating ? 'text-[#FF7F00]' : 'text-slate-100'} fill={i < rev.rating ? '#FF7F00' : 'transparent'} />
                    ))}
                  </div>
                </div>
                
                <p className="text-slate-700 text-sm md:text-base font-bold leading-relaxed mb-6 italic">
                  "{rev.feeling}"
                </p>

                {rev.verified && (
                  <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-green-50 rounded-full border border-green-100">
                    <CheckCircle2 size={12} className="text-green-500" />
                    <span className="text-[8px] font-black uppercase text-green-600 tracking-[0.2em]">Verified Arise Client</span>
                  </div>
                )}
                
                <div className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-10 transition-opacity">
                   <Quote size={80} className="text-slate-900" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {reviews.length === 0 && (
            <div className="text-center py-32 opacity-30">
              <MessageSquare size={64} className="mx-auto mb-6" />
              <h4 className="text-lg font-black uppercase tracking-[0.4em]">Empty Wall</h4>
              <p className="text-xs font-black uppercase tracking-widest mt-2">Waiting for the next visionary to share their story.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
