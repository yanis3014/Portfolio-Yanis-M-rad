import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import RecentProjects from '@/components/RecentProjects';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <RecentProjects />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}