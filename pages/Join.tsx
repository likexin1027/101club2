
import React, { useEffect } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Join: React.FC = () => {
  const JOIN_LINK = "https://docs.qq.com/form/page/DVU1MRWtEWURtcVhx?nlc=1#/fill";

  useEffect(() => {
    // Optionally auto-redirect or just provide a clear link
    // window.location.href = JOIN_LINK; 
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24">
      <div className="max-w-3xl w-full bg-white rounded-[40px] p-12 md:p-20 shadow-2xl text-center space-y-12 animate-fade-in border border-slate-100">
        <div className="space-y-6">
          <div className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
            Official Application
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight italic">
            前往 101 俱乐部<br />报名申请页面
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-xl mx-auto">
            请点击下方按钮前往腾讯文档填写官方报名表。审核通过后，我们将通过您预留的联系方式与您取得联系。
          </p>
        </div>
        
        <div className="pt-4">
          <a 
            href={JOIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            立即报名申请
            <ExternalLink className="ml-3" size={24} />
          </a>
        </div>

        <div className="pt-8 text-sm text-slate-400">
          <p>温馨提示：请确保填写的个人信息及作品链接真实有效。</p>
        </div>
      </div>
    </div>
  );
};

export default Join;
