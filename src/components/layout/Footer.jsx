import { Mail, Phone, MapPin } from 'lucide-react'
import { contactInfo } from '../../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">

          {/* Col 1 */}
          <div className="col-span-1 border-r-0 md:border-r md:border-cream/5 pr-8">
            <a href="#inicio" className="group inline-block mb-6 relative">
              <img src="/images/Logo-laranja.png" alt="Nexus" className="h-14 w-auto" />
            </a>
            <p className="text-mist-900 text-sm mb-8 leading-relaxed max-w-xs">
              Contabilidade completa e humanizada para empresas do Simples Nacional, MEI, Lucro Presumido e Lucro Real — em todo o Brasil.
            </p>
          </div>

          {/* Col 2 */}
          <div className="col-span-1">
            <h4 className="font-mono text-xs text-signal uppercase tracking-widest mb-6">Serviços</h4>
            <ul className="flex flex-col gap-4 text-sm text-mist-500">
              <li><a href="#servicos" className="hover:text-cream transition-colors" data-cursor="text">Setor Fiscal</a></li>
              <li><a href="#servicos" className="hover:text-cream transition-colors" data-cursor="text">Departamento Pessoal</a></li>
              <li><a href="#servicos" className="hover:text-cream transition-colors" data-cursor="text">Setor Contábil</a></li>
              <li><a href="#servicos" className="hover:text-cream transition-colors" data-cursor="text">Certificado Digital</a></li>
              <li><a href="#servicos" className="hover:text-cream transition-colors" data-cursor="text">Legalização de empresas</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="col-span-1">
            <h4 className="font-mono text-xs text-signal uppercase tracking-widest mb-6">Institucional</h4>
            <ul className="flex flex-col gap-4 text-sm text-mist-500">
              <li><a href="#sobre" className="hover:text-cream transition-colors" data-cursor="text">Sobre nós</a></li>
              <li><a href="#sobre" className="hover:text-cream transition-colors" data-cursor="text">Missão, visão e valores</a></li>
              <li><a href="#sobre" className="hover:text-cream transition-colors" data-cursor="text">Como começar</a></li>
              <li><a href="#contato" className="hover:text-cream transition-colors" data-cursor="text">Perguntas frequentes</a></li>
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
                <span>{contactInfo.address}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-mist-900">
          <span>© 2026 Nexus Contabilidade. Todos os direitos reservados.</span>
          <span>Feito com precisão.</span>
        </div>
      </div>
    </footer>
  )
}
