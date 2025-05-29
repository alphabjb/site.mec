import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FuelIcon as Engine, Settings, Play, BookOpen, Gamepad2, Zap, Cog, Fuel, Thermometer } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MecanicaEducativa() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Engine className="h-10 w-10 text-blue-400" />
              <div>
                <h1 className="text-2xl font-bold">MecânicaEdu</h1>
                <p className="text-sm text-gray-300">Aprenda Mecânica Automotiva</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#teoria" className="hover:text-blue-400 transition-colors">
                Teoria
              </Link>
              <Link href="#pratica" className="hover:text-blue-400 transition-colors">
                Prática
              </Link>
              <Link href="/jogo" className="hover:text-blue-400 transition-colors">
                Jogo 3D
              </Link>
              <Link href="/tutoriais" className="hover:text-blue-400 transition-colors">
                Tutoriais
              </Link>
            </nav>
            <Link href="/jogo">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Play className="h-4 w-4 mr-2" />
                Começar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Aprenda <span className="text-blue-400">Mecânica</span>
              <br />
              <span className="text-yellow-400">Automotiva</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Descubra como funcionam os motores, aprenda a desmontar e montar peças, e pratique com nosso simulador 3D
              interativo do motor AP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#teoria">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Começar Teoria
                </Button>
              </Link>
              <Link href="/jogo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900"
                >
                  <Gamepad2 className="h-5 w-5 mr-2" />
                  Jogar Simulador 3D
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Teoria do Motor */}
        <section id="teoria" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Como Funciona um Motor</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Entenda os princípios fundamentais do funcionamento de um motor de combustão interna
              </p>
            </div>

            <Tabs defaultValue="ciclo-otto" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="ciclo-otto">Ciclo Otto</TabsTrigger>
                <TabsTrigger value="componentes">Componentes</TabsTrigger>
                <TabsTrigger value="sistemas">Sistemas</TabsTrigger>
                <TabsTrigger value="funcionamento">Funcionamento</TabsTrigger>
              </TabsList>

              <TabsContent value="ciclo-otto" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Zap className="h-6 w-6 text-yellow-500 mr-2" />
                        Os 4 Tempos do Motor
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-bold text-lg">1º Tempo - Admissão</h4>
                        <p className="text-gray-600">
                          O pistão desce, criando vácuo que puxa a mistura ar-combustível para dentro do cilindro
                          através da válvula de admissão aberta.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-bold text-lg">2º Tempo - Compressão</h4>
                        <p className="text-gray-600">
                          Com as válvulas fechadas, o pistão sobe comprimindo a mistura ar-combustível, aumentando sua
                          temperatura e pressão.
                        </p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-bold text-lg">3º Tempo - Combustão</h4>
                        <p className="text-gray-600">
                          A vela de ignição gera uma faísca que inflama a mistura comprimida, criando uma explosão que
                          empurra o pistão para baixo.
                        </p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-bold text-lg">4º Tempo - Escape</h4>
                        <p className="text-gray-600">
                          O pistão sobe novamente, expulsando os gases queimados através da válvula de escape aberta.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Diagrama do ciclo Otto"
                      width={400}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="componentes" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <Cog className="h-8 w-8 text-blue-500 mb-2" />
                      <CardTitle>Pistão</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Peça móvel que se desloca dentro do cilindro, responsável por comprimir a mistura e transmitir a
                        força da combustão.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Settings className="h-8 w-8 text-green-500 mb-2" />
                      <CardTitle>Biela</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Conecta o pistão ao virabrequim, convertendo o movimento linear do pistão em movimento rotativo.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Engine className="h-8 w-8 text-red-500 mb-2" />
                      <CardTitle>Virabrequim</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Eixo principal que recebe a força das bielas e transmite o movimento rotativo para as rodas.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Fuel className="h-8 w-8 text-yellow-500 mb-2" />
                      <CardTitle>Válvulas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Controlam a entrada da mistura ar-combustível (admissão) e a saída dos gases queimados (escape).
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Zap className="h-8 w-8 text-purple-500 mb-2" />
                      <CardTitle>Vela de Ignição</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Gera a faísca elétrica necessária para inflamar a mistura ar-combustível no momento certo.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Thermometer className="h-8 w-8 text-blue-600 mb-2" />
                      <CardTitle>Cabeçote</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Parte superior do motor que abriga as válvulas, velas de ignição e os dutos de admissão e
                        escape.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="sistemas" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sistemas Principais</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Badge variant="outline" className="mt-1">
                          1
                        </Badge>
                        <div>
                          <h4 className="font-semibold">Sistema de Alimentação</h4>
                          <p className="text-sm text-gray-600">
                            Responsável por fornecer a mistura ar-combustível na proporção correta
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Badge variant="outline" className="mt-1">
                          2
                        </Badge>
                        <div>
                          <h4 className="font-semibold">Sistema de Ignição</h4>
                          <p className="text-sm text-gray-600">
                            Gera a faísca no momento exato para inflamar a mistura
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Badge variant="outline" className="mt-1">
                          3
                        </Badge>
                        <div>
                          <h4 className="font-semibold">Sistema de Arrefecimento</h4>
                          <p className="text-sm text-gray-600">
                            Mantém a temperatura do motor dentro dos limites ideais
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Badge variant="outline" className="mt-1">
                          4
                        </Badge>
                        <div>
                          <h4 className="font-semibold">Sistema de Lubrificação</h4>
                          <p className="text-sm text-gray-600">
                            Reduz o atrito entre as peças móveis e remove impurezas
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Sistemas do motor"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="funcionamento" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Sequência de Funcionamento</CardTitle>
                    <CardDescription>Como todos os componentes trabalham juntos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold">Partida do Motor</h4>
                          <p className="text-gray-600">
                            O motor de arranque gira o virabrequim, iniciando o movimento dos pistões
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold">Sincronização</h4>
                          <p className="text-gray-600">
                            O comando de válvulas sincroniza a abertura/fechamento das válvulas com o movimento dos
                            pistões
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold">Ciclo Contínuo</h4>
                          <p className="text-gray-600">
                            Os 4 tempos se repetem continuamente em cada cilindro, gerando movimento rotativo constante
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                          4
                        </div>
                        <div>
                          <h4 className="font-semibold">Transmissão de Força</h4>
                          <p className="text-gray-600">
                            A força é transmitida através da embreagem, câmbio e diferencial até as rodas
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Jogo 3D */}
        <section id="jogo" className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Simulador 3D - Motor AP</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Aprenda montando! Nosso simulador 3D interativo permite que você monte e desmonte um motor AP virtual
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Gamepad2 className="h-6 w-6 text-blue-400 mr-2" />
                      Simulador Interativo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Engine className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                        <p className="text-gray-300 mb-4">Simulador 3D do Motor AP</p>
                        <Link href="/jogo">
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            <Play className="h-4 w-4 mr-2" />
                            Iniciar Simulação
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Controles</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Rotacionar:</span>
                        <Badge variant="outline">Mouse</Badge>
                      </div>
                      \
