export const logoutUserAction = (err) => {
    if (err?.response?.status === 401) {
        localStorage.removeItem("token");
        logoutUserAction()
    }
};
