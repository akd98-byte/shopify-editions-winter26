import * as THREE from 'three';
import { handleResize } from './utils/resize';
import { createRAF } from './utils/raf';

export class FluidSimulation {
  private scene: THREE.Scene;
  private camera: THREE.OrthographicCamera;
  private renderer: THREE.WebGLRenderer;
  private material: THREE.ShaderMaterial;
  private mesh: THREE.Mesh;
  private mouse: THREE.Vector2;
  private targetMouse: THREE.Vector2;
  private raf: ReturnType<typeof createRAF>;

  constructor(container: HTMLElement, vertexShader: string, fragmentShader: string) {
    this.mouse = new THREE.Vector2(0, 0);
    this.targetMouse = new THREE.Vector2(0, 0);

    // Scene setup
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    // Shader material
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: this.mouse },
        uResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
      },
      transparent: true,
    });

    // Mesh
    const geometry = new THREE.PlaneGeometry(2, 2);
    this.mesh = new THREE.Mesh(geometry, this.material);
    this.scene.add(this.mesh);

    // Event listeners
    this.setupEventListeners();

    // Animation loop
    this.raf = createRAF(this.animate.bind(this));
    this.raf.start();
  }

  private setupEventListeners() {
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    window.addEventListener('resize', this.onResize.bind(this));
  }

  private onMouseMove(event: MouseEvent) {
    this.targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  private onResize() {
    handleResize(this.renderer, this.camera);
    this.material.uniforms.uResolution.value.set(
      window.innerWidth,
      window.innerHeight
    );
  }

  private animate(time: number) {
    // Smooth mouse movement with lerp
    this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
    this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;

    // Update uniforms
    this.material.uniforms.uTime.value = time * 0.001;
    this.material.uniforms.uMouse.value = this.mouse;

    // Render
    this.renderer.render(this.scene, this.camera);
  }

  public destroy() {
    this.raf.stop();
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('resize', this.onResize);
    this.renderer.dispose();
    this.material.dispose();
    this.mesh.geometry.dispose();
  }
}
