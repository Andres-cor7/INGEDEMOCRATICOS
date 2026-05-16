// src/data/datos.js

export const POLITICOS = [
  {
    id: '1',
    nombre: 'Alejandro',
    apellido: 'Perez Cuellar',
    puesto: 'Candidato a Diputado Federal',
    distrito: 'Distrito 04',
    foto: require('../../assets/telAviv.avif'), 
    colorPrincipal: '#8B0000', 
    propuestas: 'Desarrollo social y economico',
    
    // --- INFO EXTENDIDA PARA LA PANTALLA DE DETALLE ---
    estudios: 'Licenciatura en Derecho',
    biografia: 'Alejandro tiene amplia experiencia en la administración pública, enfocado en el desarrollo urbano y programas sociales.',
    propuestasCompletas: '1. Apoyo a pequeñas empresas\n2. Mejora de espacios públicos\n3. Programas para jóvenes',
    aprobacion: '75% de opiniones positivas'
  },
  {
    id: '2',
    nombre: 'Roberto',
    apellido: 'Lara Rocha',
    puesto: 'Candidato a Diputado Federal',
    distrito: 'Distrito 08',
    foto: require('../../assets/robert.jpg'),
    colorPrincipal: '#1a5f7a', 
    propuestas: 'Agua y sustentabilidad',
    
    // --- INFO EXTENDIDA PARA LA PANTALLA DE DETALLE ---
    estudios: 'Licenciatura en Derecho y Maestria en Administracion',
    biografia: 'Conocido como "El Poncho", ha trabajado en la Junta Municipal de Agua y Saneamiento, impulsando proyectos de infraestructura hídrica.',
    propuestasCompletas: '1. Modernizacion de la red de agua\n2. Energias limpias\n3. Proteccion al medio ambiente',
    aprobacion: '80% de apoyo'
  },
  {
    id: '3',
    nombre: 'Baudelio',
    apellido: 'Loya',
    puesto: 'Candidato a Diputado Federal',
    distrito: 'Distrito 08',
    foto: require('../../assets/loya.jpg'), 
    colorPrincipal: '#2E8B57', 
    propuestas: 'Desarrollo rural y agricultura',
    
    // --- INFO EXTENDIDA PARA LA PANTALLA DE DETALLE ---
    estudios: 'Ingenieria Agronoma',
    biografia: 'Baudelio es un fuerte defensor del sector primario en el estado, buscando mejores condiciones para los agricultores y ganaderos.',
    propuestasCompletas: '1. Subsidios al campo\n2. Tecnificacion de riego\n3. Apoyo a la exportacion',
    aprobacion: '68% de apoyo'
  },
  {
    id: '4',
    nombre: 'Carlos',
    apellido: 'Borruenda',
    puesto: 'Candidato a Diputado Federal',
    distrito: 'Distrito 06',
    foto: require('../../assets/Carlos.jpg'), 
    colorPrincipal: '#B8860B', 
    propuestas: 'Educacion y tecnologia',
    
    // --- INFO EXTENDIDA PARA LA PANTALLA DE DETALLE ---
    estudios: 'Ingenieria en Sistemas y Maestria en Educacion',
    biografia: 'Carlos propone una revolucion tecnologica en las escuelas publicas del estado para preparar a los jovenes para el futuro.',
    propuestasCompletas: '1. Internet gratuito en escuelas\n2. Tablets para estudiantes\n3. Capacitacion docente',
    aprobacion: '70% de apoyo'
  },
  {
    id: '5',
    nombre: 'Marco',
    apellido: 'Quezada',
    puesto: 'Candidato a Diputado Federal',
    distrito: 'Distrito 08',
    foto: require('../../assets/Marco.jpg'), 
    colorPrincipal: '#8B0000', 
    propuestas: 'Seguridad y bienestar social',
    
    // --- INFO EXTENDIDA PARA LA PANTALLA DE DETALLE ---
    estudios: 'Licenciatura en Derecho',
    biografia: 'Ex alcalde de Chihuahua, Marco Quezada cuenta con experiencia en el manejo de crisis y desarrollo de programas comunitarios.',
    propuestasCompletas: '1. Policia de proximidad\n2. Centros comunitarios\n3. Apoyo a madres solteras',
    aprobacion: '85% de apoyo'
  }
];