function calcDate(stringDate) {
    let time_ms = Number(new Date().getTime() - new Date(stringDate).getTime());
    let time_s = Math.round(time_ms / 1000);
    if(time_s < 20) return "Just now";
    if(time_s < 60) return `${time_s} seconds ago`;
    let time_m = Math.round(time_s / 60);
    if(time_m < 60) return `${time_m} minutes ago`;
    let time_h = Math.round(time_m / 60);
    if(time_h < 24) return `${time_h} hours ago`;
    let time_d = Math.round(time_h / 24);
    if(time_d < 7) return `${time_d} days ago`;
    let time_w = Math.round(time_d / 7);
    if(time_w < 5) return `${time_d} weeks ago`;
    let time_mo = Math.round(time_d / 30);
    if(time_mo < 12) return `${time_d} months ago`;
}

export {
    calcDate
}