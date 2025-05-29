"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, Html, ContactShadows, PresentationControls } from "@react-three/drei"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import type { Mesh, SpotLight, DirectionalLight } from "three"
import * as THREE from "three"
import Link from "next/link"

interface MotorPart {
  id: string
  name: string
  position: [number, number, number]
  color: string
  mounted: boolean
  description: string
  geometry: [number, number, number] // width, height, depth
}

const motorParts: MotorPart[] = [
  {
    id: "bloco",
    name: "Bloco do Motor",
    position: [0, 0, 0],
    color: "#4a5568",
    mounted: false,
    description: "Base principal onde ficam os cilindros",
    geometry: [1.2, 0.8, 0.8],
  },
  {
    id: "pistao1",
    name: "Pistão 1",
    position: [-0.8, 0.8, 0],
    color: "#e53e3e",
    mounted: false,
    description: "Pistão do primeiro cilindro",
    geometry: [0.4, 0.6, 0.4],
  },
  {
    id: "pistao2",
    name: "Pistão 2",
    position: [0.8, 0.8, 0],
    color: "#e53e3e",
    mounted: false,
    description: "Pistão do segundo cilindro",
    geometry: [0.4, 0.6, 0.4],
  },
  {
    id: "virabrequim",
    name: "Virabrequim",
    position: [0, -0.6, 0],
    color: "#2d3748",
    mounted: false,
    description: "Eixo principal do motor",
    geometry: [1.5, 0.3, 0.3],
  },
  {
    id: "cabecote",
    name: "Cabeçote",
    position: [0, 1.6, 0],
    color: "#4299e1",
    mounted: false,
    description: "Parte superior com válvulas",
    geometry: [1.2, 0.4, 0.8],
  },
]

// Componente para iluminação avançada
function Lights() {
  const spotLightRef = useRef<SpotLight>(null)
  const directionalLightRef = useRef<DirectionalLight>(null)

  // Uncomment for debugging lights
  // useHelper(spotLightRef, THREE.SpotLightHelper, "red")
  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, "blue")

  return (
    <>
      {/* Luz principal de cima */}
      <directionalLight
        ref={directionalLightRef}
        position={[5, 8, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Luz focal para destacar peças */}
      <spotLight
        ref={spotLightRef}
        position={[-5, 5, 5]}
        angle={0.3}
        penumbra={0.8}
        intensity={1}
        castShadow
        shadow-mapSize={[512, 512]}
      />

      {/* Luz de preenchimento para reduzir sombras duras */}
      <pointLight position={[0, 3, -5]} intensity={0.6} />

      {/* Luz ambiente suave */}
      <ambientLight intensity={0.4} />

      {/* Luz hemisférica para simular reflexão do ambiente */}
      <hemisphereLight intensity={0.5} color="#ffffff" groundColor="#404040" />
    </>
  )
}

// Componente para sombras de contato
function ShadowPlane() {
  return (
    <ContactShadows
      position={[0, -1.4, 0]}
      opacity={0.6}
      scale={10}
      blur={2}
      far={4}
      resolution={256}
      color="#000000"
    />
  )
}

function MotorPart3D({
  part,
  onClick,
  isSelected,
}: {
  part: MotorPart
  onClick: () => void
  isSelected: boolean
}) {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto"
    return () => {
      document.body.style.cursor = "auto"
    }
  }, [hovered])

  return (
    <mesh
      ref={meshRef}
      position={part.position}
      onClick={onClick}
      scale={isSelected ? 1.1 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
      receiveShadow
    >
      <boxGeometry args={part.geometry} />
      <meshStandardMaterial
        color={part.color}
        transparent
        opacity={part.mounted ? 1 : 0.7}
        roughness={0.7}
        metalness={0.3}
        emissive={isSelected || hovered ? part.color : "#000000"}
        emissiveIntensity={isSelected ? 0.3 : hovered ? 0.1 : 0}
      />
      {!part.mounted && (
        <Html distanceFactor={10}>
          <div className="bg-white px-2 py-1 rounded shadow text-xs">{part.name}</div>
        </Html>
      )}
    </mesh>
  )
}

