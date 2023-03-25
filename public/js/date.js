
exports.getDate = function() {
    let today = new Date();
    let options = { weekday: "long", day: "numeric" };
    return today.toLocaleDateString("en-GB", options);
}