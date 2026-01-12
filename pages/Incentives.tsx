
import React from 'react';
import { INCENTIVE_TIERS, STUDENT_BENEFITS } from '../constants';
import { CreditCard, Briefcase, GraduationCap, ChevronRight, CheckCircle2, Clock } from 'lucide-react';

const Incentives: React.FC = () => {
  const JOIN_LINK = "https://docs.qq.com/form/page/DVU1MRWtEWURtcVhx?nlc=1#/fill";

  return (
    <div className="pb-24 space-y-24">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold italic">创作激励与回报 / INCENTIVES</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            在这里，我们用最实际的方式致敬热爱。多维度的奖励机制，让你的每一份才华都收获应有的回报。
          </p>
        </div>
      </section>

      {/* Bonus Table Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                <CreditCard size={28} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">流量奖金池</h2>
        </div>
        
        {INCENTIVE_TIERS.length > 0 ? (
          <div className="grid gap-6">
            {INCENTIVE_TIERS.map((tier, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-[30px] shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="space-y-4 flex-grow">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
                      Tier 0{idx + 1}
                    </span>
                    <div className="text-xl font-bold text-slate-800">播放量区间：{tier.views}</div>
                  </div>
                  <p className="text-slate-500 max-w-md">{tier.description}</p>
                </div>
                <div className="mt-6 md:mt-0 flex items-center justify-between md:justify-end md:space-x-12 min-w-[300px]">
                  <div className="text-right">
                      <div className="text-sm text-slate-400 mb-1">单期最高奖励</div>
                      <div className="text-3xl font-bold text-blue-600">{tier.bonus}</div>
                  </div>
                  <button className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-slate-800 transition-colors">
                      申请领取
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-[40px] border border-dashed border-slate-300 p-20 text-center space-y-6">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
               <Clock size={40} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">激励计划正在升级调整中</h3>
              <p className="text-slate-500 max-w-md mx-auto">
                为了提供更具竞争力的创作回报，我们正在对“101 俱乐部”奖金池进行全方位优化，敬请期待补充更新。
              </p>
            </div>
          </div>
        )}
        
        <p className="mt-8 text-center text-slate-400 text-sm">
          * 奖金分配依据视频完播率、互动率及平台调性综合计算。具体细则以最新公示为准。
        </p>
      </section>

      {/* Student Opportunity Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-slate-900 rounded-[40px] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center px-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                    <GraduationCap size={28} />
                </div>
                <h2 className="text-3xl font-bold text-white italic tracking-wide">高校学子成长计划 / CAMPUS ELITE</h2>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed">
              我们坚信“创作要从学生抓起”。针对在校大学生创作者，101 俱乐部提供不仅是奖金，更是通往游戏行业的黄金门票。
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {STUDENT_BENEFITS.map((benefit, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="text-blue-400">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
            <a href={JOIN_LINK} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all flex items-center group inline-flex">
                申请“高校精英”名额 <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="relative">
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 space-y-8">
                <h4 className="text-2xl font-bold text-white text-center">精英成长之路</h4>
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">1</div>
                        <div className="text-white font-medium">提交作品并审核入部</div>
                    </div>
                    <div className="w-0.5 h-6 bg-white/20 ml-5"></div>
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">2</div>
                        <div className="text-white font-medium">完成 3 个以上 S 级创作项目</div>
                    </div>
                    <div className="w-0.5 h-6 bg-white/20 ml-5"></div>
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">3</div>
                        <div className="text-white font-medium">获得腾讯游戏官方认证勋章</div>
                    </div>
                    <div className="w-0.5 h-6 bg-white/20 ml-5"></div>
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">4</div>
                        <div className="text-white font-medium flex items-center">
                            进入实习推荐绿色通道 <SparkleIcon className="ml-2 text-yellow-400" />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const SparkleIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,2L14.5,9.5L22,12L14.5,14.5L12,22L9.5,14.5L2,12L9.5,9.5L12,2Z" />
    </svg>
)

export default Incentives;
