
import React from 'react';
import { Play, Heart, Share2, BarChart3, Star, Filter, Zap } from 'lucide-react';
import { FEATURED_VIDEOS, ACHIEVEMENTS, CLUB_MEMBERS } from '../constants';
import Counter from '../components/Counter';

const Achievements: React.FC = () => {
  return (
    <div className="pb-24 space-y-24">
      {/* Page Header */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <BarChart3 size={600} strokeWidth={1} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold italic">成就墙 / MILESTONES</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            数据是热爱的见证，成就是坚持的回响。在这里，我们共同记录 101 俱乐部成员每一个里程碑时刻。
          </p>
        </div>
      </section>

      {/* Aggregate Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-[40px] shadow-2xl p-12 grid grid-cols-2 md:grid-cols-5 gap-8 border border-slate-100">
          {ACHIEVEMENTS.map((stat, idx) => (
            <Counter key={idx} value={stat.value} label={stat.label} subtext={stat.subtext} />
          ))}
        </div>
      </section>

      {/* Member Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4">
          <div className="text-blue-600 font-bold tracking-widest uppercase">创作者图鉴 / CREATORS</div>
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">优秀创作者代表</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            汇聚全网优质灵魂，每一个头像背后都是数千小时的内容打磨与无限热爱。
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-12 gap-x-6">
          {CLUB_MEMBERS.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="relative mb-4">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-blue-500 transition-colors shadow-sm bg-slate-50">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                {member.hasBadge && (
                  <div className="absolute bottom-0 right-0 w-8 h-8 md:w-9 md:h-9 bg-yellow-400 rounded-full border-4 border-white flex items-center justify-center shadow-md animate-pulse group-hover:animate-none">
                    <Zap size={14} className="text-white fill-current" />
                  </div>
                )}
              </div>
              <span className="text-xs md:text-sm font-bold text-slate-800 text-center line-clamp-1 group-hover:text-blue-600 transition-colors">
                {member.name}
              </span>
            </div>
          ))}
        </div>
        
        <div className="bg-slate-50 rounded-3xl p-8 text-center">
            <p className="text-slate-400 text-sm font-medium">
                展示仅为部分成员，101 俱乐部目前拥有 200+ 位核心创作者。
            </p>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex items-center justify-between border-b border-slate-200 pb-8">
          <h2 className="text-3xl font-bold flex items-center">
            <Star className="text-yellow-400 mr-2 fill-yellow-400" />
            爆款作品集锦
          </h2>
          <div className="flex items-center space-x-4">
             <button className="flex items-center text-sm font-medium text-slate-600 bg-slate-100 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors">
                <Filter size={16} className="mr-2" /> 筛选分类
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {FEATURED_VIDEOS.map((video) => (
            <div key={video.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 transition-all hover:shadow-2xl">
              <div className="relative aspect-video overflow-hidden">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                      <Play size={28} fill="white" className="text-white ml-1" />
                   </div>
                </div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {video.platform}
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">{video.title}</h3>
                  <div className="text-slate-500 font-medium italic">by {video.author}</div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
                  <div className="text-center">
                    <div className="text-slate-400 text-xs uppercase font-bold tracking-tighter mb-1">播放量</div>
                    <div className="text-lg font-bold text-slate-800">{video.views}</div>
                  </div>
                  <div className="text-center border-x border-slate-100">
                    <div className="text-slate-400 text-xs uppercase font-bold tracking-tighter mb-1">点赞</div>
                    <div className="text-lg font-bold text-slate-800">{video.likes}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-slate-400 text-xs uppercase font-bold tracking-tighter mb-1">影响力指数</div>
                    <div className="text-lg font-bold text-blue-600">S+</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Progress/Charts Section */}
      <section className="bg-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">增长动力学</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              我们不仅关注当下的播放，更关注长期增长趋势。通过大数据分析，为成员提供更精准的流量引导与创作建议。
            </p>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>优质内容曝光率</span>
                  <span className="text-blue-600">92%</span>
                </div>
                <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full w-[92%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>长线变现转化率</span>
                  <span className="text-purple-600">85%</span>
                </div>
                <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full w-[85%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>跨平台粉丝重合度</span>
                  <span className="text-emerald-600">12% (极具拓展潜力)</span>
                </div>
                <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full w-[12%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-[40px] shadow-xl border border-blue-100 flex items-center justify-center min-h-[400px]">
            {/* Placeholder for a chart */}
            <div className="text-center space-y-4">
              <BarChart3 size={80} className="mx-auto text-blue-200" />
              <div className="text-slate-400 font-medium">成员成长曲线 (2024 年度实时监测)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
