
import React, { useState } from 'react';
import { MOCK_POSTS } from '../constants';
import { MessageSquare, Heart, Share2, Search, Send, User } from 'lucide-react';

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState('hot');

  return (
    <div className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between border-b border-slate-200 pb-6">
            <div className="flex space-x-8">
              <button 
                onClick={() => setActiveTab('hot')}
                className={`text-lg font-bold pb-4 border-b-2 transition-all ${activeTab === 'hot' ? 'text-blue-600 border-blue-600' : 'text-slate-400 border-transparent'}`}
              >
                热门动态
              </button>
              <button 
                onClick={() => setActiveTab('new')}
                className={`text-lg font-bold pb-4 border-b-2 transition-all ${activeTab === 'new' ? 'text-blue-600 border-blue-600' : 'text-slate-400 border-transparent'}`}
              >
                最新发布
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="搜索讨论内容..." 
                className="bg-slate-100 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-64"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-start space-x-4">
             <div className="w-12 h-12 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center">
                <User className="text-slate-500" size={24} />
             </div>
             <div className="flex-grow space-y-4">
                <textarea 
                  placeholder="分享你的创作心得..." 
                  className="w-full bg-slate-50 rounded-2xl p-4 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                ></textarea>
                <div className="flex justify-end">
                   <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold flex items-center space-x-2 hover:bg-blue-700 transition-colors shadow-md">
                      <span>发布动态</span>
                      <Send size={16} />
                   </button>
                </div>
             </div>
          </div>

          <div className="space-y-6">
            {MOCK_POSTS.map((post) => (
              <div key={post.id} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img src={post.avatar} className="w-12 h-12 rounded-full shadow-sm" alt={post.author} />
                    <div>
                      <div className="font-bold text-slate-900">{post.author}</div>
                      <div className="text-xs text-slate-400">{post.timestamp}</div>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors">
                    关注
                  </button>
                </div>
                <p className="text-slate-700 leading-relaxed text-lg">
                  {post.content}
                </p>
                <div className="flex items-center space-x-8 pt-4 border-t border-slate-100">
                  <button className="flex items-center space-x-2 text-slate-400 hover:text-red-500 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-red-50">
                      <Heart size={16} />
                    </div>
                    <span className="text-sm font-medium">{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-slate-400 hover:text-blue-500 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50">
                      <MessageSquare size={16} />
                    </div>
                    <span className="text-sm font-medium">{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-slate-400 hover:text-emerald-500 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-emerald-50">
                      <Share2 size={16} />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 space-y-6">
            <h3 className="text-xl font-bold italic">精英作者排行</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i <= 3 ? 'bg-yellow-100 text-yellow-700' : 'bg-slate-100 text-slate-500'}`}>
                      {i}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="Top Creator" />
                    </div>
                    <div className="text-sm font-bold text-slate-900">创作者_{i}</div>
                  </div>
                  <div className="text-xs font-bold text-blue-600 italic">S+ RANK</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] p-8 text-white space-y-4">
             <h3 className="text-xl font-bold">社区规则</h3>
             <p className="text-sm text-blue-100 opacity-80 leading-relaxed">
               101 俱乐部社区是创作者的净土。我们鼓励真诚、深度、专业的创作讨论，杜绝低俗与恶意竞争。
             </p>
             <button className="text-xs font-bold border-b border-white/30 pb-1 hover:border-white transition-all">阅读完整社群准则</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
