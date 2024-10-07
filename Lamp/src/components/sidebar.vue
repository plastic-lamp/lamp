<template>
    <div class="sidebar" :class="{ expanded }">
        <div class="sidebar-logo">
            <RouterLink to="/" tabindex="-1">
                <button class="home-button" v-tippy="{ content: 'Lamp' }">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lamp"><path d="M8 2h8l4 10H4L8 2Z"/><path d="M12 12v6"/><path d="M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"/></svg>
                    </span>
                    <span class="sidebar-title">Lamp</span>
                </button>
            </RouterLink>
        </div>
        <div class="sidebar-top">
            <RouterLink to="/icons" tabindex="-1">
                <button class="icons-button" v-tippy="{ content: 'Icons' }">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-icons" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.5 6.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0"/><path d="M2.5 21h8l-4 -7z"/><path d="M14 3l7 7"/><path d="M14 10l7 -7"/><path d="M14 14h7v7h-7z"/>
                        </svg>
                    </span>
                    <span class="sidebar-title">Icons</span>
                </button>
            </RouterLink>
            <RouterLink to="/typography" tabindex="-1">
                <button class="typography-button" v-tippy="{ content: 'Typography' }">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>
                    </span>
                    <span class="sidebar-title">Typography</span>
                </button>
            </RouterLink>
            <RouterLink to="/3d" tabindex="-1">
                <button class="three-dimensional-button" v-tippy="{ content: '3D' }">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                    </span>
                    <span class="sidebar-title">3D</span>
                </button>
            </RouterLink>
            <RouterLink to="/libraries" tabindex="-1">
                <button class="libraries-button" v-tippy="{ content: 'Libraries' }">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-library"><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/></svg>
                    </span>
                    <span class="sidebar-title">Libraries</span>
                </button>
            </RouterLink>
            <RouterLink to="/components" tabindex="-1">
                <button class="components-button" v-tippy="{ content: 'Components' }">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-component"><path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"/><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"/><path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"/><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"/></svg>
                    </span>
                    <span class="sidebar-title">Components</span>
                </button>
            </RouterLink>
            <!--<a href="https://ko-fi.com/brick_wall" target="_blank" tabindex="-1">
                <button class="support-button" v-tippy="{ content: 'Support' }">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coffee"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>
                    </span>
                    <span class="sidebar-title">Support</span>
                </button>
            </a>-->
            <a href="https://github.com/plastic-lamp/lamp" target="_blank" tabindex="-1">
                <button class="github-button" v-tippy="{ content: 'Github' }">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 250" width="256" height="250" fill="currentColor" preserveAspectRatio="xMidYMid">
                            <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"/>
                        </svg>
                    </span>
                    <span class="sidebar-title">Github</span>
                </button>
            </a>
        </div>
        <div class="sidebar-gap"></div>
        <div class="sidebar-bottom">
            <a class="open-button-container" tabindex="-1" @click="toggleSidebar">
                <button class="open-button" v-tippy="{ content: 'Open' }">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/></svg>
                    </span>
                    <span class="sidebar-title">Open</span>
                </button>
            </a>
            <a class="close-button-container" tabindex="-1" @click="toggleSidebar">
                <button class="close-button" v-tippy="{ content: 'Close' }">
                    <span class="sidebar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-open"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m10 15-3-3 3-3"/></svg>
                    </span>
                    <span class="sidebar-title">Close</span>
                </button>
            </a>
            <a tabindex="-1">
                <button class="theme-button" v-tippy="{ content: 'Theme' }">
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

<script>
    import { directive } from 'vue-tippy'

    export default {
        directives: {
            tippy: directive,
        },
        data() {
            return {
                expanded: false,
            };
        },
        methods: {
            toggleSidebar() {
                this.expanded = !this.expanded;
            },
        },
    };
</script>

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

.sidebar:not(.expanded) .close-button-container {
    display: none !important;
}

.sidebar:not(.expanded) .open-button-container {
    display: flex !important;
}

.sidebar.expanded .close-button-container {
    display: flex !important;
}

.sidebar.expanded .open-button-container {
    display: none !important;
}

.sidebar.expanded {
    min-width: 224px;
    max-width: 224px;
}

.sidebar.expanded .sidebar-logo a button,
.sidebar.expanded .sidebar-top a button,
.sidebar.expanded .sidebar-bottom a button {
    min-width: 204px;
    max-width: 204px;
}

.sidebar.expanded .sidebar-logo a button .sidebar-title,
.sidebar.expanded .sidebar-top a button .sidebar-title,
.sidebar.expanded .sidebar-bottom a button .sidebar-title {
    display: flex;
}

.sidebar.expanded .sidebar-logo a button .sidebar-icon,
.sidebar.expanded .sidebar-top a button .sidebar-icon,
.sidebar.expanded .sidebar-bottom a button .sidebar-icon {
    padding-right: 1.5px;
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

.sidebar .sidebar-logo a.router-link-exact-active button,
.sidebar .sidebar-top a.router-link-exact-active button,
.sidebar .sidebar-bottom a.router-link-exact-active button,
.sidebar .sidebar-logo a.router-link-exact-active button:hover,
.sidebar .sidebar-top a.router-link-exact-active button:hover,
.sidebar .sidebar-bottom a.router-link-exact-active button:hover,
.sidebar .sidebar-logo a.router-link-exact-active button:focus,
.sidebar .sidebar-top a.router-link-exact-active button:focus,
.sidebar .sidebar-bottom a.router-link-exact-active button:focus,
.sidebar .sidebar-logo a.router-link-exact-active button:active,
.sidebar .sidebar-top a.router-link-exact-active button:active,
.sidebar .sidebar-bottom a.router-link-exact-active button:active {
    background-color: #27272A;
    color: rgba(250, 250, 250, 1);
}

.tippy-box {
  background-color: #09090B;
  color: rgba(250, 250, 250, 1);
  border-radius: 6px;
  border: 1px solid #27272A;
  margin-left: 10px;
  font-family: "Open Sans", sans-serif;
}
</style>

