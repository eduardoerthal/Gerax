import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import WhatsAppWidget from "../components/WhatsAppWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faIdCard,
  faClock,
  faGasPump,
  faScrewdriverWrench,
  faSnowflake,
  faSeedling,
  faTruckArrowRight,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Solucoes.css";

function Solucoes() {
  return (
    <div className="solucoes">
      <Navbar />

      {/* ===================== HERO ===================== */}
      <section className="hero-solucoes">
        <div className="hero-solucoes-content">
          <h1 className="hero-solucoes-title">
            <span>Nossas Soluções</span>
          </h1>
          <p>
            A GERAX é especializada em transformar o monitoramento de frotas e
            ativos em inteligência de dados operacionais.
          </p>
          <p>
            Através de um ecossistema de tecnologia nativa digital, entregamos
            controle absoluto, previsibilidade e segurança, combatendo
            ativamente a invisibilidade logística que drena a lucratividade
            das empresas.
          </p>
          <span className="solucoes-subtitle">
            Nossas soluções são divididas em módulos estratégicos para atender
            exatamente à fragilidade da sua operação
          </span>
        </div>
      </section>

      <section className="modulo modulo--claro">
        <div className="modulo__header">
          <span className="modulo__numero modulo__numero--azul">01</span>
          <h2 className="modulo__titulo">
            Módulo de Segurança e Gestão de Condutores
          </h2>
          <p className="modulo__foco">
            Focado na preservação da vida, do patrimônio e na mitigação
            rigorosa de passivos jurídicos e trabalhistas.
          </p>
        </div>

        <div className="modulo__grid modulo__grid--3">
          {/* Card 1.1 */}
          <div className="modulo-card">
            <div className="modulo-card__icone modulo-card__icone--azul">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <h3>Vídeo Telemetria com Inteligência Artificial</h3>
            <p>
              Monitoramento proativo da cabine e da via. A IA embarcada
              identifica, em tempo real, comportamentos de risco como sinais
              de fadiga, sonolência, uso de celular ao volante e distrações,
              gerando alertas visuais e sonoros para o motorista e
              notificações imediatas para a central.
            </p>
          </div>

          {/* Card 1.2 */}
          <div className="modulo-card">
            <div className="modulo-card__icone modulo-card__icone--azul">
              <FontAwesomeIcon icon={faIdCard} />
            </div>
            <h3>Identificador de Motorista (Controle de Acesso)</h3>
            <p>
              Tecnologia que exige a autenticação do condutor antes de liberar
              a ignição do veículo. Garante que apenas profissionais treinados
              e autorizados operem o equipamento, além de atribuir total
              responsabilidade por infrações de trânsito ou mau uso do veículo.
            </p>
          </div>

          {/* Card 1.3 */}
          <div className="modulo-card">
            <div className="modulo-card__icone modulo-card__icone--azul">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <h3>Controle e Automação de Jornada de Trabalho</h3>
            <p>
              Auditoria precisa do tempo de direção, paradas para descanso e
              espera. Assegura o cumprimento irrestrito da Lei do Motorista,
              eliminando passivos trabalhistas com horas extras não
              comprovadas e garantindo a saúde ocupacional da equipe.
            </p>
          </div>
        </div>
      </section>

      <section className="modulo modulo--branco">
        <div className="modulo__header">
          <span className="modulo__numero modulo__numero--verde">02</span>
          <h2 className="modulo__titulo">
            Módulo de Eficiência Operacional e Redução de Custos
          </h2>
          <p className="modulo__foco">
            Focado na saúde financeira da frota, otimizando o consumo e a
            disponibilidade dos veículos.
          </p>
        </div>

        <div className="modulo__grid modulo__grid--2">
          {/* Card 2.1 */}
          <div className="modulo-card">
            <div className="modulo-card__icone modulo-card__icone--verde">
              <FontAwesomeIcon icon={faGasPump} />
            </div>
            <h3>Gestão de Combustível e Telemetria Avançada</h3>
            <p>
              Identificação de vícios de condução que geram desperdício, como
              acelerações e frenagens bruscas, excesso de RPM e motor ocioso
              (marcha lenta). Permite a criação de um ranking de motoristas
              para campanhas de reeducação, reduzindo em até 15% a conta
              mensal de combustível.
            </p>
          </div>

          {/* Card 2.2 */}
          <div className="modulo-card">
            <div className="modulo-card__icone modulo-card__icone--verde">
              <FontAwesomeIcon icon={faScrewdriverWrench} />
            </div>
            <h3>Manutenção Preditiva e Preventiva</h3>
            <p>
              Transição do modelo corretivo (apagar incêndios) para o
              preditivo. O sistema monitora a saúde do veículo e alerta sobre
              a necessidade de revisões baseadas na quilometragem rodada e no
              tempo de uso do motor, evitando quebras inesperadas na via e
              estendendo a vida útil dos ativos.
            </p>
          </div>
        </div>
      </section>

      <section className="modulo modulo--claro">
        <div className="modulo__header">
          <span className="modulo__numero modulo__numero--azul">03</span>
          <h2 className="modulo__titulo">
            Módulo de Operações Especiais e Logística de Nicho
          </h2>
          <p className="modulo__foco">
            Sensores de alta precisão desenvolvidos para indústrias com
            demandas críticas de qualidade e SLA.
          </p>
        </div>

        <div className="modulo__grid modulo__grid--4">
          {/* Card 3.1 */}
          <div className="modulo-card">
            <div className="modulo-card__icone modulo-card__icone--azul">
              <FontAwesomeIcon icon={faSnowflake} />
            </div>
            <h3>Sensor de Temperatura para Câmaras Frias</h3>
            <p>
              Vital para os setores varejista, alimentício e farmacêutico.
              Monitora a temperatura e a umidade do baú frigorífico 24 horas
              por dia. Caso o clima saia do parâmetro estabelecido, alertas
              imediatos são disparados, permitindo intervenção rápida antes
              da perda da carga sensível.
            </p>
          </div>

          {/* Card 3.2 */}
          <div className="modulo-card">
            <div className="modulo-card__icone modulo-card__icone--azul">
              <FontAwesomeIcon icon={faSeedling} />
            </div>
            <h3>Monitoramento de Descarga de Ração e Insumos</h3>
            <p>
              Controle absoluto das operações no campo por meio de sensores
              acoplados à Tomada de Força (PTO). O gestor sabe exatamente a
              localização coordenada, o horário de início, o tempo de duração
              e o fim de cada descarga, blindando a operação contra desvios
              de mercadoria.
            </p>
          </div>

          {/* Card 3.3 */}
          <div className="modulo-card">
            <div className="modulo-card__icone modulo-card__icone--azul">
              <FontAwesomeIcon icon={faTruckArrowRight} />
            </div>
            <h3>Telemetria de Betoneiras (Construção Civil)</h3>
            <p>
              Controle do ciclo do concreto vivo. Sensores monitoram o sentido
              de rotação do balão (mistura ou descarga) e a velocidade,
              assegurando que o material não passe do tempo de cura no trajeto
              e mapeando gargalos de tempo de espera nos canteiros de obras.
            </p>
          </div>

          {/* Card 3.4 */}
          <div className="modulo-card">
            <div className="modulo-card__icone modulo-card__icone--azul">
              <FontAwesomeIcon icon={faBolt} />
            </div>
            <h3>Monitoramento Remoto de Geradores de Energia</h3>
            <p>
              Visibilidade ininterrupta para hospitais, eventos e
              infraestruturas críticas. A telemetria monitora o status de
              funcionamento, nível de tensão das baterias, horímetro para
              manutenção e emite alertas sobre quedas bruscas no tanque de
              combustível (prevenção contra furtos).
            </p>
          </div>
        </div>
      </section>

      <section className="solucoes-cta">
        <div className="solucoes-cta__box">
          <h2>Quer saber qual módulo se encaixa na sua operação?</h2>
          <p>
            Fale com um especialista da Gerax e receba uma análise
            personalizada para sua frota.
          </p>
          <Link to="/contato" className="btn-primary">
            Fale com um especialista
          </Link>
        </div>
      </section>

      <WhatsAppWidget />
    </div>
  );
}

export default Solucoes;
