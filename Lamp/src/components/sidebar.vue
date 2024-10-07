<template>
    <div class="sidebar">
        <div class="sidebar-logo">
            <RouterLink to="/" tabindex="-1">
                <button active class="home-button">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lamp"><path d="M8 2h8l4 10H4L8 2Z"/><path d="M12 12v6"/><path d="M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"/></svg>
                    </span>
                    <span class="sidebar-title">Lamp</span>
                </button>
            </RouterLink>
        </div>
        <div class="sidebar-top">
            <RouterLink to="/icons" tabindex="-1">
                <button class="icons-button">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-icons" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.5 6.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0"/><path d="M2.5 21h8l-4 -7z"/><path d="M14 3l7 7"/><path d="M14 10l7 -7"/><path d="M14 14h7v7h-7z"/>
                        </svg>
                    </span>
                    <span class="sidebar-title">Icons</span>
                </button>
            </RouterLink>
            <RouterLink to="/typography" tabindex="-1">
                <button class="typography-button">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>
                    </span>
                    <span class="sidebar-title">Typography</span>
                </button>
            </RouterLink>
            <RouterLink to="/3d" tabindex="-1">
                <button class="three-dimensional-button">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                    </span>
                    <span class="sidebar-title">3D</span>
                </button>
            </RouterLink>
            <RouterLink to="/libraries" tabindex="-1">
                <button class="libraries-button">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-library"><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/></svg>
                    </span>
                    <span class="sidebar-title">Libraries</span>
                </button>
            </RouterLink>
            <RouterLink to="/components" tabindex="-1">
                <button class="components-button">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-component"><path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"/><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"/><path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"/><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"/></svg>
                    </span>
                    <span class="sidebar-title">Components</span>
                </button>
            </RouterLink>
            <a href="https://ko-fi.com/brick_wall" target="_blank" tabindex="-1">
                <button class="support-button">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coffee"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>
                    </span>
                    <span class="sidebar-title">Support</span>
                </button>
            </a>
        </div>
        <div class="sidebar-gap"></div>
        <div class="sidebar-bottom">
            <a class="open-button-container" tabindex="-1">
                <button class="open-button">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/></svg>
                    </span>
                    <span class="sidebar-title">Open</span>
                </button>
            </a>
            <a class="close-button-container" tabindex="-1">
                <button class="close-button">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-open"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m10 15-3-3 3-3"/></svg>
                    </span>
                    <span class="sidebar-title">Close</span>
                </button>
            </a>
            <a tabindex="-1">
                <button class="theme-button">
                    <span class="sidebar-icon">
                        <svg class="dark-mode-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                        <svg class="light-mode-icon hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                    </span>
                    <span class="sidebar-title">Dark Mode</span>
                </button>
            </a>
        </div>
    </div>
</template>

<style>
.sidebar {
    justify-content: flex-start;
    flex-direction: column;
    display: flex;
    align-items: center;
    text-align: center;
    min-width: 64px;
    max-width: 64px;
    height: 100%;
    border-right: 1px solid #27272A;
    transition: all 0.0s ease 0.0s;
    /* overflow-x: hidden;
    overflow-y: auto;
    gap: 200px; */
}

.sidebar .sidebar-logo {
    flex-direction: column;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    height: fit-content;
    width: 100%;
    gap: 8px;
    padding-top: 11px;
    padding-bottom: 11px;
    border-bottom: 1px solid #27272A;
}

.sidebar .sidebar-top {
    flex-direction: column;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    height: fit-content;
    width: 100%;
    gap: 8px;
    padding-top: 11px;
    padding-bottom: 11px;
    border-bottom: 1px solid #27272A;
}

.sidebar .sidebar-gap {
    flex-direction: column;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
}

.sidebar .sidebar-bottom {
    flex-direction: column;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: flex-end;
    height: fit-content;
    width: 100%;
    gap: 8px;
    padding-top: 11px;
    padding-bottom: 11px;
    border-top: 1px solid #27272A;
}

.sidebar .sidebar-logo a,
.sidebar .sidebar-top a,
.sidebar .sidebar-bottom a {
    text-decoration: none;
    height: fit-content;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 0.0s ease 0.0s;
}

.sidebar .sidebar-logo a:focus,
.sidebar .sidebar-top a:focus,
.sidebar .sidebar-bottom a:focus {
    outline: none;
    border: none;
}

.sidebar .sidebar-logo a button,
.sidebar .sidebar-top a button,
.sidebar .sidebar-bottom a button {
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    border: none;
    outline: none;
    min-height: 44px;
    min-width: 44px;
    max-width: 44px;
    min-height: 44px;
    border-radius: 10px;
    overflow: hidden;
    background-color: transparent;
    color: rgba(250, 250, 250, 0.9);
    cursor: pointer;
    transition: all 0.0s ease 0.0s;
    box-sizing: border-box;
}

.sidebar .sidebar-logo a button[active],
.sidebar .sidebar-top a button[active],
.sidebar .sidebar-bottom a button[active],
.sidebar .sidebar-logo a button[active]:hover,
.sidebar .sidebar-top a button[active]:hover,
.sidebar .sidebar-bottom a button[active]:hover,
.sidebar .sidebar-logo a button[active]:focus,
.sidebar .sidebar-top a button[active]:focus,
.sidebar .sidebar-bottom a button[active]:focus,
.sidebar .sidebar-logo a button[active]:active,
.sidebar .sidebar-top a button[active]:active,
.sidebar .sidebar-bottom a button[active]:active {
    background-color: #27272A;
    color: rgba(250, 250, 250, 1);
}

.sidebar .sidebar-logo a button:hover,
.sidebar .sidebar-top a button:hover,
.sidebar .sidebar-bottom a button:hover,
.sidebar .sidebar-logo a button:focus,
.sidebar .sidebar-top a button:focus,
.sidebar .sidebar-bottom a button:focus,
.sidebar .sidebar-logo a button:active,
.sidebar .sidebar-top a button:active,
.sidebar .sidebar-bottom a button:active {
    background-color: rgb(39, 39, 42, 0.4);
    color: rgba(250, 250, 250, 0.95);
}

.sidebar .sidebar-logo a button .sidebar-title,
.sidebar .sidebar-top a button .sidebar-title,
.sidebar .sidebar-bottom a button .sidebar-title {
    display: none;
    min-width: 158.5px;
    max-width: 158.5px;
    text-align: left;
    align-items: center;
    justify-content: flex-start;
    color: inherit;
    height: 44px;
    font-size: 15px;
    line-height: normal;
    font-weight: 350;
    font-family: "Open Sans", sans-serif;
    transition: all 0.0s ease 0.0s;
}

.sidebar .sidebar-logo a button .sidebar-icon,
.sidebar .sidebar-top a button .sidebar-icon,
.sidebar .sidebar-bottom a button .sidebar-icon {
    min-height: 44px;
    max-height: 44px;
    min-width: 44px;
    min-width: 44px;
    align-items: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    transition: all 0.0s ease 0.0s;
}

.sidebar .sidebar-logo a button .sidebar-icon svg,
.sidebar .sidebar-top a button .sidebar-icon svg,
.sidebar .sidebar-bottom a button .sidebar-icon svg {
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    min-height: 20px;
    min-width: 20px;
    max-width: 20px;
    min-height: 20px;
    color: inherit;
    user-select: none;
    pointer-events: none;
    transition: all 0.0s ease 0.0s;
    stroke-width: 1.85px;
}
</style>

