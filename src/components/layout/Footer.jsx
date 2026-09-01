import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import InstagramIcon from '../ui/InstagramIcon'
import { contactInfo } from '../../data/content'

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-cream/5 pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">

          {/* Col 1 */}
          <div className="col-span-1 border-r-0 md:border-r md:border-cream/5 pr-8">
            <Link to="/" className="group inline-block mb-6 relative">
              <img src="/images/Logo-laranja.png" alt="Nexus" className="h-14 w-auto" />
            </Link>
            <p className="text-mist-900 text-sm mb-8 leading-relaxed max-w-xs">
              TRANSFORMANDO A CONTABILIDADE COM TECNOLOGIA E ESTRATÉGIA.
            </p>
            <div className="flex gap-4 text-mist-900">
              <a href={contactInfo.instagram} target="_blank" rel="noreferrer" className="hover:text-cream transition-colors p-2 -ml-2 rounded-full hover:bg-cream/5" data-cursor="hover">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="col-span-1">
            <h4 className="font-mono text-xs text-signal uppercase tracking-widest mb-6">Serviços</h4>
            <ul className="flex flex-col gap-4 text-sm text-mist-500">
              <li><Link to="/servicos#contabilidade-digital" className="hover:text-cream transition-colors" data-cursor="text">Contabilidade Digital</Link></li>
              <li><Link to="/servicos#planejamento-tributario" className="hover:text-cream transition-colors" data-cursor="text">Planejamento Tributário</Link></li>
              <li><Link to="/servicos#abertura-empresas" className="hover:text-cream transition-colors" data-cursor="text">Abertura de Empresas</Link></li>
              <li><Link to="/servicos#certificado-digital" className="hover:text-cream transition-colors" data-cursor="text">Certificado Digital</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="col-span-1">
            <h4 className="font-mono text-xs text-signal uppercase tracking-widest mb-6">Empresa</h4>
            <ul className="flex flex-col gap-4 text-sm text-mist-500">
              <li><Link to="/sobre" className="hover:text-cream transition-colors" data-cursor="text">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:text-cream transition-colors" data-cursor="text">Contato</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="col-span-1">
            <h4 className="font-mono text-xs text-signal uppercase tracking-widest mb-6">Contato</h4>
            <div className="flex flex-col gap-4 text-sm text-mist-500">
              <a href={`https://wa.me/${contactInfo.whatsappNumber}`} target="_blank" rel="noreferrer" className="hover:text-cream transition-colors flex items-center gap-2" data-cursor="hover">
                <Phone size={14} className="text-signal" /> {contactInfo.whatsappDisplay}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-cream transition-colors flex items-center gap-2" data-cursor="hover">
                <Mail size={14} className="text-signal" /> {contactInfo.email}
              </a>
              <p className="text-mist-700 leading-relaxed flex items-start gap-2">
                <MapPin size={14} className="text-signal mt-1 shrink-0" />
                <span>{contactInfo.address}<br />{contactInfo.city}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-mist-900">
          <p>© 2025 Nexus | Contabilidade Estratégica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
