import AppWindow from '@lucide/astro/icons/app-window';
import BadgeCheck from '@lucide/astro/icons/badge-check';
import Briefcase from '@lucide/astro/icons/briefcase';
import Building2 from '@lucide/astro/icons/building-2';
import ClipboardList from '@lucide/astro/icons/clipboard-list';
import Clock3 from '@lucide/astro/icons/clock-3';
import Code from '@lucide/astro/icons/code';
import Database from '@lucide/astro/icons/database';
import Dumbbell from '@lucide/astro/icons/dumbbell';
import FolderInput from '@lucide/astro/icons/folder-input';
import GraduationCap from '@lucide/astro/icons/graduation-cap';
import HardHat from '@lucide/astro/icons/hard-hat';
import HeartPulse from '@lucide/astro/icons/heart-pulse';
import LayoutTemplate from '@lucide/astro/icons/layout-template';
import ListChecks from '@lucide/astro/icons/list-checks';
import MapPinned from '@lucide/astro/icons/map-pinned';
import MousePointerClick from '@lucide/astro/icons/mouse-pointer-click';
import Palette from '@lucide/astro/icons/palette';
import PanelsTopLeft from '@lucide/astro/icons/panels-top-left';
import PenTool from '@lucide/astro/icons/pen-tool';
import RefreshCw from '@lucide/astro/icons/refresh-cw';
import Rocket from '@lucide/astro/icons/rocket';
import Search from '@lucide/astro/icons/search';
import ShieldCheck from '@lucide/astro/icons/shield-check';
import ShoppingBag from '@lucide/astro/icons/shopping-bag';
import ShoppingCart from '@lucide/astro/icons/shopping-cart';
import Store from '@lucide/astro/icons/store';
import Target from '@lucide/astro/icons/target';
import UtensilsCrossed from '@lucide/astro/icons/utensils-crossed';
import Wrench from '@lucide/astro/icons/wrench';

type IconComponent = typeof LayoutTemplate;

const fallbackServiceIcon = LayoutTemplate;
const fallbackIndustryIcon = Briefcase;

export const serviceIcons: Record<string, IconComponent> = {
  'custom-website-design': Palette,
  'wordpress-development': LayoutTemplate,
  'webflow-development': PanelsTopLeft,
  'shopify-development': ShoppingBag,
  'woocommerce-development': Store,
  'website-redesign': RefreshCw,
  'seo-services': Search,
  'drupal-development': Database,
  'web-application-development': AppWindow,
  'landing-page-design': MousePointerClick,
  'ux-ui-design': PenTool,
  'website-maintenance': Wrench,
  'website-migration': FolderInput,
};

export const industryIcons: Record<string, IconComponent> = {
  'tradies-construction': HardHat,
  'real-estate': Building2,
  'medical-healthcare': HeartPulse,
  'hospitality-restaurants': UtensilsCrossed,
  'retail-ecommerce': ShoppingCart,
  'professional-services': Briefcase,
  'fitness-wellness': Dumbbell,
  'education-childcare': GraduationCap,
};

export function getServiceIcon(id: string): IconComponent {
  return serviceIcons[id] ?? fallbackServiceIcon;
}

export function getIndustryIcon(id: string): IconComponent {
  return industryIcons[id] ?? fallbackIndustryIcon;
}

export const glanceIcons = {
  location: MapPinned,
  process: ListChecks,
  reply: Clock3,
} as const;

export const processIcons = {
  scope: ClipboardList,
  build: Code,
  launch: Rocket,
} as const;

export const whyIcons = {
  intent: Target,
  gimmicks: ShieldCheck,
  proof: BadgeCheck,
} as const;
