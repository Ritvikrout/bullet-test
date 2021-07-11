function isTouching(bullet, wall) {
    if(bullet.x - wall.x < bullet.width + wall.width &&
        wall.x - bullet.x < bullet.width + wall.width &&
        bullet.y - wall.y < bullet.height + wall.height &&
        wall.y - bullet.y < bullet.height + wall.height) {
        return true;
    }
    else {
        return false;
    }
}