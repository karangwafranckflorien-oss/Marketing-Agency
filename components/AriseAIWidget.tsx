
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AriseAIWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Welcome to ARISE AI MARKETING AGENCY! We are now serving clients Cross Africa. How can I help your business excel with elite AI marketing today?" }
  ]);
  const [loading, setLoading] = useState(false);

  const handleChat = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      if (!process.env.API_KEY) {
        throw new Error("API_KEY_MISSING");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are AriseAI, the elite marketing assistant for ARISE AI MARKETING AGENCY serving clients CROSS AFRICA. Our slogan: 'Everyone wants to make Digital MARKETING.' ARISE AI MARKETING AGENCY IS UNDER Arise Digital Solutions Ltd. - Rwanda. Our official website is www.ariseaiagency.com. Sections we serve: Restaurants, Hotels, Schools, Companies, and NGOs. Updated Pricing: Single Image 2,500 RWF, 8s Video Promo 10,000 RWF, Premium Content (up to 3 min) 20,000 RWF. Monthly Social Media Management: Starter (230,000 RWF/mo, 12 posts), Grow (400,000 RWF/mo, 20 posts), Scale (690,000 RWF/mo, 30+ posts). NEW: Professional Training Program (Video Production & AI Motion, Professional Editing, AI Image & Visual Design, AI Strategy & Content Creation). Tools covered: Sora 2, Veo 3, Whisk, Flow AI, CapCut, Premiere Pro, Leonardo.ai, ChatGPT Pro+, Gemini, Claude, Perplexity, and Grok. Training follows an alternating cycle: 1 month of training followed by a 1 month break. Training months are Feb, Apr, Jun, Aug, Oct, Dec. Classes begin on the First Saturday of each training month. Physical Training: 75,000 RWF (Full Month). Online Training: 35,000 RWF per month (2h/week, 8h total). Payment details: After confirmation, at office or online. MoMo Code: 002680 (Arise Company). Physical Schedule: Tue & Fri (5:30 PM - 8:30 PM), Sat (10:30 AM - 2:00 PM). Online Schedule: Sat Only (Session 1: 8:00 AM - 10:00 AM, Session 2: 10:30 AM - 12:30 PM). Official Certificate issued upon completion. Users can apply via WhatsApp at +250 794 785 167. Conversion standard used: 1 RWF ≈ 0.000688 USD. Encourage users to call +250 794 785 167 or email ariseaimarketingagency@gmail.com for placement. Always be ambitious, polite, and represent premium African quality.",
        },
      });

      const aiText = response.text || "I'm ready to help your brand grow across Africa!";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error: any) {
      const errorMessage = error.message === "API_KEY_MISSING" 
        ? "My AI engine is currently disconnected. Please ensure the API_KEY environment variable is set in your deployment dashboard."
        : "I'm having a small technical hitch! Please reach us directly at +250 794 785 167 for elite service.";
      
      setMessages(prev => [...prev, { role: 'ai', text: errorMessage }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-24 right-0 w-72 md:w-80 glass-panel border border-white/40 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col h-[480px]"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 bg-white/40 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#357FA6] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Bot size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-[11px] font-black text-gray-900 uppercase tracking-[0.2em]">Arise AI Elite</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">Active</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-gray-900 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-grow p-6 overflow-y-auto space-y-4 scrollbar-hide bg-white/10">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-3xl text-sm leading-relaxed ${
                    m.role === 'user' 
                    ? 'bg-[#357FA6] text-white font-bold rounded-tr-none shadow-lg shadow-blue-500/10' 
                    : 'bg-white border border-gray-100 text-gray-600 rounded-tl-none shadow-sm'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 p-5 rounded-3xl rounded-tl-none flex space-x-2">
                    <div className="w-2 h-2 bg-gray-200 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-200 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 bg-gray-200 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white/40 border-t border-gray-50">
              <div className="relative group">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleChat()}
                  placeholder="Ask Arise AI..."
                  className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 text-[12px] text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#357FA6] transition-all shadow-sm group-hover:shadow-md"
                />
                <button 
                  onClick={handleChat}
                  disabled={loading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#357FA6] rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-all shadow-md"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-white border border-gray-100 shadow-2xl rounded-2xl flex items-center justify-center text-[#357FA6] relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? <X size={24} /> : <MessageSquare size={24} className="relative z-10" />}
        {!isOpen && (
          <div className="absolute top-3 right-3 w-3 h-3 bg-[#CE5826] rounded-full border-2 border-white z-20" />
        )}
      </motion.button>
    </div>
  );
};

export default AriseAIWidget;
