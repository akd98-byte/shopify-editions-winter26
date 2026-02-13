'use client';

import React, { useEffect, useRef } from 'react';
import { FluidSimulation } from '@/three/FluidSimulation';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;

varying vec2 vUv;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187,
                      0.366025403784439,
                     -0.577350269189626,
                      0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
		+ i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = vUv;
  vec2 mouse = uMouse * 0.5 + 0.5;
  
  float noise1 = snoise(uv * 3.0 + uTime * 0.1);
  float noise2 = snoise(uv * 5.0 - uTime * 0.15);
  
  float mouseDist = distance(uv, mouse);
  float mouseEffect = smoothstep(0.3, 0.0, mouseDist);
  
  float flow = noise1 * 0.5 + noise2 * 0.3 + mouseEffect * 0.4;
  
  vec3 color1 = vec3(0.482, 0.380, 1.0);
  vec3 color2 = vec3(0.039, 0.039, 0.039);
  vec3 color3 = vec3(0.831, 0.686, 0.216);
  
  vec3 finalColor = mix(color2, color1, flow);
  finalColor = mix(finalColor, color3, mouseEffect * 0.3);
  
  finalColor += vec3(0.1) * flow;
  
  gl_FragColor = vec4(finalColor, 0.6);
}
`;

export function WebGLFluid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const simulationRef = useRef<FluidSimulation | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    try {
      simulationRef.current = new FluidSimulation(
        containerRef.current,
        vertexShader,
        fragmentShader
      );
    } catch (error) {
      console.warn('WebGL not supported, using fallback', error);
    }

    return () => {
      simulationRef.current?.destroy();
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-accent-ai/10 via-bg-primary to-accent-gold/10" />
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
