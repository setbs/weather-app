export const loadUnit = () => {
    try {
        const saved = localStorage.getItem("unit");
        return saved ? saved : "C";
    } catch {
        return "C";
    }
};

export const saveUnit = (unit) => {
    try {
        localStorage.setItem("unit", unit);
    } catch {

    }
}

export const loadFavorites = () => {
    try {
        const saved = localStorage.getItem("favorites");
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
};

export const saveFavorites = (favorites) => {
    try {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch {

    }
};