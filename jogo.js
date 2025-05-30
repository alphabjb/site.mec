// Estado do jogo
const gameState = {
  score: 0,
  selectedPart: null,
  gameStarted: false,
  parts: [
    {
      id: "bloco",
      name: "Bloco do Motor",
      description: "Base principal onde ficam os cilindros",
      mounted: false,
    },
    {
      id: "pistao1",
      name: "Pistão 1",
      description: "Pistão do primeiro cilindro",
      mounted: false,
    },
    {
      id: "pistao2",
      name: "Pistão 2",
      description: "Pistão do segundo cilindro",
      mounted: false,
    },
    {
      id: "virabrequim",
      name: "Virabrequim",
      description: "Eixo principal do motor",
      mounted: false,
    },
    {
      id: "cabecote",
      name: "Cabeçote",
      description: "Parte superior com válvulas",
      mounted: false,
    },
  ],
}

// Elementos DOM
const elements = {
  iniciarJogo: document.getElementById("iniciarJogo"),
  progressoTexto: document.getElementById("progressoTexto"),
  progressoFill: document.getElementById("progressoFill"),
  pontuacao: document.getElementById("pontuacao"),
  pecaSelecionada: document.getElementById("pecaSelecionada"),
  nomePeca: document.getElementById("nomePeca"),
  descricaoPeca: document.getElementById("descricaoPeca"),
  statusPeca: document.getElementById("statusPeca"),
  montarPeca: document.getElementById("montarPeca"),
  pecasLista: document.getElementById("pecasLista"),
  motorContainer: document.getElementById("motorContainer"),
  modalConclusao: document.getElementById("modalConclusao"),
  pontuacaoFinal: document.getElementById("pontuacaoFinal"),
  jogarNovamente: document.getElementById("jogarNovamente"),
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  initializeGame()
  setupEventListeners()
})

function initializeGame() {
  renderPartsList()
  renderMotor3D()
  updateUI()
}

function setupEventListeners() {
  elements.iniciarJogo.addEventListener("click", startGame)
  elements.montarPeca.addEventListener("click", mountSelectedPart)
  elements.jogarNovamente.addEventListener("click", resetGame)
}

function startGame() {
  gameState.gameStarted = true
  gameState.score = 0
  gameState.selectedPart = null
  gameState.parts.forEach((part) => (part.mounted = false))

  elements.iniciarJogo.textContent = "Reiniciar"
  updateUI()
  renderPartsList()
  renderMotor3D()
}

function resetGame() {
  gameState.gameStarted = true
  gameState.score = 0
  gameState.selectedPart = null
  gameState.parts.forEach((part) => (part.mounted = false))

  elements.modalConclusao.style.display = "none"
  updateUI()
  renderPartsList()
  renderMotor3D()
}

function selectPart(partId) {
  gameState.selectedPart = partId
  updateUI()
  renderPartsList()
  renderMotor3D()
}

function mountSelectedPart() {
  if (!gameState.selectedPart) return

  const part = gameState.parts.find((p) => p.id === gameState.selectedPart)
  if (part && !part.mounted) {
    part.mounted = true
    gameState.score += 10
    gameState.selectedPart = null

    updateUI()
    renderPartsList()
    renderMotor3D()

    // Verificar se o jogo foi concluído
    const mountedParts = gameState.parts.filter((p) => p.mounted).length
    if (mountedParts === gameState.parts.length) {
      showCompletionModal()
    }
  }
}

function updateUI() {
  const mountedParts = gameState.parts.filter((p) => p.mounted).length
  const totalParts = gameState.parts.length
  const progress = (mountedParts / totalParts) * 100

  // Atualizar progresso
  elements.progressoTexto.textContent = `${mountedParts}/${totalParts}`
  elements.progressoFill.style.width = `${progress}%`

  // Atualizar pontuação
  elements.pontuacao.textContent = `${gameState.score} pts`

  // Atualizar painel de peça selecionada
  if (gameState.selectedPart) {
    const selectedPart = gameState.parts.find((p) => p.id === gameState.selectedPart)
    if (selectedPart) {
      elements.pecaSelecionada.style.display = "block"
      elements.nomePeca.textContent = selectedPart.name
      elements.descricaoPeca.textContent = selectedPart.description

      if (selectedPart.mounted) {
        elements.statusPeca.textContent = "Montada"
        elements.statusPeca.className = "badge"
        elements.montarPeca.style.display = "none"
      } else {
        elements.statusPeca.textContent = "Não Montada"
        elements.statusPeca.className = "badge secondary"
        elements.montarPeca.style.display = "block"
      }
    }
  } else {
    elements.pecaSelecionada.style.display = "none"
  }
}

function renderPartsList() {
  elements.pecasLista.innerHTML = ""

  gameState.parts.forEach((part) => {
    const partElement = document.createElement("div")
    partElement.className = `peca-item ${gameState.selectedPart === part.id ? "selected" : ""} ${part.mounted ? "montada" : ""}`
    partElement.onclick = () => selectPart(part.id)

    partElement.innerHTML = `
            <span class="peca-nome">${part.name}</span>
            ${part.mounted ? '<i class="fas fa-check check-icon"></i>' : ""}
        `

    elements.pecasLista.appendChild(partElement)
  })
}

function renderMotor3D() {
  elements.motorContainer.innerHTML = `
        <div class="motor-3d" id="motor3d">
            ${gameState.parts
              .map(
                (part) => `
                <div class="peca-3d ${part.id} ${gameState.selectedPart === part.id ? "selected" : ""} ${part.mounted ? "montada" : ""}"
                     onclick="selectPart('${part.id}')">
                    ${part.name}
                </div>
            `,
              )
              .join("")}
        </div>
    `

  // Adicionar interatividade 3D
  const motor3d = document.getElementById("motor3d")
  let isDragging = false
  let startX, startY
  let rotationX = 0,
    rotationY = 0

  motor3d.addEventListener("mousedown", (e) => {
    isDragging = true
    startX = e.clientX
    startY = e.clientY
  })

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return

    const deltaX = e.clientX - startX
    const deltaY = e.clientY - startY

    rotationY += deltaX * 0.5
    rotationX -= deltaY * 0.5

    motor3d.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`

    startX = e.clientX
    startY = e.clientY
  })

  document.addEventListener("mouseup", () => {
    isDragging = false
  })

  // Zoom com scroll
  motor3d.addEventListener("wheel", (e) => {
    e.preventDefault()
    const scale = e.deltaY > 0 ? 0.9 : 1.1
    const currentScale = motor3d.style.transform.match(/scale$$([^)]+)$$/)
    const newScale = currentScale ? Number.parseFloat(currentScale[1]) * scale : scale

    if (newScale >= 0.5 && newScale <= 2) {
      motor3d.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(${newScale})`
    }
  })
}

function showCompletionModal() {
  elements.pontuacaoFinal.textContent = gameState.score
  elements.modalConclusao.style.display = "flex"
}

// Função global para seleção de peças (chamada pelo HTML)
window.selectPart = selectPart
