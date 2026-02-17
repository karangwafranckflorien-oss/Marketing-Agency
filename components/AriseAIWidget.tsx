
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
          systemInstruction: "You are AriseAI, the elite marketing assistant for ARISE AI MARKETING AGENCY serving clients CROSS AFRICA. Our slogan: 'Everyone wants to make Digital MARKETING.' ARISE AI MARKETING AGENCY IS UNDER Arise Digital Solutions Ltd. - Rwanda. Our official website is www.ariseaiagency.com. Sections we serve: Restaurants, Hotels, Schools, Companies, and NGOs. Pricing: Single Image 1,000 RWF, 8s Video 5,000 RWF, 8s to 1min 15,000 RWF, and Monthly Excellence at 150,000 RWF. Conversion standard used: 1 RWF ≈ 0.000688 USD. Encourage users to call +250 795 590 127 or email contact@ariseaiagency.com for placement. Always be ambitious, polite, and represent premium African quality.",
        },
      });

      const aiText = response.text || "I'm ready to help your brand grow across Africa!";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error: any) {
      const errorMessage = error.message === "API_KEY_MISSING" 
        ? "My AI engine is currently disconnected. Please ensure the API_KEY environment variable is set in your deployment dashboard."
        : "I'm having a small technical hitch! Please reach us directly at +250 795 590 127 for elite service.";
      
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
            className="absolute bottom-20 right-0 w-80 md:w-96 glass-panel border border-white/40 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[550px]"
          >
            {/* Header */}
            <div className="p-8 border-b border-gray-100 bg-white/40 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#0077FF] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Bot size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xs font-black text-gray-900 uppercase tracking-[0.2em]">Arise AI Elite</h3>
                  <div className="flex items-center space-x-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Cross Africa Active</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-gray-900 transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-grow p-8 overflow-y-auto space-y-6 scrollbar-hide bg-white/10">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-3xl text-xs leading-relaxed ${
                    m.role === 'user' 
                    ? 'bg-[#0077FF] text-white font-bold rounded-tr-none shadow-lg shadow-blue-500/10' 
                    : 'bg-white border border-gray-100 text-gray-600 rounded-tl-none shadow-sm'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 p-5 rounded-3xl rounded-tl-none flex space-x-1.5">
                    <div className="w-1.5 h-1.5 bg-gray-200 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-gray-200 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-gray-200 rounded-full animate-bounce [animation-delay:0.4s]" />
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
                  className="w-full bg-white border border-gray-100 rounded-2xl px-5 py-4 text-xs text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#0077FF] transition-all shadow-sm group-hover:shadow-md"
                />
                <button 
                  onClick={handleChat}
                  disabled={loading}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0077FF] rounded-xl flex items-center justify-center text-white hover:bg-gray-900 transition-all shadow-md"
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
        className="w-16 h-16 bg-white border border-gray-100 shadow-2xl rounded-2xl flex items-center justify-center text-[#0077FF] relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? <X size={28} /> : <MessageSquare size={28} className="relative z-10" />}
        {!isOpen && (
          <div className="absolute top-3 right-3 w-3 h-3 bg-[#FF7F00] rounded-full border-2 border-white z-20" />
        )}
      </motion.button>
    </div>
  );
};

export default AriseAIWidget;
