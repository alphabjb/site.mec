import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

// Dados dos tutoriais
const tutoriais = [
  {
    slug: "desmontagem-cabecote",
    titulo: "Desmontagem do Cabeçote",
    descricao: "Aprenda a remover o cabeçote do motor AP com segurança",
    nivel: "Intermediário",
    tempo: "2-3 horas",
    imagem: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "montagem-pistoes",
    titulo: "Montagem dos Pistões",
    descricao: "Processo completo de instalação dos pistões e bielas",
    nivel: "Avançado",
    tempo: "4-5 horas",
    imagem: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "regulagem-valvulas",
    titulo: "Regulagem de Válvulas",
    descricao: "Como ajustar corretamente a folga das válvulas",
    nivel: "Básico",
    tempo: "1-2 horas",
    imagem: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "troca-correia-dentada",
    titulo: "Troca da Correia Dentada",
    descricao: "Substituição da correia dentada e sincronização do motor",
    nivel: "Intermediário",
    tempo: "3-4 horas",
    imagem: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "retifico-motor",
    titulo: "Preparação para Retífica",
    descricao: "Como preparar o motor para envio à retífica",
    nivel: "Avançado",
    tempo: "6-8 horas",
    imagem: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "montagem-completa",
    titulo: "Montagem Completa",
    descricao: "Processo completo de montagem do motor AP",
    nivel: "Especialista",
    tempo: "12-16 horas",
    imagem: "/placeholder.svg?height=200&width=300",
  },
]

export default function TutoriaisPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-20">
        {/* Botão de volta */}
        <div className="mb-8">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Voltar ao Menu Principal
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Tutoriais Práticos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guias passo a passo para desmontagem e montagem de componentes do motor AP
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutoriais.map((tutorial) => (
            <Card key={tutorial.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="relative h-48 mb-4 -mt-6 -mx-6 rounded-t-lg overflow-hidden">
                  <Image
                    src={tutorial.imagem || "/placeholder.svg"}
                    alt={tutorial.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>{tutorial.titulo}</CardTitle>
                <CardDescription>{tutorial.descricao}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <Badge variant="secondary">{tutorial.nivel}</Badge>
                  <Badge variant="outline">Tempo: {tutorial.tempo}</Badge>
                </div>
                <Link href={`/tutoriais/${tutorial.slug}`}>
                  <Button className="w-full">
                    Ver Tutorial
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
