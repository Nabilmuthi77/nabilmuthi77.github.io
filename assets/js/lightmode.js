let lightmode = localStorage.getItem('lightmode');

const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
};

const disableLightmode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', null);
};

if (lightmode === "active") enableLightmode();

// Menggunakan querySelectorAll untuk menangani semua tombol dengan id 'theme-switch'
const themeSwitches = document.querySelectorAll('#theme-switch');

themeSwitches.forEach(switchButton => {
    switchButton.addEventListener("click", () => {
        lightmode = localStorage.getItem('lightmode');
        lightmode !== "active" ? enableLightmode() : disableLightmode();
    });
});
