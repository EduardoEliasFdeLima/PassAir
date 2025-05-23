window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("globe-container");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
   
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    //const texture = new THREE.TextureLoader().load('imgs/mundial.png'); // Substitua aqui
  
    const agora = new Date();
    const hora  = agora.getHours();
    const imgGlobe = (hora >= 17 || hora < 6)
      ? 'imgs/mundial_night.png'
      : 'imgs/mundial_day.png';
      
    let texture;
    texture = new THREE.TextureLoader().load(imgGlobe);
   
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);
    
    camera.position.z = 5;
  
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    renderer.domElement.addEventListener("mousedown", (event) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    });

    window.addEventListener("mouseup", () => {
      isDragging = false;
    });

    renderer.domElement.addEventListener("mousemove", (event) => {
      if (!isDragging) return;

      const deltaX = event.clientX - previousMousePosition.x;
      const deltaY = event.clientY - previousMousePosition.y;

      globe.rotation.y += deltaX * 0.01;
      globe.rotation.x += deltaY * 0.01;

      previousMousePosition = { x: event.clientX, y: event.clientY };
    });

    function animate() {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.005;
      renderer.render(scene, camera);
    }
    
    animate();

});



