/**
 * Objeto principal que contiene todas las traducciones.
 * Se divide por códigos de idioma ('en' para Inglés, 'es' para Español).
 * Cada clave (ej. "nav_about") corresponde al atributo data-i18n en el HTML.
 */
const translations = {
    en: {
        "nav_about": "About me",
        "nav_skills": "Skills",
        "nav_experience": "Experience",
        "nav_projects": "Projects",
        "nav_contact": "Contact me",
        "about_role": "QA Automation Engineer | QC Analyst | Performance Tester",
        "about_desc": "QA Automation Engineer with 4 years of experience and an AI-First mindset focused on ensuring quality throughout the software development lifecycle by implementing robust and scalable automation frameworks. Cultivating a continuous learning culture with a collaborative personality. Experienced in Banking and Healthcare domains.",
        "btn_contact": "Contact me",
        "btn_cv": "CV | Resume",
        "skills_title": "Technical Skills",
        "skills_vcs": "Version Control",
        "skills_pm": "Project Management",
        "exp_title": "Experience",
        "companies_title": "Companies where I added value",
        "skills_api": "API Testing",
        "skills_db": "Database Testing",
        "skills_webui": "Web UI Testing",
        "skills_ai": "AI Tools",

        "exp1_role": "QA Automation | QA functional Analyst",
        "exp1_date": "Globant • Johnson & Johnson | Full Time • Full Remote | Oct 2025 - Present",
        "exp1_highlight": "<strong>Main achievement:</strong> Joined a 100% English-speaking team where I ensure quality processes in the migration of the cardiovascular device management system across multiple platforms and devices.",
        "exp1_p1": "● Ensured functional quality control during the critical migration from Salesforce Classic to Lightning Web Components (LWC), guaranteeing feature parity and data integrity.",
        "exp1_p2": "● Wrote test cases focused on the healthcare environment following industry norms and standards.",
        "exp1_p3": "● Validated UI adaptability and performance on iOS mobile devices and tablets, ensuring a consistent user experience for healthcare personnel in clinical settings with access to different types of devices simultaneously.",
        "exp1_p4": "● Designed and executed comprehensive test plans for the complaint management system for cardiovascular implants, ensuring US FDA regulatory compliance for traceability and accurate linking of sensitive patient data.",
        "exp1_p5": "● Optimized the defect lifecycle through detailed reporting and root cause analysis, collaborating with the development team to reduce bug resolution times.",
        "exp1_p6": "● Planned the transition from manual to automated testing, identifying critical flows and defining acceptance criteria for future automation script development.",

        "exp2_role": "QA Automation Engineer | SDET | Performance Tester",
        "exp2_date": "Globant • Prisma Payway | Full Time • Full Remote | Nov 2024 - Oct 2025",
        "exp2_highlight": "<strong>Main achievement:</strong> E2E Backend automation of the electronic payment means onboarding system for new clients and refactoring of the performance testing process.",
        "exp2_p1": "● Led the implementation of Karate Framework for the strategic migration of API testing from Postman, standardizing the automation of the client onboarding flow and electronic payment infrastructure configuration.",
        "exp2_p2": "● Comprehensively redesigned the load testing infrastructure with JMeter, automating its execution with Python scripts in AWS EC2 environments.",
        "exp2_p3": "● Refactored the Java Spring Boot backend of the payment emulation system to simulate real random behavior during performance executions.",
        "exp2_p4": "● Designed an Artificial Intelligence agent specialized in transforming natural language user stories into executable test cases in Karate along with Jira Xray documentation, accelerating test coverage and documentation.",

        "exp3_role": "QA Automation Engineer | QA Functional | Performance Tester | Security Tester",
        "exp3_date": "Globant • Banco de Crédito del Perú (BCP) | Full Time • Full Remote | Feb 2023 - Oct 2024",
        "exp3_highlight": "<strong>Main achievement:</strong> Ensured the functional and non-functional quality of the bank's credit sales system by learning and implementing new technologies and tools throughout the process.",
        "exp3_p1": "● Developed an E2E test automation framework for Salesforce using Java Selenium for the credit sales system.",
        "exp3_p2": "● Developed a backend automation framework using Karate Framework increasing test coverage in financial services, facilitating early defect detection.",
        "exp3_p3": "● Wrote manual test cases for both APIs and UI in BDD format in Jira Xray for manual execution and subsequent automation.",
        "exp3_p4": "● Designed and executed non-functional performance tests using JMeter in cloud environments under stress.",
        "exp3_p5": "● Migrated performance tests from JMeter to LoadRunner.",
        "exp3_p6": "● Executed automated pen-testing tests using OWASP ZAP tool.",

        "exp4_role": "QA Automation Engineer | Test Automation Engineer",
        "exp4_date": "Globant • The Walt Disney Company | Full Time • Full Remote | Mar 2022 - Dec 2022",
        "exp4_highlight": "<strong>Main achievement:</strong> Incorporated knowledge and skills to test software both manually and automatically, specializing in test automation.",
        "exp4_p1": "● Designed and developed automation scripts for validating advertising data management APIs using Python as the main technology, ensuring the integrity of critical data flows.",
        "exp4_p2": "● Executed end-to-end testing cycles in a Scrum methodology environment, collaborating closely with cross-functional teams to meet client delivery deadlines.",
        "exp4_p3": "● Identified and reported inconsistencies in backend services, improving software quality before its release to production and facilitating complex bug resolution.",

        "exp5_role": "Backend Developer | DBA | Scripter",
        "exp5_date": "JUFEC S.A.| Part Time • On Site | April 2021 - Sep 2021",
        "exp5_highlight": "<strong>Main achievement:</strong> Successfully entered the IT job market, applying the knowledge acquired during my university degree.",
        "exp5_p1": "● Designed and developed the backend architecture of an internal web system for monitoring and querying pharmaceutical terminals, centralizing the company's operational management.",
        "exp5_p2": "● Modeled relational databases and created automated data collection scripts, allowing real-time analysis of hardware and software metrics.",
        "exp5_p3": "● Automated data extraction processes from remote terminals, reducing the technical team's response time to infrastructure incidents.",

        "proj_title": "Projects",
        "proj1_title": "E-commerce Full Test Automation",
        "proj1_desc": "End-to-end test automation project for an e-commerce platform, where I tested my skills in adopting new technologies. It includes the latest frontend automation technology with TypeScript and Playwright. The project features: Automated reports, Page Object Model, AI usage, and Test case documentation.",
        "proj_btn_github": "View on GitHub",

        "proj2_title": "System Info Grabber",
        "proj2_desc": "Desktop application project developed in Python that collects and displays detailed information about the operating system and hardware of the computer where it runs. The application uses the CustomTkinter library for the graphical interface, providing a modern and attractive user experience. Furthermore, it is packaged as a standalone executable using PyInstaller, making it easy to distribute and install on other systems without needing Python installed.",

        "github_more_title": "Discover my GitHub",
        "github_more_desc": "Technologies, personal projects, experiments, collaborations with other developers, academic projects, and much more. Feel free to take a look at my profile, whether to evaluate it or draw inspiration from it.",
        "github_more_btn": "View GitHub Profile",

        "contact_title": "Contact me",
        "contact_desc": "I am currently open to new job opportunities, including freelancing for specific projects as a QA Automation, QA Functional, or Performance Tester. If you wish to contact me, don't hesitate to do so.",

        "footer_rights": "Fernando Caballero © 2026",
        "footer_spec": "QA Automation & Python Scripting Specialist",
        "footer_from": "From 🇦🇷 Corrientes to the world 🌎"
    },
    es: {
        "nav_about": "Sobre mi",
        "nav_skills": "Habilidades",
        "nav_experience": "Experiencia",
        "nav_projects": "Proyectos",
        "nav_contact": "Contáctame",
        "about_role": "QA Automation Engineer | QC Analyst | Performance Tester",
        "about_desc": "QA Automation Engineer con 4 años de experiencia y con mentalidad AI-First centrado en asegurar la calidad durante todo el ciclo de vida de desarrollo de software mediante la implementación de frameworks de automatización robustos y escalables con cultura de aprendizaje continuo y con personalidad colaborativa. con experiencia en negocio de Banca y Healthcare.",
        "btn_contact": "Contáctame",
        "btn_cv": "CV | Resume",
        "skills_title": "Habilidades Técnicas",
        "skills_vcs": "Control de Versiones",
        "skills_pm": "Gestión de Proyectos",
        "exp_title": "Experiencia",
        "companies_title": "Empresas en las que aporté valor",
        "skills_api": "Testing de APIs",
        "skills_db": "Testing de Bases de Datos",
        "skills_webui": "Testing de UI Web",
        "skills_ai": "Herramientas de IA",

        "exp1_role": "QA Automation | QA functional Analyst",
        "exp1_date": "Globant • Johnson & Johnson | Full Time • Full Remote | Oct 2025 - Actualidad",
        "exp1_highlight": "<strong>Logro principal:</strong> Incorporación a un equipo 100% de habla inglesa donde aseguro los procesos de calidad en la migración del sistema de administración de dispositivos cardiovasculares en múltiples plataformas y dispositivos.",
        "exp1_p1": "● Aseguré el control de calidad funcional durante la migración crítica de Salesforce Classic a Lightning Web Components (LWC), garantizando la paridad de funciones y la integridad de los datos.",
        "exp1_p2": "● Redacté casos de prueba enfocados en entorno healthcare siguiendo normas y estándares de la industria.",
        "exp1_p3": "● Validé la adaptabilidad y el rendimiento de la interfaz en dispositivos móviles y tablets iOS, asegurando una experiencia de usuario consistente para el personal de salud en entornos clínicos con acceso a distintos tipos de dispositivos a la vez.",
        "exp1_p4": "● Diseñé y ejecuté planes de prueba integrales para el sistema de gestión de quejas para implantes cardiovasculares, asegurando el cumplimiento normativo de la FDA de los EEUU para la trazabilidad y la vinculación precisa de datos sensibles de pacientes.",
        "exp1_p5": "● Optimicé el ciclo de vida de los defectos mediante reportes detallados y análisis de causa raíz, colaborando con el equipo de desarrollo para reducir los tiempos de resolución de bugs.",
        "exp1_p6": "● Planifiqué la transición de pruebas manuales a automatizadas, identificando flujos críticos y definiendo criterios de aceptación para el futuro desarrollo de scripts de automatización.",

        "exp2_role": "QA Automation Engineer | SDET | Performance Tester",
        "exp2_date": "Globant • Prisma Payway | Full Time • Full Remote | Nov 2024 - Oct 2025",
        "exp2_highlight": "<strong>Logro Principal:</strong> Automatización E2E del backend del sistema de onboarding a medios de pagos electrónicos para nuevos clientes y refactorización del proceso de pruebas de performance.",
        "exp2_p1": "● Llevé a cabo la implementación de Karate Framework para la migración estratégica de pruebas de APIs desde Postman, estandarizando la automatización del flujo de onboarding de clientes y la configuración de infraestructura de pagos electrónicos.",
        "exp2_p2": "● Rediseñé integralmente la infraestructura de pruebas de carga con JMeter, automatizando su ejecución con scripts en Python en entornos EC2 de AWS.",
        "exp2_p3": "● Refactoricé el backend Java Spring Boot del sistema de emulación de pagos para simular comportamiento real aleatorio durante las ejecuciones de performance.",
        "exp2_p4": "● Diseñé un agente de Inteligencia Artificial especializado en transformar historias de usuario en lenguaje natural a casos de prueba ejecutables en Karate junto con documentación para Jira Xray, acelerando la cobertura y documentación de pruebas.",

        "exp3_role": "QA Automation Engineer | QA Functional | Performance Tester | Security Tester",
        "exp3_date": "Globant • Banco de Crédito del Perú (BCP) | Full Time • Full Remote | Feb 2023 - Oct 2024",
        "exp3_highlight": "<strong>Logro Principal:</strong> Aseguré la calidad funcional y no funcional del sistema de venta de créditos del banco aprendiendo e implementando nuevas tecnologías y herramientas en todo el proceso.",
        "exp3_p1": "● Desarrollé un framework de automatización de pruebas E2E para salesforce en Java Selenium para el sistema de ventas de créditos.",
        "exp3_p2": "● Desarrollé un framework de automatización backend utilizando Karate Framework incrementando la cobertura de pruebas en servicios financieros facilitando la detección temprana de defectos.",
        "exp3_p3": "● Redacté casos de pruebas manuales tanto para las apis como para la interfaz UI en formato BDD en Jira Xray para su ejecución manual y posterior automatización.",
        "exp3_p4": "● Diseñé y Ejecuté pruebas no funcionales de rendimiento con JMeter en entornos en la nube bajo estrés.",
        "exp3_p5": "● Migré las pruebas de rendimiento de Jmeter a LoadRunner.",
        "exp3_p6": "● Ejecuté pruebas automatizadas de pen-testing con la herramienta OWASP ZAP.",

        "exp4_role": "QA Automation Engineer | Test Automation Engineer",
        "exp4_date": "Globant • The Walt Disney Company | Full Time • Full Remote | Mar 2022 - Dic 2022",
        "exp4_highlight": "<strong>Logro Principal:</strong> Incorporé los conocimientos y habilidades para probar software de manera manual y automatizada especializándome en la automatización de pruebas.",
        "exp4_p1": "● Diseñé y desarrollé scripts de automatización para la validación de APIs de gestión de datos publicitarios utilizando Python como tecnología principal, asegurando la integridad de flujos de datos críticos.",
        "exp4_p2": "● Ejecuté ciclos de pruebas integrales en un entorno bajo metodología Scrum, colaborando estrechamente con equipos multidisciplinarios para cumplir con los plazos de entrega del cliente.",
        "exp4_p3": "● Identifiqué y reporté inconsistencias en servicios de backend, mejorando la calidad del software antes de su paso a producción y facilitando la resolución de bugs complejos.",

        "exp5_role": "Backend Developer | DBA | Scripter",
        "exp5_date": "JUFEC S.A.| Partial Time • On Site | Abril 2021 - Sep 2021",
        "exp5_highlight": "<strong>Logro Principal:</strong> Logré incorporarme al mercado laboral IT y poner en práctica lo aprendido en la carrera universitaria.",
        "exp5_p1": "● Diseñé y desarrollé la arquitectura backend de un sistema web interno para el monitoreo y consulta de terminales farmacéuticas, centralizando la gestión operativa de la empresa.",
        "exp5_p2": "● Modelé bases de datos relacionales y creé scripts de recolección automática de datos, permitiendo el análisis de métricas de hardware y software en tiempo real.",
        "exp5_p3": "● Automaticé procesos de extracción de datos de terminales remotas, reduciendo el tiempo de respuesta del equipo técnico ante incidentes de infraestructura.",

        "proj_title": "Proyectos",
        "proj1_title": "E-commerce Full Test Automation",
        "proj1_desc": "Proyecto de automatización de pruebas end-to-end para una plataforma de comercio electrónico, donde puse a prueba mis habilidades de adopción de nuevas tecnologías. de lo último en tecnología de automatización de frontend con typescript y playwright. En el mismo se puede encontrar: Reportes automatizads, Page Object Model, Utilizaciónc de IA, Documentación de casos de prueba.",
        "proj_btn_github": "Ver En GitHub",

        "proj2_title": "System Info Grabber",
        "proj2_desc": "Proyecto de aplicación de escritorio desarrollada en Python que recopila y muestra información detallada del sistema operativo y hardware del equipo donde se ejecuta. La aplicación utiliza la biblioteca CustomTkinter para la interfaz gráfica, ofreciendo una experiencia de usuario moderna y atractiva. Además, se empaqueta como un ejecutable independiente utilizando PyInstaller, facilitando su distribución e instalación en otros sistemas sin necesidad de tener Python instalado.",

        "github_more_title": "Descubre mi GitHub",
        "github_more_desc": "Tecnologías, proyectos personales, experimentos, colaboraciones con otros developers, proyectos académicos y mucho más. Animate a dar un vistazo a mi perfil, ya sea para evaluarlo o tomar inspiración de él.",
        "github_more_btn": "Ver Perfil De GitHub",

        "contact_title": "Contáctame",
        "contact_desc": "Actualmente estoy abierto a nuevas oportunidades laborales incluso como freelance para un proyecto particular ya sea como QA Automation, QA Funcional o Performance Tseter. Si deseas contactarme, no dudes en hacerlo.",

        "footer_rights": "Fernando Caballero © 2026",
        "footer_spec": "Especialista en QA Automation & Python Scripting",
        "footer_from": "From 🇦🇷 Corrientes to the world 🌎"
    }
};

