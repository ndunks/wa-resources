; /*FB_PKG_DELIM*/

"use strict";
try {
    var THEME_KEY = "theme",
        SYSTEM_THEME_MODE = "system-theme-mode",
        splashscreenVariableMap = {
            "--splashscreen-startup-background": {
                light: "#F7F5F3",
                dark: "#0A1014"
            },
            "--splashscreen-startup-background-rgb": {
                light: "247, 245, 243",
                dark: "10, 16, 20"
            },
            "--splashscreen-startup-icon": {
                light: "rgba(0, 0, 0, 0.1)",
                dark: "rgba(255, 255, 255, 0.2)"
            },
            "--splashscreen-primary-title": {
                light: "#0A1014",
                dark: "#F7F8FA"
            },
            "--splashscreen-secondary-lighter": {
                light: "#5B6368",
                dark: "#8D9599"
            },
            "--splashscreen-progress-primary": {
                light: "#1DAA61",
                dark: "#21C063"
            },
            "--splashscreen-progress-background": {
                light: "rgba(0, 0, 0, 0.1)",
                dark: "rgba(255, 255, 255, 0.1)"
            }
        },
        prefersColorSchemeMode = null;
    if (window.matchMedia) {
        var prefersDark = window.matchMedia("(prefers-color-scheme: dark)"),
            prefersLight = window.matchMedia("(prefers-color-scheme: light)");
        prefersDark.matches === !0 ? prefersColorSchemeMode = "dark" : prefersLight.matches && (prefersColorSchemeMode = "light")
    }
    var systemThemeModeSet = window.localStorage.getItem(SYSTEM_THEME_MODE) === "true",
        configuredTheme = window.localStorage.getItem(THEME_KEY);
    systemThemeModeSet ? prefersColorSchemeMode === "dark" ? Object.keys(splashscreenVariableMap).forEach(function (a) {
        var b;
        return (b = document.documentElement) == null ? void 0 : b.style.setProperty(a, splashscreenVariableMap[a].dark)
    }) : prefersColorSchemeMode === "light" && Object.keys(splashscreenVariableMap).forEach(function (a) {
        var b;
        return (b = document.documentElement) == null ? void 0 : b.style.setProperty(a, splashscreenVariableMap[a].light)
    }) : configuredTheme === '"dark"' ? Object.keys(splashscreenVariableMap).forEach(function (a) {
        var b;
        return (b = document.documentElement) == null ? void 0 : b.style.setProperty(a, splashscreenVariableMap[a].dark)
    }) : (configuredTheme == null || configuredTheme === '"light"') && Object.keys(splashscreenVariableMap).forEach(function (a) {
        var b;
        return (b = document.documentElement) == null ? void 0 : b.style.setProperty(a, splashscreenVariableMap[a].light)
    })
} catch (a) {}
//# sourceURL=https://static.whatsapp.net/rsrc.php/v4/yN/r/1KehHpaPpRp.js