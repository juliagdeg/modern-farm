export const catalog = (harvestArray) => {
    let harvestHTMLString = `<article class="catalog">`;
// iterate the harvest food array
    for (const food of harvestArray) {
    // 
        harvestHTMLString += `<section class="plant">${food.type}</section>`;
    }
    harvestHTMLString += `</article>`;
    return harvestHTMLString
}