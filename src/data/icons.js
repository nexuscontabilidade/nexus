// Mapa de ícones usados no site — import nomeado (não `import * as`)
// para que o bundler consiga fazer tree-shaking e não inclua os
// milhares de ícones não usados da lucide-react no build final.
import { Calculator, Percent, Rocket, ShieldCheck, Target, Eye, Heart, Circle } from 'lucide-react'

export const iconMap = {
  Calculator,
  Percent,
  Rocket,
  ShieldCheck,
  Target,
  Eye,
  Heart,
}

export const FallbackIcon = Circle
