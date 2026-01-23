// tailwind.config.js
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#00d4ff",
                "background-light": "#ffffff", 
                "background-dark": "#121212",
                "sidebar-light": "#f8fafc",
                "sidebar-dark": "#181818",
                "card-dark": "#1e1e1e",
                "text-light": "#e0e0e0",
                "text-muted": "#a0a0a0",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"]
            },
            borderRadius: { 
                "DEFAULT": "0.125rem", 
                "lg": "0.25rem", 
                "xl": "0.5rem", 
                "full": "9999px" 
            },
        },
    },
}