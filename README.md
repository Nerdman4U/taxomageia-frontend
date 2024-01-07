<p align="center">
  <a href="http://taxomageia.pro/" target="blank"><img src="https://github.com/Nerdman4U/taxomageia/blob/master/public/images/dragon.png" width="200" alt="dragon" /></a>
</p>

<p align="center">Comprehensive <a href="http://taxomageia.pro" target="_blank">taxomageia</a> for creating believable, amazing, new creatures and monsters!</p>

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

<p align="center">

## Taxomageia | FRONTEND

This Github repository contains code for the frontend of <a href="http://taxomageia.pro" target="_blank">taxomageia</a>. Currenly the backend is not public.

## Description

Biomagical classification adds magical, immortal, summoned, fantasy and undead creatures and monsters to biological classification. Each Taxonomic rank inherits properties from parent ranks. 

Inherited values include:
- Creature may have multiple ways to exists at different dimensions and planes. Creature may have for example physical and spirit form.
- Each form may progress through set of stages and develop as time passes ( physical bodies grow when cells divide themselves at material dimension ). 
- Each metamorphose stage has its own body, properties and abilities. For example, young fire elemental may be summoned from the plane of fire and has not yet reached full potential. It may (or may not) grow if summoned to physical plane. There can be creatures with multiple bodies.
- Bodies may have any number of attributes and skills.
- Bodies have multiple segments, connected to each other.
- Each segment may have any number of body parts which have a location i.e. ventral or dorsal.
- Notocord or vertebrae may be inherited from parents. Bilateral creatures have center with two symmertic sides. Trilateral has three.
- Attributes have minimum and maximum range as well as growth indicator. Attributes are calculated by inheriting parents, every rank may make attribute stronger or weaker.
- Propertylists contains tokens with + and - signs. With + inherited property gets stronger and with - weaker at inheriting rank.
- Propertylists have two different versions. Basic list is to show tokens which has positive value after all parents have been inherited. It declares that this species has or has not this ability. Weighted list calculates all + and - signs from properties. Output declares how strong or weak this species is at this property/ability/power.

## How to use API?

You can download creature data from following urls at <a href="http://taxomageia.pro" target="_blank">taxomageia</a>.

- /api/taxomageia/first/
- /api/taxomageia/first/taxons
- /api/taxomageia/first/taxons/\<identifier\>
- /api/taxomageia/first/inherited
- /api/taxomageia/first/inherited/\<identifier\>

## Use cases

This information can be used in all kinds of games with creatures. Creatures have more complete bodies, attributes and behaviour. Creatures may be used to create more or less magical ecosystem.

- Computer games
- Roleplaying games
- Tabletop games
- For fun

<p align="left">
  <a href="http://taxomageia.pro/" target="blank"><img src="https://github.com/Nerdman4U/taxomageia/blob/master/public/images/dog.jpg" width="200" alt="dog and cat" /></a>
</p>

## Roadmap ( Frontend ) 

- [ ] v2.0
  - [ ] Google/Facebook authentication
  - [ ] Create your own Taxomageia
  - [ ] Localization (en/fi ... support for more)

- [ ] v1.0
  - [X] Frontend: basic. list ranks, view one
  - [ ] All species

<p align="right">
  <a href="http://taxomageia.pro/" target="blank"><img src="https://github.com/Nerdman4U/taxomageia/blob/master/public/images/monster.png" width="200" alt="monster" /></a>
</p>

## Support

If you want to help to build better UI its most welcome! Thank you.

<p align="right" style="float:right">
  <a href="http://taxomageia.pro/" target="blank"><img src="https://github.com/Nerdman4U/taxomageia/blob/master/public/images/alien.png" width="200" alt="alien" /></a>
</p>

## Stay in touch

- Author - [Joni Töyrylä](https://github.com/Nerdman4U)
- Website - [https://taxomageia.pro](http://taxomageia.pro/)

## Credits

Thank you!

### Images 

- Dragon, alien, monster slug: <a href="https://pixabay.com/users/openclipart-vectors-30363/" target="blank">openclipart-vectors-30363</a>
- Dog and cat: <a href="https://pixabay.com/users/yuri_b-2216431/" target="blank">yuri_b-2216431</a>
- Orc: <a href="https://pixabay.com/users/juliush-3921568/." target="blank">juliush-3921568</a>
- Fire Elemental: <a href="https://pixabay.com/users/vika_glitter-6314823/" target="_blank">Vika Glitter</a>
- Black Dragon: <a href="https://pixabay.com/users/pendleburyannette-1860575/" target="_blank">pendleburyannette</a>
- Vampire: <a href="https://pixabay.com/users/openclipart-vectors-30363/" target="_blank">openclipart-vectors-30363</a>

### Frontend- template
https://github.com/cruip/open-react-template.



