
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles, TrendingUp, Users } from 'lucide-react';
import Counter from '../components/Counter';
import { ACHIEVEMENTS, FEATURED_VIDEOS } from '../constants';

const Home: React.FC = () => {
  const JOIN_LINK = "https://docs.qq.com/form/page/DVU1MRWtEWURtcVhx?nlc=1#/fill";

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -mr-64 -mt-64 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -ml-32 -mb-32"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 text-sm font-semibold border border-blue-100">
              <Sparkles size={16} />
              <span>腾讯游戏 101 俱乐部</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900">
              1% 的创作者<br />
              <span className="text-gradient">影响 99% 的观众</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              我们是连接游戏与玩家的桥梁。由腾讯游戏发起，旨在长线扶持、共同见证游戏内容创作的无限可能。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href={JOIN_LINK} target="_blank" rel="noopener noreferrer" className="group bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all flex items-center justify-center shadow-lg hover:shadow-blue-200">
                加入 101 俱乐部
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <Link to="/achievements" className="group bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center shadow-sm">
                查看成员成果
              </Link>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-2xl relative">
              <img src="https://picsum.photos/seed/tencent101/1200/800" alt="101 Club Hero" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group cursor-pointer">
                <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="text-white fill-white ml-1" size={32} />
                </div>
              </div>
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-10 -left-10 glass-morphism p-6 rounded-2xl shadow-xl border border-white/50 hidden lg:block">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">周活跃增长</div>
                  <div className="text-xl font-bold text-slate-900">+128%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-100/50 p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {ACHIECHEMENTS.map((stat, idx) => (
              <Counter key={idx} value={stat.value} label={stat.label} subtext={stat.subtext} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/m1/400/500" className="rounded-2xl shadow-lg" alt="Mission 1" />
              <img src="https://picsum.photos/seed/m2/400/300" className="rounded-2xl shadow-lg" alt="Mission 2" />
            </div>
            <div className="space-y-4 mt-12">
              <img src="https://picsum.photos/seed/m3/400/300" className="rounded-2xl shadow-lg" alt="Mission 3" />
              <img src="https://picsum.photos/seed/m4/400/500" className="rounded-2xl shadow-lg" alt="Mission 4" />
            </div>
          </div>
        </div>
        <div className="space-y-8 order-1 md:order-2">
          <h2 className="text-4xl font-bold text-slate-900">我们的愿景与使命</h2>
          <div className="space-y-6">
            <div className="flex space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-bold text-xl italic">01</div>
              <div>
                <h3 className="text-xl font-bold mb-2">长线扶持</h3>
                <p className="text-slate-600">不只是一次性的合作，我们致力于与创作者建立长达数年的伙伴关系，陪伴每一位才华横溢的作者从新锐走向顶流。</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-bold text-xl italic">02</div>
              <div>
                <h3 className="text-xl font-bold mb-2">内容共创</h3>
                <p className="text-slate-600">打破甲乙方的界限。我们开放核心游戏资源、提供独家素材包，与创作者深度探讨游戏内核，共同产出跨时代的爆款内容。</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-bold text-xl italic">03</div>
              <div>
                <h3 className="text-xl font-bold mb-2">多元变现</h3>
                <p className="text-slate-600">基于流量、基于质量、基于品牌。我们建立全方位的创作奖励机制，让热爱产出价值，让优秀的创作者在财务上获得尊重。</p>
              </div>
            </div>
          </div>
          <Link to="/about" className="inline-flex items-center text-blue-600 font-bold hover:underline">
            深入了解我们的故事 <ArrowRight className="ml-1" size={16} />
          </Link>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">精选创作者作品</h2>
              <p className="text-slate-400 max-w-lg">
                在 101 俱乐部，每一个创意都值得被看见。我们展示成员们在各个平台上产生的优秀爆款作品。
              </p>
            </div>
            <Link to="/achievements" className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full text-sm font-bold transition-all border border-white/20">
              浏览全部作品
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_VIDEOS.map((video) => (
              <div key={video.id} className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all">
                <div className="relative aspect-video">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Play size={20} fill="white" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-blue-600 text-[10px] font-bold px-2 py-1 rounded uppercase">
                    {video.platform}
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="font-bold line-clamp-2 leading-snug group-hover:text-blue-400 transition-colors">{video.title}</h3>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-medium text-slate-300">@ {video.author}</span>
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center"><Play size={12} className="mr-1" /> {video.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[40px] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-24 -mb-24 blur-2xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              开启你的游戏内容<br />创作新篇章
            </h2>
            <p className="text-xl text-blue-100 opacity-90">
              无论你是资深视频主，还是充满热情的创作新人，只要你热爱游戏，101 俱乐部就是你的舞台。
            </p>
            <div className="pt-4">
              <a href={JOIN_LINK} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl inline-block">
                立即申请加入
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Fix typo from aggregate source
const ACHIECHEMENTS = ACHIEVEMENTS;

export default Home;
