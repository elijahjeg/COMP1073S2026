let health = 3;
let ammo = 8;
let shield = true;
let missionProgress = 40;
let enemyNearby = true;

const statusUpdate = document.querySelector("#statusUpdate");
if (health < 30 && enemyNearby){
    statusUpdate.textContent = "CRITICAL ALERT: Immediate Evacuation Required";
}

else if (ammo < 5 || !shield){
    statusUpdate.textContent = "Warning: Low Resources";
}

else if (missionProgress >= 1 && missionProgress <= 70){
    statusUpdate.textContent = "Mission In Progress";
}