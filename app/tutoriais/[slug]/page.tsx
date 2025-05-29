import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Wrench, PenToolIcon as Tool, AlertTriangle, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Dados dos tutoriais
const tutoriais = {
  "desmontagem-cabecote": {
    titulo: "Desmontagem do Cabeçote",
    descricao: "Guia completo para remoção e desmontagem do cabeçote do motor AP",
    nivel: "Intermediário",
    tempo: "2-3 horas",
    ferramentas: ["Chave de fenda", "Chave de boca 10-19mm", "Torquímetro", "Extrator de válvulas"],
    imagem: "/placeholder.svg?height=400&width=600",
    passos: [
      {
        titulo: "Preparação",
        descricao:
          "Antes de iniciar a desmontagem do cabeçote, certifique-se de que o motor esteja frio para evitar queimaduras. Desconecte o terminal negativo da bateria para segurança.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Remoção de Componentes Externos",
        descricao:
          "Remova todos os componentes conectados ao cabeçote: mangueiras, cabos de vela, coletor de admissão e escape. Marque a posição de cada componente para facilitar a montagem posterior.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Remoção da Tampa de Válvulas",
        descricao:
          "Solte os parafusos da tampa de válvulas em sequência cruzada para evitar empenamento. Levante cuidadosamente a tampa e remova a junta, verificando seu estado de conservação.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Remoção da Correia Dentada",
        descricao:
          "Alinhe as marcações de ponto do motor. Solte o tensionador e remova a correia dentada com cuidado. Não gire o virabrequim ou o comando de válvulas após este passo.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Remoção dos Parafusos do Cabeçote",
        descricao:
          "Solte os parafusos do cabeçote na sequência inversa ao aperto (de fora para dentro) em etapas graduais para evitar empenamento. Use uma chave adequada para não danificar as cabeças dos parafusos.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Remoção do Cabeçote",
        descricao:
          "Levante o cabeçote verticalmente com cuidado para não danificar os prisioneiros ou a superfície de contato. Se estiver preso, não force - use uma ferramenta de borracha para bater levemente nas laterais.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Desmontagem das Válvulas",
        descricao:
          "Com o extrator de válvulas, comprima as molas e remova as travas. Retire as molas, os pratos, as válvulas e as guias. Organize as peças na ordem de remoção para não misturar componentes.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
    ],
    dicas: [
      "Fotografe cada etapa para referência durante a montagem",
      "Organize os parafusos na ordem de remoção",
      "Verifique se há trincas ou empenamento no cabeçote",
      "Limpe todas as superfícies de contato antes da remontagem",
    ],
  },
  "montagem-pistoes": {
    titulo: "Montagem dos Pistões",
    descricao: "Processo completo de instalação dos pistões e bielas no bloco do motor",
    nivel: "Avançado",
    tempo: "4-5 horas",
    ferramentas: ["Alicate para anéis", "Torquímetro", "Plástico calibrado", "Brunidor de cilindros"],
    imagem: "/placeholder.svg?height=400&width=600",
    passos: [
      {
        titulo: "Preparação dos Componentes",
        descricao:
          "Verifique se os pistões, anéis, bielas e bronzinas estão limpos e sem danos. Organize-os na ordem de montagem conforme a numeração dos cilindros.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Verificação da Folga dos Anéis",
        descricao:
          "Insira cada anel no cilindro correspondente e meça a folga entre as pontas usando um calibrador de lâminas. A folga deve estar dentro das especificações do fabricante (geralmente 0,3-0,5mm para anéis de compressão).",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Instalação dos Anéis nos Pistões",
        descricao:
          "Instale os anéis nos pistões usando o alicate específico. Comece pelo anel raspador (inferior), depois o anel de compressão intermediário e por fim o anel superior. Posicione as aberturas dos anéis conforme recomendação do fabricante (geralmente defasadas em 120°).",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Montagem das Bielas nos Pistões",
        descricao:
          "Aqueça as bielas em óleo a aproximadamente 80°C para facilitar a montagem. Alinhe o pistão e a biela conforme as marcações e insira o pino do pistão. Instale os anéis de trava nas extremidades do pino.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Lubrificação dos Componentes",
        descricao:
          "Aplique óleo de motor limpo em todas as superfícies de contato: pistões, anéis, paredes dos cilindros, bronzinas e moentes do virabrequim. Isso é crucial para evitar danos durante a partida inicial.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Instalação das Bronzinas",
        descricao:
          "Instale as bronzinas nas bielas e nos mancais, verificando se as travas de posicionamento estão corretamente encaixadas. As bronzinas devem ser instaladas a seco, sem óleo entre elas e seus alojamentos.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Medição da Folga das Bronzinas",
        descricao:
          "Use plástico calibrado para medir a folga entre as bronzinas e o virabrequim. Corte um pedaço do plástico no comprimento do mancal, posicione-o e aperte os parafusos com o torque especificado. Desmonte e compare a largura do plástico com a escala fornecida.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Instalação dos Pistões nos Cilindros",
        descricao:
          "Use uma cinta compressora de anéis para comprimir os anéis do pistão. Gire o virabrequim para posicionar o cilindro no ponto morto inferior. Lubrifique bem o pistão e o cilindro, e insira o conjunto pistão/biela no bloco, orientando a seta do pistão para a frente do motor.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Aperto das Bielas",
        descricao:
          "Instale as capas das bielas com as bronzinas, verificando a orientação correta. Aplique óleo nos parafusos e aperte-os em etapas, seguindo o torque especificado pelo fabricante. Verifique se o virabrequim gira livremente após a montagem de cada pistão.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
    ],
    dicas: [
      "Sempre substitua os anéis de trava dos pinos de pistão",
      "Verifique o sentido correto de montagem dos pistões (geralmente há uma seta indicando a frente do motor)",
      "Escalone as aberturas dos anéis para evitar perda de compressão",
      "Verifique a folga axial das bielas após a montagem",
    ],
  },
  "regulagem-valvulas": {
    titulo: "Regulagem de Válvulas",
    descricao: "Como ajustar corretamente a folga das válvulas para um funcionamento ideal do motor",
    nivel: "Básico",
    tempo: "1-2 horas",
    ferramentas: ["Calibrador de lâminas", "Chave de fenda", "Chave de boca 10mm", "Chave Allen"],
    imagem: "/placeholder.svg?height=400&width=600",
    passos: [
      {
        titulo: "Preparação do Motor",
        descricao:
          "Certifique-se de que o motor esteja frio, pois o aquecimento altera as dimensões das peças e afeta a precisão da regulagem. Remova a tampa de válvulas para acessar o comando de válvulas e os tuchos.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Posicionamento do Motor",
        descricao:
          "Gire o motor manualmente até que o pistão do cilindro 1 esteja no ponto morto superior (PMS) na fase de compressão. Verifique alinhando as marcações da polia do virabrequim com a referência no bloco do motor.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Identificação da Sequência de Regulagem",
        descricao:
          "No motor AP, a ordem de ignição é 1-3-4-2. Quando o cilindro 1 está no PMS de compressão, você pode regular as válvulas dos cilindros 1 e 4. Após girar o virabrequim 360°, regule as válvulas dos cilindros 2 e 3.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Medição da Folga Atual",
        descricao:
          "Insira o calibrador de lâminas entre o came e o tucho da válvula. A lâmina deve deslizar com uma leve resistência. Para o motor AP, a folga recomendada é geralmente 0,15mm para válvulas de admissão e 0,25mm para válvulas de escape.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Ajuste da Folga",
        descricao:
          "Se a folga estiver incorreta, solte a contraporca com uma chave de boca e gire o parafuso de ajuste com uma chave de fenda. Gire no sentido horário para diminuir a folga ou anti-horário para aumentá-la. Verifique constantemente com o calibrador até atingir a folga correta.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Fixação do Ajuste",
        descricao:
          "Após obter a folga correta, segure o parafuso de ajuste na posição com a chave de fenda enquanto aperta a contraporca com a chave de boca. Verifique novamente a folga após apertar, pois o aperto pode alterar ligeiramente o ajuste.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Verificação Final",
        descricao:
          "Após ajustar todas as válvulas, gire o motor manualmente duas voltas completas e verifique novamente as folgas para garantir que os ajustes permaneceram corretos. Reinstale a tampa de válvulas com uma nova junta se necessário.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
    ],
    dicas: [
      "Sempre regule as válvulas com o motor frio",
      "Use um calibrador de lâminas de boa qualidade para medições precisas",
      "Anote os valores antes e depois do ajuste para referência futura",
      "Se ouvir ruídos metálicos após a regulagem, verifique novamente as folgas",
    ],
  },
  "troca-correia-dentada": {
    titulo: "Troca da Correia Dentada",
    descricao: "Substituição da correia dentada e sincronização do motor AP",
    nivel: "Intermediário",
    tempo: "3-4 horas",
    ferramentas: ["Chave de soquete", "Chave de fenda", "Ferramenta de travamento do virabrequim", "Extrator de polia"],
    imagem: "/placeholder.svg?height=400&width=600",
    passos: [
      {
        titulo: "Preparação e Acesso",
        descricao:
          "Desconecte o terminal negativo da bateria. Remova a capa de proteção da correia, o tensor e quaisquer componentes que obstruam o acesso à correia dentada, como polias auxiliares, bomba d'água ou suportes.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Marcação do Ponto",
        descricao:
          "Antes de remover a correia, gire o motor manualmente até alinhar as marcas de sincronismo no virabrequim e no comando de válvulas. Faça marcas adicionais com tinta ou giz para referência durante a montagem.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Travamento do Motor",
        descricao:
          "Use ferramentas específicas para travar o virabrequim e o comando de válvulas nas posições corretas. No motor AP, isso geralmente envolve um pino que se encaixa em um furo no bloco e outro no cabeçote.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Remoção da Polia do Virabrequim",
        descricao:
          "Solte e remova o parafuso central da polia do virabrequim. Use um extrator adequado para remover a polia sem danificá-la. Em alguns casos, pode ser necessário usar um contra-torque para evitar que o motor gire.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Remoção da Correia Antiga",
        descricao:
          "Afrouxe o tensor da correia e remova a correia dentada antiga. Inspecione-a para verificar sinais de desgaste, como rachaduras, dentes quebrados ou contaminação por óleo, que podem indicar outros problemas no motor.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Inspeção de Componentes",
        descricao:
          "Verifique o estado do tensor, das polias guia e da bomba d'água. Estes componentes geralmente são substituídos junto com a correia. Gire manualmente cada polia para detectar folgas ou ruídos anormais nos rolamentos.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Instalação da Nova Correia",
        descricao:
          "Instale a nova correia começando pela engrenagem do virabrequim, seguindo para a bomba d'água, polia tensora e finalmente a engrenagem do comando de válvulas. Certifique-se de que a correia esteja bem assentada em todas as polias e que as marcas de sincronismo permaneçam alinhadas.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Tensionamento da Correia",
        descricao:
          "Ajuste o tensor conforme especificado pelo fabricante. No motor AP, geralmente usa-se um tensor automático que deve ser posicionado corretamente. Verifique a tensão: a correia deve poder girar 90° com pressão moderada no ponto médio entre duas polias.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Verificação da Sincronização",
        descricao:
          "Gire o motor manualmente duas voltas completas e verifique se as marcas de sincronismo se alinham novamente. Isso confirma que a instalação está correta. Remova as ferramentas de travamento e reinstale todos os componentes na ordem inversa da desmontagem.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
    ],
    dicas: [
      "Sempre substitua o tensor e as polias guia junto com a correia",
      "Verifique se não há vazamentos de óleo que possam contaminar a nova correia",
      "Nunca force a correia durante a instalação, pois isso pode danificar os fios internos",
      "Anote a quilometragem atual para controlar o próximo intervalo de troca",
    ],
  },
  "retifico-motor": {
    titulo: "Preparação para Retífica",
    descricao: "Como preparar o motor para envio à retífica e quais medidas solicitar",
    nivel: "Avançado",
    tempo: "6-8 horas",
    ferramentas: ["Ferramentas de desmontagem completa", "Paquímetro", "Micrômetro", "Relógio comparador"],
    imagem: "/placeholder.svg?height=400&width=600",
    passos: [
      {
        titulo: "Desmontagem Completa do Motor",
        descricao:
          "Remova todos os componentes externos, cabeçote, pistões, bielas, virabrequim e demais peças internas. Organize e identifique todas as peças para facilitar a remontagem e a análise pela retífica.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Limpeza Inicial",
        descricao:
          "Limpe todas as peças para remover óleo, graxa e depósitos de carbono. Isso facilita a inspeção visual e permite que a retífica trabalhe com peças mais limpas. Use solventes apropriados e escovas de aço para as áreas mais difíceis.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Inspeção Visual",
        descricao:
          "Examine todas as peças em busca de danos visíveis como trincas, desgaste excessivo, riscos profundos ou deformações. Preste atenção especial ao bloco, cabeçote, virabrequim e bielas, que são componentes estruturais críticos.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Medição Preliminar",
        descricao:
          "Use um micrômetro para medir os diâmetros dos cilindros em vários pontos (topo, meio e base) e em diferentes direções para detectar ovalização ou conicidade. Meça também os moentes do virabrequim para avaliar o desgaste.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Verificação de Empenamento",
        descricao:
          "Use uma régua de precisão e um calibrador de lâminas para verificar se o cabeçote e o bloco estão empenados. Posicione a régua em diferentes direções sobre a superfície e tente inserir o calibrador entre a régua e a superfície.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Documentação do Estado Atual",
        descricao:
          "Anote todas as medidas e observações para discutir com a retífica. Fotografe peças com danos ou características específicas. Isso ajudará a determinar quais serviços serão necessários e servirá como referência para comparação após a retífica.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Seleção de Peças para Substituição",
        descricao:
          "Identifique quais peças precisarão ser substituídas em vez de retificadas. Geralmente, anéis de pistão, bronzinas, juntas, retentores e guias de válvula são sempre substituídos. Pistões e válvulas podem precisar de substituição dependendo do desgaste.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Transporte para a Retífica",
        descricao:
          "Embale cuidadosamente todas as peças, separando-as por categorias e protegendo superfícies usinadas. Use caixas resistentes e material de acolchoamento para evitar danos durante o transporte. Inclua uma lista detalhada de todas as peças enviadas.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Comunicação com a Retífica",
        descricao:
          "Discuta detalhadamente com o técnico da retífica sobre o estado do motor, suas observações e o resultado desejado. Especifique se deseja uma retífica padrão ou se pretende aumentar a performance do motor, o que pode exigir serviços adicionais.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
    ],
    dicas: [
      "Sempre solicite que a retífica forneça as medidas finais de todas as peças trabalhadas",
      "Peça para balancear o conjunto virabrequim-biela-pistão para melhor performance",
      "Considere melhorias como polimento de dutos ou câmaras de combustão redesenhadas",
      "Verifique a reputação da retífica antes de enviar peças valiosas",
    ],
  },
  "montagem-completa": {
    titulo: "Montagem Completa",
    descricao: "Processo completo de montagem do motor AP após retífica ou revisão",
    nivel: "Especialista",
    tempo: "12-16 horas",
    ferramentas: [
      "Jogo completo de chaves",
      "Torquímetro",
      "Plástico calibrado",
      "Compressor de anéis",
      "Ferramentas de sincronismo",
    ],
    imagem: "/placeholder.svg?height=400&width=600",
    passos: [
      {
        titulo: "Preparação e Organização",
        descricao:
          "Organize todas as peças em uma superfície limpa e bem iluminada. Verifique se todas as peças necessárias estão disponíveis, incluindo componentes novos como juntas, retentores, anéis e bronzinas. Limpe novamente todas as peças antes da montagem.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Instalação dos Retentores e Tampas",
        descricao:
          "Instale os retentores traseiro e dianteiro do virabrequim no bloco. Use ferramentas específicas para evitar danos aos lábios de vedação. Aplique uma fina camada de silicone nas tampas laterais do bloco e instale-as com os parafusos no torque correto.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Montagem do Virabrequim",
        descricao:
          "Instale as bronzinas nos mancais do bloco e nas capas. Lubrifique abundantemente as bronzinas e posicione o virabrequim no bloco. Instale as capas dos mancais na sequência correta, aplicando o torque especificado em etapas progressivas.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Verificação da Folga Axial",
        descricao:
          "Com um relógio comparador, meça a folga axial do virabrequim empurrando-o para frente e para trás. A folga deve estar dentro das especificações (geralmente 0,05-0,25mm). Ajuste com arruelas de encosto se necessário.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Montagem dos Pistões e Bielas",
        descricao:
          "Monte os anéis nos pistões, posicionando as aberturas conforme recomendado. Lubrifique os cilindros, pistões e anéis. Use um compressor de anéis para instalar cada conjunto pistão/biela no respectivo cilindro, orientando-os corretamente.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Instalação da Bomba de Óleo",
        descricao:
          "Instale a bomba de óleo, verificando se o eixo de acionamento está corretamente encaixado. Aplique o torque especificado nos parafusos de fixação. Instale o pescador de óleo, verificando o alinhamento com o fundo do cárter.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Preparação do Cabeçote",
        descricao:
          "Monte as válvulas, molas, pratos e travas no cabeçote. Instale o comando de válvulas nos mancais, verificando a lubrificação adequada. Ajuste a folga das válvulas conforme especificado.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Instalação do Cabeçote",
        descricao:
          "Posicione a junta do cabeçote no bloco, observando a orientação correta. Coloque o cabeçote sobre a junta e instale os parafusos. Aperte os parafusos na sequência correta e em etapas progressivas até atingir o torque final especificado.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Instalação da Correia Dentada",
        descricao:
          "Alinhe as marcas de sincronismo do virabrequim e comando de válvulas. Instale a correia dentada, começando pelo virabrequim e seguindo o caminho correto pelas polias. Ajuste o tensionador conforme especificado.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Montagem dos Componentes Externos",
        descricao:
          "Instale o coletor de admissão, coletor de escape, alternador, compressor do ar condicionado, bomba da direção hidráulica e demais componentes externos. Conecte todas as mangueiras, cabos e chicotes elétricos.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
      {
        titulo: "Verificação Final",
        descricao:
          "Gire o motor manualmente várias voltas para verificar se não há interferências. Verifique novamente o sincronismo e a folga das válvulas. Instale as velas de ignição, encha o motor com óleo novo e prepare-o para a primeira partida.",
        imagem: "/placeholder.svg?height=300&width=500",
      },
    ],
    dicas: [
      "Siga rigorosamente as especificações de torque para todos os parafusos",
      "Lubrifique abundantemente todas as peças móveis durante a montagem",
      "Gire o motor manualmente várias vezes antes da primeira partida",
      "Após a montagem, faça um amaciamento adequado seguindo as recomendações do fabricante",
    ],
  },
}

// Função para obter dados do tutorial pelo slug
function getTutorialBySlug(slug: string) {
  return tutoriais[slug as keyof typeof tutoriais]
}

// Componente da página de tutorial
export default function TutorialPage({ params }: { params: { slug: string } }) {
  const tutorial = getTutorialBySlug(params.slug)

  if (!tutorial) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-4">Tutorial não encontrado</h1>
        <Link href="/tutoriais" className="text-blue-600 hover:underline">
          Voltar para tutoriais
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Navegação */}
        <div className="mb-8">
          <Link href="/tutoriais" className="flex items-center text-blue-600 hover:underline">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Voltar para tutoriais
          </Link>
        </div>

        {/* Cabeçalho do Tutorial */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative h-64">
            <Image
              src={tutorial.imagem || "/placeholder.svg"}
              alt={tutorial.titulo}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6">
                <div className="flex gap-2 mb-2">
                  <Badge variant="secondary">{tutorial.nivel}</Badge>
                  <Badge variant="outline" className="bg-white/80">
                    {tutorial.tempo}
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">{tutorial.titulo}</h1>
                <p className="text-gray-200 mt-2">{tutorial.descricao}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="h-5 w-5 mr-2 text-blue-500" />
                    Ferramentas Necessárias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tutorial.ferramentas.map((ferramenta, index) => (
                      <li key={index} className="flex items-center">
                        <Tool className="h-4 w-4 text-gray-500 mr-2" />
                        <span>{ferramenta}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />
                    Dicas Importantes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tutorial.dicas.map((dica, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" />
                        <span className="text-sm">{dica}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Passo a Passo</CardTitle>
                <CardDescription>Siga estas etapas cuidadosamente para obter os melhores resultados</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="montagem" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="montagem">Montagem</TabsTrigger>
                    <TabsTrigger value="desmontagem">Desmontagem</TabsTrigger>
                  </TabsList>

                  <TabsContent value="montagem" className="mt-6">
                    <div className="space-y-8">
                      {tutorial.passos.map((passo, index) => (
                        <div key={index} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                              {index + 1}
                            </div>
                            <h3 className="text-xl font-semibold">{passo.titulo}</h3>
                          </div>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <p className="text-gray-700">{passo.descricao}</p>
                            </div>
                            <div className="relative h-48 md:h-auto">
                              <Image
                                src={passo.imagem || "/placeholder.svg"}
                                alt={passo.titulo}
                                fill
                                className="object-cover rounded-lg"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="desmontagem" className="mt-6">
                    <div className="space-y-8">
                      {tutorial.passos
                        .slice()
                        .reverse()
                        .map((passo, index) => (
                          <div key={index} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
                            <div className="flex items-center mb-4">
                              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                                {tutorial.passos.length - index}
                              </div>
                              <h3 className="text-xl font-semibold">{passo.titulo}</h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <p className="text-gray-700">
                                  {passo.descricao
                                    .replace("Instale", "Remova")
                                    .replace("Monte", "Desmonte")
                                    .replace("Posicione", "Retire")
                                    .replace("Aperte", "Solte")}
                                </p>
                              </div>
                              <div className="relative h-48 md:h-auto">
                                <Image
                                  src={passo.imagem || "/placeholder.svg"}
                                  alt={passo.titulo}
                                  fill
                                  className="object-cover rounded-lg"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
