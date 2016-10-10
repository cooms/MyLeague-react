import request from 'superagent'

export default {
  getChamp: getChamp,
  GetAllChamps: GetAllChamps
}

var mainURL = "http://ddragon.leagueoflegends.com/cdn/"
var mainJSON = "6.20.1/data/en_US/champion.json"
var tallImagePath = "img/champion/loading/"
var splashImagePath = "img/champion/splash/"
var profImagePath = "6.20.1/img/champion/"

function getChamp (name, cb) {
  request
    .get(mainURL + mainJSON)
    .end((err, res) => {
      let expectedChamp = res.body.data[name]
      if(!err) {
        const champData = {
          champName: expectedChamp.name,
          epiphet: expectedChamp.title,
          blurb: expectedChamp.blurb,
          roles: {
            role1: expectedChamp.tags[0],
            role2: expectedChamp.tags[1]
          },
          baseInfo: {
            attack: expectedChamp.info.attack,
            defense: expectedChamp.info.defense,
            magic: expectedChamp.info.magic,
            difficulty: expectedChamp.info.difficulty
          },
          tallImage: mainURL + tallImagePath + expectedChamp.id + "_0.jpg",
          splashImage: mainURL + splashImagePath + expectedChamp.id + "_0.jpg",
          profImage: mainURL + profImagePath + expectedChamp.image.full,
          stats: {
            hp: expectedChamp.stats.hp,
            hpRegen: expectedChamp.stats.hpregen,
            mp: expectedChamp.stats.mp,
            mpRegen: expectedChamp.stats.mpregen,
            attackRange: expectedChamp.stats.attackrange,
            attackDmg: expectedChamp.stats.attackdamage,
            attackSpd: expectedChamp.stats.attackspeedperlevel,
            armor: expectedChamp.stats.armor,
            magicResist: expectedChamp.stats.spellblock,
            moveSpeed: expectedChamp.stats.movespeed
          }
        }
        console.log(champData)
        cb(null, champData)
      } else {
        cb(err)
      }
    })
}

function GetAllChamps (cb) {
  request
    .get(mainURL + mainJSON)
    .end((err, res) => {
      if(!err) {
        const champs = res.body.data
        const nameAndImages = Object.keys(champs).map(prop => {
          return {
            name: champs[prop].name,
            image: `${mainURL}${profImagePath}${champs[prop].image.full}`,
            id: champs[prop].id
          }
        })
        cb(null, nameAndImages)
      } else {
        cb(err)
      }
    })
}
