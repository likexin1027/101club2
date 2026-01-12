
import React from 'react';
/* Fix: Changed invalid icon name MessageCircleQuote to MessageSquareQuote */
import { Target, Shield, Users, Globe, Zap, Heart, CheckCircle2, Star, Sparkles, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 italic">关于我们 / ABOUT US</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            “101 俱乐部” 不仅仅是一个社群。它是腾讯游戏为寻找和扶持那最具影响力的 <span className="text-blue-600 font-bold">1%</span> 创作者而打造的殿堂。
          </p>
        </div>
      </section>

      {/* Philosophy & Selection Requirements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="text-blue-600 font-bold tracking-widest uppercase">选拔要求 / SELECTION</div>
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">
            高标准，只为遇见<br />同样热爱游戏的你
          </h2>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              目前“101俱乐部”成员较少（约200位+），其中一个重要的原因是我们对成员有一定要求（有时候录取率不到1%）。
            </p>
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <p><span className="font-bold text-slate-900">核心门槛：</span> 对游戏及创作充满极致的热情。热爱是第一生产力，也是我们最看重的素质。</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <p><span className="font-bold text-slate-900">成员构成：</span> 成员粉丝量从 1w 到 500w 不等。我们不在乎你现在的规模，只在乎你未来的潜力。</p>
              </div>
            </div>
          </div>
          
          <div className="text-blue-600 font-bold tracking-widest uppercase pt-8">加入后可以做什么？ / ACTIVITIES</div>
          <div className="space-y-4">
             <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                   <Zap size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-slate-900">每周内部活动</h4>
                   <p className="text-sm text-slate-500">每周发布创作挑战，意味着你每周都有创作灵感碰撞与实际收益。</p>
                </div>
             </div>
             <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                   <Heart size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-slate-900">长期伙伴关系</h4>
                   <p className="text-sm text-slate-500">我们追求的是长期的共生关系，而非一次性的流量买卖。陪伴你建立个人 IP。</p>
                </div>
             </div>
             <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                   <Star size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-slate-900">全品类创作自由</h4>
                   <p className="text-sm text-slate-500">支持科普、鬼畜、手绘、动画、音乐、整活等全方向，你的兴趣决定方向。</p>
                </div>
             </div>
          </div>
        </div>
        <div className="relative sticky top-32">
          <img src="https://picsum.photos/seed/about_selection/800/800" className="rounded-[40px] shadow-2xl" alt="Selection" />
          <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-3xl shadow-xl max-w-xs">
            <Sparkles className="mb-2 text-blue-200" />
            <p className="text-sm font-medium leading-relaxed">
              “只要你热爱游戏并对创作充满热情，录取概率将大幅提升。”
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">我们的价值观</h2>
            <p className="text-slate-400">驱动 101 俱乐部前进的三个核心支柱</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6 text-center">
              <div className="w-20 h-20 bg-blue-600/20 rounded-3xl flex items-center justify-center mx-auto text-blue-400 border border-blue-500/30">
                <Target size={40} />
              </div>
              <h3 className="text-2xl font-bold">专业主义</h3>
              <p className="text-slate-400 leading-relaxed">
                对游戏理解的深度，对视频品质的执着。我们追求极致，因为我们服务的也是极致的一群人。
              </p>
            </div>
            <div className="space-y-6 text-center">
              <div className="w-20 h-20 bg-purple-600/20 rounded-3xl flex items-center justify-center mx-auto text-purple-400 border border-purple-500/30">
                <Shield size={40} />
              </div>
              <h3 className="text-2xl font-bold">内容长期主义</h3>
              <p className="text-slate-400 leading-relaxed">
                不追逐短视的流量红利，专注于构建可持续的内容生命力，打造具有品牌价值的创作者个人 IP。
              </p>
            </div>
            <div className="space-y-6 text-center">
              <div className="w-20 h-20 bg-emerald-600/20 rounded-3xl flex items-center justify-center mx-auto text-emerald-400 border border-emerald-500/30">
                <Zap size={40} />
              </div>
              <h3 className="text-2xl font-bold">生态开放性</h3>
              <p className="text-slate-400 leading-relaxed">
                腾讯游戏提供肥沃的土壤，但不设围墙。我们鼓励跨游戏、跨平台、跨领域的创意碰撞。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
        <div className="text-center space-y-4">
          <div className="text-blue-600 font-bold tracking-widest uppercase">成员的声音 / VOICES</div>
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">
            在这里，每一个创意都备受尊重
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            成员的感受固然重要，但更重要的是，“你”的创意、才华与创作激情。
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                {/* Fix: Changed invalid icon name MessageCircleQuote to MessageSquareQuote */}
                <MessageSquareQuote size={80} />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">
                  {t.tag}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed font-medium italic">
                  “{t.content}”
                </p>
                <div className="flex items-center space-x-3 border-t border-slate-50 pt-6">
                  <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                  <div className="text-slate-900 font-bold">— {t.author}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* History */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16 border-t border-slate-100">
        <h2 className="text-4xl font-bold text-slate-900 text-center">发展历程</h2>
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:left-1/2">
          <div className="mb-12 relative">
            <div className="absolute top-0 left-[-11px] w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <div className="text-2xl font-bold text-blue-600 mb-2">2021</div>
              <h4 className="text-xl font-bold mb-2">诞生与初创</h4>
              <p className="text-slate-600">“101 俱乐部” 种子计划正式在腾讯游戏内部启动，首批邀请 30 位核心创作者深度共建。</p>
            </div>
          </div>
          <div className="mb-12 relative">
            <div className="absolute top-0 left-[-11px] w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>
            <div className="md:ml-1/2 md:pl-12">
              <div className="text-2xl font-bold text-blue-600 mb-2">2022</div>
              <h4 className="text-xl font-bold mb-2">规模化赋能</h4>
              <p className="text-slate-600">建立官方创作后台，发布第一个千万级激励计划。成员人数突破 500 位，覆盖主流游戏 50 余款。</p>
            </div>
          </div>
          <div className="mb-12 relative">
            <div className="absolute top-0 left-[-11px] w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <div className="text-2xl font-bold text-blue-600 mb-2">2023</div>
              <h4 className="text-xl font-bold mb-2">生态共荣</h4>
              <p className="text-slate-600">上线高校创作者扶持模块，首批“鹅厂实习生”从俱乐部中产生。总播放量突破 5 亿大关。</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-[-11px] w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>
            <div className="md:ml-1/2 md:pl-12">
              <div className="text-2xl font-bold text-blue-600 mb-2">2024 & 未来</div>
              <h4 className="text-xl font-bold mb-2">AI 创作新纪元</h4>
              <p className="text-slate-600">引入 AI 视频助手等前沿创作工具，探索 1% 创作者在 AIGC 时代的全新表达方式。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