export default function Motor3DGame() {
  const [parts, setParts] = useState(motorParts)
  const [selectedPart, setSelectedPart] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)

  const mountedParts = parts.filter((p) => p.mounted).length
  const progress = (mountedParts / parts.length) * 100

  const handlePartClick = (partId: string) => {
    setSelectedPart(partId)
  }

  const mountPart = () => {
    if (selectedPart) {
      setParts((prev) => prev.map((part) => (part.id === selectedPart ? { ...part, mounted: true } : part)))
      setScore((prev) => prev + 10)
      setSelectedPart(null)
    }
  }

  const resetGame = () => {
    setParts(motorParts.map((part) => ({ ...part, mounted: false })))
    setScore(0)
    setSelectedPart(null)
    setGameStarted(true)
  }

  const selectedPartData = parts.find((p) => p.id === selectedPart)

  return (
    <div className="w-full h-screen bg-slate-900 flex">
      {/* Painel Lateral */}
      <div className="w-80 bg-slate-800 p-6 overflow-y-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-white">Simulador Motor AP</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>Progresso</span>
                  <span>
                    {mountedParts}/{parts.length}
                  </span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-white">{score} pts</div>
                <div className="text-sm text-gray-400">Pontuação</div>
              </div>

              {!gameStarted ? (
                <Button onClick={resetGame} className="w-full">
                  Iniciar Jogo
                </Button>
              ) : (
                <Button onClick={resetGame} variant="outline" className="w-full">
                  Reiniciar
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {selectedPartData && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-white">Peça Selecionada</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h3 className="font-semibold text-white">{selectedPartData.name}</h3>
                <p className="text-sm text-gray-300">{selectedPartData.description}</p>
                <Badge variant={selectedPartData.mounted ? "default" : "secondary"} className="w-full justify-center">
                  {selectedPartData.mounted ? "Montada" : "Não Montada"}
                </Badge>
                {!selectedPartData.mounted && (
                  <Button onClick={mountPart} className="w-full">
                    Montar Peça
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="text-white">Lista de Peças</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {parts.map((part) => (
                <div
                  key={part.id}
                  className={`p-2 rounded cursor-pointer transition-colors ${
                    selectedPart === part.id ? "bg-blue-600" : "bg-slate-700 hover:bg-slate-600"
                  }`}
                  onClick={() => handlePartClick(part.id)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm">{part.name}</span>
                    {part.mounted && (
                      <Badge variant="default" className="text-xs">
                        ✓
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Área 3D */}
      <div className="flex-1">
        <Canvas
          camera={{ position: [5, 5, 5], fov: 50 }}
          shadows
          dpr={[1, 2]} // Otimização para telas de alta resolução
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputEncoding: THREE.sRGBEncoding,
          }}
        >
          {/* Sistema de iluminação avançado */}
          <Lights />

          {/* Ambiente 3D */}
          <Environment preset="warehouse" background={false} />

          {/* Controles de câmera melhorados */}
          <PresentationControls
            global
            zoom={1.5}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            {/* Grupo de peças do motor */}
            <group position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
              {parts.map((part) => (
                <MotorPart3D
                  key={part.id}
                  part={part}
                  onClick={() => handlePartClick(part.id)}
                  isSelected={selectedPart === part.id}
                />
              ))}
            </group>
          </PresentationControls>

          {/* Plano com sombras */}
          <ShadowPlane />
        </Canvas>

        {/* Instruções */}
        <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white p-4 rounded">
          <h3 className="font-bold mb-2">Controles:</h3>
          <ul className="text-sm space-y-1">
            <li>• Clique nas peças para selecioná-las</li>
            <li>• Arraste para rotacionar a visualização</li>
            <li>• Scroll para zoom</li>
            <li>• Monte todas as peças para completar</li>
          </ul>
        </div>

        {progress === 100 && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
            <Card className="text-center">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">Parabéns! 🎉</h2>
                <p className="text-lg mb-4">Você montou o motor AP com sucesso!</p>
                <p className="text-xl font-bold mb-6">Pontuação Final: {score} pontos</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={resetGame} size="lg">
                    Jogar Novamente
                  </Button>
                  <Link href="/">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Voltar ao Menu
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
