import * as THREE from 'three';

export function handleResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.Camera
) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  if (camera instanceof THREE.PerspectiveCamera || camera instanceof THREE.OrthographicCamera) {
    if ('aspect' in camera) {
      camera.aspect = width / height;
    }
    camera.updateProjectionMatrix();
  }
}
