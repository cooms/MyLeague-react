import request from 'superagent'

export default {
  getChamp: getChamp
}

var mainURL = "http://ddragon.leagueoflegends.com/cdn/"
var mainJSON = "6.20.1/data/en_US/champion.json"
var imageJSON = "mg/champion/loading/Yasuo_0.jpg"

function getChamp (cb) {
  request
    .get(mainURL + mainJSON)
    .end((err, res) => {
      var expectedChamp = res.body.data.Zed
      if(!err) {
        const champData = {
          epiphet: expectedChamp.title,
          blurb: expectedChamp.blurb,
          baseInfo: {

          },
          image: expectedChamp.image.full,
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
