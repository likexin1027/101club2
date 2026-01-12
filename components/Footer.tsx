
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const JOIN_LINK = "https://docs.qq.com/form/page/DVU1MRWtEWURtcVhx?nlc=1#/fill";

  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg">101</span>
              </div>
              <span className="font-bold text-xl tracking-wider text-slate-900 italic">101 俱乐部</span>
            </Link>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              腾讯游戏官方视频创作社群。致力于扶持最具影响力的 1% 游戏视频创作者，共同打造连接热爱的内容生态。
            </p>
            <div className="flex space-x-4">
               <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all"><MessageCircle size={18} /></a>
               <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all"><Twitter size={18} /></a>
               <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all"><Github size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">链接</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">关于我们</Link></li>
              <li><Link to="/achievements" className="hover:text-blue-600 transition-colors">成员成就</Link></li>
              <li><Link to="/incentives" className="hover:text-blue-600 transition-colors">奖励机制</Link></li>
              <li><Link to="/community" className="hover:text-blue-600 transition-colors">创作者社区</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">支持</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">创作常见问题</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">商务合作</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">版权申诉</a></li>
              <li><a href={JOIN_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">加入我们</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-400 font-medium">
          <p>© 2024 Tencent Games. All Rights Reserved. 腾讯公司 版权所有</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-slate-600 transition-colors">服务协议</a>
            <a href="#" className="hover:text-slate-600 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-slate-600 transition-colors">知识产权公告</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
