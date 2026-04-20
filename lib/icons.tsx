import {
  ArrowRight, Award, BarChart, Briefcase, CheckCircle, ChevronDown, ClipboardCheck, Clock,
  Facebook, Globe, Handshake, Heart, Instagram, Layers, Lightbulb, List,
  Mail, MapPin, Menu, MessageCircle, Phone, Plus, Settings, Shield, Star, Target,
  TrendingUp, Users, X, Youtube, Zap,
} from "lucide-react";

const ICON_MAP = {
  Shield, CheckCircle, Users, Phone, List, ClipboardCheck, Handshake, Target,
  Award, Zap, Heart, Star, TrendingUp, Lightbulb, Settings, Globe, BarChart,
  Clock, Layers, Briefcase,
};

export function DynamicIcon({ name, className, style }) {
  const Icon = ICON_MAP[name] || Shield;
  return <Icon className={className} style={style} />;
}

export {
  ArrowRight, Award, BarChart, Briefcase, CheckCircle, ChevronDown, ClipboardCheck, Clock,
  Facebook, Globe, Handshake, Heart, Instagram, Layers, Lightbulb, List,
  Mail, MapPin, Menu, MessageCircle, Phone, Plus, Settings, Shield, Star, Target,
  TrendingUp, Users, X, Youtube, Zap,
};
