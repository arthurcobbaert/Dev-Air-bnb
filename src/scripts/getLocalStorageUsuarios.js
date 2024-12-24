export const getLocalStorageUsuarios = () => {
    if (!localStorage.getItem('usuarios')) { // Senão exister usuarios no localStorage
        localStorage.setItem('usuarios', JSON.stringify([]))
    };
};
