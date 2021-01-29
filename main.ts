scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
	
})
let mySprite = sprites.create(img`
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
info.startCountdown(10)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
