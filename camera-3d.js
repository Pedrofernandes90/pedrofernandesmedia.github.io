// =====================================================
// CÂMARA 3D DO HERO — DSLR detalhada com texturas geradas por código
// Funciona imediatamente, sem ficheiros externos.
// Desmonta-se em conjuntos lógicos com o scroll e volta a montar-se.
// =====================================================

(function () {
  const canvas = document.getElementById('camera-3d-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch (e) { return; }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;

  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  cam.position.set(0.4, 0.35, 7.2);
  cam.lookAt(0, 0, 0);

  // ---------- LUZES ----------
  scene.add(new THREE.HemisphereLight(0xdedbd6, 0x14100e, 0.5));
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
  keyLight.position.set(4, 5, 6);
  scene.add(keyLight);
  const rimLight = new THREE.PointLight(0xe8492a, 1.6, 25);
  rimLight.position.set(-4.5, -0.5, 2.5);
  scene.add(rimLight);
  const fillLight = new THREE.PointLight(0xa08a5b, 0.7, 25);
  fillLight.position.set(3, -2.5, -4);
  scene.add(fillLight);
  const topLight = new THREE.DirectionalLight(0xffffff, 0.35);
  topLight.position.set(0, 8, 0);
  scene.add(topLight);

  // ---------- TEXTURAS PROCESSUAIS ----------
  function makeCanvas(w, h) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    return [c, c.getContext('2d')];
  }

  function leatherTexture() {
    const [c, ctx] = makeCanvas(512, 512);
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 26000; i++) {
      const v = 90 + Math.random() * 80;
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.beginPath();
      ctx.arc(Math.random() * 512, Math.random() * 512, 0.6 + Math.random() * 1.8, 0, Math.PI * 2);
      ctx.fill();
    }
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(3, 2);
    return t;
  }

  function brushedTexture() {
    const [c, ctx] = makeCanvas(512, 512);
    ctx.fillStyle = '#8c8c8c';
    ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 1600; i++) {
      const v = 110 + Math.random() * 70;
      ctx.strokeStyle = `rgba(${v},${v},${v},0.5)`;
      ctx.lineWidth = 0.6 + Math.random();
      const y = Math.random() * 512;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y + (Math.random() - 0.5) * 4);
      ctx.stroke();
    }
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    return t;
  }

  function gripTexture() {
    const [c, ctx] = makeCanvas(256, 256);
    ctx.fillStyle = '#2a2725';
    ctx.fillRect(0, 0, 256, 256);
    ctx.strokeStyle = '#1a1816';
    ctx.lineWidth = 3;
    for (let x = -256; x < 512; x += 16) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + 256, 256); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + 256, 0); ctx.lineTo(x, 256); ctx.stroke();
    }
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(2, 4);
    return t;
  }

  function lensEngravingTexture() {
    const [c, ctx] = makeCanvas(1024, 128);
    ctx.fillStyle = '#121110';
    ctx.fillRect(0, 0, 1024, 128);
    ctx.fillStyle = '#d8d4cc';
    ctx.font = 'bold 34px Arial';
    ctx.fillText('PF LENS  24-70mm  1:2.8', 40, 56);
    ctx.fillStyle = '#a08a5b';
    ctx.font = '24px Arial';
    ctx.fillText('ULTRASONIC', 620, 56);
    ctx.fillStyle = '#8a8681';
    ctx.font = '20px Arial';
    ctx.fillText('0.38m/1.3ft   ∞     0.5   0.7   1   1.5   3   ∞', 40, 100);
    const t = new THREE.CanvasTexture(c);
    t.wrapS = THREE.RepeatWrapping;
    return t;
  }

  function brandTexture() {
    const [c, ctx] = makeCanvas(512, 128);
    ctx.fillStyle = '#14100e';
    ctx.fillRect(0, 0, 512, 128);
    ctx.fillStyle = '#d9c9a3';
    ctx.font = 'bold 52px Georgia';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('PEDRO FERNANDES', 256, 64);
    return new THREE.CanvasTexture(c);
  }

  function dialTexture() {
    const [c, ctx] = makeCanvas(256, 256);
    ctx.fillStyle = '#1a1816';
    ctx.beginPath();
    ctx.arc(128, 128, 128, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#d8d4cc';
    ctx.font = 'bold 30px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ['M', 'Av', 'Tv', 'P', 'A+', 'C1', 'C2', 'B'].forEach((m, i, arr) => {
      const a = (i / arr.length) * Math.PI * 2 - Math.PI / 2;
      ctx.fillText(m, 128 + Math.cos(a) * 88, 128 + Math.sin(a) * 88);
    });
    ctx.fillStyle = '#e8492a';
    ctx.beginPath();
    ctx.arc(128, 20, 6, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(c);
  }

  const texLeather = leatherTexture();
  const texBrushed = brushedTexture();
  const texGrip = gripTexture();
  const texLens = lensEngravingTexture();
  const texBrand = brandTexture();
  const texDial = dialTexture();

  // ---------- MATERIAIS ----------
  const matBody   = new THREE.MeshPhysicalMaterial({ color: 0x1c1a18, metalness: 0.5, roughness: 0.5, clearcoat: 0.35, clearcoatRoughness: 0.6, bumpMap: texLeather, bumpScale: 0.012 });
  const matRubber = new THREE.MeshStandardMaterial({ color: 0x2a2725, metalness: 0.05, roughness: 0.95, map: texGrip, bumpMap: texGrip, bumpScale: 0.02 });
  const matMetal  = new THREE.MeshPhysicalMaterial({ color: 0x9a958d, metalness: 0.95, roughness: 0.3, clearcoat: 0.5, roughnessMap: texBrushed, bumpMap: texBrushed, bumpScale: 0.004 });
  const matDark   = new THREE.MeshStandardMaterial({ color: 0x121110, metalness: 0.6, roughness: 0.4, bumpMap: texLeather, bumpScale: 0.006 });
  const matLensBarrel = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.55, roughness: 0.42, map: texLens });
  const matGlass  = new THREE.MeshPhysicalMaterial({ color: 0x06090c, metalness: 0.2, roughness: 0.02, clearcoat: 1.0, clearcoatRoughness: 0.05 });
  const matGlassBlue = new THREE.MeshPhysicalMaterial({ color: 0x11202e, metalness: 0.3, roughness: 0.03, clearcoat: 1.0 });
  const matAccent = new THREE.MeshStandardMaterial({ color: 0xb3372a, metalness: 0.5, roughness: 0.35 });
  const matBrand  = new THREE.MeshStandardMaterial({ map: texBrand, metalness: 0.3, roughness: 0.5 });
  const matDialTop = new THREE.MeshStandardMaterial({ map: texDial, metalness: 0.4, roughness: 0.5 });
  const matScreen = new THREE.MeshStandardMaterial({ color: 0x0a0f12, metalness: 0.3, roughness: 0.15, emissive: 0x0a1218, emissiveIntensity: 0.35 });

  // ---------- ESTRUTURA ----------
  const cameraGroup = new THREE.Group();
  scene.add(cameraGroup);

  const assemblies = [];
  function assembly(explodeDir, explodeDist) {
    const g = new THREE.Group();
    g.userData.explode = explodeDir.clone().normalize().multiplyScalar(explodeDist);
    cameraGroup.add(g);
    assemblies.push(g);
    return g;
  }

  const box = (w, h, d, m) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  const cyl = (rt, rb, h, m, seg = 48) => new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m);

  function knurledRing(radius, height, mat, teeth = 36, toothSize = 0.03) {
    const g = new THREE.Group();
    g.add(cyl(radius, radius, height, mat));
    for (let i = 0; i < teeth; i++) {
      const a = (i / teeth) * Math.PI * 2;
      const t = box(toothSize, height * 0.92, toothSize, mat);
      t.position.set(Math.cos(a) * radius, 0, Math.sin(a) * radius);
      t.rotation.y = -a;
      g.add(t);
    }
    return g;
  }

  function screw(mat) {
    const g = new THREE.Group();
    const head = cyl(0.035, 0.035, 0.02, mat, 16);
    head.rotation.x = Math.PI / 2;
    g.add(head);
    const slot = box(0.05, 0.008, 0.008, matDark);
    slot.position.z = 0.012;
    g.add(slot);
    return g;
  }

  // ============ 1. CORPO CENTRAL ============
  const bodyAsm = assembly(new THREE.Vector3(0, 0, -0.2), 0.35);
  bodyAsm.add(box(2.5, 1.5, 0.85, matBody));

  const chamferTop = cyl(0.42, 0.42, 2.5, matBody, 4);
  chamferTop.rotation.z = Math.PI / 2;
  chamferTop.rotation.x = Math.PI / 4;
  chamferTop.position.set(0, 0.72, 0);
  chamferTop.scale.set(1, 1, 0.55);
  bodyAsm.add(chamferTop);

  const brandPlate = box(0.72, 0.16, 0.02, matBrand);
  brandPlate.position.set(-0.72, 0.45, 0.44);
  bodyAsm.add(brandPlate);

  const lensRelease = cyl(0.06, 0.06, 0.06, matMetal, 20);
  lensRelease.rotation.x = Math.PI / 2;
  lensRelease.position.set(0.78, -0.15, 0.44);
  bodyAsm.add(lensRelease);

  const afLight = cyl(0.05, 0.05, 0.03, new THREE.MeshStandardMaterial({ color: 0x7a3b10, emissive: 0x4a2408, emissiveIntensity: 0.5, roughness: 0.2 }), 16);
  afLight.rotation.x = Math.PI / 2;
  afLight.position.set(-1.0, 0.15, 0.44);
  bodyAsm.add(afLight);

  [[-1.15, 0.6], [1.15, 0.6], [-1.15, -0.6], [1.15, -0.6]].forEach(([x, y]) => {
    const s = screw(matMetal);
    s.position.set(x, y, 0.435);
    bodyAsm.add(s);
  });

  // ============ 2. GRIP ============
  const gripAsm = assembly(new THREE.Vector3(1, -0.15, 0.35), 1.9);
  const gripMain = box(0.55, 1.45, 0.55, matRubber);
  gripMain.position.set(1.12, -0.02, 0.28);
  gripAsm.add(gripMain);
  const gripCurve = cyl(0.28, 0.28, 1.45, matRubber, 24);
  gripCurve.position.set(1.35, -0.02, 0.42);
  gripAsm.add(gripCurve);

  // ============ 3. TAMPA SUPERIOR ============
  const topAsm = assembly(new THREE.Vector3(0, 1, 0.1), 1.8);
  const topPlate = box(2.45, 0.16, 0.8, matBody);
  topPlate.position.set(0, 0.83, 0);
  topAsm.add(topPlate);

  const modeDial = knurledRing(0.26, 0.14, matDark, 40, 0.028);
  modeDial.position.set(-0.85, 0.98, -0.05);
  topAsm.add(modeDial);
  const modeDialTop = cyl(0.22, 0.22, 0.03, matDialTop, 32);
  modeDialTop.position.set(-0.85, 1.06, -0.05);
  topAsm.add(modeDialTop);

  const ctrlDial = knurledRing(0.17, 0.1, matDark, 30, 0.024);
  ctrlDial.position.set(0.55, 0.95, -0.22);
  topAsm.add(ctrlDial);

  const shutterBase = cyl(0.16, 0.19, 0.12, matBody, 28);
  shutterBase.position.set(1.05, 0.94, 0.18);
  topAsm.add(shutterBase);
  const shutterBtn = cyl(0.09, 0.09, 0.05, matMetal, 24);
  shutterBtn.position.set(1.05, 1.02, 0.18);
  topAsm.add(shutterBtn);

  const shoeBase = box(0.34, 0.05, 0.4, matMetal);
  shoeBase.position.set(0, 0.94, -0.05);
  topAsm.add(shoeBase);
  const railL = box(0.05, 0.06, 0.4, matMetal);
  railL.position.set(-0.17, 0.98, -0.05);
  topAsm.add(railL);
  const railR = box(0.05, 0.06, 0.4, matMetal);
  railR.position.set(0.17, 0.98, -0.05);
  topAsm.add(railR);

  const topScreen = box(0.5, 0.02, 0.3, matScreen);
  topScreen.position.set(0.45, 0.915, 0.18);
  topAsm.add(topScreen);

  // ============ 4. PENTAPRISMA ============
  const prismAsm = assembly(new THREE.Vector3(0, 1.3, -0.3), 2.3);
  const prism = cyl(0.32, 0.52, 0.5, matBody, 4);
  prism.rotation.y = Math.PI / 4;
  prism.position.set(0, 1.12, 0.02);
  prism.scale.set(1.25, 1, 0.85);
  prismAsm.add(prism);
  const prismWindow = box(0.4, 0.16, 0.02, matGlassBlue);
  prismWindow.position.set(0, 1.08, 0.42);
  prismAsm.add(prismWindow);

  // ============ 5. LENTE — corpo ============
  const lensAsm = assembly(new THREE.Vector3(0, 0, 1), 2.2);

  const mountRing = cyl(0.62, 0.62, 0.1, matMetal, 48);
  mountRing.rotation.x = Math.PI / 2;
  mountRing.position.set(0, -0.02, 0.48);
  lensAsm.add(mountRing);

  const alignDot = cyl(0.035, 0.035, 0.02, matAccent, 12);
  alignDot.rotation.x = Math.PI / 2;
  alignDot.position.set(0.2, 0.55, 0.52);
  lensAsm.add(alignDot);

  const barrel1 = cyl(0.55, 0.6, 0.5, matLensBarrel, 48);
  barrel1.rotation.x = Math.PI / 2;
  barrel1.rotation.y = Math.PI;
  barrel1.position.set(0, -0.02, 0.78);
  lensAsm.add(barrel1);

  const zoomRing = knurledRing(0.58, 0.34, matRubber, 48, 0.035);
  zoomRing.rotation.x = Math.PI / 2;
  zoomRing.position.set(0, -0.02, 1.2);
  lensAsm.add(zoomRing);

  const barrel2 = cyl(0.52, 0.55, 0.3, matDark, 48);
  barrel2.rotation.x = Math.PI / 2;
  barrel2.position.set(0, -0.02, 1.52);
  lensAsm.add(barrel2);

  // ============ 6. ANEL DE FOCO + ACENTO ============
  const focusAsm = assembly(new THREE.Vector3(0.15, 0.1, 1), 3.0);
  const focusRing = knurledRing(0.55, 0.26, matRubber, 44, 0.032);
  focusRing.rotation.x = Math.PI / 2;
  focusRing.position.set(0, -0.02, 1.78);
  focusAsm.add(focusRing);
  const accentRing = new THREE.Mesh(new THREE.TorusGeometry(0.53, 0.025, 16, 64), matAccent);
  accentRing.position.set(0, -0.02, 1.94);
  focusAsm.add(accentRing);

  // ============ 7. ELEMENTO FRONTAL ============
  const glassAsm = assembly(new THREE.Vector3(-0.1, 0.05, 1), 3.8);
  const frontBezel = cyl(0.5, 0.53, 0.12, matDark, 48);
  frontBezel.rotation.x = Math.PI / 2;
  frontBezel.position.set(0, -0.02, 2.02);
  glassAsm.add(frontBezel);

  const frontGlass = new THREE.Mesh(
    new THREE.SphereGeometry(0.62, 48, 24, 0, Math.PI * 2, 0, Math.PI * 0.42),
    matGlass
  );
  frontGlass.rotation.x = Math.PI / 2;
  frontGlass.position.set(0, -0.02, 1.62);
  frontGlass.scale.set(0.76, 0.76, 0.76);
  glassAsm.add(frontGlass);

  const innerGlass = new THREE.Mesh(new THREE.CircleGeometry(0.34, 48), matGlassBlue);
  innerGlass.position.set(0, -0.02, 1.98);
  glassAsm.add(innerGlass);

  // ============ 8. TRASEIRA ============
  const backAsm = assembly(new THREE.Vector3(0, 0, -1), 2.4);
  const backPlate = box(2.4, 1.42, 0.1, matBody);
  backPlate.position.set(0, 0, -0.47);
  backAsm.add(backPlate);

  const screenFrame = box(1.35, 0.95, 0.03, matDark);
  screenFrame.position.set(-0.35, -0.08, -0.53);
  backAsm.add(screenFrame);
  const screen = box(1.22, 0.82, 0.02, matScreen);
  screen.position.set(-0.35, -0.08, -0.55);
  backAsm.add(screen);

  const eyepiece = box(0.5, 0.32, 0.08, matRubber);
  eyepiece.position.set(0, 0.62, -0.53);
  backAsm.add(eyepiece);
  const eyeGlass = box(0.3, 0.18, 0.02, matGlassBlue);
  eyeGlass.position.set(0, 0.62, -0.58);
  backAsm.add(eyeGlass);

  for (let i = 0; i < 4; i++) {
    const b = cyl(0.055, 0.055, 0.04, matDark, 20);
    b.rotation.x = Math.PI / 2;
    b.position.set(0.62, 0.32 - i * 0.26, -0.54);
    backAsm.add(b);
  }
  const dpad = cyl(0.14, 0.14, 0.05, matDark, 32);
  dpad.rotation.x = Math.PI / 2;
  dpad.position.set(0.95, -0.15, -0.54);
  backAsm.add(dpad);

  // ============ 9. PRESILHAS ============
  const lugsAsm = assembly(new THREE.Vector3(0, 0.6, -0.2), 2.6);
  [-1.28, 1.28].forEach(x => {
    const mountPin = cyl(0.09, 0.09, 0.14, matMetal, 20);
    mountPin.rotation.z = Math.PI / 2;
    mountPin.position.set(x, 0.42, 0);
    lugsAsm.add(mountPin);
    const lugRing = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.028, 12, 28), matMetal);
    lugRing.rotation.y = Math.PI / 2;
    lugRing.position.set(x > 0 ? x + 0.1 : x - 0.1, 0.42, 0);
    lugsAsm.add(lugRing);
  });

  assemblies.forEach(g => { g.userData.home = g.position.clone(); });

  cameraGroup.rotation.set(-0.12, -0.55, 0.02);
  cameraGroup.position.set(0.9, 0.15, 0);
  cameraGroup.scale.set(0.9, 0.9, 0.9);

  // ---------- Redimensionar ----------
  function resize() {
    const rect = canvas.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);
    cam.aspect = rect.width / Math.max(rect.height, 1);
    cam.updateProjectionMatrix();
    if (rect.width < 700) {
      cameraGroup.position.set(0, 0.55, 0);
      cameraGroup.scale.set(0.62, 0.62, 0.62);
    } else {
      cameraGroup.position.set(0.9, 0.15, 0);
      cameraGroup.scale.set(0.9, 0.9, 0.9);
    }
  }
  window.addEventListener('resize', resize);
  resize();

  // ---------- Scroll ----------
  const scrollWrapper = document.querySelector('.hero-scroll');
  function getScrollProgress() {
    if (!scrollWrapper) return 0;
    const rect = scrollWrapper.getBoundingClientRect();
    const scrollable = scrollWrapper.offsetHeight - window.innerHeight;
    if (scrollable <= 0) return 0;
    return Math.min(Math.max(-rect.top / scrollable, 0), 1);
  }
  const explodeFactor = p => Math.sin(p * Math.PI);

  let target = 0, smooth = 0;
  window.addEventListener('scroll', () => { target = getScrollProgress(); }, { passive: true });
  target = getScrollProgress();

  // ---------- Loop ----------
  function animate() {
    requestAnimationFrame(animate);
    smooth += (target - smooth) * 0.08;
    const f = explodeFactor(smooth);

    assemblies.forEach(g => {
      g.position.copy(g.userData.home).addScaledVector(g.userData.explode, f);
      g.rotation.x = f * g.userData.explode.y * 0.18;
      g.rotation.y = f * g.userData.explode.x * 0.12;
    });

    if (!prefersReducedMotion) {
      cameraGroup.rotation.y = -0.55 + smooth * 1.35 + Math.sin(Date.now() * 0.00018) * 0.04;
      cameraGroup.rotation.x = -0.12 + Math.sin(Date.now() * 0.00013) * 0.02;
    }

    renderer.render(scene, cam);
  }

  if (prefersReducedMotion) {
    renderer.render(scene, cam);
  } else {
    animate();
  }
})();
