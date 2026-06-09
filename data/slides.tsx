import { agencyDeckSlides } from "@/data/agencyDeck";
import { AgencyDeckSlide } from "@/components/slides/AgencyDeckSlide";

export type DeckSlide = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  menuLabel: string;
  component: React.ReactNode;
};

export const slides: DeckSlide[] = agencyDeckSlides.map((slide) => ({
  id: slide.id,
  number: slide.number,
  eyebrow: slide.eyebrow,
  title: slide.title,
  menuLabel: slide.menuLabel,
  component: <AgencyDeckSlide slide={slide} />,
}));
