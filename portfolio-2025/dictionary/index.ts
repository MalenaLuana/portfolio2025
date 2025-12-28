import { languages } from "./types";

export const texts = {
  [languages.espanish]: {
    userProfile: {
      descriptionMessages: [
        "- Nombre: Malena Luana Fresco",
        "- Alias: TURMALINA",
        "- Nombre de invocador: patachuvita #LAS",
        "- Edad: 26 años",
        "- Profesión: Front-end developer con una mente que también diseña, ilustra y tatúa. Afirma que el arte y el código son solo diferentes formas de crear.",
        "- Habilidades: Domina CSS sin depender de frameworks, resuelve problemas sin copiar y pegar, y tiene paciencia… en dosis estratégicas.",
        "- Logros: Diseñar y desarrollar con propósito, combinando lógica y creatividad para construir experiencias digitales memorables.",
        "- Misión: Que la tecnología no solo sea funcional, sino que también tenga carácter.",
      ],
      loadingMessages: [
        "Accediendo a la base de datos...",
        "Descifrando información confidencial...",
        "Compilando archivos personales...",
        "Verificando autenticación...",
        "Autenticación exitosa. Mostrando datos...",
      ],
    },
    settings: {
      addBackgroundModal: {
        title: "Carga tu imagen",
        subtitle: "Formato JPG o PNG",
        label: "Arrastra tu imagen o haz click aquì para subir tu archivo",
        btnLabel: "Subir imagen",
      },
    },
    fileExplorer: {
      title: "Carpetas frecuentes (2)",
      title2: "Archivos recientes (1)",
    },
    wellcomeAlert: {
      title: "¡Bienvenidx! Gracias por pasar. Podés explorar libremente este portfolio — cada botón te muestra algo distinto, así que sentite con confianza de ir  descubriendo todo lo que hay.",
    },
    home: {
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      about: "Sobre mí",
      profile: {
        name: "Malena Luana Fresco",
        role: "Frontend Developer / Artista visual",
      },
      experienceCard: {
        title: "Experiencia",
        value: "3 años",
        labels: [
          "Desarrollo frontend",
          "E-commerce",
          "Componentes reutilizables",
          "Performance web",
          "Experiencia de usuario",
        ],
      },
      skillsCard: {
        title: "Habilidades técnicas",
        items: [
          {
            label: "Frontend Development",
            value: "React, Next.js, TypeScript, JavaScript",
          },
          {
            label: "Backend Development",
            value: "Node.js, Express, APIs",
          },
          {
            label: "Database",
            value: "MongoDB, PostgreSQL",
          },
          {
            label: "Tools & Others",
            value: "Git, Docker, CI/CD",
          },
        ],
      },
      aboutCard: {
        title: "Sobre mí",
        items: [
          {
            label: "Ubicación",
            value: "Buenos Aires, Argentina",
          },
          {
            label: "Email",
            value: "malenaluana98@gmail.com",
          },
        ],
      },
    }
  },

  [languages.inglish]: {},
};
