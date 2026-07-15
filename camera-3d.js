// =====================================================
// CÂMARA 3D DO HERO
// Desenha uma câmara fotográfica feita de peças simples e anima-a:
// à medida que o utilizador faz scroll, as peças afastam-se (explode)
// e depois voltam a juntar-se, enquanto a câmara roda lentamente.
//
// Não precisas de mexer neste ficheiro para o site funcionar — só
// mexe aqui se quiseres ajustar cores, velocidade ou peças.
// =====================================================

(function () {
  const canvas = document.getElementById('camera-3d-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch (e) {
    return; // Sem WebGL disponível: o hero mostra só o vídeo/gradiente, sem quebrar nada
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0, 6.2);
  camera.lookAt(0, 0, 0);

  // Luzes: uma luz principal fria, uma de recorte quente (cor do "flare" da marca)
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));

  const keyLight = new THREE.DirectionalLight(0xffffff, 0.9);
  keyLight.position.set(3, 4, 5);
  scene.add(keyLight);

  const rimLight = new THREE.PointLight(0xe8492a, 1.4, 20);
  rimLight.position.set(-3, -1, 3);
  scene.add(rimLight);

  const fillLight = new THREE.PointLight(0xa08a5b, 0.6, 20);
  fillLight.position.set(2, -2, -3);
  scene.add(fillLight);

  // Grupo principal: tudo o que faz parte da câmara vive aqui dentro
  const cameraGroup = new THREE.Group();
  scene.add(cameraGroup);

  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x2b2521, metalness: 0.4, roughness: 0.55 });
  const trimMat = new THREE.MeshStandardMaterial({ color: 0xa08a5b, metalness: 0.7, roughness: 0.3 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x0d0f10, metalness: 0.9, roughness: 0.1 });

  // Cada peça: a malha 3D + a posição de origem (montada) + direção/distância de explosão
  const parts = [];

  function addPart(mesh, explodeDir, explodeDist) {
    mesh.userData.home = mesh.position.clone();
    mesh.userData.explode = explodeDir.clone().normalize().multiplyScalar(explodeDist);
    cameraGroup.add(mesh);
    parts.push(mesh);
  }

  // Corpo principal
  const body = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.25, 0.7), bodyMat);
  addPart(body, new THREE.Vector3(0, 0, -0.3), 0.4);

  // Placa traseira
  const backPlate = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.15, 0.08), bodyMat);
  backPlate.position.set(0, 0, -0.39);
  addPart(backPlate, new THREE.Vector3(0, 0, -1), 1.6);

  // Placa inferior
  const bottomPlate = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.08, 0.65), trimMat);
  bottomPlate.position.set(0, -0.66, 0);
  addPart(bottomPlate, new THREE.Vector3(0, -1, 0), 1.4);

  // Barril da lente
  const lensBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.48, 1.1, 32), bodyMat);
  lensBarrel.rotation.x = Math.PI / 2;
  lensBarrel.position.set(0, -0.05, 0.85);
  addPart(lensBarrel, new THREE.Vector3(0, 0, 1), 1.8);

  // Anel dourado da lente
  const lensRing = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.05, 16, 32), trimMat);
  lensRing.position.set(0, -0.05, 1.35);
  addPart(lensRing, new THREE.Vector3(0, 0, 1), 2.6);

  // Vidro da lente (frente)
  const lensGlass = new THREE.Mesh(new THREE.CircleGeometry(0.38, 32), glassMat);
  lensGlass.position.set(0, -0.05, 1.41);
  addPart(lensGlass, new THREE.Vector3(0, 0, 1), 3.1);

  // Corcunda do visor (pentaprisma)
  const viewfinder = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.32, 0.5), bodyMat);
  viewfinder.position.set(0, 0.78, -0.05);
  addPart(viewfinder, new THREE.Vector3(0, 1, -0.4), 1.7);

  // Dial esquerdo
  const dialLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.14, 24), trimMat);
  dialLeft.position.set(-0.85, 0.68, 0);
  addPart(dialLeft, new THREE.Vector3(-1, 1, 0.2), 1.9);

  // Dial direito
  const dialRight = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.14, 24), trimMat);
  dialRight.position.set(0.85, 0.68, 0);
  addPart(dialRight, new THREE.Vector3(1, 1, 0.2), 1.9);

  // Botão de disparo
  const shutter = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.12, 16), trimMat);
  shutter.position.set(0.95, 0.8, 0.05);
  addPart(shutter, new THREE.Vector3(1.2, 1.4, 0.3), 2.3);

  // Presilhas da alça (esquerda/direita)
  const lugGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.12, 16);
  const lugLeft = new THREE.Mesh(lugGeo, trimMat);
  lugLeft.rotation.z = Math.PI / 2;
  lugLeft.position.set(-1.02, 0.35, 0);
  addPart(lugLeft, new THREE.Vector3(-1.3, 0.4, -0.4), 2.0);

  const lugRight = new THREE.Mesh(lugGeo, trimMat);
  lugRight.rotation.z = Math.PI / 2;
  lugRight.position.set(1.02, 0.35, 0);
  addPart(lugRight, new THREE.Vector3(1.3, 0.4, -0.4), 2.0);

  cameraGroup.rotation.set(-0.15, -0.5, 0);

  // ---------- Redimensionar ----------
  function resize() {
    const rect = canvas.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / Math.max(rect.height, 1);
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  // ---------- Progresso do scroll (0 → 1 ao longo do .hero-scroll) ----------
  const scrollWrapper = document.querySelector('.hero-scroll');

  function getScrollProgress() {
    if (!scrollWrapper) return 0;
    const rect = scrollWrapper.getBoundingClientRect();
    const scrollableHeight = scrollWrapper.offsetHeight - window.innerHeight;
    if (scrollableHeight <= 0) return 0;
    const scrolled = -rect.top;
    return Math.min(Math.max(scrolled / scrollableHeight, 0), 1);
  }

  // Curva "desconstrói e reconstrói": sobe até ao meio do scroll, desce até ao fim
  function explodeFactor(progress) {
    return Math.sin(progress * Math.PI); // 0 → 1 → 0
  }

  let targetProgress = 0;
  let smoothProgress = 0;

  function onScroll() {
    targetProgress = getScrollProgress();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Loop de animação ----------
  function animate() {
    requestAnimationFrame(animate);

    // suaviza o valor do scroll para um movimento mais fluido
    smoothProgress += (targetProgress - smoothProgress) * 0.08;

    const factor = explodeFactor(smoothProgress);

    parts.forEach(mesh => {
      mesh.position.copy(mesh.userData.home).addScaledVector(mesh.userData.explode, factor);
    });

    if (!prefersReducedMotion) {
      cameraGroup.rotation.y = -0.5 + smoothProgress * 1.1 + Math.sin(Date.now() * 0.0002) * 0.05;
    }

    renderer.render(scene, camera);
  }

  if (prefersReducedMotion) {
    // Respeita preferência do sistema: mostra a câmara montada, parada, sem animação contínua
    renderer.render(scene, camera);
  } else {
    animate();
  }
})();