/**
 * Variable global que almacena el idioma actual.
 * Primero intenta obtener la preferencia guardada del usuario en `localStorage`.
 * Si el usuario visita por primera vez y no hay nada guardado, usa "en" (Inglés) por defecto.
 */
let currentLang = localStorage.getItem("preferredLanguage") || "en";

/**
 * Función principal para cambiar el idioma de la página.
 * @param {string} lang - Código del idioma al que se quiere cambiar ("en" o "es").
 */
function setLanguage(lang) {
    // 1. Actualizamos la variable global y guardamos la preferencia en el navegador
    currentLang = lang;
    localStorage.setItem("preferredLanguage", lang);

    // 2. Actualizamos el aspecto visual de los botones (cuál está activo)
    updateToggleUI(lang);

    // 3. Buscamos TODOS los elementos en el HTML que tengan el atributo `data-i18n`
    const elements = document.querySelectorAll("[data-i18n]");

    // 4. Recorremos cada elemento encontrado para actualizar su texto
    elements.forEach(element => {
        // Obtenemos la clave de traducción (ej. "nav_about")
        const key = element.getAttribute("data-i18n");

        // Verificamos si existe la traducción para ese idioma y esa clave específica
        if (translations[currentLang] && translations[currentLang][key]) {
            // Si el texto actual o la nueva traducción contienen etiquetas HTML (como <strong> o <br>)
            // usamos innerHTML para renderizar el HTML correctamente. 
            // Si es solo texto plano, usamos textContent que es más rápido y seguro.
            if (element.innerHTML.includes('<') || translations[currentLang][key].includes('<')) {
                element.innerHTML = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });

    // 5. Actualizamos el atributo `lang` de la etiqueta <html> para fines de SEO y accesibilidad
    document.documentElement.lang = currentLang;
}

/**
 * Función encargada únicamente de cambiar las clases de CSS (Tailwind)
 * de los botones de idioma para indicar visualmente cuál está seleccionado.
 * @param {string} lang - El idioma que acaba de ser seleccionado.
 */
function updateToggleUI(lang) {
    const enBtn = document.getElementById("btn-lang-en");
    const esBtn = document.getElementById("btn-lang-es");

    // Si los botones no existen en la página, no hacemos nada
    if (!enBtn || !esBtn) return;

    if (lang === "en") {
        // Estilos para botón INGLÉS activo
        enBtn.classList.add("bg-primary", "text-black");
        enBtn.classList.remove("text-text-muted", "hover:text-primary");

        // Estilos para botón ESPAÑOL inactivo
        esBtn.classList.remove("bg-primary", "text-black");
        esBtn.classList.add("text-text-muted", "hover:text-primary");
    } else {
        // Estilos para botón ESPAÑOL activo
        esBtn.classList.add("bg-primary", "text-black");
        esBtn.classList.remove("text-text-muted", "hover:text-primary");

        // Estilos para botón INGLÉS inactivo
        enBtn.classList.remove("bg-primary", "text-black");
        enBtn.classList.add("text-text-muted", "hover:text-primary");
    }
}

/**
 * (Opcional) Función global en caso de que en el futuro decidas usar un solo botón switch 
 * en lugar de dos botones separados. Alterna entre "en" y "es".
 */
function toggleLanguage() {
    const newLang = currentLang === "en" ? "es" : "en";
    setLanguage(newLang);
}

/**
 * Event Listener que se ejecuta automáticamente cuando la página HTML termina de cargar.
 * Es el punto de entrada de nuestro script.
 */
document.addEventListener("DOMContentLoaded", () => {
    // Aplicamos el idioma inicial (el preferido guardado o el de por defecto)
    setLanguage(currentLang);

    // Obtenemos los botones del DOM
    const enBtn = document.getElementById("btn-lang-en");
    const esBtn = document.getElementById("btn-lang-es");

    // Les asignamos la función setLanguage a su evento "click"
    if (enBtn) enBtn.addEventListener("click", () => setLanguage("en"));
    if (esBtn) esBtn.addEventListener("click", () => setLanguage("es"));
});
