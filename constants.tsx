
import React from 'react';
import { AchievementData, VideoWork, IncentiveTier, Post, Member } from './types';
import { Users, PlayCircle, TrendingUp, Award, GraduationCap, Zap, MessageSquareQuote } from 'lucide-react';

export const NAV_LINKS = [
  { name: '首页', href: '#/' },
  { name: '关于我们', href: '#/about' },
  { name: '成员成就', href: '#/achievements' },
  { name: '激励机制', href: '#/incentives' },
  { name: '互动社区', href: '#/community' },
];

export const ACHIEVEMENTS: AchievementData[] = [
  { label: '成员总粉丝数', value: '1亿+', subtext: '跨平台全网触达' },
  { label: '总播放量', value: '6亿+', subtext: '全网累计视频观看' },
  { label: '单款最高播放', value: '1800万+', subtext: '打造全网爆款内容' },
  { label: 'B站播放量', value: '650万+', subtext: '中长视频深度传播' },
  { label: '周增粉丝', value: '20万+', subtext: '极速成长的内容潜力' },
];

export const FEATURED_VIDEOS: VideoWork[] = [
  { id: '1', title: '《王者荣耀》英雄深度解析：1%的高光瞬间', author: '指尖艺术', views: '2.4M', likes: '156k', thumbnail: 'https://picsum.photos/seed/game1/800/450', platform: 'Bilibili' },
  { id: '2', title: '和平精英：极致战术还是运气博弈？', author: '吃鸡大神', views: '1.8M', likes: '98k', thumbnail: 'https://picsum.photos/seed/game2/800/450', platform: 'Douyin' },
  { id: '3', title: '从零开始：独立游戏创作全记录', author: '硬核创作者', views: '800k', likes: '45k', thumbnail: 'https://picsum.photos/seed/game3/800/450', platform: 'Video' },
  { id: '4', title: '天涯明月刀：武侠美学的视觉盛宴', author: '画中游', views: '1.2M', likes: '72k', thumbnail: 'https://picsum.photos/seed/game4/800/450', platform: 'Bilibili' },
];

export const CLUB_MEMBERS: Member[] = [
  { name: '是一只鱼啦', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=fish', hasBadge: true },
  { name: '清严君', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=qing', hasBadge: true },
  { name: '修鸽儿解说', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pigeon', hasBadge: true },
  { name: '包包入侵ssr', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ssr', hasBadge: true },
  { name: '寇丹老哥哥', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=oldman', hasBadge: true },
  { name: '呱唧鸭qwq', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=duck', hasBadge: true },
  { name: '梅德没姐夫', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sister', hasBadge: true },
  { name: '我真是朱有才', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhu', hasBadge: true },
  { name: '中一少年怪兽', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=monster', hasBadge: true },
  { name: '黄鹤追', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bird', hasBadge: true },
  { name: '撸sir兰陵君', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sir', hasBadge: true },
  { name: '最后一只渡渡鸟', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=dodo', hasBadge: true },
  { name: '野生老柠萌', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lemon', hasBadge: true },
  { name: '我是超人cr', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=super', hasBadge: true },
  { name: '鸽一品', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pigeon1', hasBadge: true },
  { name: '知更鸟', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=birdy', hasBadge: false },
  { name: '大队长哥哥', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=captain', hasBadge: true },
  { name: '李思南FPS', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=fps', hasBadge: false },
  { name: '我叫组长_', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=leader', hasBadge: true },
  { name: '小杯饭堂', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=canteen', hasBadge: false },
  { name: '董仲颖bvr', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=dong', hasBadge: true },
  { name: '高板大芥末', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wasabi', hasBadge: true },
  { name: '达子哥OVO', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ovo', hasBadge: false },
  { name: '蜂蜂的奇妙冒险', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bee', hasBadge: false },
];

/**
 * Incentive Mechanism data is currently cleared as per user request for adjustments.
 */
export const INCENTIVE_TIERS: IncentiveTier[] = [];

export const STUDENT_BENEFITS = [
  { title: '大厂实习推荐', icon: <GraduationCap size={24} />, description: '直通腾讯游戏实习面试，优秀者可获绿卡。' },
  { title: '项目实战经验', icon: <PlayCircle size={24} />, description: '参与官方大型活动策划与视频内容共创。' },
  { title: '专属荣誉证书', icon: <Award size={24} />, description: '腾讯游戏认证的“101俱乐部精英创作者”称号。' },
  { title: '行业大咖指导', icon: <Users size={24} />, description: '一对一获得知名制片人、资深运营的深度复盘。' },
];

export const TESTIMONIALS = [
  {
    author: "在日本的up主/设计师",
    content: "我觉得你们那边能设身处地的站在up主们的角度想，而且出现问题能第一时间解决，大家积极性也就会更高。以前也接触过其他机构，能像你们这样的真的挺少的。",
    tag: "深度支持"
  },
  {
    author: "高校作者/莉莉丝实习生",
    content: "感觉这个模式真的很能激发创作热情，尤其是创作者之间的火花。101俱乐部不仅仅是合作，更是一个共同进阶的创作场。",
    tag: "创作热情"
  },
  {
    author: "前B站员工/短视频作者",
    content: "你们会写成在线word，更细致的指导创作者去做。每次看到项目组写的word就很感动，太贴心了，是这几年来接触过最细心的项目组。",
    tag: "专业指导"
  },
  {
    author: "高校作者",
    content: "能遇到101俱乐部，并以传递自己的快乐去提高自己的生活质量，并且成为一份在外人看来非常专业的工作（但我认为快乐才是唯一动力），是一件妙不可言的事情。",
    tag: "热爱动力"
  }
];

export const MOCK_POSTS: Post[] = [
  { id: '1', author: '创作者A', avatar: 'https://i.pravatar.cc/150?u=1', content: '今天刚收到了101俱乐部的创作奖金，真的很有成就感！下一期视频准备尝试一下新的叙事风格。', timestamp: '2小时前', likes: 128, comments: 24 },
  { id: '2', author: '高校学子B', avatar: 'https://i.pravatar.cc/150?u=2', content: '感谢俱乐部的推荐，我拿到了暑期实习的Offer！作为大三学生，这段经历太珍贵了。', timestamp: '5小时前', likes: 256, comments: 45 },
  { id: '3', author: '运营小助手', avatar: 'https://i.pravatar.cc/150?u=3', content: '下周我们将举办《游戏叙事美学》闭门交流会，欢迎各位成员积极报名参与。', timestamp: '1天前', likes: 512, comments: 89 },
];
