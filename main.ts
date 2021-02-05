scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    info.stopCountdown()
    game.showLongText("Level 1 Complete", DialogLayout.Bottom)
    mySprite.startEffect(effects.halo)
    music.powerUp.play()
    info.startCountdown(15)
    tiles.setTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(mySprite, assets.tile`tile17`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    tiles.setTilemap(tilemap`level9`)
    info.stopCountdown()
    info.startCountdown(12)
    game.showLongText("What the same map?", DialogLayout.Bottom)
    game.showLongText("DO IT FASTER!", DialogLayout.Bottom)
    tiles.placeOnRandomTile(mySprite, assets.tile`tile17`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile24`, function (sprite, location) {
    info.stopCountdown()
    game.showLongText("Well done, you did ok.", DialogLayout.Bottom)
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile22`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`tile17`)
    game.showLongText("FASTER!!!!!!", DialogLayout.Bottom)
    info.stopCountdown()
    info.startCountdown(10)
    tiles.setTilemap(tilemap`level10`)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f 2 2 8 8 8 8 2 2 f f . . 
    . f f 2 8 8 8 8 8 8 8 8 2 f f . 
    . f 2 8 8 8 f 8 f f f 8 8 2 f . 
    f f 2 8 f f 8 8 8 1 f 8 8 2 f f 
    f 2 8 8 8 1 f 8 8 f f 8 8 8 2 f 
    f 2 8 8 8 f f 8 8 f f 8 8 8 2 f 
    f 2 8 8 8 f f 8 8 f f 8 8 8 2 f 
    f 2 8 8 8 8 8 8 8 8 8 8 8 8 2 f 
    f f 2 8 f 8 8 8 8 8 8 8 8 2 f f 
    . f 2 8 8 f f f f 8 8 8 8 2 f . 
    . f f 2 8 8 8 8 8 8 8 8 2 f f . 
    . . f f 2 2 8 8 8 8 2 2 f f . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
info.startCountdown(7)
mySprite.startEffect(effects.starField)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`tile9`)
