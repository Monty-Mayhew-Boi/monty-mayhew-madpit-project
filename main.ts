scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    info.stopCountdown()
    info.startCountdown(15)
    tiles.setTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(mySprite, assets.tile`tile17`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    game.over(true)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e e e e . . . 
    . . . . d 8 d d 3 d 8 d . . . . 
    . . . . d d d d 3 d d d . . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 . 2 2 2 2 2 2 2 2 . 2 2 . 
    . 2 2 . 2 2 2 2 2 2 2 2 . 2 2 . 
    . d d . 2 2 2 2 2 2 2 2 . d d . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 8 8 . . . . . . . . 8 8 8 . 
    . 8 8 8 . . . . . . . . 8 8 8 . 
    . 8 8 8 . . . . . . . . 8 8 8 . 
    . 8 8 8 . . . . . . . . 8 8 8 . 
    f f f f . . . . . . . . f f f f 
    `, SpriteKind.Player)
info.startCountdown(7)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`tile9`)
