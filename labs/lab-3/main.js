async function startProgram(){
    await rollToDistance(0, 30, 190);
    await rollToDistance(90, 30, 30);
    await rollToDistance(180, 30, 100);
    await rollToDistance(90, 30, 30);
    await rollToDistance(180, 30, 90);
    await rollToDistance(270, 30, 120);
    await rollToDistance(0, 30, 210);
}