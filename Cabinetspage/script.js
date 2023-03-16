document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("calculator-form");
    const estimatedPrice = document.getElementById("estimated-price");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const doors = parseInt(form.doors.value);
        const drawers = parseInt(form.drawers.value);
        const sidePanels = parseInt(form["side-panels"].value);

        const doorPrice = 130;
        const drawerPrice = 90;
        const sidePanelPrice = 90;

        const totalPrice = (doors * doorPrice) + (drawers * drawerPrice) + (sidePanels * sidePanelPrice);
        estimatedPrice.textContent = `$${totalPrice}`;
    });
});
