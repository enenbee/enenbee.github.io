import pygame

def img(src,alpha=False):
    img=pygame.image.load(src)
    if alpha:
        return img.convert_alpha()
    else:
        return img.convert()

#more added later